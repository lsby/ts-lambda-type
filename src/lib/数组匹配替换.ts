export type 数组匹配替换<arr, 旧值, 新值> = arr extends []
    ? []
    : arr extends [infer a, ...infer as]
    ? as extends string[]
        ? a extends 旧值
            ? [新值, ...数组匹配替换<as, 旧值, 新值>]
            : [a, ...数组匹配替换<as, 旧值, 新值>]
        : never
    : never
