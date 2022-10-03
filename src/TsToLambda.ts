import { 取对象键, 取对象键值们 } from '@lsby/ts_type_fun'
import { 类型等价判定 } from '@lsby/ts_type_fun'
import {
    一阶类型,
    七阶类型,
    三阶类型,
    九阶类型,
    二阶类型,
    五阶类型,
    八阶类型,
    六阶类型,
    四阶类型,
    零阶类型,
} from './TypeEnum'

type 零阶类型判定<输入, arr extends any[] = 取对象键<零阶类型>> = arr['length'] extends 0
    ? 一阶类型判定<输入>
    : arr extends [infer key, ...infer tail]
    ? key extends keyof 零阶类型
        ? 输入 extends 零阶类型[key]
            ? key
            : 零阶类型判定<输入, tail>
        : never
    : never
type 一阶类型判定<输入, arr extends any[] = 取对象键<一阶类型<any>>> = arr['length'] extends 0
    ? 二阶类型判定<输入>
    : arr extends [infer key, ...infer tail]
    ? key extends keyof 一阶类型<any>
        ? 输入 extends 一阶类型<infer T1>[key]
            ? `(${key} ${转换到λ表达式<T1>})`
            : 一阶类型判定<输入, tail>
        : never
    : never
type 二阶类型判定<输入, arr extends any[] = 取对象键<二阶类型<any, any>>> = arr['length'] extends 0
    ? 三阶类型判定<输入>
    : arr extends [infer key, ...infer tail]
    ? key extends keyof 二阶类型<any, any>
        ? 输入 extends 二阶类型<infer T1, infer T2>[key]
            ? `(${key} ${转换到λ表达式<T1>} ${转换到λ表达式<T2>})`
            : 二阶类型判定<输入, tail>
        : never
    : never
type 三阶类型判定<
    输入,
    arr extends any[] = 取对象键<三阶类型<any, any, any>>,
> = arr['length'] extends 0
    ? 四阶类型判定<输入>
    : arr extends [infer key, ...infer tail]
    ? key extends keyof 三阶类型<any, any, any>
        ? 输入 extends 三阶类型<infer T1, infer T2, infer T3>[key]
            ? `(${key} ${转换到λ表达式<T1>} ${转换到λ表达式<T2>} ${转换到λ表达式<T3>})`
            : 三阶类型判定<输入, tail>
        : never
    : never
type 四阶类型判定<
    输入,
    arr extends any[] = 取对象键<四阶类型<any, any, any, any>>,
> = arr['length'] extends 0
    ? 五阶类型判定<输入>
    : arr extends [infer key, ...infer tail]
    ? key extends keyof 四阶类型<any, any, any, any>
        ? 输入 extends 四阶类型<infer T1, infer T2, infer T3, infer T4>[key]
            ? `(${key} ${转换到λ表达式<T1>} ${转换到λ表达式<T2>} ${转换到λ表达式<T3>} ${转换到λ表达式<T4>})`
            : 四阶类型判定<输入, tail>
        : never
    : never
type 五阶类型判定<
    输入,
    arr extends any[] = 取对象键<五阶类型<any, any, any, any, any>>,
> = arr['length'] extends 0
    ? 六阶类型判定<输入>
    : arr extends [infer key, ...infer tail]
    ? key extends keyof 五阶类型<any, any, any, any, any>
        ? 输入 extends 五阶类型<infer T1, infer T2, infer T3, infer T4, infer T5>[key]
            ? `(${key} ${转换到λ表达式<T1>} ${转换到λ表达式<T2>} ${转换到λ表达式<T3>} ${转换到λ表达式<T4>} ${转换到λ表达式<T5>})`
            : 五阶类型判定<输入, tail>
        : never
    : never
type 六阶类型判定<
    输入,
    arr extends any[] = 取对象键<六阶类型<any, any, any, any, any, any>>,
