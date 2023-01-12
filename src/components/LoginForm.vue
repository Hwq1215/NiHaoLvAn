<template>
    <div>
        
        <form class="input-place">
        <div>
            <i class="el-icon-user"></i>
            <input v-bind:placeholder="firstPlaceHolder" v-model="firstInput"/>
        </div>
        <div>
            <i class="el-icon-lock"></i>
            <input v-bind:placeholder="secondPlaceHolder" v-model="secondInput" type="password"/>
        </div>
            <slot :val1="firstInput" :val2="secondInput" name="loginbutton">登录</slot>
        </form>
    </div>
</template>


<script>
export default {
    name:"login-form",
    props: ['firstPlaceHolder','secondPlaceHolder'],
    data(){
        return {
            firstInput: '',
            secondInput: ''
        }
    },
    create(){
        
    }

}
</script>

<style>
.input-place{
    margin-top: 70px;
    width: 400px;
    height: 200px;
}

.input-place > div{
    width: 305px;
    height: 50px;
    margin: 40px auto;
    border: 3px #ffffff;
    border-style: solid;
    border-radius: 30px;
    background-color: #ebebeb;
    display:flex;
}

.input-place i{
    margin-top: 10px;
    margin-left: 15px;
    font-size: 23px;
    color: #fc8c1e;
}

.input-place input{
    width: 220px;
    height: 30px;
    margin: auto;
    font-size: 16px;
    border: none;
    outline: none;
    background-color: #ebebeb
}

.input-place button{
    width: 150px;
    height: 50px;
    margin: 20px auto;
    margin-left: 120px;
    border: 3px #ffffff;
    border-style: solid;
    border-radius: 30px;
    background-color: #fc8c1e;
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;
    outline: none;
}
</style>

