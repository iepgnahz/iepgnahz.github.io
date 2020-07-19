---
layout: post
title: React Hook Intro
date: 2020-07-19 13:32:20 +0800
description: React Hook
img: react.png # Add image post (optional)
fig-caption: # Add figcaption (optional)
tags: [Holidays, Hawaii]
---

众所周知，react16.8推出了一非常amazing的feature `React Hook`。从此以后，使用function component代替class component的时代就要开始了! 但是到底什么是`react hook`呢？

## What is React Hook？

React Hook其实就是一个预先定义好的function，这个function可以在function component中使用，给原本功能单一的react function component增加更多的功能。
比如`useState hook`, 这就是react预先定义好的一个hook function，这个function可以在function component中使用，帮助function component创建state。

## What hooks does react have?

- Basic Hooks

下面是一些常用的react hooks。

  - useState
    在function component中创建state
  - useEffect
    在function component中添加一些有side effect的功能

- Additional Hooks
  - useContext
    在function component中使用某一个context中的data
  - useReducer
  - useCallback
  - useMemo
  - useRef
  - useImperativeHandle
  - useLayoutEffect
  - useDebugValue
  
- Customized Hooks
如果我们定义了很多组件，组件之间重复的stateful logic可以通过创建customized hook，将这些重复的内容提取出来。
  
  
  
## How to use basic hooks?

React Hook只是一些js的function，因此你可以像调用JS function的方式一样，使用react hook。但是请注意，这些Hook只能两个地方使用：
- react function component中
- react customized hook中
绝对不能在一般的js function中使用。

并且在function component中使用Hook的时候也需要注意：
`绝对不能在if、condition、loops、nested function中调用hook`，只能将hook放在function的top level，保证每次rerender的时候，所有hook的调用顺序都是一致的。
因为react允许你在一个function component调用多个hook，react会根据order将每一个hook需要使用的value存储起来（想象react将每一个hook对应的数据存储在一个数组中），下一次render就按照顺序直接使用这些提前存储好的value。
一旦你将某一个hook放在if中，那么可能下一次render这个if中的hook就不会被使用，那么hook的调用顺序就和之前不一样了，按照order存储的数据也不能正常返回了，因此这个规则十分重要，使用的时候切记。

那么关于每一个hook如何使用，我会在下面依次介绍：
 
### useState

`const [state, setState] = useState(initialState);` 

#### 参数

useState的参数只有一个参数，代表的是initialState。首次render的时候这个state的value就是initialState，但是initialState的参数类型分为两类：

- 数值类型

也就是value，可以直接赋值给state

- function

由于functional component在本质上其实是一个function，所以每次re-render其实就是就是重新运行function中的每一个语句。假设你写了这么一段代码：

```jsx
function TestComponent(props) {
  const initialState = someExpensiveComputation(props);
  const [state, setState] = useState(initialState);
  
  return ...
}
```

这就意味着每次re-render都需要重新运行someExpensiveComputation(props), 如果这个function非常的耗时，那么就会导致每次re-render都会浪费这些cpu，但事实上只有第一次的render需要调用这个function计算initialState。
因此提升performance，react允许你将一个`返回值是initialState的function`传入useState作为参数：

```jsx
function TestComponent(props) {
  const [state, setState] = useState(() => {
    const initialState = someExpensiveComputation(props);
    return initialState
  });
  
  return ...
}
```
这样这个someExpensiveComputation就只会在首次render的时候执行一遍，以后再也不会被执行，这样就可以提升performance。这中state被称为`Lazy initial state`

#### 返回值

这个函数的返回值是一个数组`[state, setState]`, 你可以利用数组结构的方式从中返回值中吸出你需要使用的元素，并且给它赋一个有意义的变量名。

- state

返回这个state最新的value

- setState

是一个函数，接收新的state作为参数

### useEffect

专门用来在function component中实现一些有side effect的feature

> side effects
> 在react中，类似于Data fetching, setting up a subscription, manually changing the DOM in React components都是常见的side effect。在hook出现之前，这些effect操作都不能在function component中出现，只会出现在class component的一些lifecycle function中，
> 比如`componentDidMount` `componentDidUpdate`等生命周期函数中。useEffect function就是可以在function component中使用的`componentDidMount、componentDidUpdate、componentWillUnmount`等生命周期函数。

 `useEffect(() => {})`
 
#### 作用
 
 useEffect作用是用来给React注册一个回调函数，告诉react这个函数应该在每次`DOM render（包括第一次render和每次update之后的render）`之后被调用。React将会记得这个function，并且在完成DOM
 的update之后调用这个回调函数。
 
 这个function看起来就好像是class component中的componentDidUpdate，但是事实上，它定义的effect的调用时机和componentDidUpdate有些不同。
 useEffect中的effect会在主线程完成此次绘制之后被调用，因此effect的工作不会block页面的绘制。这是
 
 我们通常会在function component中调用useEffect，因为这样可以正常的访问到state以及props。
 
