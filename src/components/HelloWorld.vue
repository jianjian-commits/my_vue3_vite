<template>
    <div class="hello">hello world</div>
    <div :class="styles.name">hello world</div>
    <div :class="less_module.less">hello world</div>
</template>

<script setup lang="ts">
import styles from '@/styles/style.module.css'
import less_module from '@/styles/style.module.less'
</script>

<style>
.hello {
    color: red;
}
</style>
