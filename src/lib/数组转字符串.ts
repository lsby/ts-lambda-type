export type 数组转字符串<arr extends string[]> = arr extends []
    ? ''
    : arr extends [infer a]
    ? a extends string
        ? `${a}`
        : never
    : arr extends [infer a, ...infer as]
    ? a extends string
        ? as extends string[]
            ? `${a} ${数组转字符串<as>}`
            : never
        : never
    : never
