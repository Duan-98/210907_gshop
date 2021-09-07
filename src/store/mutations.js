/*
直接更新state的多个方法的对象
 */
import {
  RECEVIE_ADDRESS,
  RECEVIE_SHOPS,
  RECEVIE_CATEGORYS
} from './mutation-types'

export default {
  [RECEVIE_ADDRESS] (state, {address}) {
    state.address = address
  },
  [RECEVIE_CATEGORYS] (state, {categorys}) {
    state.categorys = categorys
  },
  [RECEVIE_SHOPS] (state, {shops}) {
    state.shops = shops
  }
}