#### 参数
 
 useEffect有两个参数：
 
 - 第一个参数：是一个回调函数也被称为`effect`，这个回调函数没有任何的参数。这个函数三个时刻被调用，但是这都是有条件的：
 
    - DOM第一次mount到页面上，也就是componentDidMount被调用的时刻
    - DOM每次update之后，也就是componentDidUpdate被调用的时刻
    
    这个回调函数还可以有返回值，返回值必须是一个函数我们称之为`cleanup function`（cleanup function没有任何参数），cleanup function函数会在下次render之前被调用。
    也就是react会在每次render之后执行effect, 但是会在下次执行这个effect之前clean up effect。
 - 第二个参数：这个参数的value有三种情况
 
   - 不存在：代表DOM每次update之后，第一个参数的函数都会被调用。useEffect变成了componentDidMount + componentDidUpdate
   - 空数组：代表只有DOM第一次render到页面上的时候，第一个参数的函数才会被调用。useEffect变成了componentDidMount
   - 数组中有元素：代表只有数组中的元素发生改变的时候第一个参数的函数才会被调用，所以数组中的元素只能是`state`或者`props`。 useEffect变成了componentDidMount + componentDidUpdate + componentShouldUpdate
 

#### 返回值
 
 这是一个执行类的函数，因此没有任何的返回值
 

#### Tips

- 使用多个useEffect区分不相关的逻辑

在我们使用生命周期函数的时候，为了在某一个生命周期阶段执行一些操作，会把这些完全不相关的操作写在用一个生命周期函数中。
比如我想要在componentDidMount的时候订阅一个event，发一个拿数据的请求，这是两件不相关的事情，我们可以通过调用两次`useEffect`将这两个事情分开定义。

- 合理使用useEffect提升component的performance

useEffect中定义的effect会在每次render之后调用，但是对于一些effect，我们可能并不期待它在每次render之后都发生。
比如：

```jsx
function componentDidUpdate(prevProps, prevState) {
    if(prevState.title !== this.state.title){
        document.title = this.state.title
    }
}
```
对于上面这个例子，只有title发生改变，才会update document。

因此我们需要合理的使用`useEffect`的第二个参数（数组）， 来控制render之后是否调用这个effect。

- effect只在第一次mount之后调用

设置useEffect的第二个参数为`[]`

- effect只在某一个state或者props发生改变后才调用

设置useEffect的第二个参数为`[aState/aProp]`，react会对比之前的state/props和现在的state/props, 如果出现任何改变那就run这个effect，否则跳过。

**注意**
数组中元素的对比采用的是浅对比，基本数据类型不用担心，但是对于object，useEffect只会对比object的id是否和之前的一样，不会对比其中的内容。也就是

```
const Test = () => {
    const [test,setTest] = useState({a:1, b:2})
    
    useEffect(() => {
        ...
    }, [test])

    return (
        <button onClick={() => {
            setTest({a:1, b:2}) //如果执行这个，每次click导致rerender之后，上面的effect都会被执行，因此创建了新的object，test的id变了
            
            test.a = Math.random(); //如果执行这个，每次
            setTest(test) // 每次click导致rerender之后，上面的effect都不会执行，因为test的id没变
        }}>click</button>
    )
}
```

因此如果你想要使用这种方式，减少effect的调用，那么就需要合理的定义state，调用多个useState，而不是将多个state整个成一个对象，只调用一次useState

- effect每次都执行

不给useEffect传入第二个参数

## How to use basic hooks?

### background

还记得为什么React团队要开发Hook？是为了解决三个痛点：
- wrapper hell
- giant component
- confusing classes

其中有一个是wrapper hell，还记得High order component导致的component tree变得层层嵌套的样子吗？
那么问题回到了为什么要使用High order component？ 为了组件之间代码的复用，组件之间可能存在一些重复的logic，但是这些logic有可能涉及prop或者state甚至还有生命周期函数，因此不能通过简单提取一个function实现复用，
必须依托于一个component，所以造成了现在这个情况。

好在Customized hooks的出现帮助我们完美解决了这种复用问题。

### What is custom Hook?

custom Hook是一个平平无奇的js function，但是需要以`use`作为function名前缀，在function内部可以使用其他的react hook。

定义custom Hook的时候，只需要简单的将function中需要的参数传入，将function需要返回的数据return了就可以了。
调用custom Hook的方式和调用其他hook的方式完全一致。

## How to use these additional Hooks?


### useContext

在某一个组件中，使用某一个context中的data。

当你定义了一个Context：

```js
const MyContext = createContext([defaultValue]);
```

你可以任意一组件中直接调用

```js
const data = useContext(MyContext)
```
这时候你会获取这个context中最新数据

那么最新数据从哪里获取呢？React会找到离当前组件最近的Context Provider
```
<MyContext.Provider value={value}>
```

并且将最新的value作为useContext的数值，返回给你。

如果React找不到任何MyContext Provider，它会直接将createContext时候的默认值传送回给你。

#### Tip

只要最近的Provider的value发生变化，就一定会触发调用`useContext`组件的rerender。
因此不用担心context数据发生变化时，不会像redux一样触发组件的rerender。

### 






