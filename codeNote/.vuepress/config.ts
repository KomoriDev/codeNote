import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'

export default defineUserConfig({
  title: 'codeNote',
  description: 'Programming Notes',
  theme: recoTheme({
    style: '@vuepress-reco/style-default',
    logo: 'https://mute23-code.github.io/blogImage/mute/mute.jpg',
    author: 'mute.',
    authorAvatar: 'https://mute23-code.github.io/blogImage/mute/mute.jpg',
    docsRepo: 'https://github.com/mute23-code/codeNote',
    docsBranch: 'master',
    docsDir: 'example',
    lastUpdatedText: '',
    // series 为原 sidebar
    series: {
      '/blogs/about/': [
        'introduce',
        'contribute' 
      ],
      '/notes/git/': [
        'base',
        'pull',
        'push',
      ]
    },
    navbar:
    [
      { text: 'Home', link: '/' },
      { text: 'Categories', link: '/categories/Blog/1' },
      { text: 'Tags', link: '/tags/tag1/1/' },
      { text: 'Docs',
        children: [
          { text: 'vuepress-reco', link: '/docs/theme-reco/theme' },
          { text: 'vuepress-theme-reco', link: '/blogs/other/guide' }
        ]
      },
      { text: '留言板', link: '/blogs/message-board.html' },
    ],
    bulletin: {
      body: [
        {
          type: 'text',
          content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
          style: 'font-size: 12px;'
        },
        {
          type: 'hr',
        },
        {
          type: 'title',
          content: 'QQ 群',
        },
        {
          type: 'text',
          content: `
          <ul>
            <li>QQ群：413820772</li>
          </ul>`,
          style: 'font-size: 12px;'
        },
        {
          type: 'hr',
        },
        {
          type: 'title',
          content: 'GitHub',
        },
        {
          type: 'text',
          content: `
          <ul>
            <li><a href="https://github.com/mute23-code/codeNote/issues">Issues<a/></li>
            <li><a href="#">Discussions<a/></li>
          </ul>`,
          style: 'font-size: 12px;'
        },
        {
          type: 'hr',
        },
        {
          type: 'buttongroup',
          children: [
            {
              text: '打赏',
              link: 'https://afdian.net/a/linxi-bot'
            }
          ]
        }
      ],
    },
    // valineConfig 配置与 1.x 一致
    commentConfig: {
      type: 'valine',
      options: {
        appId: 'Wwr4rGsCAurIttBF4d4rCq7e-gzGzoHsz', // your appId
        appKey: '99cVtaoPMWZ2ziaCvgnk8UNS', // your appKey
        placeholder: '填写邮箱可以收到回复提醒哦！',
        verify: true, // 验证码服务
        hideComments: true, // 全局隐藏评论，默认 false
        recordIP: true,
      },
    },
  }),

  // debug: true,
})
