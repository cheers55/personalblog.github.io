# 🌈 Http报文

![](https://img2018.cnblogs.com/blog/885859/201907/885859-20190724173147088-630413355.png)

### 1.1 Http 请求（Request）报文

请求报文由`请求行、请求头、请求体`3 部分组成。

#### 1.1.1 请求行

请求行由`请求方法、请求URL（不包括域名）、Http协议版本`3部分组成。

- 工作中经常使用的是`GET、POST`两种，其他的不做过多举例。

> 这里会衍生出其中一个知识点，[GET 和 POST 的区别](getandpost)

> 这里会衍生出其中一个知识点，[Http1.0、Http1.1 与 Http2.0 的区别](http)

#### 1.1.2 请求头

请求头部由关键字/值对组成，每行一对。

- User-Agent : 产生请求的浏览器类型；
- Accept : 客户端希望接受的数据类型，比如 Accept：text/xml（application/json）表示希望接受到的是 xml（json）类型；
- Content-Type：发送端发送的实体数据的数据类型。
  比如，Content-Type：text/html（application/json）表示发送的是 html 类型；
- Host : 请求的主机名，允许多个域名同处一个 IP 地址，即虚拟主机

常见的 Content-Type：

| **Content-Type**                  | **解释**                                                                                        |
| :-------------------------------- | :---------------------------------------------------------------------------------------------- |
| text/html                         | html 格式                                                                                       |
| text/plain                        | 纯文本格式                                                                                      |
| text/css                          | CSS 格式                                                                                        |
| text/javascript                   | js 格式                                                                                         |
| image/gif                         | gif 图片格式                                                                                    |
| image/jpeg                        | jpg 图片格式                                                                                    |
| image/png                         | png 图片格式                                                                                    |
| application/x-www-form-urlencoded | POST 专用：普通的表单提交默认是通过这种方式。form 表单数据被编码为 key/value 格式发送到服务器。 |
| application/json                  | POST 专用：用来告诉服务端消息主体是序列化后的 JSON 字符串                                       |
| text/xml                          | POST 专用：发送 xml 数据                                                                        |
| multipart/form-data               | POST 专用：用以支持向服务器发送二进制数据，以便可以在 POST 请求中实现文件上传等功能             |

#### 1.1.3 请求体

`GET`没有请求数据，`POST`有。

与请求数据相关的最常使用的请求头是 `Content-Type` 和 `Content-Length` 。

![](https://img2018.cnblogs.com/blog/885859/201907/885859-20190724173242717-440362909.png)


### 1.2 Http 响应（Response）报文

响应报文由`状态行、消息报头、响应体`3 部分组成。

#### 1.2.1 状态行

状态行由`Http协议版本、响应状态码、状态码的文本描述`3 部分组成。

- 比如：HTTP/1.1 200 OK

> 这里会衍生出其中一个知识点，[Http状态码的含义](http_status_code)
