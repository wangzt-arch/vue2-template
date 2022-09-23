
<template>
  <div>
    <HelloWord />
  </div>
</template>
<script>
import HelloWord from '../components/HelloWorld.vue'
import Test from '@/components/Test.vue'
import axiosA from '../api/index'

export default {
  name: '',
  components: {
    HelloWord, Test
  },
  mixins: [],
  props: {

  },
  data() {
    return {

    }
  },
  computed: {

  },
  watch: {

  },
  async mounted() {
    try {
      const data={}
      let res = await axiosA(data)
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  },
  methods: {

  }
};
</script>
<style lang='' scoped>
</style>