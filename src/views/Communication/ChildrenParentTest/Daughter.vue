<template>
  <div style="background: #ccc; height: 50px;">
    <h3>女儿小红: 有存款: {{money}}</h3>
    <button @click="giveMoney(100)">给BABA钱: 100</button>
  </div>
</template>

<script>
import {xxxMixin} from './myMixin'
export default {
  mixins:[xxxMixin],
  name: 'Daughter',
  data () {
    return {
      money: 20000
    }
  },

  // methods: {
  //   giveMoney(money){
  //     this.money -= money
  //     // this.$parent获取的是父组件对象，但是如果有两个，那么就慎用
  //     this.$parent.money += money 
  //   }
  // }
}
</script>
