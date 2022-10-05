import { error } from '@lsby/ts_type_fun'
import { Parse } from 'ts-lambda-calc/Parser'
import { Eval } from 'ts-lambda-calc/Semantics'

export type 计算<a> = Eval<Parse<λ解包<a>>>
export type 调用<a, b> = a extends λ<infer aa>
    ? b extends λ<infer bb>
        ? λ<`((${aa}) (${bb}))`>
        : error<['b不是λ项', b]>
    : error<['a不是λ项', a]>
export type 函数<arr> = arr extends [infer a]
    ? a
    : arr extends [infer a, ...infer tail]
    ? a extends λ<string>
        ? λ<`(Function (${λ解包<a>}) (${λ解包<函数<tail>>}))`>
        : never
    : ''

const λ包装: unique symbol = Symbol()
export type λ<表达式 extends string> = { [λ包装]: true; 表达式: 表达式 }
export type λ解包<A> = A extends λ<any> ? A['表达式'] : never
