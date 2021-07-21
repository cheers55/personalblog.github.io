# 🌈 v-show 与 v-if 的区别

## 1. v-show

不管初始的条件是什么，元素总是会被渲染，并且只是简单的基于 CSS `display: none` 或者 `display: block` 的属性进行切换。

## 2. v-if

会根据初始的条件（data里自己的定义的数据）来进行真正的渲染（组件真正的销毁和重建），如果条件为**真**，才会开始渲染条件块，如果条件为**假**，则不会渲染条件块。

> **注意：** `v-if`不要和`v-for`一起使用！
>> 当和 `v-for` 一起使用时，`v-for` 的优先级比 `v-if` 更高，详见 [vue官网关于 v-for 的详细描述](https://vuejs.bootcss.com/api/#v-for) ，为什么不能一起使用，以下我用代码来解释一下。

```
<ul>
  <li
      v-for = "(item, index) in list"
      v-if = "isActive"
      :key = "item.id"
  >
    {{ item.name }}
  </li>
</ul>
```

以上代码将会经过如下运算

```
this.list.map( user=> {
  if (isActive) {
    return user.name
  }
})
```

因此，哪怕我们只渲染一小部分元素，也得在每次重新渲染的时候遍历整个列表，不论 `isActive` 是否发生了变化。如果 `list` 的数据有很多，就会造成性能低，页面可能卡顿的现象出现。

## 总结

`v-show` 适合于需要频繁切换条件的场景。`v-if` 适合于不需要频繁切换条件的场景。
    
<!-- - 这里可能有人会问，哪一个性能更高？ -->