import PagePath from './pagepath';
export default class Setting {
  public static NAVBAR_ITEMS = [
    {
      type: 1, name: 'JAVA', url: '/result/category/JAVA'
    },
    {
      type: 0, name: '人工智能', url: '',
      dropdownItems: [
        {name: 'Tensorflow', url: '/result/category/Tensorflow'},
        {name: 'DeepLearning.ai', url: '/result/category/DeepLearning.ai'},
        {name: '人工智能-其他', url: '/result/category/人工智能-其他'}
      ]
    },
    {
      type: 0, name: '架构', url: '/',
      dropdownItems: [
        {name: 'AWS', url: '/result/category/AWS'},
        {name: '阿里云', url: '/result/category/阿里云'},
        {name: 'Docker', url: '/result/category/Docker'},
        {name: '设计模式', url: '/result/category/设计模式'},
        {name: '架构-其他', url: '/result/category/架构-其他'}
      ]
    },
    {
      type: 1, name: '前端', url: '/result/category/前端'
    },
    {
      type: 1, name: '生活随想', url: '/result/category/生活随想'
    },
    {
      type: 1, name: '自我介绍', url: '/myself'
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
      {link: 'http://wpa.qq.com/msgrd?v=3&uin=605951224&site=qq&menu=yes', name: 'qq' },
      {link: 'https://www.twitter.com/wangzhenhui1992', name: 'twitter' },
  ];
}
