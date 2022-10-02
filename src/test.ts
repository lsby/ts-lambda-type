import { error, 类型等价判定 } from '@lsby/ts_type_fun'
import { 调用, 转换到ts类型, F } from '.'

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
