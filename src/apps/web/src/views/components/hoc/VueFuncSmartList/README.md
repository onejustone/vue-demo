# 函数式组件

函数式组件是无状态 (没有响应式数据)，无实例 (没有 this 上下文)的。 在作为包装组件时它们非常有用，比如，当你需要做这些时：

* 程序化地在多个组件中选择一个
* 在将 children, props, data 传递给子组件之前操作它们