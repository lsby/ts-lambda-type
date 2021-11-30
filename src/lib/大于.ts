// https://github.com/type-challenges/type-challenges/issues/4579

export type 大于<T extends number, U extends number, A extends any[] = []> = A['length'] extends T
    ? A['length'] extends U
        ? false
        : true
    : 大于<T, U, [1, ...A]>
