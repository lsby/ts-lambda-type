import { 联合转元组, 错误 } from '@lsby/ts_type_fun'

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
        : 错误<['key必须是string|number|symbol', A1]>
    Function: (a: A1) => A2
}
export interface 三阶类型<A1, A2, A3> {}
export interface 四阶类型<A1, A2, A3, A4> {}
export interface 五阶类型<A1, A2, A3, A4, A5> {}
export interface 六阶类型<A1, A2, A3, A4, A5, A6> {}
export interface 七阶类型<A1, A2, A3, A4, A5, A6, A7> {}
export interface 八阶类型<A1, A2, A3, A4, A5, A6, A7, A8> {}
export interface 九阶类型<A1, A2, A3, A4, A5, A6, A7, A8, A9> {}

export type 零阶类型key = keyof 零阶类型
export type 一阶类型key = keyof 一阶类型<any>
export type 二阶类型key = keyof 二阶类型<any, any>
export type 三阶类型key = keyof 三阶类型<any, any, any>
export type 四阶类型key = keyof 四阶类型<any, any, any, any>
export type 五阶类型key = keyof 五阶类型<any, any, any, any, any>
export type 六阶类型key = keyof 六阶类型<any, any, any, any, any, any>
export type 七阶类型key = keyof 七阶类型<any, any, any, any, any, any, any>
export type 八阶类型key = keyof 八阶类型<any, any, any, any, any, any, any, any>
export type 九阶类型key = keyof 九阶类型<any, any, any, any, any, any, any, any, any>

export type 零阶类型key元组 = 联合转元组<零阶类型key>
export type 一阶类型key元组 = 联合转元组<一阶类型key>
export type 二阶类型key元组 = 联合转元组<二阶类型key>
export type 三阶类型key元组 = 联合转元组<三阶类型key>
export type 四阶类型key元组 = 联合转元组<四阶类型key>
export type 五阶类型key元组 = 联合转元组<五阶类型key>
export type 六阶类型key元组 = 联合转元组<六阶类型key>
export type 七阶类型key元组 = 联合转元组<七阶类型key>
export type 八阶类型key元组 = 联合转元组<八阶类型key>
export type 九阶类型key元组 = 联合转元组<九阶类型key>
