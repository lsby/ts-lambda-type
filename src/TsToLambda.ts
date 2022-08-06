import { Lambda1, Lambda2, Lambda3, Lambda项 } from './Lambda'
import { 联合转元组 } from './lib/联合转元组'
import {
    一阶类型枚举,
    二阶类型枚举,
    三阶类型枚举,
    四阶类型枚举,
    五阶类型枚举,
    六阶类型枚举,
    七阶类型枚举,
    八阶类型枚举,
    九阶类型枚举,
} from './TypeEnum'

type _查找一阶类型<A, arr> = arr extends []
    ? unknown
    : arr extends [infer a, ...infer as]
    ? a extends keyof 一阶类型枚举
        ? A extends 一阶类型枚举[a]
            ? Lambda1<a>
            : _查找一阶类型<A, as>
        : unknown
    : unknown
type 查找一阶类型<A> = _查找一阶类型<A, 联合转元组<keyof 一阶类型枚举>>

type _查找二阶类型<A, arr> = arr extends []
    ? unknown
    : arr extends [infer a, ...infer as]
    ? a extends keyof 二阶类型枚举<any>
        ? A extends 二阶类型枚举<any>[a]
            ? Lambda2<'A1', Lambda3<Lambda1<a>, Lambda1<'A1'>>>
            : _查找二阶类型<A, as>
        : unknown
    : unknown
type 查找二阶类型<A> = _查找二阶类型<A, 联合转元组<keyof 二阶类型枚举<any>>>

type _查找三阶类型<A, arr> = arr extends []
    ? unknown
    : arr extends [infer a, ...infer as]
    ? a extends keyof 三阶类型枚举<any, any>
        ? A extends 三阶类型枚举<any, any>[a]
            ? Lambda2<
                  'A1',
                  Lambda2<'A2', Lambda3<Lambda3<Lambda1<a>, Lambda1<'A1'>>, Lambda1<'A2'>>>
              >
            : _查找三阶类型<A, as>
        : unknown
    : unknown
type 查找三阶类型<A> = _查找三阶类型<A, 联合转元组<keyof 三阶类型枚举<any, any>>>

type _查找四阶类型<A, arr> = arr extends []
    ? unknown
    : arr extends [infer a, ...infer as]
    ? a extends keyof 四阶类型枚举<any, any, any>
        ? A extends 四阶类型枚举<any, any, any>[a]
            ? Lambda2<
                  'A1',
                  Lambda2<
                      'A2',
                      Lambda2<
                          'A3',
                          Lambda3<
                              Lambda3<Lambda3<Lambda1<a>, Lambda1<'A1'>>, Lambda1<'A2'>>,
                              Lambda1<'A3'>
                          >
                      >
                  >
              >
            : _查找四阶类型<A, as>
        : unknown
    : unknown
type 查找四阶类型<A> = _查找四阶类型<A, 联合转元组<keyof 四阶类型枚举<any, any, any>>>

type _查找五阶类型<A, arr> = arr extends []
    ? unknown
    : arr extends [infer a, ...infer as]
    ? a extends keyof 五阶类型枚举<any, any, any, any>
        ? A extends 五阶类型枚举<any, any, any, any>[a]
            ? Lambda2<
                  'A1',
                  Lambda2<
                      'A2',
                      Lambda2<
                          'A3',
                          Lambda2<
                              'A4',
                              Lambda3<
                                  Lambda3<
                                      Lambda3<Lambda3<Lambda1<a>, Lambda1<'A1'>>, Lambda1<'A2'>>,
                                      Lambda1<'A3'>
                                  >,
                                  Lambda1<'A4'>
                              >
                          >
                      >
                  >
              >
            : _查找五阶类型<A, as>
        : unknown
    : unknown
type 查找五阶类型<A> = _查找五阶类型<A, 联合转元组<keyof 五阶类型枚举<any, any, any, any>>>

type _查找六阶类型<A, arr> = arr extends []
    ? unknown
    : arr extends [infer a, ...infer as]
    ? a extends keyof 六阶类型枚举<any, any, any, any, any>
        ? A extends 六阶类型枚举<any, any, any, any, any>[a]
            ? Lambda2<
                  'A1',
                  Lambda2<
                      'A2',
                      Lambda2<
                          'A3',
                          Lambda2<
                              'A4',
                              Lambda2<
                                  'A5',
                                  Lambda3<
                                      Lambda3<
                                          Lambda3<
                                              Lambda3<
                                                  Lambda3<Lambda1<a>, Lambda1<'A1'>>,
                                                  Lambda1<'A2'>
                                              >,
                                              Lambda1<'A3'>
                                          >,
                                          Lambda1<'A4'>
                                      >,
                                      Lambda1<'A5'>
                                  >
                              >
                          >
                      >
                  >
              >
            : _查找六阶类型<A, as>
        : unknown
    : unknown
type 查找六阶类型<A> = _查找六阶类型<A, 联合转元组<keyof 六阶类型枚举<any, any, any, any, any>>>

