---
home: true
modules:
  - BannerBrand
  - Blog
  - MdContent
  - Footer
bannerBrand:
  heroImage: /logo.png
  heroImageStyle:
    maxWidth: '200px'
    width: '100%'
    display: block
    margin: '0 auto 2rem'
    borderRadius: '1rem'
  bgImage: '/bg.svg'
  heroText: codeNote
  tagline: 一款 vuepress 主题容器，集成多种主题底层功能，快速生成主题风格。主题 2.0 的默认风格是原主题 1.0 迁移而来，更多风格正在路上，敬请期待。
  buttons:
    - { text: 进入, link: '/blog/about' }
    - { text: 关于, link: '/blogs/about/introduce.html', type: 'plain' }

blog: # blog 模块的配置
  socialLinks: # 社交 icon 请到 [Xicons](https://www.xicons.org/#/zh-CN) 页面的 tabler 下获取，复制名称即可
    - { icon: 'BrandGithub', link: 'https://github.com/mute23-code/codeNote' }

isShowTitleInHome: true
actionText: About
actionLink: /views/other/about

---
  