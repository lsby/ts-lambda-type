# ts_lambda_type

在类型等级上实现的 Lambda 演算

## Lambda 演算介绍

无类型的 Lambda 演算非常简单, 大概设定如下(不严谨):

### Lambda 项

一个 Lambda 项可能是如下的东西:

1. 一个标识符.
2. 形如`λx.t`, 其中 x 是标识符, t 是 Lambda 项.
3. 形如`t s`, 其中 t 和 s 都是 Lambda 项.

例如:

按照规则 1, `a`就是一个最简单的 Lambda 项.

按照规则 2, 对于形式`λx.t`, 令 x 为`a`, t 为`a`, 则`λa.a`是一个 Lambda 项.

按照规则 3, 对于形式`t s`, 令 t 为`a`, `s`为`b`, 则`a b`是一个 Lambda 项.

按照规则 2, 对于形式`λx.t`, 令 x 为`a`, t 为`a b`, 则`λa.a b`是 Lambda 项.

按照规则 2, 对于形式`λx.t`, 令 x 为`b`, t 为`λa.a b`, 则`λb.λa.a b`是 Lambda 项.

按照规则 3, 对于形式`t s`, 令 t 为`z`, s 为`λb.λa.a b`, 则`z (λb.λa.a b)`是 Lambda 项.

另外形如`λb.λa.a b`的 Lambda 项可以简写为`λb a.a b`.

### 转换

有三条规则来转换 Lambda 项:

1. α-变换

对于形如`λx.t`的 Lambda 项, 可以将`x`替换为其他标识符, 同时将`t`中的所有`x`同样替换.

例如, 对于`λa.a`, 可以简单的把`a`换成`b`, 得到`λb.b`.

但要注意一些边界, 例如`λx.(λx.x) x`, 将最外层的`x`替换成`y`时, 得到的是`λy.(λx.x) y`, 而不是`λy.(λy.y) y`.

再例如`λa.λb.a b`, 将最外层的`a`替换成`b`时, 会得到`λb.b b`, 但这两个`b`其实是不同的意思.

2. β-归约

对于形如`λv.e x`的 Lambda 项, 可以将`λv`删去, 同时将`e`中所有`v`换成`x`.

例如, 对于`(λa.a) b`, 进行 β-归约 后会得到`b`.

同样要注意一些边界, 例如`(λx.(λx.x) x) z`, 进行 β-归约 后会得到`λz.(λx.x) z`, 而不是`λz.(λz.z) z`.

再例如`(λa.λb.a b) b`不能进行 β-归约, 因为标识符 b 产生了歧义, 如果简单的代换, 会得到`λb.b b`, 但这两个`b`其实是不同的意思.

可以先将左边的`(λa.λb.a b)`通过 α-变换, 例如转换为`(λa.λc.a c)`, 然后再通过 β-归约 计算 `(λa.λc.a c) b`, 得到`λc.b c`.

3. η-变换

对于形如`λa.x a`的 Lambda 项, 进行 η-变换 后, 会得到`x`.

三条转换规则都是 Lambda 项上的`等价关系`.

若有 Lambda 项 x, 对 x 进行如上三种变换之一得到 y, 我们称 x 等于 y.

等价关系有如下性质:

- 自反性: 对于 Lambda 项 x, 都有 x 等于 x.
- 对称性: 对于 Lambda 项 x,y, 若 x 等于 y, 则一定有 y 等于 x.
- 传递性: 对于 Lambda 项 x,y,z, 若有 x 等于 y, y 等于 z, 则一定有 x 等于 z.

## Lambda 演算和编程的关系

Lambda 项的三种形式:

1. 一个标识符.
2. 形如`λx.t`, 其中 x 是标识符, t 是 Lambda 项.
3. 形如`t s`, 其中 t 和 s 都是 Lambda 项.

对应着编程中的三种形式:

1. 变量或值
2. 函数
3. 函数调用

例如, `λa.a`对应函数`a=>a`.

而`(λa.a) b`进行 β-归约 后得到`b`, 对应`(a=>a)(b)`得到`b`, 只是函数调用在编程中使用括号, 在 Lambda 演算中使用空格而已.

Lambda 演算是柯里化的, 例如`(λa.λb.a b)`对应函数`a=>b=>a(b)`.

Lambda 演算是高阶的, 可以使用函数调用函数, 例如`(λa.a b) (λc.c d)`, 进行 β-归约 后得到`(λc.c d) b`, 进而得到`b d`, 对应编程中的过程是`(a=>a(b))(c=>c(d))`得到`(c=>c(d))(b)`得到`b(d)`.

三种变换形式也有在编程中的对应:

1. α-变换 对应着修改函数的形参名称, 例如`λa.a`变换为`λb.b`, 对应`a=>a`变换为`b=>b`.

2. β-归约 对应着函数的实际调用.

3. η-变换 对应着函数的 Pointfree 写法, 例如`(λa.f a)`等价于`f`, 对应编程中`a=>f(a)`等价于`f`.

## typescript 在类型等级上的计算

