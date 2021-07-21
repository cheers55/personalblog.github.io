# 🌈 双飞翼布局

## 1、现有3个div，要求左、右固定，中间自适应

- 我们可以利用**浮动**的方法很容易就实现了。代码如下：

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>双飞翼布局</title>
    <style>
      * {
        padding: 0;
        margin: 0;
      }
      div {
        height: 150px;
        color: #fff;
        font-size: 50px;
      }
      .left {
        float: left;
        width: 200px;
        background-color: orange;
      }
      .right {
        float: right;
        width: 200px;
        background-color: pink;
      }
      .middle {
        background-color: green;
      }
    </style>
  </head>
  <body>
    <div class="left">左</div>
    <div class="right">右</div>
    <div class="middle">中</div>
  </body>
</html>
```

效果如下图：

![](/double_fly_01.png)

## 2、现变更需求，中间的位置最重要，要求最先加载。这时，如果把中间的div放到第一个，如下图：

![](/double_fly_02.png)

- 怎么才能让**中间的div**最先加载但还是可以保证**左右固定**，中间自适应的需求呢？我们需要做如下思考：

1、我们需要把**左、中、右3个div**放到同一水平线。这时最好的方法就是给**中间的div加浮动**解决，加浮动后为保证宽度自适应，需要再加**width为百分之百**全部撑开；

2、**左边的块**如何处理。我们可以**margin-left设置为负百分之百**。

3、**右边的块**如何处理。我们可以把**右浮动改为左浮动，margin-left设置为负200px**

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>双飞翼布局</title>
    <style>
      * {
        padding: 0;
        margin: 0;
      }
      div {
        height: 150px;
        color: #fff;
        font-size: 50px;
      }
      .left {
        margin-left: -100%;
        float: left;
        width: 200px;
        background-color: orange;
      }
      .right {
        float: left;
        margin-left: -200px;
        width: 200px;
        background-color: pink;
      }
      .middle {
        float: left;
        width: 100%;
        background-color: green;
      }
    </style>
  </head>
  <body>
    <div class="middle">中</div>
    <div class="left">左</div>
    <div class="right">右</div>
  </body>
</html>
```

这时效果如下图： 

![](/double_fly_03.png)

- 仔细看图你会发现上图中的**中**字不见了，仔细分析后我们不难发现，其实是**左边的div**覆盖在**中间的div**上边了，怎么解决呢？

1、我们可以在**中间的div**中再嵌套一层div；

2、利用`margin`不占用实际盒子大小的特性实现；

具体代码如下：

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>双飞翼布局</title>
    <style>
      * {
        padding: 0;
        margin: 0;
      }
      div {
        height: 150px;
        color: #fff;
        font-size: 50px;
      }
      .left {
        margin-left: -100%;
        float: left;
        width: 200px;
        background-color: orange;
      }
      .right {
        float: left;
        margin-left: -200px;
        width: 200px;
        background-color: pink;
      }
      .middle {
        float: left;
        width: 100%;
        background-color: green;
      }
      .middle-cont {
        margin: 0 200px;
      }
    </style>
  </head>
  <body>
    <div class="middle">
      <div class="middle-cont">
        中
      </div>
    </div>
    <div class="left">左</div>
    <div class="right">右</div>
  </body>
</html>
```

效果图如下： 

![](/double_fly_04.png)

以上双飞翼布局已经实现完毕了。

## 3、如果我们此时在左边的div中加入其它的内容，左、中、右的高度不写死，左边内容变化的时候，他们的高度还能统一吗？

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>双飞翼布局</title>
    <style>
      * {
        padding: 0;
        margin: 0;
      }
      div {
        color: #fff;
        font-size: 50px;
      }
      .left {
        margin-left: -100%;
        float: left;
        width: 200px;
        background-color: orange;
      }
      .right {
        float: left;
        margin-left: -200px;
        width: 200px;
        background-color: pink;
      }
      .middle {
        float: left;
        width: 100%;
        background-color: green;
      }
      .middle-cont {
        margin: 0 200px;
      }
    </style>
  </head>
  <body>
    <div class="middle">
      <div class="middle-cont">
        中
      </div>
    </div>
    <div class="left">左
        <p>新内容</p>
    </div>
    <div class="right">右</div>
  </body>
</html>
```

效果图如下： 

![](/double_fly_05.png)

- 很明显此时他们的高度不统一，怎么解决了，直接上代码。

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>双飞翼布局</title>
    <style>
      * {
        padding: 0;
        margin: 0;
      }
      div {
        color: #fff;
        font-size: 50px;
      }
      .left {
        margin-left: -100%;
        float: left;
        width: 200px;
        background-color: orange;
      }
      .right {
        float: left;
        margin-left: -200px;
        width: 200px;
        background-color: pink;
      }
      .middle {
        float: left;
        width: 100%;
        background-color: green;
      }
      .middle-cont {
        margin: 0 200px;
      }
      .left,
      .middle,
      .right {
        padding-bottom: 9999px;
        margin-bottom: -9999px;
      }
      .box {
          overflow: hidden;
      }
    </style>
  </head>
  <body>
    <div class="box">
      <div class="middle">
        <div class="middle-cont">
          中
        </div>
      </div>
      <div class="left">
        左
        <p>新内容</p>
      </div>
      <div class="right">右</div>
    </div>
  </body>
</html>
```

效果如下：

![](/double_fly_06.png)

- 此时不管你左边的内容再添加多少，**左、中、右**3个div的高度都会自适应增加。以上方法全部为`css2`的处理方式，如果用`css3`怎么处理呢？

## 4、用css3实现左右固定，中间自适应（拓展）

我们可以使用`flex`布局来实现**双飞翼布局**。不懂`flex`相关技术的可以阅读我另外一篇文章[Flex布局](./flex)。代码如下：

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>双飞翼布局</title>
    <style>
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }
      div {
        color: #fff;
        font-size: 50px;
      }
      .left {
        width: 200px;
        background-color: orange;
        order: 1;
      }
      .right {
        width: 200px;
        background-color: pink;
        order: 3;
      }
      .middle {
        flex: 1;
        background-color: green;
        order: 2;
      }
      .box {
        display: flex;
      }
    </style>
  </head>
  <body>
    <div class="box">
      <div class="middle">
        中
      </div>
      <div class="left">
        左
        <p>新内容</p>
      </div>
      <div class="right">右</div>
    </div>
  </body>
</html>
```

效果如下：

![](/double_fly_06.png)
