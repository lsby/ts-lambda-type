export type 数组反转<Arr extends any[]> = Arr extends []
    ? []
    : Arr extends [infer a, ...infer as]
    ? [...数组反转<as>, a]
    : never
