import {REQING,REQ_SUCCESS,REQ_ERROR} from './action_types'
import axios from 'axios'
export default {
    //异步请求获取数据函数
    async searchByName({commit},name){
        commit(REQING)
        try{
            const res = await axios.get('https://api.github.com/search/users',{params:{q:name}})
            const data = res.data
            const users = data.items.map(item=>({
                    username:item.login,
                    url:item.html_url,
                    img_url:item.avatar_url
                }))
            commit(REQ_SUCCESS,users)
        }catch(err){
            commit(REQ_ERROR,`请求出错：${err.message}`)
        }
    }
}