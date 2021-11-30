import { 与 } from './与'
import { 是基础类型 } from './是基础类型'

export type 基础类型等价判定<a1, a2> = 与<是基础类型<a1>, 是基础类型<a2>> extends true
    ? a1 extends a2
        ? a2 extends a1
            ? true
            : false
        : false
    : false
