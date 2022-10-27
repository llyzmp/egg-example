// app/service/home.js
'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  // 查询
  async user() {
    const { app } = this;
    const QUERY_STR = 'id, name';
    const sql = `select ${QUERY_STR} from list`;
    try {
      // mysql的实例对象已经挂载到app对象下，可以通过app.mysql获取到
      const result = await app.mysql.query(sql);
      return result;
    } catch (err) {
      console.log('获取用户', err);
      return null;
    }
  }
  // 新增
  async addUser(name) {
    const { app } = this;
    try {
      const result = await app.mysql.insert('list', { name });
      return result;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
  // 修改
  async editUser(id, name) {
    const { app } = this;
    try {
      const result = await app.mysql.update('list', { name }, { where: { id } });
      return result;
    } catch (err) {
      console.log('修改用户', err);
      return null;
    }
  }
  // 删除
  async deleteUser(id) {
    const { app } = this;
    try {
      const result = await app.mysql.delete('list', { id });
      return result;
    } catch (err) {
      console.log('删除用户', err);
      return null;
    }
  }
}

module.exports = HomeService;
