<template lang="pug">
.current-location-card(v-if='currentCityData')
  .title Watch weather in your current location
  .card
    .card__title(v-if='currentCityData.name') 
      span {{currentCityData.name}}, {{country}}
    .card__subtitle Your current location
    .row
      .row__title Weather
      .row__value {{weather}}
    .row
      .row__title Temperature
      .row__value {{temperature}} °C
    .row
      .row__title Humidity
      .row__value {{humidity}} %
    .card__update-time {{lastUpdate}}
    .card__reload-btn(@click.prevent='reload') Reload
.current-location-card(v-else)
  .title Your location has not been determined
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
  name: 'CurrentLocationTime',
  data: () => ({
    currentCityData: {},
    lastUpdate: ''
  }),
  async mounted() {
    await this.findGeoLocation()
    this.lastUpdate = moment(this.currentCityData?.created).startOf().fromNow()
    this.updateTime()
  },
  methods: {
    reload() {
      this.findGeoLocation()
    },
    findGeoLocation() {
      const location = window.navigator.geolocation
      const showLocation = (position) => {
        this.getWeatherData(position)
      }

      const errorHandler = (error) => {
        console.log(error)
      }

      location.getCurrentPosition(showLocation, errorHandler)
    },
    async getWeatherData(position) {
      const lat = position.coords.latitude 
      const lon = position.coords.longitude
      await axios({
        method: 'GET',
        url: process.env.VUE_APP_API_BASE_URL,
        params: {
          units: 'metric',
          lang: 'en',
          APPID: process.env.VUE_APP_API_KEY,
          lat: lat,
          lon: lon}
        })
        .then(data => {
          this.currentCityData = data.data
          this.currentCityData.created = new Date()
          console.log(data)
        })
    },
    updateTime() {
      setInterval(() => {
        this.lastUpdate = moment(this.currentCityData.created).startOf().fromNow()
      }, 1000)
    },
  },
  computed: {
    country() {
      return this.currentCityData?.sys?.country
    },
    weather() {
      const weatherData = this.currentCityData?.weather
      let data = weatherData?.find(item => item)
      return data?.main
    },
    temperature() {
      return this.currentCityData?.main?.temp
    },
    humidity() {
      return this.currentCityData?.main?.humidity
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/mixins';

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
  min-width: 824px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #1b1b1b;
  font-size: 18px;
  line-height: 1.2;

  @include desktop {
    min-width: 590px;
  }

  @include phones {
    min-width: 350px;
  }

  @include phones-small {
    min-width: 250px;
  }

  &__title {
    font-size: 32px;
    line-height: 1.2;
    font-weight: 700;
    padding-bottom: 15px;
  }

  &__subtitle {
    padding-bottom: 40px;
  }

  &__update-time {
    align-self: flex-end;
    color: #a8a8a8;
    padding-bottom: 30px;
  }

  &__reload-btn {
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

.row {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #c4c4c4;
  padding-bottom: 14px;
  margin-bottom: 16px;
  width: 100%;
}


</style>