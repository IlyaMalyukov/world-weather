<template lang="pug">
.create-card-form
  .create-card-form__title Choose a city
  .create-card-form__subtitle To find city start typing and pick one from the suggestions
  .input
    input.input__field(
      :class='{"input__field_invalid": ($v.city.$dirty && !$v.city.required || error)}'
      v-model.trim='city'
      placeholder='Search city'
      @keydown.enter='addCard')
    .input__error {{error}}
  .buttons
    .button.clear(@click.prevent='clear') CLEAR
    .buttons-group 
      .button.buttons-group__cancel(
        @click.prevent='closeModal') CANCEL
      .button.buttons-group__add(@click.prevent='addCard') ADD
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'CreateCardForm',
  props: {
    isVisible: Boolean
  },
  data: () => ({
    city: '',
  }),
  validations: {
    city: {
      required
    }
  },
  methods: {
    async addCard() {
      if (this.$v.city.$invalid) {
        this.$v.$touch()
        this.$store.commit('setError', 'Required')
        return
      }

      await this.$store.dispatch('addCard', this.city)
      
      if (this.$store.getters.error) {
        this.$v.city.$touch()
        return
      }

      this.closeModal()
    },
    closeModal() {
      this.clear()
      this.$emit('close-modal')
    },
    clear() {
      this.city = ''
      this.$store.commit('clearError')
      this.$v.$reset()
    }
  },
  computed: {
    error() {
      return this.$store.getters.error
    }
  },
  watch: {
    isVisible() {
      if (this.isVisible === false) {
        this.$v.$reset()
        this.city = ''
      }
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
}

.input {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 140px;

  &__field {
    width: 100%;
    border: none;
    border-bottom: 1px solid #1b1b1b;
    outline: none;
    padding-bottom: 16px;
    font-size: 24px;

    &_invalid {
      border-color: red;
    }
  }

  &__error {
    padding-top: 10px;
    font-size: 16px;
    line-height: 1.2;
    color: red;
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