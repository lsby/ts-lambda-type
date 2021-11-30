import { Alpha变换, Beta规约, Eta变换, Lambda项, 规格化Lambda项, 转换为原生类型 } from '../src/index'

var 测试_规格化Lambda项_01: 规格化Lambda项<Lambda项<['a'], ['Maybe', 'a']>, 'a_'> = {
    泛型: ['a_0'],
    实体: ['Maybe', 'a_0'],
}
var 测试_规格化Lambda项_02: 规格化Lambda项<Lambda项<['a', 'b'], ['Maybe', 'a']>, 'a_'> = {
    泛型: ['a_0', 'a_1'],
    实体: ['Maybe', 'a_0'],
}
var 测试_规格化Lambda项_03: 规格化Lambda项<Lambda项<['a', 'b'], ['Either', 'a', 'b']>, 'a_'> = {
    泛型: ['a_0', 'a_1'],
    实体: ['Either', 'a_0', 'a_1'],
}
var 测试_规格化Lambda项_04: 规格化Lambda项<Lambda项<[], ['Either', 'a', 'b']>, 'a_'> = {
    泛型: [],
    实体: ['Either', 'a', 'b'],
}
var 测试_规格化Lambda项_05: 规格化Lambda项<Lambda项<['a'], ['Maybe', 'a']>, 'a_'> = {
    泛型: ['a_0'],
    实体: ['Maybe', 'a_0'],
}
var 测试_规格化Lambda项_06: 规格化Lambda项<Lambda项<['a', 'b'], ['Either', 'a', 'b']>, 'a_'> = {
    泛型: ['a_0', 'a_1'],
    实体: ['Either', 'a_0', 'a_1'],
}

var 测试_Alpha变换_01: Alpha变换<Lambda项<['a', 'b'], ['Either', 'a', 'b']>, 'a', 'c'> = {
    泛型: ['c', 'b'],
    实体: ['Either', 'c', 'b'],
}
var 测试_Alpha变换_02: Alpha变换<Lambda项<[], ['Maybe', 'a']>, 'a', 'c'> = {
    泛型: [],
    实体: ['Maybe', 'a'],
}
var 测试_Alpha变换_03: Alpha变换<Lambda项<['a'], ['Maybe', 'a']>, 'a', 'c'> = {
    泛型: ['c'],
    实体: ['Maybe', 'c'],
}
var 测试_Alpha变换_04: Alpha变换<Lambda项<['a', 'b'], ['Either', 'a', 'b']>, 'a', 'c'> = {
    泛型: ['c', 'b'],
    实体: ['Either', 'c', 'b'],
}

var 测试_Beta规约_01: Beta规约<Lambda项<['a'], ['Maybe', 'a']>, Lambda项<[], ['String']>> = {
    泛型: [],
    实体: ['Maybe', 'String'],
}
var 测试_Beta规约_02: Beta规约<Lambda项<['a', 'b'], ['Either', 'a', 'b']>, Lambda项<[], ['String']>> = {
    泛型: ['a_1'],
    实体: ['Either', 'String', 'a_1'],
}
var 测试_Beta规约_03: Beta规约<Lambda项<['a'], ['Maybe', 'a']>, Lambda项<['a'], ['Effect', 'a']>> = {
    泛型: ['b_0'],
    实体: ['Maybe', ['Effect', 'b_0']],
}
var 测试_Beta规约_04: Beta规约<Lambda项<['a'], ['Maybe', 'a']>, Lambda项<['a', 'b'], ['Either', 'a', 'b']>> = {
    泛型: ['b_0', 'b_1'],
    实体: ['Maybe', ['Either', 'b_0', 'b_1']],
}
var 测试_Beta规约_05: Beta规约<Lambda项<['a'], ['a']>, Lambda项<[], ['b']>> = {
    泛型: [],
    实体: ['b'],
}

var 测试_Eta变换_01: Eta变换<Lambda项<['a'], ['Maybe', 'a']>> = {
    泛型: [],
    实体: ['Maybe'],
}
var 测试_Eta变换_02: Eta变换<Lambda项<['a', 'b'], ['Either', 'a', 'b']>> = {
    泛型: [],
    实体: ['Either'],
}
var 测试_Eta变换_03: Eta变换<Lambda项<['a', 'b'], ['Maybe', ['a', 'b']]>> = {
    泛型: ['a', 'b'],
    实体: ['Maybe', ['a', 'b']],
}
var 测试_Eta变换_04: Eta变换<Lambda项<['a', 'b'], ['Either', 'a', 'b']>> = {
    泛型: [],
    实体: ['Either'],
}
var 测试_Eta变换_05: Eta变换<Lambda项<[], ['Either', 'a', 'b']>> = {
    泛型: [],
    实体: ['Either', 'a', 'b'],
}

type F = Lambda项<['a'], ['a']>
type G<A> = Beta规约<A, Lambda项<[], ['1']>>
type x = 转换为原生类型<G<F>>
var 测试_转换为原生类型_01: x = '1'
