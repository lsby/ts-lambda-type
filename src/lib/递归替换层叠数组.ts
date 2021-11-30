export type 递归替换层叠数组<层叠数组 extends any[], 旧值 extends string, 新值> = 层叠数组 extends []
    ? []
    : 层叠数组 extends [infer a, ...infer as]
    ? a extends string
        ? a extends 旧值
            ? [新值, ...递归替换层叠数组<as, 旧值, 新值>]
            : [a, ...递归替换层叠数组<as, 旧值, 新值>]
        : a extends any[]
        ? [递归替换层叠数组<a, 旧值, 新值>, ...递归替换层叠数组<as, 旧值, 新值>]
        : never
    : never
