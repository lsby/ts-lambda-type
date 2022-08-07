import { Lambda1, Lambda3 } from './Lambda'
import {
    一阶类型枚举,
    二阶类型枚举,
    三阶类型枚举,
    四阶类型枚举,
    五阶类型枚举,
    六阶类型枚举,
    七阶类型枚举,
    八阶类型枚举,
    九阶类型枚举,
} from './TypeEnum'

type 一阶类型<name> = name extends keyof 一阶类型枚举 ? 一阶类型枚举[name] : never
type 二阶类型<name, A1> = name extends keyof 二阶类型枚举<A1> ? 二阶类型枚举<A1>[name] : never
type 三阶类型<name, A1, A2> = name extends keyof 三阶类型枚举<A1, A2>
    ? 三阶类型枚举<A1, A2>[name]
    : never
type 四阶类型<name, A1, A2, A3> = name extends keyof 四阶类型枚举<A1, A2, A3>
    ? 四阶类型枚举<A1, A2, A3>[name]
    : never
type 五阶类型<name, A1, A2, A3, A4> = name extends keyof 五阶类型枚举<A1, A2, A3, A4>
    ? 五阶类型枚举<A1, A2, A3, A4>[name]
    : never
type 六阶类型<name, A1, A2, A3, A4, A5> = name extends keyof 六阶类型枚举<A1, A2, A3, A4, A5>
    ? 六阶类型枚举<A1, A2, A3, A4, A5>[name]
    : never
type 七阶类型<name, A1, A2, A3, A4, A5, A6> = name extends keyof 七阶类型枚举<
    A1,
    A2,
    A3,
    A4,
    A5,
    A6
>
    ? 七阶类型枚举<A1, A2, A3, A4, A5, A6>[name]
    : never
type 八阶类型<name, A1, A2, A3, A4, A5, A6, A7> = name extends keyof 八阶类型枚举<
    A1,
    A2,
    A3,
    A4,
    A5,
    A6,
    A7
>
    ? 八阶类型枚举<A1, A2, A3, A4, A5, A6, A7>[name]
    : never
type 九阶类型<name, A1, A2, A3, A4, A5, A6, A7, A8> = name extends keyof 九阶类型枚举<
    A1,
    A2,
    A3,
    A4,
    A5,
    A6,
    A7,
    A8
>
    ? 九阶类型枚举<A1, A2, A3, A4, A5, A6, A7, A8>[name]
    : never

type 处理括号<A> = A extends [[...infer a]]
    ? [[...a]]
    : A extends [[infer a, infer b], ...infer c]
    ? 处理括号<[处理括号<a>, 处理括号<b>, ...处理括号<c>]>
    : A
type _Lambda类型转中间类型<A> = A extends Lambda1<infer n>
    ? n
    : A extends Lambda3<infer a, infer b>
    ? [_Lambda类型转中间类型<a>, _Lambda类型转中间类型<b>]
    : never
type Lambda类型转中间类型<A> = 处理括号<_Lambda类型转中间类型<A>>

type 中间类型转ts类型<A> = A extends string
    ? 一阶类型<A>
    : A extends [infer a1]
    ? 一阶类型<a1>
    : A extends [infer a1, infer a2]
    ? 二阶类型<a1, 中间类型转ts类型<a2>>
    : A extends [infer a1, infer a2, infer a3]
    ? 三阶类型<a1, 中间类型转ts类型<a2>, 中间类型转ts类型<a3>>
    : A extends [infer a1, infer a2, infer a3, infer a4]
    ? 四阶类型<a1, 中间类型转ts类型<a2>, 中间类型转ts类型<a3>, 中间类型转ts类型<a4>>
    : A extends [infer a1, infer a2, infer a3, infer a4, infer a5]
    ? 五阶类型<
          a1,
          中间类型转ts类型<a2>,
          中间类型转ts类型<a3>,
          中间类型转ts类型<a4>,
          中间类型转ts类型<a5>
      >
    : A extends [infer a1, infer a2, infer a3, infer a4, infer a5, infer a6]
    ? 六阶类型<
          a1,
          中间类型转ts类型<a2>,
          中间类型转ts类型<a3>,
          中间类型转ts类型<a4>,
          中间类型转ts类型<a5>,
          中间类型转ts类型<a6>
      >
    : A extends [infer a1, infer a2, infer a3, infer a4, infer a5, infer a6, infer a7]
    ? 七阶类型<
          a1,
          中间类型转ts类型<a2>,
          中间类型转ts类型<a3>,
          中间类型转ts类型<a4>,
          中间类型转ts类型<a5>,
          中间类型转ts类型<a6>,
          中间类型转ts类型<a7>
      >
    : A extends [infer a1, infer a2, infer a3, infer a4, infer a5, infer a6, infer a7, infer a8]
    ? 八阶类型<
          a1,
          中间类型转ts类型<a2>,
          中间类型转ts类型<a3>,
          中间类型转ts类型<a4>,
          中间类型转ts类型<a5>,
          中间类型转ts类型<a6>,
          中间类型转ts类型<a7>,
          中间类型转ts类型<a8>
      >
    : A extends [
          infer a1,
          infer a2,
          infer a3,
          infer a4,
          infer a5,
          infer a6,
          infer a7,
          infer a8,
          infer a9,
      ]
    ? 九阶类型<
          a1,
          中间类型转ts类型<a2>,
          中间类型转ts类型<a3>,
          中间类型转ts类型<a4>,
          中间类型转ts类型<a5>,
          中间类型转ts类型<a6>,
          中间类型转ts类型<a7>,
          中间类型转ts类型<a8>,
          中间类型转ts类型<a9>
      >
    : never

export type Lambda转Ts<A> = 中间类型转ts类型<Lambda类型转中间类型<A>>
