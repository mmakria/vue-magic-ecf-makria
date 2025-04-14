<script setup>
import {storeToRefs} from "pinia";
import {useRoute} from "vue-router";
import {useMagicCardStore} from "@/stores/cards.js";
import {onBeforeMount, ref} from "vue";

const route = useRoute()
const idRoute = route.params.idCard

const magicCardStore = useMagicCardStore()
const {fetchCardById} = magicCardStore
const {cardSelected} = storeToRefs(magicCardStore)

const loading = ref(true)

onBeforeMount(async () => {
  await fetchCardById(idRoute)
  loading.value = false
  console.log(cardSelected.value)
})

</script>

<template>
  <!-- Main Wrapper -->
  <div id="main-wrapper">
    <div class="wrapper style2">
      <div class="inner">
        <div class="container">
          <div class="row">
            <div class="col-8 col-12-medium">
              <div id="content">
                <!-- Content -->
                <article>
                  <header class="major">
                    <h2>{{ cardSelected.name }}</h2>
                    <p>{{ cardSelected.artist }}</p>
                  </header>
                  <div class="image featured centered">

                    <div
                        v-if="loading"
                        id="spinner">
                      <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 24 24">
                        <path fill="currentColor"
                              d="M12,23a9.63,9.63,0,0,1-8-9.5,9.51,9.51,0,0,1,6.79-9.1A1.66,1.66,0,0,0,12,2.81h0a1.67,1.67,0,0,0-1.94-1.64A11,11,0,0,0,12,23Z">
                          <animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate"
                                            values="0 12 12;360 12 12"/>
                        </path>
                      </svg>
                    </div>


                    <img :src="cardSelected.imageUrl" alt=""/>
                  </div>
                  <p>{{ cardSelected.text }}</p>
                </article>

              </div>
            </div>
            <div class="col-4 col-12-medium">
              <div id="sidebar">

                <!-- Sidebar -->
                <section>
                  <header class="major">
                    <h2>Infos</h2>
                  </header>
                  <p>set name: <b>truc</b></p>
                  <p>rarity: <b>{{ cardSelected.rarity }}</b></p>
                  <p>toughness: <b>{{ cardSelected.toughness }}</b></p>

                  <span class="button alt icon ">
														Card power
														<i
                                v-for="power in parseInt(cardSelected.power)"
                                class="fa-solid fa-fire-flame-curved"></i>
													</span>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>


</template>

<style scoped>

</style>