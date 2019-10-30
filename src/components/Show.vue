<template>
  <div class="show">
    <h2>列表</h2>
    <table>
      <tr>
          <td>id</td>
          <td>username</td>
          <td>sex</td>
          <td>操作</td>
      </tr>
      <tr v-for="(user,index) in users" :key="index">
          <td>{{user.id}}</td>
          <td>{{user.username}}</td>
          <td>{{user.sex==1?'男':'女'}}</td> 
          <td><span @click="showUpdata(index)">更改</span><span @click="remove(index)">删除</span></td>
          
      </tr>
      </table>
      <button @click="showAdd">添加</button>
  </div>
</template>

<script>
import jQuery from 'jquery'
export default {
  data(){
    return{
      
    }
  },
  name: 'Show',
  props: [
    'users'
  ],
 
  methods : {
    showUpdata(index){
      this.$emit('updata',this.users[index].id)
    },
    remove(index){
      this.$emit('remove',this.users[index].id)
    },
    showAdd(){
      this.$emit('add')
    }
  }
}
</script>


<style scoped lang="scss">
  span{
    cursor: pointer;
  }
</style>
