export type 取数组第一个<Arr extends any[]> = Arr extends [infer a, ...infer as] ? a : never
