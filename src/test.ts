import { Lambda调用 } from "./Lambda"
import { Lambda转Ts } from "./LambdaToTs"
import { Ts泛型转Lambda2, Ts类型转Lambda1 } from "./TsToLambda"

type 类型EQ<A, B> = A extends B ? (B extends A ? true : false) : false

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
