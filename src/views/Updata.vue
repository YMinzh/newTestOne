<template>
  <div class="updata">
    <Updata :user="user" @commit="goCommit" @cannel="goBack"></Updata>
  </div>
</template>

<script>
// @ is an alias to /src
import Updata from '@/components/Updata.vue'
import jQuery from 'jquery'

export default {
  data(){
    return{user:{username:1}}
  },
  name: 'updata',
  components: {
    Updata
  },
  mounted() {
    console.log(this.$route.query)
    jQuery.ajax({
      url : "http://127.0.0.1:8888/mock.php/user/get?id="+this.$route.query.id,
      type : 'get',
      dataType : "json",
      success : (res)=>{
        this.user=res;
      }
    })
  },
  methods: {
    goBack(){
      this.$router.push("/")
    },
    goCommit(val){
      if (confirm("你确定要修改吗")!=true){
          return; 
      } 

      console.log(val.username)

      if(val.username==''){
        alert('用户名不能为空')
        return
      }
      if(!(val.sex==0||val.sex==1)){
        alert('请输入正确的性别信息  0为女  1为男')
        return
      }


      jQuery.ajax({
          url : "http://127.0.0.1:8888/mock.php/user/update?id="+this.user.id,
          type : 'post',
          data : 'username='+val.username+'&sex='+val.sex,
          dataType : "json",
          success:(res)=>{
              if(res.status==true){
                  alert("更改成功");
                  this.goBack();
              }else{
                  alert(res);
              }
          }
      })
    }
  }
}
</script>
