import {ref} from 'vue'
import {defineStore} from 'pinia'

const url = ` https://api.magicthegathering.io/v1/cards`
const urlTestOneCard = " https://api.magicthegathering.io/v1/cards/5f8287b1-5bb6-5f4c-ad17-316a40d5bb0c"
export const useMagicCardStore = defineStore('counter', () => {

    const cards = ref([])
    const cardSelected = ref()
    const cardsFilteredByNumber =ref([])

    const fetchAllCards = async () => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            cards.value = data.cards

        } catch (e) {
            console.log(e)
        }
    }

    const fetchCardById = async (id) => {
        try {
            const response = await fetch(`https://api.magicthegathering.io/v1/cards/${id}`)
            const data = await response.json()
            cardSelected.value = data.card
        } catch (e) {
            console.log(e)
        }
    }


    const fetchNumberOfCard = async (nbr) => {
        try {
            const url = ` https://api.magicthegathering.io/v1/cards?pageSize=${nbr}`
            const response = await fetch(url)
            const data = await response.json()
            cardsFilteredByNumber.value = data.cards

        } catch (e) {
            console.log(e)

        }


    }


    return {fetchAllCards, fetchCardById, fetchNumberOfCard, cards, cardSelected, cardsFilteredByNumber}
})
