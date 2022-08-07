import { Lambda1, Lambda项 } from './Lambda'
import { 联合转元组 } from './lib/联合转元组'
import { 一阶类型枚举 } from './TypeEnum'

type _查找一阶类型<A, arr> = arr extends []
    ? unknown
    : arr extends [infer a, ...infer as]
    ? a extends keyof 一阶类型枚举
        ? A extends 一阶类型枚举[a]
            ? Lambda1<a>
            : _查找一阶类型<A, as>
        : unknown
    : unknown
type 查找一阶类型<A> = _查找一阶类型<A, 联合转元组<keyof 一阶类型枚举>>

export type Ts类型转Lambda1<A> = 查找一阶类型<A> extends Lambda项 ? 查找一阶类型<A> : never
