<template>
    <div :class="$style.app">app</div>
    <div :class="styles.name">module-css</div>
    <div :class="less_module.less">less_module-css</div>
    <div :class="sass_module.sass">sass_module-css</div>
    <div :class="$style.css3"></div>
    <!-- 支持直接引入 -->
    <!-- <img src="@/assets/a.png" alt=""> -->
    <HelloWorld />
    <p>{{ state.count }}</p>
    <button @click="addCount">按钮</button>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import styles from './styles/style.module.css'
import less_module from '@/styles/style.module.less'
import sass_module from '@/styles/style.module.scss'
import { reactive } from 'vue'

interface State {
    count: number
}
const state = reactive<State>({ count: 0 })

function addCount() {
    state.count++
}

fetch('/api/todos/1')
    .then((response) => response.json())
    .then((json) => console.log(json))

fetch('/api/getUserInfo')
    .then((response) => response.json())
    .then((json) => console.log(json))
</script>

<style scoped module>
/* module 可以 通过 $style 访问样式 */
.app {
    color: green;
}
.css3 {
    width: 200px;
    height: 50px;
    background: red;
    transform: rotate(45deg);
}
</style>
