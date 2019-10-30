<template>
  <div class="show">
    <Show @updata="goUpdata" @remove="goRemove" :users="users" @add="goAdd"></Show>
  </div>
</template>

<script>
// @ is an alias to /src
import Show from '@/components/Show.vue'
import jQuery from 'jquery'

export default {
  name: 'show',
  components: {
    Show
  },
  data(){
    return{
      users : []
    }
  },
  mounted() {
    this.getshow()
  },
  methods:{
    goUpdata(val){
      this.$router.push({path : '/updata',query :{id : val}})
    },
    getshow(){
      jQuery.ajax({
        url : "http://127.0.0.1:8888/mock.php/user",
        type : "get",
        dataType : "json",
        success : (res)=>{
            this.users=res;
        }
      })
    },
    goRemove(val){
      console.log(val)
      if (confirm("你确定要删除吗")!=true){
        return; 
      }
      jQuery.ajax({
        url : "http://127.0.0.1:8888/mock.php/user/delete?id="+val,
        type : 'post',
        dataType : "json",
        success:(res)=>{
          if(res.status==true){
            alert("删除成功");
            this.getshow()
          }else{
            alert(res);
          }
        }
      })
    },
    goAdd(){
      this.$router.push("/add")
    }
  }
}
</script>
