export interface 一阶类型枚举 {
    number: number
    string: string
    boolean: boolean
}
export interface 二阶类型枚举<A1> {
    Array: Array<A1>
}
export interface 三阶类型枚举<A1, A2> {
    Record: A1 extends string | number | symbol ? Record<A1, A2> : never
}
export interface 四阶类型枚举<A1, A2, A3> {}
export interface 五阶类型枚举<A1, A2, A3, A4> {}
export interface 六阶类型枚举<A1, A2, A3, A4, A5> {}
export interface 七阶类型枚举<A1, A2, A3, A4, A5, A6> {}
export interface 八阶类型枚举<A1, A2, A3, A4, A5, A6, A7> {}
export interface 九阶类型枚举<A1, A2, A3, A4, A5, A6, A7, A8> {}
