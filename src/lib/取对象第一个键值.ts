import { 取对象键 } from './取对象键'

export type 取对象第一个键值<obj extends Record<string, unknown>> = 取对象键<obj> extends infer keys
    ? keys extends []
        ? never
        : keys extends [infer a, ...infer as]
        ? a extends keyof obj
            ? [a, obj[a]]
            : never
        : never
    : never
