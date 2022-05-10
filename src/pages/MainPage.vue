<template lang="pug">
.main-page
  h1.title World Weather
  CurrentLocationCard
  .cards
    WeatherCard(
      v-for='card in cards'
      :key='card.id'
      :card='card')
  .add-card-btn(@click.prevent='showModal') +
  CreateCardModal(
  v-model="isVisibleModal" 
  @cancel="cancel")
</template>

<script>
import CurrentLocationCard from '@/components/CurrentLocationCard'
import WeatherCard from '@/components/WeatherCard'
import CreateCardModal from '@/components/modals/CreateCardModal'

export default {
  name: "MainPage",
  components: {
    CurrentLocationCard,
    WeatherCard,
    CreateCardModal
  },
  data: () => ({
    isVisibleModal: false,
    cards: [
      {
        id: 0,
        city: 'Moscow',
        country: 'Russia',
        weather: 'Clouds',
        temperature: '7°С',
        humidity: '45%'
      },
      {
        id: 1,
        city: 'Volgograd',
        country: 'Russia',
        weather: 'Clouds',
        temperature: '7°С',
        humidity: '45%'
      },
      {
        id: 2,
        city: 'Voronezh',
        country: 'Russia',
        weather: 'Clouds',
        temperature: '7°С',
        humidity: '45%'
      },
      {
        id: 3,
        city: 'Novosibirsk',
        country: 'Russia',
        weather: 'Clouds',
        temperature: '7°С',
        humidity: '45%'
      }
    ]
  }),
  methods: {
    showModal() {
      this.isVisibleModal = true
    },
    cancel(close) {
      close()
    }
  },
  computed: {
    weatherCards() {
      return this.$store.getters.cards
    }
  }
}
</script>

<style lang="scss" scoped>
.main-page {
  padding: 0 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cards {
  padding-top: 80px;
  display: flex;
  flex-wrap: wrap;
}

.card {
  margin-right: 40px;

  &:nth-child(4) {
    margin-right: 0;
  }
}

.add-card-btn {
  position: fixed;
  right: 45px;
  bottom: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: #9B51E0;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  font-size: 48px;
  cursor: pointer;

  &:hover {
    background: #ccf;
  }

  &:active {
    background: #9B51E0;
  }
}
</style>