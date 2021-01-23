import {REQING,REQ_SUCCESS,REQ_ERROR} from './action_types'

export default {
    //请求中
    [REQING](state){
        state.firstView = false
        state.loading = true
    },
    //请求成功
    [REQ_SUCCESS](state,users){
        state.loading = false
        state.users = users
    },
    //请求失败
    [REQ_ERROR](state,errMsg){
        state.loading = false
        state.err = errMsg
    }
}