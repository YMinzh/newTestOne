<template>
    <div class="updata">
        <h2>修改</h2>
        username:<input type="text" v-model="user.username">
        sex:<input type="text" placeholder="0表示女 1表示男" v-model="user.sex">
        <button @click="doYes">确认</button>
        <button @click="cannel">取消</button>
    </div>
</template>

<script>
export default {
    name:'Updata',
    props :["user"],
    
    methods: {
        doYes(){
            this.$emit('commit',{username:this.user.username,sex:this.user.sex});
        },
        cannel(){
            this.$emit('cannel')
        }
    }
}
</script>

