'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  // async index() {
  //   const { ctx } = this;
  //   ctx.body = 'hi, egg';
  // }
  // get请求
  async index() {
    const { ctx } = this;
    const { id } = ctx.query;
    ctx.body = id;
  }
  async user() {
    const { ctx } = this;
    const { name, content } = await ctx.service.home.user();
    ctx.body = {
      name,
      content,
    };
  }
  // post请求
  async add() {
    const { ctx } = this;
    const { title } = ctx.request.body;
    // egg内置了bodyParser中间件来对POST请求body解析成object挂载到ctx.request.body上
    ctx.body = { title };
  }
}

module.exports = HomeController;
