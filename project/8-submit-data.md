---
title: 提交数据到服务器
---

### 任务一：后台接口

用 curl 请求一下，能够保存成功即可。

### 任务二：创建新建页面

新建页面的路由是 `/new`

localhost:3000/new 这样页面上应该可以看到一个 form 。

### 任务三：的到 form 的填写数据

React 的 refs


```
<form onSubmit={this.handleSubmit.bind(this)}
  <input type='text' name="title" ref='titile' />
  <input type='text' name="content" ref='content' />
  <input type="submit" />
</form>
```

我们虽然有 form 但是我们不用 form 提交数据，而是使用 axios 提交数据。

所以定义 handleSubmit

```
handleSubmit(){
  let content = this.refs.content.getValue();
  let title = this.refs.title.getValue();
  const data = {
    title: title,
    content: content
  }
  axios.post('/posts', data)
}