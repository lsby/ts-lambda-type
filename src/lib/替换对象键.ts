import { 取对象键 } from './取对象键'
import { 基础类型等价判定 } from './基础类型等价判定'

export type 替换对象键<
    obj extends Record<string, unknown>,
    原键 extends string,
    新键 extends string,
    剩余的键 extends string[] = 取对象键<obj>,
> = 剩余的键 extends []
    ? {}
    : 剩余的键 extends [infer a, ...infer as]
    ? as extends string[]
        ? 基础类型等价判定<a, 原键> extends true
            ? Record<新键, obj[原键]> & 替换对象键<obj, 原键, 新键, as>
            : a extends keyof obj
            ? Record<a, obj[a]> & 替换对象键<obj, 原键, 新键, as>
            : never
        : never
    : never
