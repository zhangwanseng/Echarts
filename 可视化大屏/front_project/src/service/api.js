import axios from 'axios'
export default{
    getWeather(){
        return axios({
            method:'get',
            url:'/weather'
        })
    }
}