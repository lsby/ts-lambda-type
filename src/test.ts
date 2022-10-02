import { 类型等价判定, error } from '@lsby/ts_type_fun'
import { Stringify } from 'ts-lambda-calc/Semantics'
import {
    计算,
    初级式转数组式,
    数组式转分组式,
    分组式转标准式,
    _转换到ts类型,
    转换到ts类型,
    调用,
} from '.'

// 核心转换测试
// type s = 'Number'
// type s = 'Array Number'
// type s = 'Array String -> Array Number'
// type s = 'Function (Array String) Number'
// type s = 'Function (Array String) String -> Number'
// type s = 'Function (Array String -> (String -> String) -> Array (Number -> String)) String'
type s = '(Number -> String) -> Array Number -> Array String'
type 初级式 = 计算<s>
type 数组式 = 初级式转数组式<初级式>
type 分组式 = 数组式转分组式<数组式>
type 标准式 = 分组式转标准式<分组式>
type 字符串 = Stringify<标准式>
type ts类型 = _转换到ts类型<标准式>

// 一般测试
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
var 函数测试05: 类型等价判定<转换到ts类型<'String -> Number'>, (a: string) => number> = true
var 函数测试06: 类型等价判定<
    转换到ts类型<'String -> Number -> Boolean'>,
    (a: string) => (a: number) => boolean
> = true
var 函数测试07: 类型等价判定<
    转换到ts类型<'String -> Number -> Boolean -> Number'>,
    (a: string) => (a: number) => (a: boolean) => number
> = true
var 函数测试08: 类型等价判定<
    转换到ts类型<'String -> (Number -> Boolean) -> Number'>,
    (a: string) => (a: (a: number) => boolean) => number
> = true
var 函数测试09: 类型等价判定<
    转换到ts类型<'Array Number -> (Array Number -> Boolean) -> Number'>,
    (a: number[]) => (a: (a: number[]) => boolean) => number
> = true
var 函数测试10: 类型等价判定<
    转换到ts类型<'Record String Number -> (Array Number -> Boolean) -> (Array Number)'>,
    (a: Record<string, number>) => (a: (a: number[]) => boolean) => number[]
> = true
var 函数测试11: 类型等价判定<
    转换到ts类型<'Record String Number -> (Array Number) -> (Array Number)'>,
    (a: Record<string, number>) => (a: number[]) => number[]
> = true
var 函数测试12: 类型等价判定<
    转换到ts类型<'Record String Number -> (Array Number -> Boolean) -> Array Number'>,
    (a: Record<string, number>) => (a: (a: number[]) => boolean) => number[]
> = true
var 函数测试13: 类型等价判定<
    转换到ts类型<'Record String Number -> Array Number -> Array Number'>,
    (a: Record<string, number>) => (a: number[]) => number[]
> = true
var 泛型测试01: 类型等价判定<转换到ts类型<'(λx.Array x) Number'>, number[]> = true
var 泛型测试02: 类型等价判定<转换到ts类型<调用<'λx.Array x', 'Number'>>, number[]> = true
var 泛型测试03: 类型等价判定<
    转换到ts类型<调用<调用<'λx.λy.Record x y', 'Number'>, 'String'>>,
    Record<number, string>
> = true

function map<A, B, F>(
    f: 转换到ts类型<调用<调用<'λA.λB.A -> B', A>, B>>,
    x: 转换到ts类型<调用<调用<'λF.λA.F A', F>, A>>,
): 转换到ts类型<调用<调用<'λF.λA.F A', F>, B>> {
    return 1 as any
}

map<'Number', 'Number', 'Array'>((a) => a + 1, [1])

type AAA<F, A, B> = 转换到ts类型<调用<调用<调用<'λF.λA.λB. (A -> B) -> F A -> F B', F>, A>, B>>
type map = AAA<'Array', 'Number', 'Number'>
