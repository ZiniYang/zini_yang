# 个人主页修改指南

以后修改主页内容，主要只需要打开：

`assets/js/content.js`

`index.html` 管理页面结构，`assets/css/styles.css` 管理外观，`assets/js/site.js`
负责把内容显示出来。日常更新时不用修改这三个文件。

## 最简单的修改流程

1. 打开 `assets/js/content.js`。
2. 找到需要修改的栏目。
3. 只修改反引号之间的文字，例如：

   ```js
   name: `Zini Yang`,
   ```

4. 保存文件。
5. 双击打开 `index.html`，或刷新浏览器检查结果。
6. 确认后提交并推送到 GitHub。

请保留原来的反引号、逗号和括号。英文逗号很重要。

## 修改简介

找到 `profile` 中的 `bio`：

```js
bio: [
  `第一段`,
  `第二段`,
],
```

可以直接修改文字，也可以增加或删除一段。链接写法：

```text
[显示的文字](https://链接地址)
```

加粗写法：

```text
**需要加粗的文字**
```

## 修改邮箱和其他链接

找到 `contacts`：

```js
{ label: `Email`, url: `mailto:zyang181@jh.edu` },
```

修改 `mailto:` 后面的邮箱即可。CV、GitHub 和 LinkedIn 也在这里修改。

## 更换照片

1. 将新的 JPG 或 PNG 放入 `assets/images/`。
2. 在 `profile` 中修改：

   ```js
   photo: `assets/images/新照片文件名.jpg`,
   ```

建议先清除手机照片的 GPS/EXIF 信息，并将图片压缩到 1 MB 以下。不要直接使用
HEIC，因为部分浏览器无法显示。

## 添加 News

在 `news` 列表最上方添加：

```js
{
  date: `Sep 2026`,
  text: `这里写新的消息，也可以加入[链接](https://example.com/)。`,
},
```

最新消息放在最上面。删除一整组 `{ ... },` 就能删除对应消息。

## 添加 Publication

复制 `publications` 中现有的完整 `{ ... },`，粘贴到它的上方或下方，然后修改：

- `title`：论文标题
- `authors`：作者；自己的名字可以写成 `**Zini Yang**`
- `venue`：会议、期刊和年份
- `description`：简介
- `image`：图片路径
- `links`：论文链接
- `keywords`：关键词

Publications 不显示在主页，而是自动显示在独立的 `publications.html` 页面。主页顶部的
Publications 按钮会进入这个页面。

## 以后添加 Project

现在 `projects` 是空的，因此主页不会显示 Projects 栏目或导航按钮：

```js
projects: [],
```

`content.js` 里已经在它上方放好了项目示例。复制示例对象到方括号内：

```js
projects: [
  {
    title: `My New Project`,
    authors: `Advisor: Prof. Name`,
    venue: `Ongoing Research`,
    description: `项目简介。`,
    image: `assets/images/my-project.png`,
    imageAlt: `My project illustration`,
    links: [],
    keywords: `NLP, Computational Social Science`,
  },
],
```

保存后，Projects 导航和栏目会自动出现。再次改回 `projects: []` 就会隐藏。

## 修改网页标题和搜索引擎简介

找到最上方的 `seo`，修改 `title`、`description` 和 `keywords`。为了让没有运行
JavaScript 的搜索工具也能读取最新内容，如身份发生重大变化，也应同步修改
`index.html` 顶部对应的三项。

## 修改失败时怎么检查

最常见的原因是：

- 删除了某个反引号；
- 一项结尾漏掉英文逗号；
- 删除了配对的 `[`、`]`、`{` 或 `}`；
- 图片文件名大小写与实际文件不一致。

可以先查看 Git 的修改记录，恢复刚才误改的几行，而不需要重做整个网站。
