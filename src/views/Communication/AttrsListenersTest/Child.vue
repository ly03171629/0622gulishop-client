<template>
  <div>
    child
  </div>
</template>

<script>
export default {
  name: '',
  props:['aaa'],
  mounted(){
    // $attrs接收的是除去props声明接收属性之外以及class属性之外的所有属性
    //$listeners 接收的是父组件当中给子组件绑定的所有事件监听组成一个对象
    console.log(this.$attrs,this.$listeners)
  }
}
</script>

<style lang="less" scoped>

</style>
