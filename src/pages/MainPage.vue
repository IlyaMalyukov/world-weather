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
@import '../styles/mixins';

.main-page {
  padding: 0 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @include desktopHd {
    padding: 0 100px;
  }

  @include desktop {
    padding: 0 100px;
  }

  @include tablets {
    padding: 0 50px;
  }

  @include phones {
    padding: 0 15px;
  }
}

.cards {
  padding-top: 80px;
  display: grid;
  justify-items: center;
  grid-gap: 40px;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @include desktopHd {
    grid-gap: 20px;
  }

  @include desktop {
    padding-top: 40px;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @include tablets {
    grid-template-columns: 1fr 1fr;
  }

  @include phones {
    grid-template-columns: 1fr;
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

  @include phones {
    right: 15px;
    bottom: 15px;
    width: 40px;
    height: 40px;
    font-size: 36px;
  }

  &:hover {
    background: #ccf;
  }

  &:active {
    background: #9B51E0;
  }
}
</style>