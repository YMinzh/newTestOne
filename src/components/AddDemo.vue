<template>
  <div class="add">
    <h2>添加</h2>
    用户名:<input type="text" v-model="username">
    性别:<input type="text" v-model="sex" placeholder="1表示男 0表示女">
    <button @click="addData">添加</button >
    <button @click="cannel">取消</button >
  </div>
</template>

<script>
export default {
  data(){
    return{
      username : '',
      sex : ''
    }
  },
  name: 'AddDemo',
  props: [],
  methods : {
    addData(){
      this.$emit("callback",[this.username,this.sex])
    },
    cannel(){
      this.$emit("cannel")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
