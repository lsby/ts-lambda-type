import { App, Func, Var } from '@lsby/ts-lambda-calc/Lang'

import {
    一阶类型,
    一阶类型key,
    七阶类型,
    七阶类型key,
    三阶类型,
    三阶类型key,
    九阶类型,
    九阶类型key,
    二阶类型,
    二阶类型key,
    五阶类型,
    五阶类型key,
    八阶类型,
    八阶类型key,
    六阶类型,
    六阶类型key,
    四阶类型,
    四阶类型key,
    零阶类型,
    零阶类型key,
} from './TypeEnum'
import { 等于, 错误 } from '@lsby/ts_type_fun'
import { 调用, 函数, 计算, λ } from './Lib'

export type _λ转ts<输入> = 输入 extends string
    ? 输入
    : 输入 extends Var<infer k>
    ? k extends 零阶类型key
        ? 零阶类型[k]
        : 错误<['零阶类型中没有找到key', k]>
    : 输入 extends App<Var<infer 构造子>, infer 参数1>
    ? 构造子 extends 一阶类型key
        ? 一阶类型<_λ转ts<参数1>>[构造子]
        : 错误<['一阶类型中没有找到key', 构造子]>
    : 输入 extends App<App<Var<infer 构造子>, infer 参数1>, infer 参数2>
    ? 构造子 extends 二阶类型key
        ? 二阶类型<_λ转ts<参数1>, _λ转ts<参数2>>[构造子]
        : 错误<['二阶类型中没有找到key', 构造子]>
    : 输入 extends App<App<App<Var<infer 构造子>, infer 参数1>, infer 参数2>, infer 参数3>
    ? 构造子 extends 三阶类型key
        ? 三阶类型<_λ转ts<参数1>, _λ转ts<参数2>, _λ转ts<参数3>>[构造子]
        : 错误<['三阶类型中没有找到key', 构造子]>
    : 输入 extends App<
          App<App<App<Var<infer 构造子>, infer 参数1>, infer 参数2>, infer 参数3>,
          infer 参数4
      >
    ? 构造子 extends 四阶类型key
        ? 四阶类型<_λ转ts<参数1>, _λ转ts<参数2>, _λ转ts<参数3>, _λ转ts<参数4>>[构造子]
        : 错误<['四阶类型中没有找到key', 构造子]>
    : 输入 extends App<
          App<App<App<App<Var<infer 构造子>, infer 参数1>, infer 参数2>, infer 参数3>, infer 参数4>,
          infer 参数5
      >
    ? 构造子 extends 五阶类型key
        ? 五阶类型<
              _λ转ts<参数1>,
              _λ转ts<参数2>,
              _λ转ts<参数3>,
              _λ转ts<参数4>,
              _λ转ts<参数5>
          >[构造子]
        : 错误<['五阶类型中没有找到key', 构造子]>
    : 输入 extends App<
          App<
              App<
                  App<App<App<Var<infer 构造子>, infer 参数1>, infer 参数2>, infer 参数3>,
                  infer 参数4
              >,
              infer 参数5
          >,
          infer 参数6
      >
    ? 构造子 extends 六阶类型key
        ? 六阶类型<
              _λ转ts<参数1>,
              _λ转ts<参数2>,
              _λ转ts<参数3>,
              _λ转ts<参数4>,
              _λ转ts<参数5>,
              _λ转ts<参数6>
          >[构造子]
        : 错误<['六阶类型中没有找到key', 构造子]>
    : 输入 extends App<
          App<
              App<
                  App<
                      App<App<App<Var<infer 构造子>, infer 参数1>, infer 参数2>, infer 参数3>,
                      infer 参数4
                  >,
                  infer 参数5
              >,
              infer 参数6
          >,
          infer 参数7
      >
    ? 构造子 extends 七阶类型key
        ? 七阶类型<
              _λ转ts<参数1>,
              _λ转ts<参数2>,
              _λ转ts<参数3>,
              _λ转ts<参数4>,
              _λ转ts<参数5>,
              _λ转ts<参数6>,
              _λ转ts<参数7>
          >[构造子]
        : 错误<['七阶类型中没有找到key', 构造子]>
    : 输入 extends App<
          App<
              App<
                  App<
                      App<
                          App<App<App<Var<infer 构造子>, infer 参数1>, infer 参数2>, infer 参数3>,
                          infer 参数4
                      >,
                      infer 参数5
                  >,
                  infer 参数6
              >,
              infer 参数7
          >,
          infer 参数8
      >
    ? 构造子 extends 八阶类型key
        ? 八阶类型<
              _λ转ts<参数1>,
              _λ转ts<参数2>,
              _λ转ts<参数3>,
              _λ转ts<参数4>,
              _λ转ts<参数5>,
              _λ转ts<参数6>,
              _λ转ts<参数7>,
              _λ转ts<参数8>
          >[构造子]
        : 错误<['八阶类型中没有找到key', 构造子]>
    : 输入 extends App<
          App<
              App<
                  App<
                      App<
                          App<
                              App<
                                  App<App<Var<infer 构造子>, infer 参数1>, infer 参数2>,
                                  infer 参数3
                              >,
                              infer 参数4
                          >,
                          infer 参数5
                      >,
                      infer 参数6
                  >,
                  infer 参数7
              >,
              infer 参数8
          >,
          infer 参数9
      >
    ? 构造子 extends 九阶类型key
        ? 九阶类型<
              _λ转ts<参数1>,
              _λ转ts<参数2>,
              _λ转ts<参数3>,
              _λ转ts<参数4>,
              _λ转ts<参数5>,
              _λ转ts<参数6>,
              _λ转ts<参数7>,
              _λ转ts<参数8>,
              _λ转ts<参数9>
          >[构造子]
        : 错误<['九阶类型中没有找到key', 构造子]>
    : 输入 extends Func<infer a, infer b>
    ? 错误<['这是一个不全调用', a, b]>
    : 错误<['无法匹配输入', 输入]>
