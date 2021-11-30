export type 替换数组字符串<数组 extends any[], 旧值 extends string, 新值 extends string> = 数组 extends []
    ? []
    : 数组 extends [infer a, ...infer as]
    ? a extends 旧值
        ? [新值, ...替换数组字符串<as, 旧值, 新值>]
        : [a, ...替换数组字符串<as, 旧值, 新值>]
    : never

type a = 替换数组字符串<['a', 'b', 'c'], 'a', 'd'>