type _查找七阶类型<A, arr> = arr extends []
    ? unknown
    : arr extends [infer a, ...infer as]
    ? a extends keyof 七阶类型枚举<any, any, any, any, any, any>
        ? A extends 七阶类型枚举<any, any, any, any, any, any>[a]
            ? Lambda2<
                  'A1',
                  Lambda2<
                      'A2',
                      Lambda2<
                          'A3',
                          Lambda2<
                              'A4',
                              Lambda2<
                                  'A5',
                                  Lambda2<
                                      'A6',
                                      Lambda3<
                                          Lambda3<
                                              Lambda3<
                                                  Lambda3<
                                                      Lambda3<
                                                          Lambda3<Lambda1<a>, Lambda1<'A1'>>,
                                                          Lambda1<'A2'>
                                                      >,
                                                      Lambda1<'A3'>
                                                  >,
                                                  Lambda1<'A4'>
                                              >,
                                              Lambda1<'A5'>
                                          >,
                                          Lambda1<'A6'>
                                      >
                                  >
                              >
                          >
                      >
                  >
              >
            : _查找七阶类型<A, as>
        : unknown
    : unknown
type 查找七阶类型<A> = _查找七阶类型<
    A,
    联合转元组<keyof 七阶类型枚举<any, any, any, any, any, any>>
>

type _查找八阶类型<A, arr> = arr extends []
    ? unknown
    : arr extends [infer a, ...infer as]
    ? a extends keyof 八阶类型枚举<any, any, any, any, any, any, any>
        ? A extends 八阶类型枚举<any, any, any, any, any, any, any>[a]
            ? Lambda2<
                  'A1',
                  Lambda2<
                      'A2',
                      Lambda2<
                          'A3',
                          Lambda2<
                              'A4',
                              Lambda2<
                                  'A5',
                                  Lambda2<
                                      'A6',
                                      Lambda2<
                                          'A7',
                                          Lambda3<
                                              Lambda3<
                                                  Lambda3<
                                                      Lambda3<
                                                          Lambda3<
                                                              Lambda3<
                                                                  Lambda3<
                                                                      Lambda1<a>,
                                                                      Lambda1<'A1'>
                                                                  >,
                                                                  Lambda1<'A2'>
                                                              >,
                                                              Lambda1<'A3'>
                                                          >,
                                                          Lambda1<'A4'>
                                                      >,
                                                      Lambda1<'A5'>
                                                  >,
                                                  Lambda1<'A6'>
                                              >,
                                              Lambda1<'A7'>
                                          >
                                      >
                                  >
                              >
                          >
                      >
                  >
              >
            : _查找八阶类型<A, as>
        : unknown
    : unknown
type 查找八阶类型<A> = _查找八阶类型<
    A,
    联合转元组<keyof 八阶类型枚举<any, any, any, any, any, any, any>>
>

type _查找九阶类型<A, arr> = arr extends []
    ? unknown
    : arr extends [infer a, ...infer as]
    ? a extends keyof 九阶类型枚举<any, any, any, any, any, any, any, any>
        ? A extends 九阶类型枚举<any, any, any, any, any, any, any, any>[a]
            ? Lambda2<
                  'A1',
                  Lambda2<
                      'A2',
                      Lambda2<
                          'A3',
                          Lambda2<
                              'A4',
                              Lambda2<
                                  'A5',
                                  Lambda2<
                                      'A6',
                                      Lambda2<
                                          'A7',
                                          Lambda2<
                                              'A8',
                                              Lambda3<
                                                  Lambda3<
                                                      Lambda3<
                                                          Lambda3<
                                                              Lambda3<
                                                                  Lambda3<
                                                                      Lambda3<
                                                                          Lambda3<
                                                                              Lambda1<a>,
                                                                              Lambda1<'A1'>
                                                                          >,
                                                                          Lambda1<'A2'>
                                                                      >,
                                                                      Lambda1<'A3'>
                                                                  >,
                                                                  Lambda1<'A4'>
                                                              >,
                                                              Lambda1<'A5'>
                                                          >,
                                                          Lambda1<'A6'>
                                                      >,
                                                      Lambda1<'A7'>
                                                  >,
                                                  Lambda1<'A8'>
                                              >
                                          >
                                      >
                                  >
                              >
                          >
                      >
                  >
              >
            : _查找九阶类型<A, as>
        : unknown
    : unknown
type 查找九阶类型<A> = _查找九阶类型<
    A,
    联合转元组<keyof 九阶类型枚举<any, any, any, any, any, any, any, any>>
>

export type Ts类型到Lambda类型<A> = 查找一阶类型<A> extends Lambda项
    ? 查找一阶类型<A>
    : 查找二阶类型<A> extends Lambda项
    ? 查找二阶类型<A>
    : 查找三阶类型<A> extends Lambda项
    ? 查找三阶类型<A>
    : 查找四阶类型<A> extends Lambda项
    ? 查找四阶类型<A>
    : 查找五阶类型<A> extends Lambda项
    ? 查找五阶类型<A>
    : 查找六阶类型<A> extends Lambda项
    ? 查找六阶类型<A>
    : 查找七阶类型<A> extends Lambda项
    ? 查找七阶类型<A>
    : 查找八阶类型<A> extends Lambda项
    ? 查找八阶类型<A>
    : 查找九阶类型<A> extends Lambda项
    ? 查找九阶类型<A>
    : never
