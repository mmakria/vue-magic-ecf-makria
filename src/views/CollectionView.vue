<script setup>
import CardList from "@/components/CardList.vue";
import {computed, onBeforeMount, ref} from "vue";
import {storeToRefs} from "pinia";
import {useMagicCardStore} from "@/stores/cards.js";

const magicCards = useMagicCardStore()
const {cards} = storeToRefs(magicCards)
const {fetchAllCards} = magicCards

const nbrPerPage = ref(10)

const addCardDisplay = () => {
  nbrPerPage.value += 10
}


const minusCardDisplay = () => {
  if (nbrPerPage.value > 10) {
    nbrPerPage.value -= 10
  }


}

onBeforeMount(async () => {
  await fetchAllCards()
  console.log(cards.value)
})

</script>

<template>


  <!-- Main Wrapper -->
  <div id="main-wrapper">
    <div class="wrapper style2">
      <div class="inner">
        <div class="container">
          <div id="content">
            <!-- Content -->
            <article>
              <header class="major">
                <h2>Ma Collection</h2>
              </header>

              <CardList
                  v-for="(card, index) in cards.slice(0,nbrPerPage)"
                  :key="card.id"
                  :name="card.name"
                  :id-list="index+1"
                  :id-card="card.id"
              />

              <button @click="addCardDisplay">Plus</button>
              <button
                  v-if="nbrPerPage>10"
                  @click="minusCardDisplay">Moins
              </button>

            </article>

          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<style scoped>

</style>