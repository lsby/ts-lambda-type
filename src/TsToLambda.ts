import { 取对象键 } from '@lsby/ts_type_fun'
import { 类型等价判定, error } from '@lsby/ts_type_fun'
import { App, Var } from 'ts-lambda-calc/Lang'
import { _λ转ts } from './LambdaToTs'
import { λ, λ解包, 计算 } from './Lib'
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

// ts转λ表达式
type 零阶类型判定<输入, arr extends any[] = 取对象键<零阶类型>> = arr['length'] extends 0
    ? 一阶类型判定<输入>
    : arr extends [infer key, ...infer tail]
    ? key extends keyof 零阶类型
        ? 输入 extends 零阶类型[key]
            ? λ<key>
            : 零阶类型判定<输入, tail>
        : never
    : never
type 一阶类型判定<输入, arr extends any[] = 取对象键<一阶类型<any>>> = arr['length'] extends 0
    ? 二阶类型判定<输入>
    : arr extends [infer key, ...infer tail]
    ? key extends keyof 一阶类型<any>
        ? 输入 extends 一阶类型<infer T1>[key]
            ? λ<`(${key} ${λ解包<ts转λ<T1>>})`>
            : 一阶类型判定<输入, tail>
        : never
    : never
type 二阶类型判定<输入, arr extends any[] = 取对象键<二阶类型<any, any>>> = arr['length'] extends 0
    ? 三阶类型判定<输入>
    : arr extends [infer key, ...infer tail]
    ? key extends keyof 二阶类型<any, any>
        ? 输入 extends 二阶类型<infer T1, infer T2>[key]
            ? λ<`(${key} ${λ解包<ts转λ<T1>>} ${λ解包<ts转λ<T2>>})`>
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
            ? λ<`(${key} ${λ解包<ts转λ<T1>>} ${λ解包<ts转λ<T2>>} ${λ解包<ts转λ<T3>>})`>
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
            ? λ<`(${key} ${λ解包<ts转λ<T1>>} ${λ解包<ts转λ<T2>>} ${λ解包<ts转λ<T3>>} ${λ解包<
                  ts转λ<T4>
              >})`>
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
            ? λ<`(${key} ${λ解包<ts转λ<T1>>} ${λ解包<ts转λ<T2>>} ${λ解包<ts转λ<T3>>} ${λ解包<
                  ts转λ<T4>
              >} ${λ解包<ts转λ<T5>>})`>
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
            ? λ<`(${key} ${λ解包<ts转λ<T1>>} ${λ解包<ts转λ<T2>>} ${λ解包<ts转λ<T3>>} ${λ解包<
                  ts转λ<T4>
              >} ${λ解包<ts转λ<T5>>} ${λ解包<ts转λ<T6>>})`>
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
            ? λ<`(${key} ${λ解包<ts转λ<T1>>} ${λ解包<ts转λ<T2>>} ${λ解包<ts转λ<T3>>} ${λ解包<
                  ts转λ<T4>
              >} ${λ解包<ts转λ<T5>>} ${λ解包<ts转λ<T6>>} ${λ解包<ts转λ<T7>>})`>
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
            ? λ<`(${key} ${λ解包<ts转λ<T1>>} ${λ解包<ts转λ<T2>>} ${λ解包<ts转λ<T3>>} ${λ解包<
                  ts转λ<T4>
              >} ${λ解包<ts转λ<T5>>} ${λ解包<ts转λ<T6>>} ${λ解包<ts转λ<T7>>} ${λ解包<ts转λ<T8>>})`>
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
            ? λ<`(${key} ${λ解包<ts转λ<T1>>} ${λ解包<ts转λ<T2>>} ${λ解包<ts转λ<T3>>} ${λ解包<
                  ts转λ<T4>
              >} ${λ解包<ts转λ<T5>>} ${λ解包<ts转λ<T6>>} ${λ解包<ts转λ<T7>>} ${λ解包<
                  ts转λ<T8>
              >} ${λ解包<ts转λ<T9>>})`>
            : 九阶类型判定<输入, tail>
        : never
    : never
export type ts转λ<输入> = 零阶类型判定<输入>

// 取构造子
type _取ts类型构造子<输入> = 输入 extends Var<infer s>
    ? λ<s>
    : 输入 extends App<infer f, any>
    ? _取ts类型构造子<f>
    : error<['无法找到类型', 输入, '的构造子']>
export type 取构造子<输入> = _取ts类型构造子<计算<ts转λ<输入>>>

// 取参数
type _取参数1<输入> = 输入 extends App<infer f, infer v>
    ? f extends Var<infer s>
        ? _λ转ts<v>
        : _取参数1<f>
    : error<['该类型没有参数1:', 输入]>
type _取参数2<输入> = 输入 extends App<infer f, infer v>
    ? f extends App<Var<infer s>, any>
        ? _λ转ts<v>
        : _取参数2<f>
    : error<['该类型没有参数2:', 输入]>
type _取参数3<输入> = 输入 extends App<infer f, infer v>
    ? f extends App<App<Var<infer s>, any>, any>
        ? _λ转ts<v>
        : _取参数3<f>
    : error<['该类型没有参数3:', 输入]>
type _取参数4<输入> = 输入 extends App<infer f, infer v>
    ? f extends App<App<App<Var<infer s>, any>, any>, any>
        ? _λ转ts<v>
        : _取参数4<f>
    : error<['该类型没有参数4:', 输入]>
