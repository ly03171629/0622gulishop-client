<template>
  <div>
    <h2>BABA有存款: {{money}}</h2>
    <button @click="borrowMoneyFromXM(100)">找小明借钱100</button><br>
    <button @click="borrowMoneyFromXH(150)">找小红借钱150</button><br>
    <button @click="borrowMoneyFromALL(200)">找所有孩子借钱200</button><br>
    
    <br>
    <Son ref="son"/>

    <br>
    <Daughter ref="dau" />
  </div>
</template>

<script>
import Son from './Son'
import Daughter from './Daughter'

export default {
  name: 'ChildrenParentTest',
  data () {
    return {
      money: 1000
    }
  },

  methods: {
    borrowMoneyFromXM(money){
      this.money += money
      // this.$refs.son 拿到的就是子组件对象
      this.$refs.son.money -= money
    },
    borrowMoneyFromXH(money){
      this.money += money
      // this.$refs.son 拿到的就是子组件对象
      this.$refs.dau.money -= money
    },
    borrowMoneyFromALL(money){
      this.money += money*2
      console.log(this.$children)

      // this.$children获取的是父组件所有的子组件对象组成的一个数组，但是毛病，顺序不确定
      this.$children.forEach(item => item.money -= money)
    }
  },

  components: {
    Son,
    Daughter
  }
}
</script>

<style>

</style>
