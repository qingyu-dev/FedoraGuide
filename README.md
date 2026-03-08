# FedoraGuide

一个关于 Fedora Linux 的指南文档站，包含安装、配置、维护等内容，帮助新手快速上手。

## 本地开发

### 环境要求

- Node.js 18+
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run docs:dev
```

### 构建

```bash
npm run docs:build
```

### 预览构建结果

```bash
npm run docs:preview
```

## 项目结构

```
.
├── docs/               # 文档内容
│   ├── guide/          # 指南内容
│   ├── public/         # 静态资源
│   ├── .vitepress/     # VitePress 配置
│   └── index.md        # 首页
├── package.json
└── README.md
```

## 贡献指南

欢迎提交 Issue 和 Pull Request 帮助完善指南。

## 许可证

本项目采用 [MIT](LICENSE) 许可证。
