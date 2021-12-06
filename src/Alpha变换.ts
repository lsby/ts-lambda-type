import { 数组匹配替换 } from './lib/数组匹配替换'
import { 数组存在元素 } from './lib/数组存在元素'
import { Lambda项 } from './数据类型'

type _Alpha变换子值<值, 旧名称, 新名称> = 值 extends [infer 字符]
    ? 数组匹配替换<值, 旧名称, 新名称>
    : 值 extends ['λ', infer 泛型, infer 子值]
    ? 数组存在元素<泛型, 旧名称> extends true
        ? 值
        : ['λ', 泛型, _Alpha变换子值<子值, 旧名称, 新名称>]
    : 值 extends ['LL', infer 前键, infer 后键]
    ? ['LL', _Alpha变换子值<前键, 旧名称, 新名称>, _Alpha变换子值<后键, 旧名称, 新名称>]
    : 值

export type Alpha变换<
    值 extends Lambda项,
    旧名称 extends string,
    新名称 extends string,
> = 值 extends ['λ', infer 泛型, infer 子值]
    ? 数组存在元素<泛型, 新名称> extends true
        ? '和已有参数重名'
        : ['λ', 数组匹配替换<泛型, 旧名称, 新名称>, _Alpha变换子值<子值, 旧名称, 新名称>]
    : 值

var 测试_01: Alpha变换<['λ', ['a', 'b'], ['a']], 'a', 'c'> = ['λ', ['c', 'b'], ['c']]
var 测试_02: Alpha变换<['λ', ['a', 'b'], ['λ', ['a'], ['a']]], 'a', 'c'> = [
    'λ',
    ['c', 'b'],
    ['λ', ['a'], ['a']],
]
var 测试_03: Alpha变换<['λ', ['a', 'b'], ['λ', ['b'], ['a']]], 'a', 'c'> = [
    'λ',
    ['c', 'b'],
    ['λ', ['b'], ['c']],
]
var 测试_04: Alpha变换<['λ', ['a', 'b'], ['LL', ['a'], ['b']]], 'a', 'c'> = [
    'λ',
    ['c', 'b'],
    ['LL', ['c'], ['b']],
]
var 测试_05: Alpha变换<['λ', ['a', 'b'], ['LL', ['a'], ['b']]], 'a', 'b'> = '和已有参数重名'
