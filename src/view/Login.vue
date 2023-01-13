<template>
    <div class="login-item">
        <div>`</div>
        <div class="login-form">
            <el-carousel 
            trigger="click" 
            :autoplay="false" 
            height="500px" 
            indicator-position="outside"
            arrow="hidden"
            class="carousel-outside">
                <el-carousel-item >
                    <h3 class="text-center"><b>用户登录</b></h3>
                    <login-form firstPlaceHolder="请输入用户名" secondPlaceHolder="请输入密码" >
                    <template v-slot:loginbutton="value"><button @click="login(value.val1,value.val2)" type="button">登录</button></template>
                    </login-form>
                </el-carousel-item> 
            
                <el-carousel-item >
                    <h3 class="text-center"><b>用户注册</b></h3>
                    <login-form firstPlaceHolder="请输入用户名" secondPlaceHolder="请输入密码" >
                    <template v-slot:loginbutton="value">
                        <div><i class="el-icon-phone"></i><input placeholder="请输入手机号"/></div>
                        <button @click="signal(value.val1,value.val2)" type="button">注册</button>
                    </template>
                    </login-form>
                </el-carousel-item>

                <el-carousel-item >
                    <h3 class="text-center"><b>找回密码</b></h3>
                    <login-form firstPlaceHolder="请输入用户名" secondPlaceHolder="请输入新密码" >
                    <template v-slot:loginbutton="value">
                        <div><i class="el-icon-phone"></i><input placeholder="请输入手机号"/></div>
                        <button type="button">找回</button></template>
                    </login-form>
                </el-carousel-item>
            
            </el-carousel>
        </div>

    </div>
    
</template>


<style>
    .login-item{
        background: url("../assets/img/login_background.png");
        background-size: cover;
        margin-top: -5%;
    }

    .login-form{
        width: 407px;
        height: 663px;
        margin-left: 55%;
        margin-top: 12%;
        
    }

    .el-carousel{
        border: #000000;
        border-radius: 20px 20px 60px 60px;
        

    }

    .el-carousel__item:nth-child(n) {
    background-color: #ffffff;
    opacity: 0.95;
    }



    /* .dynamic el-input{
        font-size: 20px;
        
    } */
   .textcenter{
    text-align: center;
    text-shadow: 2px 2px 4px #c8a997;

   }

</style>
<script>
import LoginForm from '../components/LoginForm.vue';

export default{
    data(){
        return{

        }
    },
    components:{
        LoginForm,
    },
    created(){

    },

    
    methods:{
        login(username,password){
            if(username == '123456' && password == '123456'){
                sessionStorage.setItem('username',username)
                this.$router.push({name:'home'})
            }
            else{
                this.$message({
                    message: '用户名或密码错误',
                    type: 'error'
                  });
            }
        },
        signal(username,password){
            if(username == '' || password == ''){
                this.$message({
                    message: '用户名或密码不能为空',
                    type: 'error'
                  });
            }else{
                this.$message({
                message: '注册成功',
                type: 'success'
                });
            }
        }
    }
}
</script>