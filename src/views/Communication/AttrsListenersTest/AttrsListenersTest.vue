<template>
  <div>
    <h2>自定义带Hover提示的按钮</h2>
    <Child :aaa="'bbb'" ccc="ddd" id="aa" class="classA"  @xxx="test" @yyy="test"></Child>
    <!-- <a href="" aa="bb"></a> -->


    <!-- $attrs和 $listeners 一般用来自己二次封装组件使用的-->
    <!-- <el-button type="primary" icon="el-icon-plus" size="mini"></el-button>
    <el-button type="danger" icon="el-icon-edit" size="mini"></el-button> -->

    <HintButton type="primary" icon="el-icon-plus" size="mini" title="添加"></HintButton>

    <HintButton type="warning" icon="el-icon-edit" size="mini" title="修改"></HintButton>


    <el-button type="primary" @click="test"></el-button>
    <el-button type="primary" @dblclick.native="test"></el-button>


  </div>
</template>

<script type="text/ecmascript-6">
import Child from './Child'
import HintButton from './HintButton'
  export default {
    name: 'AttrsListenersTest',
    components:{
      Child,
      HintButton
    },
    methods: {
      test(){
        console.log(111);
      }
    },
  }
</script>