> = arr['length'] extends 0
    ? 七阶类型判定<输入>
    : arr extends [infer key, ...infer tail]
    ? key extends keyof 六阶类型<any, any, any, any, any, any>
        ? 输入 extends 六阶类型<infer T1, infer T2, infer T3, infer T4, infer T5, infer T6>[key]
            ? `(${key} ${转换到λ表达式<T1>} ${转换到λ表达式<T2>} ${转换到λ表达式<T3>} ${转换到λ表达式<T4>} ${转换到λ表达式<T5>} ${转换到λ表达式<T6>})`
            : 六阶类型判定<输入, tail>
        : never
    : never
type 七阶类型判定<
    输入,
    arr extends any[] = 取对象键<七阶类型<any, any, any, any, any, any, any>>,
> = arr['length'] extends 0
    ? 八阶类型判定<输入>
    : arr extends [infer key, ...infer tail]
    ? key extends keyof 七阶类型<any, any, any, any, any, any, any>
        ? 输入 extends 七阶类型<
              infer T1,
              infer T2,
              infer T3,
              infer T4,
              infer T5,
              infer T6,
              infer T7
          >[key]
            ? `(${key} ${转换到λ表达式<T1>} ${转换到λ表达式<T2>} ${转换到λ表达式<T3>} ${转换到λ表达式<T4>} ${转换到λ表达式<T5>} ${转换到λ表达式<T6>} ${转换到λ表达式<T7>})`
            : 七阶类型判定<输入, tail>
        : never
    : never
type 八阶类型判定<
    输入,
    arr extends any[] = 取对象键<八阶类型<any, any, any, any, any, any, any, any>>,
> = arr['length'] extends 0
    ? 九阶类型判定<输入>
    : arr extends [infer key, ...infer tail]
    ? key extends keyof 八阶类型<any, any, any, any, any, any, any, any>
        ? 输入 extends 八阶类型<
              infer T1,
              infer T2,
              infer T3,
              infer T4,
              infer T5,
              infer T6,
              infer T7,
              infer T8
          >[key]
            ? `(${key} ${转换到λ表达式<T1>} ${转换到λ表达式<T2>} ${转换到λ表达式<T3>} ${转换到λ表达式<T4>} ${转换到λ表达式<T5>} ${转换到λ表达式<T6>} ${转换到λ表达式<T7>} ${转换到λ表达式<T8>})`
            : 八阶类型判定<输入, tail>
        : never
    : never
type 九阶类型判定<
    输入,
    arr extends any[] = 取对象键<九阶类型<any, any, any, any, any, any, any, any, any>>,
> = arr['length'] extends 0
    ? never
    : arr extends [infer key, ...infer tail]
    ? key extends keyof 九阶类型<any, any, any, any, any, any, any, any, any>
        ? 输入 extends 九阶类型<
              infer T1,
              infer T2,
              infer T3,
              infer T4,
              infer T5,
              infer T6,
              infer T7,
              infer T8,
              infer T9
          >[key]
            ? `(${key} ${转换到λ表达式<T1>} ${转换到λ表达式<T2>} ${转换到λ表达式<T3>} ${转换到λ表达式<T4>} ${转换到λ表达式<T5>} ${转换到λ表达式<T6>} ${转换到λ表达式<T7>} ${转换到λ表达式<T8>} ${转换到λ表达式<T9>})`
            : 九阶类型判定<输入, tail>
        : never
    : never
export type 转换到λ表达式<输入> = 零阶类型判定<输入>

var 测试01: 类型等价判定<转换到λ表达式<number>, 'Number'> = true
var 测试02: 类型等价判定<转换到λ表达式<Array<number>>, '(Array Number)'> = true
var 测试03: 类型等价判定<转换到λ表达式<(a: number) => string>, '(Function Number String)'> = true
var 测试04: 类型等价判定<
    转换到λ表达式<(a: Array<number>) => Array<Array<string>>>,
    '(Function (Array Number) (Array (Array String)))'
> = true
var 测试05: 类型等价判定<
    转换到λ表达式<(a: Record<string, number>) => number>,
    '(Function (Record String Number) Number)'
> = true
var 测试06: 类型等价判定<
    转换到λ表达式<(a: Record<string, Array<Record<string, number>>>) => number>,
    '(Function (Record String (Array (Record String Number))) Number)'
> = true
