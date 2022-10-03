import { error } from '@lsby/ts_type_fun'

export type 调用<a, b> = a extends string
    ? b extends string
        ? `(${a}) ${b}`
        : error<['b不是字符串', b]>
    : error<['a不是字符串', a]>
export type F<arr> = arr extends [infer a]
    ? a
    : arr extends [infer a, ...infer tail]
    ? a extends string
        ? `(Function (${a}) (${F<tail>}))`
        : never
    : ''
