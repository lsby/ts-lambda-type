export type 数组存在元素<数组 extends any[], 值> = 数组 extends []
    ? false
    : 数组 extends [infer a, ...infer as]
    ? a extends 值
        ? true
        : 数组存在元素<as, 值>
    : never
