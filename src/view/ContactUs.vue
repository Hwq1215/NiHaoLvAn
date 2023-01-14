<template>
<div>
    <div class="contact-pic">
      <div> ' </div>
      <h2>联系我们</h2>
  <el-row >
    <el-col :span="15" :offset="1">
      <transition name="el-fade-in">
        <div v-show="show" class="transition-box">
        <el-card>
          <el-form v-model="contactInfo" label-width="120px">
            <el-form-item  label="您的电话"  >
              <el-input v-model="contactInfo.phone"></el-input>
            </el-form-item>
            <el-form-item label="您的邮箱"  >
              <el-input v-model="contactInfo.email"></el-input>
            </el-form-item>
            <el-form-item  label="您咨询的内容" >
              <textarea
              v-model="contactInfo.content" 
              type="textarea" 
              show-word-limit
              class = "el-textarea"
              ></textarea>
            </el-form-item>
            <el-form-item>
              <el-button type="warning" class="button-center">提交</el-button>
            </el-form-item>
          </el-form>
        </el-card>
        </div>
      </transition>
    </el-col>
    <el-col :span="7" :offset="1">
      <transition name="el-fade-in">
        <div v-show="show" class="transition-box">
        <el-card class="info-card">
          <h4>我们的公众号:</h4>
          <img src="../assets/img/wechat.jpg" alt="公众号" width="270px" height="270px">
          <h4>联系方式:</h4>
          <p>电话：123456789</p>
          <p>邮箱：123456789@qq.com</p>
        </el-card>
        </div>
      </transition>
    </el-col>
  </el-row>
    </div>


</div>
</template>

<script>
export default{
  data(){
    return{
      show:false,
      contactInfo:{
        phone:'',
        email:'',
        content:''
      }
    }
  },
  created(){
      setTimeout(() =>{
        this.show = true;
      },50)
  },
  methods:{
  },  
}

</script>

<style>
.el-row{
  margin-top: 50px;
}

.el-textarea{
  border: 1px #c6cad1;
  border-radius: 5px;
  border-style:solid;
  width: 600px;
  height: 200px;
  padding: 10px;
}
.contact-pic{
  height: 700px;
  background-image: url("../assets/img/contact_1.jpg");
  background-size: cover;
  background-position: center;
  
  opacity: 0.9;
}

.contact-pic > h2{
  text-align: center;
  color: #fff;
  font-size: 40px;
  font-weight: 700;
}

.el-input{
  width: 600px;
}
.button-center{
  margin-left: 270px;
}

.info-card{
  margin-top: px;
  width: 350px;
  height: 460px;
  border: 1px #c6cad1;
  border-radius: 5px;
  border-style:solid;
  padding: 10px;
}
</style>