'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async weather() {
    const { ctx,service } = this;
    const List=await service.user.getWeatherList()
    if(List){
        ctx.body={
            code:200,
            msg:'获取天气数据成功',
            data:List
        }
    }else{
        ctx.body={
            code:400,
            msg:'获取天气数据失败',
            data:[]
        }
    }
  }
}

module.exports = UserController;