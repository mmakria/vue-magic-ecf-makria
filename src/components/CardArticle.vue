<script setup>

import {useRoute} from "vue-router";

const route = useRoute()
const idRoute = route.params.idCard

const props = defineProps({
  title: String,
  image: String,
  idCard: String,
  type: String

})

</script>

<template>
  <div class="col-4 col-12-medium">
    <section>
        <router-link :to="{name:'cardDetails', params:{idCard:idCard}}">
          <img :src="image" alt=""/>
        </router-link>
      <header class="second icon solid fa-dragon">
        <h3>{{ title }}</h3>
        <p>{{ type }}</p>
      </header>
    </section>
  </div>
</template>

<style scoped>

</style>