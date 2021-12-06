import { 数组反转 } from './数组反转'

export type 取数组最后一个<Arr> = 数组反转<Arr> extends [infer a, ...infer as] ? a : never
