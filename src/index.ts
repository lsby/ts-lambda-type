import { 删除数组最后一个 } from '@lsby/ts_type_fun/src/删除数组最后一个'
import { 去除单层数组 } from '@lsby/ts_type_fun/src/去除单层数组'
import { 取数组最后一个 } from '@lsby/ts_type_fun/src/取数组最后一个'
import { 后继数 } from '@lsby/ts_type_fun/src/后继数'
import { 基础类型等价判定 } from '@lsby/ts_type_fun/src/基础类型等价判定'
import { 字符串转数字 } from '@lsby/ts_type_fun/src/字符串转数字'
import { 数字转字符串 } from '@lsby/ts_type_fun/src/数字转字符串'
import { 递归替换层叠数组 } from '@lsby/ts_type_fun/src/递归替换层叠数组'

export interface Lambda项<泛型 extends string[], 实体 extends any[]> {
    泛型: 泛型
    实体: 实体
}

export type 规格化Lambda项<
    // 值 extends Lambda项<string[], any[]>,
    值,
    前缀 extends string,
    当前位置 extends number = 0,
> = 值 extends Lambda项<infer 泛型, infer 实体>
    ? 泛型['length'] extends 当前位置
        ? 值
        : 规格化Lambda项<Alpha变换<值, 泛型[当前位置], `${前缀}${当前位置}`>, 前缀, 字符串转数字<后继数<当前位置>>>
    : never

export type Alpha变换<
    // 值 extends Lambda项<string[], any[]>,
    值,
    旧名称 extends string,
    新名称 extends string,
    当前位置 extends number = 0,
> = 值 extends Lambda项<infer 泛型, infer 实体>
    ? 泛型['length'] extends 当前位置
        ? 值
        : 泛型[当前位置] extends 旧名称
        ? Lambda项<递归替换层叠数组<泛型, 旧名称, 新名称>, 递归替换层叠数组<实体, 旧名称, 新名称>>
        : Alpha变换<值, 旧名称, 新名称, 字符串转数字<后继数<数字转字符串<当前位置>>>>
    : never

export type Beta规约<
    // 被调用值 extends Lambda项<string[], any[]>,
    // 调用值 extends Lambda项<string[], any[]>,
    被调用值,
    调用值,
> = 被调用值 extends Lambda项<string[], any[]>
    ? 调用值 extends Lambda项<string[], any[]>
        ? 规格化Lambda项<被调用值, 'a_'> extends Lambda项<infer 泛型1, infer 实体1>
            ? 规格化Lambda项<调用值, 'b_'> extends Lambda项<infer 泛型2, infer 实体2>
                ? 泛型1 extends [infer 当前值, ...infer 余下]
                    ? 当前值 extends string
                        ? 余下 extends string[]
                            ? Lambda项<[...余下, ...泛型2], 递归替换层叠数组<实体1, 当前值, 去除单层数组<实体2>>>
                            : never
                        : never
                    : never
                : never
            : never
        : never
    : never

export type Eta变换<
    // 值 extends Lambda项<string[], any[]>,
    值,
> = 值 extends Lambda项<infer 泛型, infer 实体>
    ? 泛型 extends []
        ? 值
        : [取数组最后一个<泛型>, 取数组最后一个<实体>] extends [infer 最后泛型, infer 最后实体]
        ? 基础类型等价判定<最后泛型, 最后实体> extends true
            ? Eta变换<Lambda项<删除数组最后一个<泛型>, 删除数组最后一个<实体>>>
            : 值
        : 值
    : never

export type 转换为原生类型<
    // 值 extends Lambda项<string[], any[]>,
    值,
> = 值 extends Lambda项<infer 泛型, infer 实体>
    ? 泛型 extends []
        ? 实体 extends [infer a]
            ? a
            : never
        : never
    : never
