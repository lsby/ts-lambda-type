export type 数组长度判定<arr extends any[], n extends number> = arr['length'] extends n ? true : false
