import { 删除数组指定内容 } from './lib/删除数组指定内容'
import { 数组包含 } from './lib/数组包含'
import { 数组去重 } from './lib/数组去重'
import { 数组存在元素 } from './lib/数组存在元素'

export type Lambda项 = ['S', string] | ['λ', string, Lambda项] | ['LL', Lambda项, Lambda项]

export type Lambda1<s extends string> = ['S', s]
export type Lambda2<s extends string, l extends Lambda项> = ['λ', s, l]
type 不安全的Lambda3<l1, l2> = ['LL', l1, l2]
export type Lambda3<l1 extends Lambda项, l2 extends Lambda项> = 不安全的Lambda3<l1, l2>

type 计算自由变量<值> = 值 extends Lambda项
    ? 值 extends ['S', infer 字符串]
        ? 字符串 extends string
            ? [字符串]
            : never
        : 值 extends ['λ', infer 泛型, infer 子值]
        ? 删除数组指定内容<计算自由变量<子值>, 泛型>
        : 值 extends ['LL', infer 前键, infer 后键]
        ? 数组去重<[...计算自由变量<前键>, ...计算自由变量<后键>]>
        : never
    : never

var 测试_计算自由变量_01: 计算自由变量<['S', 'a']> = ['a']
var 测试_计算自由变量_02: 计算自由变量<['λ', 'a', ['S', 'a']]> = []
var 测试_计算自由变量_03: 计算自由变量<['λ', 'a', Lambda3<Lambda1<'a'>, Lambda1<'b'>>]> = ['b']
var 测试_计算自由变量_04: 计算自由变量<Lambda3<Lambda1<'a'>, Lambda1<'b'>>> = ['a', 'b']
var 测试_计算自由变量_05: 计算自由变量<Lambda3<Lambda2<'a', Lambda1<'b'>>, Lambda1<'b'>>> = ['b']

type 替换<值, 绑定泛型, 绑定值> = 值 extends Lambda项
    ? 绑定值 extends Lambda项
        ? 值 extends ['S', infer 字符串]
            ? 字符串 extends 绑定泛型
                ? 绑定值
                : 值
            : 值 extends ['LL', infer 前键, infer 后键]
            ? ['LL', 替换<前键, 绑定泛型, 绑定值>, 替换<后键, 绑定泛型, 绑定值>]
            : 值 extends ['λ', infer 泛型, infer 子值]
            ? 泛型 extends 绑定泛型
                ? 值
                : 数组存在元素<计算自由变量<绑定值>, 泛型> extends true
                ? 值
                : ['λ', 泛型, 替换<子值, 绑定泛型, 绑定值>]
            : never
        : never
    : never

var 测试_替换_01: 替换<['S', 'a'], 'a', Lambda1<'b'>> = ['S', 'b']
var 测试_替换_02: 替换<['S', 'a'], 'b', Lambda1<'b'>> = ['S', 'a']
var 测试_替换_03: 替换<Lambda3<Lambda1<'a'>, Lambda1<'b'>>, 'a', Lambda1<'b'>> = [
    'LL',
    ['S', 'b'],
    ['S', 'b'],
]
var 测试_替换_04: 替换<Lambda3<Lambda1<'a'>, Lambda1<'b'>>, 'b', Lambda1<'a'>> = [
    'LL',
    ['S', 'a'],
    ['S', 'a'],
]
var 测试_替换_05: 替换<Lambda2<'a', Lambda1<'a'>>, 'a', Lambda1<'b'>> = ['λ', 'a', ['S', 'a']]
var 测试_替换_06: 替换<Lambda2<'a', Lambda1<'b'>>, 'b', Lambda1<'c'>> = ['λ', 'a', ['S', 'c']]

