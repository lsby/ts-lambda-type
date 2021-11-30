import { 联合转元组 } from './联合转元组'

type 对象转json<键们, 对象> = 键们 extends []
    ? ''
    : 键们 extends [infer a]
    ? a extends string
        ? a extends keyof 对象
            ? `"${a}":${实例转json<对象[a]>}`
            : never
        : never
    : 键们 extends [infer a, ...infer as]
    ? a extends string
        ? a extends keyof 对象
            ? `"${a}":${实例转json<对象[a]>},${对象转json<as, 对象>}`
            : never
        : never
    : never
type 数组转json<值们> = 值们 extends []
    ? ''
    : 值们 extends [infer a]
    ? `${实例转json<a>}`
    : 值们 extends [infer a, ...infer as]
    ? `${实例转json<a>},${数组转json<as>}`
    : never
type 实例转json<实例> = 实例 extends object
    ? 实例 extends Array<unknown>
        ? `[${数组转json<实例>}]`
        : 联合转元组<keyof 实例> extends infer 键们
        ? `{${对象转json<键们, 实例>}}`
        : never
    : 实例 extends string
    ? `"${实例}"`
    : 实例 extends number
    ? // 因为没有办法"凭空"创造数字, 所以ParseJson函数不接受数字类型.
      // 这里为了和ParseJson函数成对使用, 即使是数字也要转换成字符串.
      `"${实例}"`
    : never

export type 生成json<a> = 实例转json<a>
