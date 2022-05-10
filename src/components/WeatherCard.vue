<template lang="pug">
.card
  .card__city {{card.name}}
  .card__country {{card.sys.country}}
  .row
    .row__title Weather
    .row__value {{card.weather[0].main}}
  .row
    .row__title Tempterature
    .row__value {{card.main.temp}} °C
  .row
    .row__title Humidity
    .row__value {{card.main.humidity}} %
  .card__update-time {{lastUpdate}}
  .buttons
    .buttons__button(@click.prevent='remove') REMOVE
    .buttons__button(@click.prevent='reload') RELOAD
</template>

<script>
import moment from 'moment'

export default {
  name: 'WeatherCard',
  props: {
    card: Object
  },
  methods: {
    reload() {
      this.$store.dispatch('updateCard', this.card.id)
    },
    remove() {
      this.$store.dispatch('removeCard', this.card.id)
    }
  },
  computed: {
    lastUpdate() {
      return moment().startOf(this.card.dt).fromNow()
    }
  }
}
</script>

<style lang="scss" scoped>
.current-location-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  padding-bottom: 20px;
}

.card {
  box-shadow: 4px 4px 8px 0px #808080;
  width: 302px;
  padding: 24px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #1b1b1b;
  font-size: 18px;
  line-height: 1.2;

  &__city {
    font-size: 32px;
    line-height: 1.2;
    font-weight: 700;
    padding-bottom: 15px;
  }

  &__country {
    padding-bottom: 40px;
  }

  &__update-time {
    align-self: flex-end;
    color: #a8a8a8;
    padding-bottom: 30px;
  }
}

.row {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #c4c4c4;
  padding-bottom: 14px;
  margin-bottom: 16px;
  width: 100%;
}

.buttons {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__button {
    font-size: 16px;
    line-height: 1.2;
    font-weight: 700;
    color: #9B51E0;
    align-self: flex-end;
    cursor: pointer;

    &:hover {
      color: #ccf;
    }

    &:active {
      color: #9B51E0;
    }
  }
}
</style>