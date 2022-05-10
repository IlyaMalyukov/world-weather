<template lang="pug">
.card
  .card__city {{card.city}}
  .card__country {{card.country}}
  .row
    .row__title Weather
    .row__value {{card.weather}}
  .row
    .row__title Tempterature
    .row__value {{card.temperature}}
  .row
    .row__title Humidity
    .row__value {{card.humidity}}
  .card__update-time 7 minutes ago
  .card__reload-btn Reload
</template>

<script>
export default {
  name: 'CurrentLocationTime',
  props: {
    card: Object
  },
  data: () => ({
    rows: [
      {id: 0, title: 'Weather', value: 'Clouds', unit: ''},
      {id: 1, title: 'Temperature', value: 7, unit: '°С'},
      {id: 2, title: 'Humidity', value: 45, unit: '%'},
    ] 
  })
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