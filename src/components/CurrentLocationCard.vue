<template lang="pug">
.current-location-card
  .title Watch weather in your current location
  .card
    .card__title Moscow, RU
    .card__subtitle Your current location
    .row(v-for='row in rows')
      .row__title {{row.title}}
      .row__value {{row.value}} {{row.unit}}
    .card__update-time 7 minutes ago
    .card__reload-btn Reload
</template>

<script>
export default {
  name: 'CurrentLocationTime',
  data: () => ({
    rows: [
      {id: 0, title: 'Weather', value: 'Clouds', unit: ''},
      {id: 1, title: 'Temperature', value: 7, unit: '°С'},
      {id: 2, title: 'Humidity', value: 45, unit: '%'},
    ] 
  }),
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
  min-width: 824px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #1b1b1b;
  font-size: 18px;
  line-height: 1.2;

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