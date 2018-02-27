import PagePath from './pagepath';
export default class Setting {
  public static NAVBAR_ITEMS = [
    {
      type: 0, name: '学习之路', url: '/',
      dropdownItems: [
        {name: 'JAVA笔记', url: '/'},
        {name: '架构笔记', url: '/'},
        {name: '前端笔记', url: '/'},
        {name: 'AI笔记', url: '/'}
      ]
    },
    {
      type: 1, name: '生活随想', url: '/'
    },
    {
      type: 1, name: '自我介绍', url: '/'
    }
  ];

  // public static readonly host = 'http://www.soaringroad.com';
  public static readonly host = 'http://localhost:4200';

  public static readonly apis = {
    article_id: '/api/v1/article/id/',
    article_catagory: '/api/v1/article/catagory/',
    article_tag: '/api/v1/article/tag/'
  };
}
