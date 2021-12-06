export type 删除数组指定内容<arr, 内容> = arr extends []
    ? []
    : arr extends [infer a, ...infer as]
    ? a extends 内容
        ? 删除数组指定内容<as, 内容>
        : [a, ...删除数组指定内容<as, 内容>]
    : never
