import { 删除数组最后一个 } from './lib/删除数组最后一个'
import { 取数组最后一个 } from './lib/取数组最后一个'
import { Lambda项 } from './数据类型'

export type Eta变换<值 extends Lambda项> = 值 extends ['λ', infer 泛型, infer 子值]
    ? 子值 extends ['LL', infer 前键, infer 后键]
        ? 后键 extends [取数组最后一个<泛型>]
            ? ['λ', 删除数组最后一个<泛型>, 前键]
            : 值
        : 值
    : 值

var 测试_01: Eta变换<['λ', ['a', 'b'], ['LL', ['a'], ['b']]]> = ['λ', ['a'], ['a']]
var 测试_02: Eta变换<['λ', ['a', 'b'], ['LL', ['b'], ['a']]]> = [
    'λ',
    ['a', 'b'],
    ['LL', ['b'], ['a']],
]
