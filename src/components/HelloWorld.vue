<script setup>
defineProps({
  msg: {
    type: String
  }
})
</script>

<template>
  <div class="greetings">
    HelloWord {{msg}}
  </div>
</template>

<style lang="scss" scoped>
div {
  font-size: 20px;
}
</style>
