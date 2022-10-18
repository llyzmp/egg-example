// app/service/home.js
'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async user() {
    return {
      name: '周四',
      content: '疯狂星期四',
    };
  }
}

module.exports = HomeService;
