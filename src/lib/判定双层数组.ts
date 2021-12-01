export type 判定双层数组<arr extends any[]> = arr extends [infer a] ? (a extends any[] ? true : false) : false
