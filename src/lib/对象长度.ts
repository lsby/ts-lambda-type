import { 取对象键 } from './取对象键'

export type 对象长度<obj extends Record<string, unknown>> = 取对象键<obj>['length'] extends infer n
    ? n extends number
        ? n
        : never
    : never
