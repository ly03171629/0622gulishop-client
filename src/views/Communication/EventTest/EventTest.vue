<template>
  <div>
    <h1>EventTest组件</h1>
    
      <!-- 1、原生dom事件用在html标签身上正常用 -->
      <button @click="test1">test1</button>
      <!-- 2、原生dom事件用在组件标签身上是自定义事件    想要有原生功能 .native-->
      <!-- 事件如果添加在组件标签身上，都是自定义事件，自定义事件类型名可以和原生dom事件名相同 -->
      <!-- 原生dom事件添加在组件标签身上使用.native，这个事件本质添加给了组件的根元素 -->
      <Event1 @click.native="test2"></Event1>




      <!-- 自定义事件用在html标签身上，没什么用,无意义 -->
      <button @xxx="test3">test3</button>
      <!-- 自定义事件用在组件标签身上，正常用-->
      <Event2 @xxx="test4($event)"></Event2>
      <Event2 @click="test5($event)"></Event2>



  </div>
</template>

<script type="text/ecmascript-6">
  import Event1 from './Event1.vue'
  import Event2 from './Event2.vue'

  export default {
    name: 'EventTest',
    components: {
      Event1,
      Event2,
    },

    methods: {
      test1(event){
        console.log(event.target.innerHTML)
      },
      test2(event){
        console.log(event.target.innerHTML)
      },

      //自定义事件回调
      test3(event){
        console.log(111)
        console.log(event.target.innerHTML)
      },
      test4(event){
        console.log(event)
      },
      test5(event){
        console.log(event)
      }
    }
  }
</script>
