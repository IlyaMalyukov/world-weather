<template lang='pug'>
vue-final-modal(
  v-slot="{ params, close }"
  v-bind="$attrs"
  v-on="$listeners")
  .content-wrapper
    .content
      CreateCardForm(
        @close-modal="close"
        :isVisible='isVisible')
      .modal__close(@click="close") &#215;
</template>

<script>
import CreateCardForm from '../forms/CreateCardForm.vue'

export default {
  name: 'CreateCardModal',
  inheritAttrs: false,
  components: {
    CreateCardForm
  },
  computed: {
    isVisible() {
      return this.$attrs.value
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/mixins';

.content-wrapper {
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #fff;
  width: 750px;
  height: max-content;
  border-radius: 4px;
  padding: 24px;

  @include tablets {
    width: auto;
    margin: auto 20px;
  }

  @include phones {
    height: 100%;
    margin: 0;
  }
}

.content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.modal__close {
  position: absolute;
  top: 0px;
  right: 0;
  font-family: sans-serif;
  cursor: pointer;
  font-size: 40px;
  line-height: 20px;
  color: #1b1b1b;

  @include phones {
    top: 10px;
  }

  &:hover {
    color: #999;
  }

  &:active {
    color: #1b1b1b;
  }
}
</style>
