'use strict';

const Service = require('egg').Service;

class  DataService extends Service {
  async getWeatherList(){
    let sql=`select * from weather where 1=1`
    let result=await this.app.mysql.query(sql)
    // console.log(sql);
    return result;
  }
}

module.exports =  DataService;
