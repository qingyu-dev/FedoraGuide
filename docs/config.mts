import { defineConfig, type DefaultTheme } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FedoraGuide",
  description: "助你快速配置项目后台",
  lang: 'zh-Hans',
  themeConfig: {
    logo: '/fedora-logo.svg',

    nav: nav(),

    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/qingyu/FedoraGuide' }
    ],

    footer: {
      message: '基于 MIT 许可发布',
      copyright: '版权所有 © 2026-至今 qingyu'
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: '首页', link: '/' },
    { text: '指南', link: '/guide/getting-started', activeMatch: '/guide/' }
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '指南',
      items: [
        { text: '快速开始', link: 'getting-started' }
      ]
    }
  ]
}