export type Alpha变换<值 extends Lambda项, W extends string> = 值 extends ['λ', infer V, infer E]
    ? 数组存在元素<计算自由变量<E>, W> extends true
        ? 'W不可以是E中的自由变量.'
        : 数组存在元素<计算自由变量<替换<E, V, W>>, W> extends true
        ? ['λ', W, 替换<E, V, ['S', W]>]
        : 'E[V:=W]后, W不可以被E绑定.'
    : '只有λV.E形式的Lambda项能进行Alpha变换.'

var 测试_Alpha变换_01: Alpha变换<['λ', 'a', ['S', 'a']], 'c'> = ['λ', 'c', ['S', 'c']]
var 测试_Alpha变换_02: Alpha变换<['λ', 'a', ['λ', 'a', ['S', 'a']]], 'c'> = [
    'λ',
    'c',
    ['λ', 'a', ['S', 'a']],
]

type 不安全的Beta规约<值> = 值 extends ['LL', ['λ', infer V, infer E], infer E2]
    ? 数组包含<计算自由变量<替换<E, V, E2>>, 计算自由变量<E2>> extends true
        ? 替换<E, V, E2>
        : "E'的自由变量在E[V:=E']中必须也是自由变量."
    : "只有((λV.E) E')形式的Lambda项能进行Beta规约."
export type Beta规约<值 extends Lambda项> = 不安全的Beta规约<值>

var 测试_Beta规约_01: Beta规约<['LL', ['λ', 'a', ['S', 'a']], ['S', 'b']]> = ['S', 'b']

export type Eta变换<值 extends Lambda项> = 值 extends ['λ', infer X, ['LL', infer F, infer X2]]
    ? X2 extends ['S', X]
        ? F
        : "X'必须等于X."
    : "只有(λX.F X')形式的Lambda项能进行Eta变换."

var 测试_Eta变换_01: Eta变换<['λ', 'a', ['LL', ['S', 'b'], ['S', 'a']]]> = ['S', 'b']
var 测试_Eta变换_02: Eta变换<['λ', 'a', ['LL', ['LL', ['S', 'a'], ['S', 'b']], ['S', 'a']]]> = [
    'LL',
    ['S', 'a'],
    ['S', 'b'],
]

type F = Lambda2<'a', Lambda1<'a'>> //['λ', 'a', ['a']]
type G<A extends Lambda项> = Beta规约<Lambda3<A, Lambda1<'1'>>>
type x = G<F>[1] // 类型 x 是 '1'

export type Lambda项转字符串<值 extends Lambda项> = 值 extends Lambda1<infer s>
    ? `${s}`
    : 值 extends Lambda2<infer s, infer l>
    ? Lambda项转字符串<l> extends infer r
        ? r extends string
            ? `λ${s}.${r}`
            : never
        : never
    : 值 extends Lambda3<infer l1, infer l2>
    ? Lambda项转字符串<l1> extends infer r1
        ? Lambda项转字符串<l2> extends infer r2
            ? r1 extends string
                ? r2 extends string
                    ? `(${r1} ${r2})`
                    : never
                : never
            : never
        : never
    : never

var 测试_Lambda项转字符串_01: Lambda项转字符串<Lambda1<'a'>> = 'a'
var 测试_Lambda项转字符串_02: Lambda项转字符串<Lambda2<'a', Lambda1<'a'>>> = 'λa.a'
var 测试_Lambda项转字符串_03: Lambda项转字符串<Lambda3<Lambda1<'a'>, Lambda1<'b'>>> = '(a b)'
var 测试_Lambda项转字符串_04: Lambda项转字符串<Lambda3<Lambda2<'a', Lambda1<'a'>>, Lambda1<'b'>>> =
    '(λa.a b)'
var 测试_Lambda项转字符串_05: Lambda项转字符串<Lambda3<Lambda2<'a', Lambda1<'b'>>, Lambda1<'a'>>> =
    '(λa.b a)'

export type Lambda调用<A, B> = 不安全的Beta规约<不安全的Lambda3<A, B>>
