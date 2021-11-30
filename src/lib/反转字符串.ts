export type 反转字符串<剩余字符串 extends string> = 剩余字符串 extends ''
    ? ''
    : 剩余字符串 extends `${infer a}${infer as}`
    ? `${反转字符串<as>}${a}`
    : never
