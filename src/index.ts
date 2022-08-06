import {
    Lambda1,
    Lambda2,
    Lambda3,
    Lambda项,
    Alpha变换,
    Beta规约,
    Eta变换,
    Lambda项转字符串,
} from './Lambda'
import { Lambda类型转换Ts类型, Lambda类型转中间类型 } from './LambdaToTs'
import { Ts类型到Lambda类型 } from './TsToLambda'

export {
    Lambda1,
    Lambda2,
    Lambda3,
    Lambda项,
    Alpha变换,
    Beta规约,
    Eta变换,
    Lambda项转字符串,
    Lambda类型转换Ts类型,
    Ts类型到Lambda类型,
}

function f<A extends Array<any>, B>(
    a: B,
    b: Lambda类型转换Ts类型<Lambda3<Ts类型到Lambda类型<A>, Ts类型到Lambda类型<B>>>,
) {}

f(1)
