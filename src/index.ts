import { 删除数组指定内容 } from './lib/删除数组指定内容'
import { 数组包含 } from './lib/数组包含'
import { 数组去重 } from './lib/数组去重'
import { 数组存在元素 } from './lib/数组存在元素'

export type Lambda项 = [string] | ['λ', string, Lambda项] | ['LL', Lambda项, Lambda项]

type 计算自由变量<值> = 值 extends Lambda项
    ? 值 extends [infer 字符串]
        ? [字符串]
        : 值 extends ['λ', infer 泛型, infer 子值]
        ? 删除数组指定内容<计算自由变量<子值>, 泛型>
        : 值 extends ['LL', infer 前键, infer 后键]
        ? 数组去重<[...计算自由变量<前键>, ...计算自由变量<后键>]>
        : []
    : []

type 替换<值, 绑定泛型, 绑定值> = 值 extends Lambda项
    ? 绑定值 extends Lambda项
        ? 值 extends [infer 字符串]
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

export type Alpha变换<值 extends Lambda项, W extends string> = 值 extends ['λ', infer V, infer E]
    ? 数组存在元素<计算自由变量<E>, W> extends true
        ? 'W不可以是E中的自由变量.'
        : 数组存在元素<计算自由变量<替换<E, V, W>>, W> extends true
        ? ['λ', W, 替换<E, V, [W]>]
        : 'E[V:=W]后, W被E绑定.'
    : '只有λV.E形式的Lambda项能进行Alpha变换.'

var 测试_Alpha变换_01: Alpha变换<['λ', 'a', ['a']], 'c'> = ['λ', 'c', ['c']]
var 测试_Alpha变换_02: Alpha变换<['λ', 'a', ['λ', 'a', ['a']]], 'c'> = ['λ', 'c', ['λ', 'a', ['a']]]

export type Beta规约<值 extends Lambda项> = 值 extends ['LL', ['λ', infer V, infer E], infer E2]
    ? 数组包含<替换<E, V, E2>, 计算自由变量<E2>> extends true
        ? 替换<E, V, E2>
        : "E'的自由变量在E[V:=E']必须也是自由变量."
    : "只有((λV.E) E')形式的Lambda项能进行Beta规约."

var 测试_Beta规约_01: Beta规约<['LL', ['λ', 'a', ['a']], ['b']]> = ['b']

export type Eta变换<值 extends Lambda项> = 值 extends ['λ', infer X, ['LL', infer F, infer X2]]
    ? X2 extends [X]
        ? F
        : "X'必须等于X."
    : "只有(λX.F X')形式的Lambda项能进行Eta变换."

var 测试_Eta变换_01: Eta变换<['λ', 'a', ['LL', ['b'], ['a']]]> = ['b']
var 测试_Eta变换_02: Eta变换<['λ', 'a', ['LL', ['LL', ['a'], ['b']], ['a']]]> = ['LL', ['a'], ['b']]

type F = ['λ', 'a', ['a']]
type G<A extends Lambda项> = Beta规约<['LL', A, ['1']]>
type x = G<F> // 类型 x 是 ['1']
