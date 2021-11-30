import { 反转字符串 } from './反转字符串'

export type 包含括号<s> = s extends `${infer a1}(${infer a2})${infer a3}` ? true : false
type 去除最外层括号<s> = s extends `(${infer a}` ? (反转字符串<a> extends `)${infer b}` ? 反转字符串<b> : never) : never
type _解析最长括号<
    当前字符串 extends string,
    前半段 extends string = '',
    括号里面的 extends string = '',
    后半段 extends string = '',
    括号判定栈 extends unknown[] = [],
    已处理括号 extends boolean = false,
> = 当前字符串 extends ''
    ? [前半段, 去除最外层括号<括号里面的>, 后半段]
    : 当前字符串 extends `${infer a}${infer as}`
    ? 已处理括号 extends true
        ? _解析最长括号<as, 前半段, 括号里面的, `${后半段}${a}`, 括号判定栈, 已处理括号>
        : a extends '('
        ? _解析最长括号<as, 前半段, `${括号里面的}${a}`, 后半段, [...括号判定栈, ''], 已处理括号>
        : a extends ')'
        ? 括号判定栈['length'] extends 0
            ? never
            : 括号判定栈 extends [infer za, ...infer zas]
            ? zas['length'] extends 0
                ? _解析最长括号<as, 前半段, `${括号里面的}${a}`, 后半段, zas, true>
                : _解析最长括号<as, 前半段, `${括号里面的}${a}`, 后半段, zas, 已处理括号>
            : never
        : 括号判定栈['length'] extends 0
        ? _解析最长括号<as, `${前半段}${a}`, 括号里面的, 后半段, 括号判定栈, 已处理括号>
        : _解析最长括号<as, 前半段, `${括号里面的}${a}`, 后半段, 括号判定栈, 已处理括号>
    : never
export type 解析最长括号<s extends string> = 包含括号<s> extends true ? _解析最长括号<s> : never
