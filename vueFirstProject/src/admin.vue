<template>
    <div>
      <form action="#">
        <h2>欢迎登录~</h2>
        <hr>
        <table>
          <tr>
            <td><label for="adminName">用户名:</label></td>

            <td><input type="text" id="adminName" placeholder="请输入用户名"></td>
          </tr>
          <tr>
            <td><label for="adminPwd">密码:</label></td>
            <td><input type="password" id="adminPwd" placeholder="请输入密码"></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="submit" class="buttonForAdmin">
              <button class="buttonForAdmin">注册用户</button>
            </td>
          </tr>
        </table>
      </form>
      <el-button type="primary">aa</el-button>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  table {
    margin: 0 auto;
  }
  div {
    width: 313px;
    height: 176px;
    margin: 100px auto;
    padding-top: 15px;
    box-sizing: border-box;
    border: 3px dashed #ed6464;
    border-radius: 10px;
    background-color: rgba(222, 142, 97, 0.5);
  }
  .buttonForAdmin {
    width: 95px;
    height: 29px;
  }
  input[type="text"] {
    width: 190px;
    height: 25px;
  }
  input[type="password"] {
    width: 190px;
    height: 25px;
  }
  label {
    font: 16px "SimHei";
  }
  td {
    text-align: right;
    padding: 1px 3px;
  }
  h2 {
    text-align: center;
    font-size: 20px;
    color: #441414;
  }
  hr {
    width: 268px;
    border: 3px solid #fffe93;
    margin: 5px auto 5px auto;
  }

</style>
