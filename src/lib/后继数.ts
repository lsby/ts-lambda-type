import { 求和 } from './求和'

export type 后继数<a extends string | number> = 求和<a, 1>