type _取参数5<输入> = 输入 extends App<infer f, infer v>
    ? f extends App<App<App<App<Var<infer s>, any>, any>, any>, any>
        ? _λ转ts<v>
        : _取参数5<f>
    : error<['该类型没有参数5:', 输入]>
type _取参数6<输入> = 输入 extends App<infer f, infer v>
    ? f extends App<App<App<App<App<Var<infer s>, any>, any>, any>, any>, any>
        ? _λ转ts<v>
        : _取参数6<f>
    : error<['该类型没有参数6:', 输入]>
type _取参数7<输入> = 输入 extends App<infer f, infer v>
    ? f extends App<App<App<App<App<App<Var<infer s>, any>, any>, any>, any>, any>, any>
        ? _λ转ts<v>
        : _取参数7<f>
    : error<['该类型没有参数7:', 输入]>
type _取参数8<输入> = 输入 extends App<infer f, infer v>
    ? f extends App<App<App<App<App<App<App<Var<infer s>, any>, any>, any>, any>, any>, any>, any>
        ? _λ转ts<v>
        : _取参数8<f>
    : error<['该类型没有参数8:', 输入]>
type _取参数9<输入> = 输入 extends App<infer f, infer v>
    ? f extends App<
          App<App<App<App<App<App<App<Var<infer s>, any>, any>, any>, any>, any>, any>, any>,
          any
      >
        ? _λ转ts<v>
        : _取参数9<f>
    : error<['该类型没有参数9:', 输入]>

type 取参数1<输入> = _取参数1<计算<ts转λ<输入>>>
type 取参数2<输入> = _取参数2<计算<ts转λ<输入>>>
type 取参数3<输入> = _取参数3<计算<ts转λ<输入>>>
type 取参数4<输入> = _取参数4<计算<ts转λ<输入>>>
type 取参数5<输入> = _取参数5<计算<ts转λ<输入>>>
type 取参数6<输入> = _取参数6<计算<ts转λ<输入>>>
type 取参数7<输入> = _取参数7<计算<ts转λ<输入>>>
type 取参数8<输入> = _取参数8<计算<ts转λ<输入>>>
type 取参数9<输入> = _取参数9<计算<ts转λ<输入>>>

export type 取参数<输入> = 取参数1<输入> extends infer a1
    ? a1 extends error<any>
        ? []
        : 取参数2<输入> extends infer a2
        ? a2 extends error<any>
            ? [a1]
            : 取参数3<输入> extends infer a3
            ? a3 extends error<any>
                ? [a1, a2]
                : 取参数4<输入> extends infer a4
                ? a4 extends error<any>
                    ? [a1, a2, a3]
                    : 取参数5<输入> extends infer a5
                    ? a5 extends error<any>
                        ? [a1, a2, a3, a4]
                        : 取参数6<输入> extends infer a6
                        ? a6 extends error<any>
                            ? [a1, a2, a3, a4, a5]
                            : 取参数7<输入> extends infer a7
                            ? a7 extends error<any>
                                ? [a1, a2, a3, a4, a5, a6]
                                : 取参数8<输入> extends infer a8
                                ? a8 extends error<any>
                                    ? [a1, a2, a3, a4, a5, a6, a7]
                                    : 取参数9<输入> extends infer a9
                                    ? a9 extends error<any>
                                        ? [a1, a2, a3, a4, a5, a6, a7, a8]
                                        : [a1, a2, a3, a4, a5, a6, a7, a8, a9]
                                    : never
                                : never
                            : never
                        : never
                    : never
                : never
            : never
        : never
    : never

var 测试01: 类型等价判定<ts转λ<number>, λ<'Number'>> = true
var 测试02: 类型等价判定<ts转λ<Array<number>>, λ<'(Array Number)'>> = true
var 测试03: 类型等价判定<ts转λ<(a: number) => string>, λ<'(Function Number String)'>> = true
var 测试04: 类型等价判定<
    ts转λ<(a: Array<number>) => Array<Array<string>>>,
    λ<'(Function (Array Number) (Array (Array String)))'>
> = true
var 测试05: 类型等价判定<
    ts转λ<(a: Record<string, number>) => number>,
    λ<'(Function (Record String Number) Number)'>
> = true
var 测试06: 类型等价判定<
    ts转λ<(a: Record<string, Array<Record<string, number>>>) => number>,
    λ<'(Function (Record String (Array (Record String Number))) Number)'>
> = true
var 测试07: 类型等价判定<取构造子<number[]>, λ<'Array'>> = true
var 测试08: 类型等价判定<取构造子<Record<string, number>>, λ<'Record'>> = true
var 测试09: 类型等价判定<取构造子<(a: number) => string>, λ<'Function'>> = true
var 测试10: 类型等价判定<取构造子<number>, λ<'Number'>> = true
var 测试11: 类型等价判定<取参数1<Array<number>>, number> = true
var 测试11: 类型等价判定<取参数1<Array<(a: number) => string>>, (a: number) => string> = true
var 测试12: 类型等价判定<取参数1<(a: number) => string>, number> = true
var 测试13: 类型等价判定<取参数2<(a: number) => string>, string> = true
var 测试14: 类型等价判定<取参数<1>, []> = true
var 测试15: 类型等价判定<取参数<number[]>, [number]> = true
var 测试16: 类型等价判定<取参数<(a: number) => string>, [number, string]> = true
