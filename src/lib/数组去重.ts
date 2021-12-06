import { 数组存在元素 } from './数组存在元素'

export type 数组去重<arr> = arr extends []
    ? []
    : arr extends [infer a, ...infer as]
    ? 数组存在元素<as, a> extends true
        ? 数组去重<as>
        : [a, ...数组去重<as>]
    : never

var 测试01: 数组去重<[1, 2, 3, 1, 2]> = [3, 1, 2]
