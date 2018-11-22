import PagePath from './pagepath';
import { environment } from '../../environments/environment';
import { Ads } from '../entity/ads';
export default class Setting {
  public static NAVBAR_ITEMS = [
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
        {name: 'Elasticsearch', url: '/result/category/Elasticsearch'},
        {name: 'Docker', url: '/result/category/Docker'},
        {name: '设计模式', url: '/result/category/设计模式'},
        {name: 'JAVA', url: '/result/category/JAVA'},
        {name: '前端', url: '/result/category/前端'},
        {name: '架构-其他', url: '/result/category/架构-其他'}
      ]
    },
    {
      type: 1, name: '生活随想', url: '/result/category/生活随想'
    },
    {
      type: 1, name: '自我介绍', url: '/myself'
    }
  ];

  public static readonly host = environment.host;

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
      {link: 'https://jp.linkedin.com/in/%E6%8C%AF%E8%8D%9F-%E7%8E%8B-487492140',name: 'linkedin'}
  ];

  public static readonly ADS_LIST: Ads[] = [
    {
      image: "https://github.com/wangzhenhui1992/soaringroad-static/blob/master/uploads/2018/03/u7745795363050105367fm27gp01.jpg?raw=true", 
      url: "https://promotion.aliyun.com/ntms/yunparter/invite.html?userCode=4hc87dcs",
      text: "1880优惠券"
    },
    {
      image: "https://img.alicdn.com/tfs/TB1xXiupAvoK1RjSZPfXXXPKFXa-798-470.png", 
      url: "https://promotion.aliyun.com/ntms/act/ecsjianzhan.html?userCode=4hc87dcs",
      text: "性能级主机2-5折"
    },
    {
      image: "https://img.alicdn.com/tfs/TB1aDXhXpzqK1RjSZFvXXcB7VXa-259-194.jpg", 
      url: "https://promotion.aliyun.com/ntms/act/enterprise-discount.html?userCode=4hc87dcs",
      text: "弹性计算全场6折"
    },
    {
      image: "https://img.alicdn.com/tfs/TB17qJhXpzqK1RjSZFvXXcB7VXa-200-126.jpg", 
      url: "https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=4hc87dcs",
      text: "云主机2折"
    },
    {
      image: "https://img.alicdn.com/tfs/TB1TFUulmzqK1RjSZFLXXcn2XXa-200-126.png", 
      url: "https://promotion.aliyun.com/ntms/act/shoppingcart.html?userCode=4hc87dcs",
      text: "满1000减50"
    }
  ];
}
