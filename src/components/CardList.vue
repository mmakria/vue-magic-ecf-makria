<script setup>
const props = defineProps({
  name: String,
  idList: Number,
  idCard: String
})

</script>

<template>
  <div class='card-list'>
    <div class='card-title'><b>#{{ idList }}</b> {{ name }}</div>
    <div class='card-action'>


      <router-link :to="{name:'cardDetails', params:{idCard:idCard}}">
        👀
      </router-link>


    </div>
  </div>
</template>

<style scoped>

</style>