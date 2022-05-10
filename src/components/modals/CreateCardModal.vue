<template lang='pug'>
vue-final-modal(
  v-slot="{ params, close }"
  v-bind="$attrs"
  v-on="$listeners")
  .content-wrapper
    .content
      CreateCardForm(@close-modal="close")
      .modal__close(@click="close")
        .icon-cross
</template>

<script>
import CreateCardForm from '../forms/CreateCardForm.vue'

export default {
  name: 'CreateCardModal',
  inheritAttrs: false,
  components: {
    CreateCardForm
  }
}
</script>

<style scoped>
.icon-cross {
  font-size: 10px;
  color: #222;
}

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
  top: 0;
  right: 0;
  font-family: sans-serif;
  cursor: pointer;
}
</style>
