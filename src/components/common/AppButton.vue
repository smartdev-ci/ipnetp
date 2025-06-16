<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'primary',
    validator: (value: string) => ['primary', 'secondary', 'outline'].includes(value)
  },
  href: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <a v-if="href" :href="href" :class="['btn', `btn-${type}`]">{{ text }}</a>
  <button v-else :class="['btn', `btn-${type}`]">{{ text }}</button>
</template>

<style scoped>
/* Button styles are defined in global.css */
button{
  background-color: #007bff;
}
a{
    background-color: #007bff;
}
  button:hover, a:hover {
    background-color: #0056b3;
  }
  
</style>