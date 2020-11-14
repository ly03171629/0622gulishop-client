<template>
  <div>
    <!-- 数据在父组件 数据需要在子组件展示（vfor） 展示的过程当中结构子组件说了不算 
    父组件说了算
    -->

    <!-- <h2>效果一: 显示TODO列表时, 已完成的TODO为绿色未完成热粉</h2>

    <List :todos="todos">
      <template slot-scope="{todo}"> 
        <span :style="{color:todo.isComplete?'green':'hotpink'}">{{todo.text}}</span>        
      </template>
    </List> -->
    
    <hr>

    <h2>效果二: 显示TODO列表时, 带序号, TODO的颜色为蓝绿搭配</h2>

    <List :todos="todos">
      <template slot-scope="{todo,index}"> 
        <span :style="{background:index%2 === 0?'green':'hotpink'}">{{index+1}}{{todo.text}}</span>        
      </template>
    </List>



  </div>
</template>

<script type="text/ecmascript-6">
  import List from './List'
  export default {
    name: 'ScopeSlotTest',
    data () {
      return {
        todos: [
          {id: 1, text: 'AAA', isComplete: false},
          {id: 2, text: 'BBB', isComplete: true},
          {id: 3, text: 'CCC', isComplete: false},
          {id: 4, text: 'DDD', isComplete: false},
        ]
      }
    },

    components: {
      List
    }
  }
</script>