export type λ转ts<输入> = _λ转ts<计算<输入>>

var 零阶类型测试01: 等于<λ转ts<λ<'Number'>>, number> = true
var 一阶类型测试01: 等于<λ转ts<λ<'Array Number'>>, number[]> = true
var 一阶类型测试02: 等于<λ转ts<λ<'Array (Array Number)'>>, number[][]> = true
var 二阶类型测试01: 等于<λ转ts<λ<'Record String Number'>>, Record<string, number>> = true
var 二阶类型测试02: 等于<
    λ转ts<λ<'Record Boolean Number'>>,
    错误<['key必须是string|number|symbol', false]> | 错误<['key必须是string|number|symbol', true]>
> = true
var 二阶类型测试03: 等于<λ转ts<λ<'Record String (Array Number)'>>, Record<string, number[]>> = true
var 函数测试01: 等于<λ转ts<λ<'Function String Number'>>, (a: string) => number> = true
var 函数测试02: 等于<λ转ts<λ<'Function String (Array Number)'>>, (a: string) => number[]> = true
var 函数测试03: 等于<
    λ转ts<λ<'Function (Record String (Array Number)) (Array Number)'>>,
    (a: Record<string, number[]>) => number[]
> = true
var 函数测试04: 等于<
    λ转ts<λ<'Function (Record String (Array Number)) (Function String Number)'>>,
    (a: Record<string, number[]>) => (a: string) => number
> = true
var 函数测试05: 等于<λ转ts<函数<[λ<'String'>, λ<'Number'>]>>, (a: string) => number> = true
var 函数测试06: 等于<
    λ转ts<函数<[λ<'String'>, λ<'Number'>, λ<'Boolean'>]>>,
    (a: string) => (a: number) => boolean
> = true
var 函数测试07: 等于<
    λ转ts<函数<[λ<'String'>, λ<'Number'>, λ<'Boolean'>, λ<'Number'>]>>,
    (a: string) => (a: number) => (a: boolean) => number
> = true
var 函数测试08: 等于<
    λ转ts<函数<[λ<'String'>, 函数<[λ<'Number'>, λ<'Boolean'>]>, λ<'Number'>]>>,
    (a: string) => (a: (a: number) => boolean) => number
> = true
var 函数测试09: 等于<
    λ转ts<函数<[λ<'Array Number'>, 函数<[λ<'Array Number'>, λ<'Boolean'>]>, λ<'Number'>]>>,
    (a: number[]) => (a: (a: number[]) => boolean) => number
> = true
var 函数测试10: 等于<
    λ转ts<
        函数<
            [λ<'Record String Number'>, 函数<[λ<'Array Number'>, λ<'Boolean'>]>, λ<'Array Number'>]
        >
    >,
    (a: Record<string, number>) => (a: (a: number[]) => boolean) => number[]
> = true
var 函数测试11: 等于<
    λ转ts<函数<[λ<'Record String Number'>, λ<'Array Number'>, λ<'Array Number'>]>>,
    (a: Record<string, number>) => (a: number[]) => number[]
> = true
var 泛型测试01: 等于<λ转ts<λ<'(λx.Array x) Number'>>, number[]> = true
var 泛型测试02: 等于<λ转ts<调用<λ<'λx.Array x'>, λ<'Number'>>>, number[]> = true
var 泛型测试03: 等于<
    λ转ts<调用<调用<λ<'λx.λy.Record x y'>, λ<'Number'>>, λ<'String'>>>,
    Record<number, string>
> = true
