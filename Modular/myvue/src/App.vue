<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>

import {firstName, lastName, sex} from './comman'    //./当前目录下；{}想要用的变量名（comman.js中暴露出来的）；
console.log(sex);

import { multiply } from './funcExport'    //引用函数；
console.log(multiply(2, 3));

import { m } from './funcExport'    //引用函数；
console.log(m);

/*import demoName from './exportDefault'   //默认引用；自己取一个接口名；不用{}；
demoName();*/

import user from './exportDefault'   //默认引用；自己取一个接口名；不用{}；
console.log(user.id);

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
