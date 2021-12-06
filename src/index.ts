export * from './Alpha变换'
export * from './数据类型'

// export type Lambda项<泛型 extends string[], 实体 extends any[]> = 与<
//     非<数组长度判定<实体, 1>>,
//     非<数组长度判定<实体, 2>>
// > extends true
//     ? never
//     : 判定双层数组<实体> extends true
//     ? Lambda项<泛型, 去除单层数组<实体>>
//     : { 泛型: 泛型; 实体: 实体 }

// export type 规格化Lambda项<值, 前缀 extends string, 当前位置 extends number = 0> = 值 extends Lambda项<
//     infer 泛型,
//     infer 实体
// >
//     ? 泛型['length'] extends 当前位置
//         ? 值
//         : 规格化Lambda项<Alpha变换<值, 泛型[当前位置], `${前缀}${当前位置}`>, 前缀, 字符串转数字<后继数<当前位置>>>
//     : never

// export type Alpha变换<
//     值,
//     旧名称 extends string,
//     新名称 extends string,
//     当前位置 extends number = 0,
// > = 值 extends Lambda项<infer 泛型, infer 实体>
//     ? 泛型['length'] extends 当前位置
//         ? 值
//         : 泛型[当前位置] extends 旧名称
//         ? Lambda项<递归替换层叠数组<泛型, 旧名称, 新名称>, 递归替换层叠数组<实体, 旧名称, 新名称>>
//         : Alpha变换<值, 旧名称, 新名称, 字符串转数字<后继数<数字转字符串<当前位置>>>>
//     : never

// export type 应用<前键, 后键> = 规格化Lambda项<前键, 'a_'> extends Lambda项<infer 泛型1, infer 实体1>
//     ? 规格化Lambda项<后键, 'b_'> extends Lambda项<infer 泛型2, infer 实体2>
//         ? Lambda项<[...泛型1, ...泛型2], [去除单层数组<实体1>, 去除单层数组<实体2>]>
//         : 2
//     : 3

// type 宽松递归查找层叠数组<层叠数组 extends any[], 值> = 层叠数组 extends []
//     ? []
//     : 层叠数组 extends [infer a, ...infer as]
//     ? a extends string
//         ? a extends 值
//             ? true
//             : 宽松递归查找层叠数组<as, 值>
//         : a extends any[]
//         ? 宽松递归查找层叠数组<a, 值> extends true
//             ? true
//             : 宽松递归查找层叠数组<as, 值>
//         : false
//     : false

// // todo 计算应该从里向外 而不是从外向里
// // 下面这个计算应该是 [["Either", "String"], "Number"] 而不是 [["Either", "Number"], "String"]
// type aaa = Beta规约<
//     Beta规约<
//         应用<应用<Lambda项<['a', 'b'], [['Either', 'a'], 'b']>, Lambda项<[], ['String']>>, Lambda项<[], ['Number']>>
//     >
// >
// // type aaa = 应用<应用<Lambda项<['a', 'b'], [['Either', 'a'], 'b']>, Lambda项<[], ['String']>>, Lambda项<[], ['Number']>>
// type bbb = Beta规约<应用<Lambda项<['a', 'b'], [['Either', 'a'], 'b']>, Lambda项<[], ['String']>>>
// type _判定可Beta规约<泛型列表, 子实体> = 泛型列表 extends any[]
//     ? 泛型列表 extends []
//         ? false
//         : 子实体 extends [infer 前键, infer 后键]
//         ? 宽松递归查找层叠数组<泛型列表, 后键> extends true
//             ? false
//             : 泛型列表 extends [infer 当前泛型, ...infer 余下]
//             ? 前键 extends string
//                 ? 递归查找层叠数组<泛型列表, 前键> extends true
//                     ? true
//                     : false
//                 : 前键 extends any[]
//                 ? 当前泛型 extends string
//                     ? 递归查找层叠数组<前键, 当前泛型>
//                     : _判定可Beta规约<余下, 子实体>
//                 : false
//             : false
//         : false
//     : false
// export type Beta规约<值> = 值 extends Lambda项<infer 泛型, infer 实体>
//     ? 或<数组长度判定<泛型, 0>, 非<数组长度判定<实体, 2>>> extends true
//         ? never
//         : 实体 extends [infer 前键, infer 后键]
//         ? _判定可Beta规约<泛型, 前键> extends true
//             ? Beta规约<Lambda项<泛型, 包装非数组<前键>>> extends infer 子规约结果
//                 ? 子规约结果 extends Lambda项<infer 子泛型, infer 子实体>
//                     ? Lambda项<子泛型, [包装非数组<子实体>, 去除单层数组<包装非数组<后键>>]>
//                     : 2
//                 : 2
//             : _判定可Beta规约<泛型, 后键> extends true
//             ? Beta规约<Lambda项<泛型, 包装非数组<后键>>> extends infer 子规约结果
//                 ? 子规约结果 extends Lambda项<infer 子泛型, infer 子实体>
//                     ? Lambda项<子泛型, [包装非数组<子实体>, 去除单层数组<包装非数组<后键>>]>
//                     : 2
//                 : 2
//             : 泛型 extends [infer 当前泛型, ...infer 余下]
//             ? 余下 extends string[]
//                 ? 当前泛型 extends string
//                     ? Lambda项<余下, 递归替换层叠数组<包装非数组<前键>, 当前泛型, 去除单层数组<包装非数组<后键>>>>
//                     : 值
//                 : 值
//             : 值
//         : 值
//     : never

// export type Eta变换<值> = 值 extends Lambda项<infer 泛型, infer 实体>
//     ? 泛型 extends []
//         ? 值
//         : [取数组最后一个<泛型>, 取数组最后一个<实体>] extends [infer 最后泛型, infer 最后实体]
//         ? 基础类型等价判定<最后泛型, 最后实体> extends true
//             ? Eta变换<Lambda项<删除数组最后一个<泛型>, 删除数组最后一个<实体>>>
//             : 值
//         : 值
//     : never

// export type 转换为原生类型<值> = 值 extends Lambda项<infer 泛型, infer 实体>
//     ? 泛型 extends []
//         ? 实体 extends [infer a]
//             ? a
//             : never
//         : never
//     : never
