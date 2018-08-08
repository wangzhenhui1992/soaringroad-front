import PagePath from './pagepath';
export default class Setting {
  public static NAVBAR_ITEMS = [
    {
      type: 1, name: 'JAVA', url: '/'
    },
    {
      type: 0, name: '人工智能', url: '/',
      dropdownItems: [
        {name: 'Tensorflow', url: '/'},
        {name: 'DeepLearning.ai', url: '/'},
        {name: '人工智能-其他', url: '/'}
      ]
    },
    {
      type: 0, name: '架构', url: '/',
      dropdownItems: [
        {name: 'AWS', url: '/'},
        {name: '阿里云', url: '/'},
        {name: 'Docker', url: '/'},
        {name: '设计模式', url: '/'},
        {name: '架构-其他', url: '/'}
      ]
    },
    {
      type: 1, name: '前端', url: '/'
    },
    {
      type: 1, name: '生活随想', url: '/'
    },
    {
      type: 1, name: '自我介绍', url: '/'
    }
  ];

  // public static readonly host = 'http://www.soaringroad.com';
  public static readonly host = 'http://localhost:8080';

  public static readonly apis = {
    article: '/api/article/',
    admin: {
      login : '/api/admin/login',
      article: '/api/admin/article/'
    }
  };

  public static SOCIAL_LISTS = [
      {link: 'https://www.github.com/wangzhenhui1992', name: 'github' },
      {link: 'https://www.qq.com/605951224', name: 'weixin' },
      {link: 'https://www.qq.com/605951224', name: 'qq' },
      {link: 'https://www.twitter.com/wangzhenhui1992', name: 'twitter' },
  ];
}
