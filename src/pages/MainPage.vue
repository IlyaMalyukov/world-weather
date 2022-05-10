<template lang="pug">
.main-page
  h1.title World Weather
  //CurrentLocationCard
  .cards(v-if='cards.length')
    WeatherCard(
      v-for='card in cards'
      :key='card.id'
      :card='card')
  .main-page__no-data(v-else) Nothing added
  .add-card-btn(@click.prevent='showModal') +
  CreateCardModal(
    v-model="isVisibleModal")
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
    isVisibleModal: false
  }),
  methods: {
    showModal() {
      this.isVisibleModal = true
    }
  },
  computed: {
    cards() {
      return this.$store.getters.cards || []
    }
  },
  watch: {
    isVisibleModal() {
      this.$store.commit('clearError')
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