通常我们的程序的操作对象是`值`, 函数就是把一个值转换为另一个值的计算, 这称为`值等级`上的计算.

引入类型系统后, 我们可以编写`类型等级`上的计算, 将一个类型转换为另一个类型.

比如:

```typescript
type F<A> = A
type a = F<string> // 类型 a 是 string
```

这是最简单的类型计算, 它接受一个类型, 返回同样的类型, 类比值等级上的函数`a=>a`.

当然还可以写出更多类型等级上的计算, 比如一个类型等级上的字符串拼接函数:

```typescript
type AddString<A extends string, B extends string> = `${A}${B}`
type testType = AddString<'aaa', 'bbb'> // 类型 testType 是 'aaabbb'
var testVal: testType = 'aaabbb' // 变量 testVal 的值只能为 'aaabbb'
```

类比的值等级上的写法是:

```typescript
var AddString = (a) => (b) => `${A}${B}`
var testVal = AddString('aaa', 'bbb') // 变量 testVal 的值为 'aaabbb'
```

类型等级在值等级之上, 可以通过类型约束值, 进而实现更严格的类型约束.

typescript 提供了强大的类型计算能力, 可以实现很多计算, 但 typescript 在类型等级上的计算还不是高阶的.

在值等级上, 我们可以把函数作为参数传给函数, 例如:

```typescript
var f = (a) => a
var g = (a) => a('1')
var x = g(f) // 变量 x 的值是 '1'
```

但在类型等级上, **不能**这样做:

```typescript
type F<A> = A
type G<A> = A<number> // 报错: A 不是泛型类型
type X = G<F>
```

这是一个由来已久的需求, 但官方一直没有实现.

作为替代方案, 我写了这个库, 允许你在类型等级上进行 Lambda 演算, 并提供了方便的转换.

使用了[这个库](https://github.com/desi-ivanov/ts-lambda-calc)的 λ 演算实现.

当你需要高阶类型时, 用 Lambda 项替代 typescript 的内置类型, 当实际计算时, 再将 Lambda 项转换为 typescript 的内置类型.

例如:

```typescript
type F = 'λa.a'
type G = 调用<F, 'Number'>
type X = λ转ts<G> // number
```

## 用法

先安装:

```bash
npm i @lsby/ts_lambda_type
```

然后引入:

```typescript
import { 函数, ts转λ, λ转ts, 取参数1, 取参数2, 取构造子, 调用 } from '@lsby/ts_lambda_type'
```

### ts 转 λ

```typescript
type X01 = ts转λ<number> // 'Number'
type X02 = ts转λ<Array<number>> // '(Array Number)'
type X03 = ts转λ<(a: number) => Record<string, Array<number>>> // '(Function Number (Record String (Array Number)))'
```

### λ 转 ts

```typescript
type X04 = λ转ts<'Number'> // number
type X05 = λ转ts<'Array Number'> // number[]
type X06 = λ转ts<'Function Number (Record String (Array Number))'> // (a: number) => Record<string, number[]>
```

另外提供一个方便的写函数的封装:

```typescript
type X07 = λ转ts<函数<['Number', 'String', 'Number']>> // (a: number) => (a: string) => number
```

### 取构造子

```typescript
type X08 = 取构造子<number> // 'Number'
type X09 = 取构造子<Array<number>> // 'Array'
type X10 = 取构造子<(a: number) => Array<number>> // 'Function'
```

### 取参数

```typescript
type X11 = 取参数1<Array<number>> // number
type X12 = 取参数1<(a: number) => Array<number>> // number
type X13 = 取参数2<(a: number) => Array<Record<string, number>>> // Record<string, number>[]
```

### 自定义类型

库内置了以下类型:

- `number`
- `string`
- `boolean`
- `Array<A1>`
- `Record<A1, A2>`
- `Function<A1, A2>`

若要处理自己创建的类型, 则需要先扩充接口.

```typescript
type Effect<A> = () => A

declare module '@lsby/ts_lambda_type' {
  interface 一阶类型<A1> {
    Effect: Effect<A1>
  }
}

type X14 = λ转ts<'Effect Number'> // () => number
```

### 类型计算

你可以通过编写 λ 表达式定义自己的抽象类型.

```typescript
type X15 = λ转ts<'(λx.Array x) Number'> // number[]
```

```typescript
type F1<A extends string> = λ转ts<`(λx.Array x) ${A}`>
type X16 = F1<'Number'> // number[]
```

这个写法不太方便, 所以封装了`调用`操作:

```typescript
type F2<A extends string> = λ转ts<调用<'λx.Array x', A>>
type X17 = F2<'Number'> // number[]
```

## 实例

有了这些工具, 就可以方便的编写复杂的类型计算了, 比如实现一个`map`:

```typescript
function map<A, B, FA, F = 取构造子<FA>>(f: (a: A) => B, x: FA): λ转ts<调用<F, ts转λ<B>>> {
  return 1 as any
}

var x: string[] = map((a: number) => a.toString(), [1, 2, 3])
```

## 引用

- https://github.com/desi-ivanov/ts-lambda-calc
