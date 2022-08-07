import { Lambda1, Lambda2, Lambda3, Lambda调用 } from "./Lambda"
import { Lambda转Ts } from "./LambdaToTs"
import { Ts泛型转Lambda2, Ts类型转Lambda1 } from "./TsToLambda"

type 类型EQ<A, B> = A extends B ? (B extends A ? true : false) : false

var Lambda转Ts测试: 类型EQ<
    Lambda转Ts<Lambda3<Lambda1<'Array'>, Lambda1<'number'>>>,
    number[]
> = true

var Ts转Lambda测试1 : 类型EQ<
    Ts类型转Lambda1<number>,
    Lambda1<'number'>
> = true

var Ts转Lambda测试2 : 类型EQ<
    Ts泛型转Lambda2<Array<number>>,
    Lambda2<"A1", Lambda3<Lambda1<"Array">, Lambda1<"A1">>>
> = true

function 二阶类型测试_指定泛型<A, B, a = Ts泛型转Lambda2<A>, b = Ts类型转Lambda1<B>>(
    a: Lambda转Ts<Lambda调用<a, b>>,
) {}
var 二阶类型测试_指定泛型_: 类型EQ<
    Parameters<typeof 二阶类型测试_指定泛型<Array<any>, string>>,
    [a: string[]]
> = true

function 二阶类型测试<A, B, a = Ts泛型转Lambda2<A>, b = Ts类型转Lambda1<B>>(
    a: A,
    b: B,
    c: Lambda转Ts<Lambda调用<a, b>>,
) {}
var 二阶类型测试_: 类型EQ<
    Parameters<typeof 二阶类型测试<Array<number>, string>>,
    [a: number[], b: string, c: string[]]
> = true

function 三阶类型测试<A, B, C, a1 = Ts泛型转Lambda2<A>, a2 = Ts类型转Lambda1<B>, a3 = Ts类型转Lambda1<C>>(
    a: A,
    b: B,
    c: C,
    d: Lambda转Ts<Lambda调用<Lambda调用<a1, a2>, a3>>,
) { }
var 三阶类型测试_: 类型EQ<
    Parameters<typeof 三阶类型测试<Record<string, boolean>, string, number>>,
    [a: Record<string, boolean>, b: string, c: number, d: Record<string, number>]
> = true
