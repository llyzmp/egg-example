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
    const result = await ctx.service.home.user();
    ctx.body = result;
  }
  // post请求
  async add() {
    const { ctx } = this;
    const { title } = ctx.request.body;
    // egg内置了bodyParser中间件来对POST请求body解析成object挂载到ctx.request.body上
    ctx.body = { title };
  }

  async addUser() {
    const { ctx } = this;
    const { name } = ctx.request.body;
    try {
      const result = await ctx.service.home.addUser(name);
      console.log('result', result);
      ctx.body = {
        code: 200,
        msg: '添加成功',
        data: null,
      };
    } catch (err) {
      ctx.body = {
        code: 500,
        msg: '添加失败',
        data: null,
      };
    }
  }

  async editUser() {
    const { ctx } = this;
    const { id, name } = ctx.request.body;
    try {
      const result = await ctx.service.home.editUser(id, name);
      console.log('result', result);
      ctx.body = {
        code: 200,
        msg: '修改成功',
        data: null,
      };
    } catch (err) {
      ctx.body = {
        code: 500,
        msg: '修改失败',
        data: null,
      };
    }
  }

  async deleteUser() {
    const { ctx } = this;
    const { id } = ctx.request.body;
    try {
      const result = await ctx.service.home.deleteUser(id);
      console.log('result', result);
      ctx.body = {
        code: 200,
        msg: '删除成功',
        data: null,
      };
    } catch (err) {
      ctx.body = {
        code: 500,
        msg: '删除失败',
        data: null,
      };
    }
  }
}

module.exports = HomeController;
