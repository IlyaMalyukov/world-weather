<template lang="pug">
.create-card-form
  .create-card-form__title Choose a city
  .create-card-form__subtitle To find city start typing and pick one from the suggestions
  input.create-card-form__input(
    v-model='city'
    placeholder='Search city'
    @keydown.enter='addCard')
  .buttons
    .button.clear(@click.prevent='clear') CLEAR
    .buttons-group 
      .button.buttons-group__cancel(
        @click.prevent='closeModal') CANCEL
      .button.buttons-group__add(@click.prevent='addCard') ADD
</template>

<script>
export default {
  name: 'CreateCardForm',
  data: () => ({
    city: ''
  }),
  methods: {
    addCard() {
      this.$store.dispatch('addCard', this.city)
        .then(() => {
          this.clear()
          this.closeModal()
        })
    },
    closeModal() {
      this.$emit('close-modal')
    },
    clear() {
      this.city = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.create-card-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  

  &__title {
    color: #1b1b1b;
    font-size: 32px;
    line-height: 1.2;
    padding-bottom: 16px;
  }

  &__subtitle {
    color: #767676;
    font-size: 24px;
    padding-bottom: 67px;
  }

  &__input {
    width: 100%;
    border: none;
    border-bottom: 1px solid #1b1b1b;
    outline: none;
    padding-bottom: 16px;
    font-size: 24px;
    margin-bottom: 140px;
  }
}

.buttons {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.buttons-group {
  display: flex;

  &__cancel {
    margin-right: 31px;
  }
}

.button {
  color: #c1c1c1;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    color: #ccf;
  }

  &:active {
    color: #9B51E0;
  }
}
</style>