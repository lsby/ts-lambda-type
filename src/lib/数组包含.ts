import { 数组存在元素 } from './数组存在元素'

export type 数组包含<数组1, 数组2> = 数组2 extends []
    ? true
    : 数组2 extends [infer a, ...infer as]
    ? 数组存在元素<数组1, a> extends true
        ? 数组包含<数组1, as>
        : false
    : false
