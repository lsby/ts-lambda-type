export type 递归查找层叠数组<层叠数组 extends any[], 值 extends string> = 层叠数组 extends []
    ? []
    : 层叠数组 extends [infer a, ...infer as]
    ? a extends string
        ? a extends 值
            ? true
            : 递归查找层叠数组<as, 值>
        : a extends any[]
        ? 递归查找层叠数组<a, 值> extends true
            ? true
            : 递归查找层叠数组<as, 值>
        : false
    : false
