<template>
  <div class="add">
    <addDemo @callback="getData" @cannel="goBack"></addDemo>
  </div>
</template>

<script>
import addDemo from '@/components/AddDemo.vue'
import jquery from 'jquery'
export default {
  name: 'AddDemo',
  props: {

  },
  data(){
    return{
      username:'',
      sex:'',
    }
  },
   components: {
    addDemo
  },
  methods:{
    getData(val){
      this.username=val[0]
      this.sex=val[1]
      
      if(this.username==''){
        alert('用户名不能为空')
        return
      }
      if(!(this.sex==0||this.sex==1)){
        alert('请输入正确的性别信息  0为女  1为男')
        return
      }

      jquery.ajax({
        url : "http://127.0.0.1:8888/mock.php/user/create",
        type : 'post',
        data : 'username='+this.username+'&sex='+this.sex,
        success(res){
            if(res>0){
                alert('添加成功')
                this.$router.push("/")
            }else{
                alert(res);
            }
        }
      })
    },
    goBack(){
      this.$router.push("/")
    }
  }
}
</script>

