import { error } from '@lsby/ts_type_fun'

export interface 零阶类型 {
    Number: number
    String: string
    Boolean: boolean
}
export interface 一阶类型<A1> {
    Array: Array<A1>
}
export interface 二阶类型<A1, A2> {
    Record: A1 extends string | number | symbol
        ? Record<A1, A2>
        : error<['key必须是string|number|symbol', A1]>
    Function: (a: A1) => A2
}
export interface 三阶类型<A1, A2, A3> {}
export interface 四阶类型<A1, A2, A3, A4> {}
export interface 五阶类型<A1, A2, A3, A4, A5> {}
export interface 六阶类型<A1, A2, A3, A4, A5, A6> {}
export interface 七阶类型<A1, A2, A3, A4, A5, A6, A7> {}
export interface 八阶类型<A1, A2, A3, A4, A5, A6, A7, A8> {}
export interface 九阶类型<A1, A2, A3, A4, A5, A6, A7, A8, A9> {}
