import { error } from '@lsby/ts_type_fun'
import { App, Func, Var } from 'ts-lambda-calc/Lang'
import { Parse } from 'ts-lambda-calc/Parser'
import { Eval } from 'ts-lambda-calc/Semantics'
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
import { 类型等价判定 } from '@lsby/ts_type_fun'
import { 调用, F } from './Lib'

type 计算<a> = Eval<Parse<a>>

type _转换到ts类型<输入> = 输入 extends string
    ? 输入
    : 输入 extends Var<infer k>
    ? k extends keyof 零阶类型
        ? 零阶类型[k]
        : error<['零阶类型中没有找到key', k]>
    : 输入 extends App<Var<infer 构造子>, infer 参数1>
    ? 构造子 extends keyof 一阶类型<any>
        ? 一阶类型<_转换到ts类型<参数1>>[构造子]
        : error<['一阶类型中没有找到key', 构造子]>
    : 输入 extends App<App<Var<infer 构造子>, infer 参数1>, infer 参数2>
    ? 构造子 extends keyof 二阶类型<any, any>
        ? 二阶类型<_转换到ts类型<参数1>, _转换到ts类型<参数2>>[构造子]
        : error<['二阶类型中没有找到key', 构造子]>
    : 输入 extends App<App<App<Var<infer 构造子>, infer 参数1>, infer 参数2>, infer 参数3>
    ? 构造子 extends keyof 三阶类型<any, any, any>
        ? 三阶类型<_转换到ts类型<参数1>, _转换到ts类型<参数2>, _转换到ts类型<参数3>>[构造子]
        : error<['三阶类型中没有找到key', 构造子]>
    : 输入 extends App<
          App<App<App<Var<infer 构造子>, infer 参数1>, infer 参数2>, infer 参数3>,
          infer 参数4
      >
    ? 构造子 extends keyof 四阶类型<any, any, any, any>
        ? 四阶类型<
              _转换到ts类型<参数1>,
              _转换到ts类型<参数2>,
              _转换到ts类型<参数3>,
              _转换到ts类型<参数4>
          >[构造子]
        : error<['四阶类型中没有找到key', 构造子]>
    : 输入 extends App<
          App<App<App<App<Var<infer 构造子>, infer 参数1>, infer 参数2>, infer 参数3>, infer 参数4>,
          infer 参数5
      >
    ? 构造子 extends keyof 五阶类型<any, any, any, any, any>
        ? 五阶类型<
              _转换到ts类型<参数1>,
              _转换到ts类型<参数2>,
              _转换到ts类型<参数3>,
              _转换到ts类型<参数4>,
              _转换到ts类型<参数5>
          >[构造子]
        : error<['五阶类型中没有找到key', 构造子]>
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
    ? 构造子 extends keyof 六阶类型<any, any, any, any, any, any>
        ? 六阶类型<
              _转换到ts类型<参数1>,
              _转换到ts类型<参数2>,
              _转换到ts类型<参数3>,
              _转换到ts类型<参数4>,
              _转换到ts类型<参数5>,
              _转换到ts类型<参数6>
          >[构造子]
        : error<['六阶类型中没有找到key', 构造子]>
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
    ? 构造子 extends keyof 七阶类型<any, any, any, any, any, any, any>
        ? 七阶类型<
              _转换到ts类型<参数1>,
              _转换到ts类型<参数2>,
              _转换到ts类型<参数3>,
              _转换到ts类型<参数4>,
              _转换到ts类型<参数5>,
              _转换到ts类型<参数6>,
              _转换到ts类型<参数7>
          >[构造子]
        : error<['七阶类型中没有找到key', 构造子]>
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
    ? 构造子 extends keyof 八阶类型<any, any, any, any, any, any, any, any>
        ? 八阶类型<
              _转换到ts类型<参数1>,
              _转换到ts类型<参数2>,
              _转换到ts类型<参数3>,
              _转换到ts类型<参数4>,
              _转换到ts类型<参数5>,
              _转换到ts类型<参数6>,
              _转换到ts类型<参数7>,
              _转换到ts类型<参数8>
          >[构造子]
        : error<['八阶类型中没有找到key', 构造子]>
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
    ? 构造子 extends keyof 九阶类型<any, any, any, any, any, any, any, any, any>
        ? 九阶类型<
              _转换到ts类型<参数1>,
              _转换到ts类型<参数2>,
              _转换到ts类型<参数3>,
              _转换到ts类型<参数4>,
              _转换到ts类型<参数5>,
              _转换到ts类型<参数6>,
              _转换到ts类型<参数7>,
              _转换到ts类型<参数8>,
              _转换到ts类型<参数9>
          >[构造子]
        : error<['九阶类型中没有找到key', 构造子]>
    : 输入 extends Func<infer a, infer b>
    ? error<['这是一个不全调用', a, b]>
    : error<['无法匹配输入', 输入]>
