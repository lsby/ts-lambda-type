import { 取对象键 } from './取对象键'
import { 基础类型等价判定 } from './基础类型等价判定'

export type 删除对象指定键<
    obj extends Record<string, unknown>,
    删除键 extends string,
    剩余键 extends string[] = 取对象键<obj>,
> = 剩余键 extends []
    ? {}
    : 剩余键 extends [infer a, ...infer as]
    ? as extends string[]
        ? 基础类型等价判定<a, 删除键> extends true
            ? {} & 删除对象指定键<obj, 删除键, as>
            : a extends keyof obj
            ? Record<a, obj[a]> & 删除对象指定键<obj, 删除键, as>
            : never
        : never
    : never
