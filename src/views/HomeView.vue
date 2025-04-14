<script setup>
import CardArticle from "@/components/CardArticle.vue";
import {onBeforeMount} from "vue";
import {storeToRefs} from "pinia";
import {useMagicCardStore} from "@/stores/cards.js";

const magicCards = useMagicCardStore()
const {cardsFilteredByNumber} = storeToRefs(magicCards)
const {fetchNumberOfCard} = magicCards

onBeforeMount(async () => {
  await fetchNumberOfCard(3)
  console.log(cardsFilteredByNumber.value)
})
</script>

<template>
  <!-- Main Wrapper -->
  <div id="main-wrapper">
    <div class="wrapper style1">
      <div class="inner">
        <!-- Feature 1 -->
        <section class="container box feature1">
          <div class="row">
            <div class="col-12">
              <header class="first major">
                <h2>Mes 3 Dernières Cartes</h2>
              </header>
            </div>
            <CardArticle
            v-for="card in cardsFilteredByNumber"
            :key="card.id"
            :image="card.imageUrl"
            :title="card.name"
            :id-card="card.id"
            :type="card.type"
            />
          </div>
        </section>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>