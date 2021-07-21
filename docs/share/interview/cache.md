# 🌈 浏览器的缓存机制

## 1. 概述

就是我们所说的`Http`缓存机制，其机制是根据`Http`报文的缓存标识进行的，所以在分析浏览器缓存机制之前，我们先使用图文简单介绍一下`Http报文`。

> 这里会衍生出其中一个知识点，[Http报文](http_message)

## 2. Http缓存过程分为强制缓存、协商缓存两部分

### 2.1 强制缓存

**强制缓存就是向浏览器缓存查找该请求结果，并根据该结果的缓存规则来决定是否使用该缓存结果的过程**，强制缓存的情况主要有三种：

1. 不存在该缓存结果和缓存标识，强制缓存失效，则直接向服务器发起请求

![](https://www.mwcxs.top/static/upload/pics/2019/1/30ThRw5TMP5GXcIzFUhJCiYVG-.png)

2. 存在该缓存结果和缓存标识，但是结果已经失效，强制缓存失效，则使用协商缓存

![](https://www.mwcxs.top/static/upload/pics/2019/1/30Bd_Ct_JmCV4IGWgVwrwonHCh.png)

3. 存在该缓存结果和缓存标识，且该结果没有还没有失效，强制缓存生效，直接返回该结果

![](https://www.mwcxs.top/static/upload/pics/2019/1/30WBGAfz4BMLy-ZaljsVGF0Z9z.png)

总结：当浏览器向服务器发送请求的时候，服务器会将缓存规则放入HTTP响应的报文的HTTP头中和请求结果一起返回给浏览器，控制强制缓存的字段分别是`Expires`和`Cache-Control`，**其中`Cache-Conctrol`的优先级比`Expires`高**。

#### 2.1.1 过期时间（Expires）

`Expires`是`HTTP/1.0`控制网页缓存的字段，其值为服务器返回该请求结果缓存的到期时间，即再次发送请求时，如果客户端的时间小于`Expires`的值时，直接使用缓存结果。

到了`HTTP/1.1`，`Expires`已经被`Cache-Control`替代，原因在于`Expires`控制缓存的原理是使用客户端的时间与服务端返回的时间做对比，如果客户端与服务端的时间由于某些原因（时区不同；客户端和服务端有一方的时间不准确）发生误差，那么强制缓存直接失效，则强制缓存存在就毫无意义了。

#### 2.1.2 过期时间（Cache-Control）

在`HTTP/1.1`中，`Cache-Control`是最重要的规则，主要用于控制网页缓存，主要取值为：

1. **private（默认值）**：所有内容只有客户端可以缓存；
2. **public**：所有内容都将被缓存（客户端和代理服务器都可缓存）；
3. **no-cache**：客户端缓存内容，但是是否使用缓存则需要经过协商缓存来验证决定；
4. **no-store**：所有内容都不会被缓存，即不使用强制缓存，也不使用协商缓存；
5. **max-age**：缓存内容将在xxx秒后失效；

![](https://www.mwcxs.top/static/upload/pics/2019/1/30sQ8AGKjjQJY8Iqs6HsrOdc8-.png)

由上图内容我们可以知道：

由于`Cache-Control`的优先级比`Expires`高，那么直接根据`Cache-Control`的值进行缓存，意思就是说在600秒内再次发起该请求，则会直接使用缓存结果，强制缓存生效。

- 在无法确定客户端的时间是否与服务端的时间同步的情况下，`Cache-Control`相比于`Expires`是更好的选择，如果同时存在时，`只有Cache-Control`生效。

> 这里拓展一些其他额外的知识点：内存缓存和硬盘缓存。
>> 内存缓存具有快速读取（编译解析后的部分文件直接进入该进程的内存中，以便下次运行使用时快速读取）、时效性（一旦进程关闭，该进程的内存就会清空）。
>>> 硬盘缓存则是直接将缓存写入硬盘文件中，读取缓存需要对该缓存存放在硬盘文件进行I/O操作，然后重新解析该缓存内容，读取复杂，速度比内存慢。
>>>> 在浏览器中，js、图片等一般直接存在内存中，css文件则会存入硬盘文件中。

### 2.2 协商缓存

协商缓存就是强制缓存失效后，浏览器携带缓存标识向服务器发起请求，由服务器根据缓存标识决定是否使用缓存的过程

1. 协商缓存生效，返回304

![](https://www.mwcxs.top/static/upload/pics/2019/1/30OK3o7ZD3zsTVJVE0qwrTs_97.png)

2. 协商缓存失败，返回200和请求结果

![](https://www.mwcxs.top/static/upload/pics/2019/1/30iC1c-X0hWv-XnBhG0MyFpesx.png)

同样，协商缓存的标识也是在响应报文的HTTP头中和请求结果一起返回给浏览器的，控制协商缓存的字段分别有：`Last-Modified、If-Modified-Since`和`Etag、If-None-Match`，其中`Etag、If-None-Match`的优先级比`Last-Modified、If-Modified-Since`高。

#### 2.2.1 Last-Modified 和 If-Modified-Since

1. `Last-Modified`是服务器响应请求时，返回该资源文件在服务器最后被修改的时间

![](https://www.mwcxs.top/static/upload/pics/2019/1/30LUFHzlQVhb4k3px9xOwMLCdg.png)

2. `If-Modified-Since`则是客户端再次发起该请求时，携带上次请求返回的`Last-Modified`值，通过此字段值告诉服务器该资源上次请求返回的最后被修改时间。服务器收到该请求，发现请求头含有`If-Modified-Since`字段，则会根据`If-Modified-Since`的字段值与该资源在服务器的最后被修改时间做对比，若服务器的资源最后被修改时间大于`If-Modified-Since`的字段值，则重新返回资源，状态码为`200`；否则则返回`304`，代表资源无更新，可继续使用缓存文件。

![](https://www.mwcxs.top/static/upload/pics/2019/1/30iQQok5pF5Nw6JbJ691bLckqf.png)

#### 2.2.2 Etag 和 If-None-Match

1. `Etag`是服务器响应请求时，返回当前资源文件的一个唯一标识(由服务器生成)

![](https://www.mwcxs.top/static/upload/pics/2019/1/30VcTixbjlVzDUcPoKjM30OkCD.png)

2. `If-None-Match`是客户端再次发起该请求时，携带上次请求返回的唯一标识`Etag`值，通过此字段值告诉服务器该资源上次请求返回的唯一标识值。服务器收到该请求后，发现该请求头中含有`If-None-Match`，则会根据`If-None-Match`的字段值与该资源在服务器的`Etag`值做对比，一致则返回`304`，代表资源无更新，继续使用缓存文件；不一致则重新返回资源文件，状态码为`200`。

- `Etag、If-None-Match`优先级高于`Last-Modified、If-Modified-Since`，同时存在则只有`Etag、If-None-Match`生效。

## 总结

强制缓存优先于协商缓存进行，若强制缓存(Expires和Cache-Control)生效则直接使用缓存，若不生效则进行协商缓存(Last-Modified / If-Modified-Since和Etag / If-None-Match)，协商缓存由服务器决定是否使用缓存，若协商缓存失效，那么代表该请求的缓存失效，重新获取请求结果，再存入浏览器缓存中；生效则返回304，继续使用缓存，主要过程如下：

![](https://www.mwcxs.top/static/upload/pics/2019/1/30SX0D2hqApuJ7Z44y609Z3RKp.png)

- 以上部分资料参考[彻底理解浏览器的缓存机制（http缓存机制）](https://blog.csdn.net/saucxs/article/details/87625767)