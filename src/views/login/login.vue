<!--
 * @Description:
 * @Author: menggt
 * @Date: 2022-02-09 14:07:15
 * @LastEditors: menggt
 * @LastEditTime: 2022-03-28 11:17:03
-->
<template>
  <div class="container">
    <div class="main">
      <!-- 整个注册盒子 -->
      <div class="loginbox">
        <!-- 左侧的注册盒子 -->
        <div class="loginbox-in">
          <div class="userbox">
            <span class="iconfont">&#xe817;</span>
            <input class="user" id="user" v-model="name" placeholder="用户名" />
          </div>
          <br />
          <div class="pwdbox">
            <span class="iconfont">&#xe775;</span>
            <input class="pwd" id="password" v-model="pwd" type="password" placeholder="密码" />
          </div>
          <br />
          <div class="pwdbox">
            <span class="iconfont">&#xe775;</span>
            <input class="pwd" id="re_password" v-model="repwd" type="password" placeholder="确认密码" />
          </div>

          <br />
          <button type="primary" class="register_btn" @click="register">Register</button>
        </div>

        <!-- 右侧的注册盒子 -->
        <div class="background">
          <div class="title">Welcome to WH System Management Center</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
