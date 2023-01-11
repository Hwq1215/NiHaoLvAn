<template>
  <div id="ContactUs">
    <!-- <div class="banner container-fuild text-center">联系我们</div> -->
    <div class="login container-fuild">
      <img src="@/assets/img/Login.svg" alt="">
      <div class="login_component">
        <div class="login_form">
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
            class="demo-ruleForm">
            <div >
              <el-form-item prop="pass" class="form_1">
              <el-input class="name" type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入用户名"></el-input>
            </el-form-item>
            </div>
            
            <el-form-item class="form_2"  prop="age" label-width="auto">
              <el-input v-model.number="ruleForm.age" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: "ContactUs",
  data() {
    var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
      ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
    };
  },
  methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  // mounted() {
  //   var map = new BMap.Map("map"); // 创建地图实例
  //   var point = new BMap.Point(116.301841, 40.156506); // 创建点坐标
  //   map.centerAndZoom(point, 18); // 初始化地图，设置中心点坐标和地图级别
  //   map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
  //   var marker = new BMap.Marker(point); // 创建标注
  //   map.addOverlay(marker); // 将标注添加到地图中
  //   var opts = {
  //     width: 50, // 信息窗口宽度
  //     height: 10, // 信息窗口高度
  //     title: "黄元公寓" // 信息窗口标题
  //   };
  //   var infoWindow = new BMap.InfoWindow(
  //     "我的家",
  //     opts
  //   ); // 创建信息窗口对象
  //   map.openInfoWindow(infoWindow, map.getCenter()); // 打开信息窗口
  //   var wow = new WOW();
  //   wow.init();
  // }
};
</script>
<style scoped >
* {
  padding: 0;
  margin: 0 auto;
}

body {
  height: 100%;
}

.login {
  height: 100%;
  width: 1440px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.login_component {
  position: absolute;
  width: 580px;
  height: 688px;
  background-image: url("../assets/img/login_forrm_background.svg");
  top: 198px;
  right: 102px;
}
.login_form {
  position: absolute;
  top: 233px;
  right: 146px;
  height: 121px;
  width: 288px;
}

.el-form{
  position: static !important;
}
.form_1 {
  width: 288px !important;
  height: 48px !important;
  position: absolute !important;
  /* top: 233px !important;
  left: 146px !important; */
  border-radius: 38px;
}

.name {
  height: 480px !important;
  width: 288px !important;
}

.form_2 {
  width: 288px !important;
  height: 48px !important;
  position: absolute !important;
  bottom: 0 !important;
  border-radius: 38px;
}
/* .banner {
  color: #fff;
  font-size: 30px;
  height: 150px;
  line-height: 150px;
  background-image: url("../assets/img/banner_1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
} */

@media screen and (max-width: 997px) {
  .ContactUs-container {
    padding: 20px 0;
  }
}
</style>

