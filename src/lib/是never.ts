// https://github.com/type-challenges/type-challenges/issues/4322

export type 是never<T> = [T] extends [never] ? true : false
