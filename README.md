# cocosoys personal overview

这是一个静态联系方式 overview，用于展示微信和 QQ 二维码。

## 文件结构

- `index.html`：页面结构与内容
- `styles.css`：视觉样式、响应式布局、二维码折叠动画
- `script.js`：二维码展开/收起、Esc 关闭交互
- `wx.png`：微信二维码
- `qq.png`：QQ 二维码

## 使用方式

直接用浏览器打开 `index.html` 即可。

也可以在当前目录启动静态服务：

```bash
python -m http.server 8080
```

然后访问：

```text
http://localhost:8080/
```

## 交互说明

- 点击“微信”或“QQ”标题可折叠/展开对应二维码。
- 同一时间只展开一个二维码。
- 按 `Esc` 可收起所有二维码。
