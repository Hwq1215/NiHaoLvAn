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
    margin-top: 15%;
    width: 100%;
    height: 300px;
}

.input-place > div{
    width: 500px;
    height: 80px;
    margin: 40px auto;
    margin-top: 10%;
    border: 2px #e0dee3;
    border-style: solid;
    border-radius: 40px;
    background-color: #e0dee3;
    display:flex;
}

.input-place i{
    margin-top: 24px;
    margin-left: 20px;
    font-size: 30px;
    color: #fc8c1e;
}

.input-place input{
    width: 380px;
    height: 35px;
    margin: auto;
    font-size: 20px;
    border: none;
    outline: none;
    background-color: #e0dee3;
    box-shadow: 0 0 0px 1000px #e0dee3 inset;
}

.input-place button{
    width: 180px;
    height: 70px;
    margin: 20px auto;
    margin-left: 35%;
    border: 3px #ffffff;
    border-style: solid;
    border-radius: 40px;
    background-color: #fc8c1e;
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;
    outline: none;
}
</style>

