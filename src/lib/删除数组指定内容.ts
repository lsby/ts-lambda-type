import { 基础类型等价判定 } from './基础类型等价判定'

export type 删除数组指定内容<arr extends any[], 内容> = arr extends []
    ? []
    : arr extends [infer a, ...infer as]
    ? 基础类型等价判定<a, 内容> extends true
        ? 删除数组指定内容<as, 内容>
        : [a, ...删除数组指定内容<as, 内容>]
    : never