export type 转换到ts类型<输入> = _转换到ts类型<计算<输入>>

var 零阶类型测试01: 类型等价判定<转换到ts类型<'Number'>, number> = true
var 一阶类型测试01: 类型等价判定<转换到ts类型<'Array Number'>, number[]> = true
var 一阶类型测试02: 类型等价判定<转换到ts类型<'Array (Array Number)'>, number[][]> = true
var 二阶类型测试01: 类型等价判定<
    转换到ts类型<'Record String Number'>,
    Record<string, number>
> = true
var 二阶类型测试02: 类型等价判定<
    转换到ts类型<'Record Boolean Number'>,
    error<['key必须是string|number|symbol', false]> | error<['key必须是string|number|symbol', true]>
> = true
var 二阶类型测试03: 类型等价判定<
    转换到ts类型<'Record String (Array Number)'>,
    Record<string, number[]>
> = true
var 函数测试01: 类型等价判定<转换到ts类型<'Function String Number'>, (a: string) => number> = true
var 函数测试02: 类型等价判定<
    转换到ts类型<'Function String (Array Number)'>,
    (a: string) => number[]
> = true
var 函数测试03: 类型等价判定<
    转换到ts类型<'Function (Record String (Array Number)) (Array Number)'>,
    (a: Record<string, number[]>) => number[]
> = true
var 函数测试04: 类型等价判定<
    转换到ts类型<'Function (Record String (Array Number)) (Function String Number)'>,
    (a: Record<string, number[]>) => (a: string) => number
> = true
var 函数测试05: 类型等价判定<转换到ts类型<F<['String', 'Number']>>, (a: string) => number> = true
var 函数测试06: 类型等价判定<
    转换到ts类型<F<['String', 'Number', 'Boolean']>>,
    (a: string) => (a: number) => boolean
> = true
var 函数测试07: 类型等价判定<
    转换到ts类型<F<['String', 'Number', 'Boolean', 'Number']>>,
    (a: string) => (a: number) => (a: boolean) => number
> = true
var 函数测试08: 类型等价判定<
    转换到ts类型<F<['String', F<['Number', 'Boolean']>, ' Number']>>,
    (a: string) => (a: (a: number) => boolean) => number
> = true
var 函数测试09: 类型等价判定<
    转换到ts类型<F<['Array Number', F<['Array Number', 'Boolean']>, 'Number']>>,
    (a: number[]) => (a: (a: number[]) => boolean) => number
> = true
var 函数测试10: 类型等价判定<
    转换到ts类型<F<['Record String Number', F<['Array Number', 'Boolean']>, 'Array Number']>>,
    (a: Record<string, number>) => (a: (a: number[]) => boolean) => number[]
> = true
var 函数测试11: 类型等价判定<
    转换到ts类型<F<['Record String Number', 'Array Number', 'Array Number']>>,
    (a: Record<string, number>) => (a: number[]) => number[]
> = true
var 泛型测试01: 类型等价判定<转换到ts类型<'(λx.Array x) Number'>, number[]> = true
var 泛型测试02: 类型等价判定<转换到ts类型<调用<'λx.Array x', 'Number'>>, number[]> = true
var 泛型测试03: 类型等价判定<
    转换到ts类型<调用<调用<'λx.λy.Record x y', 'Number'>, 'String'>>,
    Record<number, string>
> = true
