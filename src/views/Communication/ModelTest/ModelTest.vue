<template>
  <div>
    <h2>深入v-model</h2>

    <input type="text" v-model="msg">
    <span>我爱你{{msg}}</span>
    <br>
    <br>
    <br>
    <input type="text" :value="msg" @input="msg = $event.target.value">
    <span>我爱你{{msg}}</span>



    <!-- v-model用在组件标签身上 -->
    <!-- 实现父子同步数据的问题 而且应用在子组件内部是表单类元素的情况下 -->
    <!-- <CustomInput :value="msg" @input="msg = $event"></CustomInput> -->

    
    <CustomInput v-model="msg"></CustomInput>





    <el-input v-model="msg" placeholder=""></el-input>

    <br>
  </div>
</template>

<script type="text/ecmascript-6">
  import CustomInput from './CustomInput.vue'
  export default {
    name: 'ModelTest',
    data(){
      return {
        msg:'赵丽颖'
      }
    },
    components: {
      CustomInput
    }
  }
</script>
