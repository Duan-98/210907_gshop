/*
间接更新state的多个方法的对象
 */
import {
  RECEVIE_ADDRESS,
  RECEVIE_SHOPS,
  RECEVIE_CATEGORYS
} from './mutation-types'
import {
  reqAddress,
  reqFoodCategorys,
  reqShopList
} from '../api'
import state from './state'

export default {
  //异步获取地址
  async getAddress ({commit, state}) {
    //发送异步请求
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    // 提交一个mutation
    if (result.code === 0) {
      const address = result.data
      commit(RECEVIE_ADDRESS, {address})
    }
  },
  //异步获取食品分类列表
  async getCategorys({commit}) {
    // 发送异步请求
    const result = await reqFoodCategorys()
    //提交mutation
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEVIE_CATEGORYS,{categorys})
    }
  },
  // 异步获取商家列表
  async getShops ({commit, state}) {
    //发送异步请求
    const {longitude, latitude} = state
    const result = await reqShopList(longitude, latitude)
    // 提交一个mutation
    if (result.code === 0) {
      const shops = result.data
      commit(RECEVIE_SHOPS, {shops})
    }
  }
}
