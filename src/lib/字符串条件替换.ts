export type 字符串条件替换<值, 条件, 新值> = 值 extends 条件 ? 新值 : 值

var 测试: 字符串条件替换<'a', 'a', 'b'> = 'b'
