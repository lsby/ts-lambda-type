import { 数组反转 } from './数组反转'

export type 删除数组最后一个<Arr extends any[]> = 数组反转<Arr> extends [infer a, ...infer as] ? 数组反转<as> : never
