<template>
  <div>
    <span :class="selected ? 'selected' : 'unselected'" @click="!selected ? $emit('select', label as string) : ''">{{
      label
    }}</span>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps({
  label: String,
  selected: Boolean,
})

</script>

<style lang="scss" scoped>
@import '@/assets/styles/_global_variable.scss';

span {
  border-radius: $radiusValue;
  padding: 0.4vh 1.8vh;

  font-size: 1.8vh;
  cursor: pointer;

  transition: all 250ms ease-in;

  &.selected {
    border: solid 1px $colorWhite;
    color: $colorWhite;
  }

  &.unselected {
    border: solid 1px $colorGrey;
    color: $colorGrey;

    &:hover {
      border: solid 1px $colorWhite;
      color: $colorWhite;
    }
  }
}
</style>
