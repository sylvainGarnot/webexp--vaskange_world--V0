<template>
  <div>
    <span :class="selected ? 'selected' : 'unselected'" @click="!selected ? $emit('select', label) : ''">{{ label
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
span {
  border-radius: 0.6vh;
  padding: 0.4vh 1.8vh;

  font-family: 'Gill Sans';
  font-size: 1.8vh;
  cursor: pointer;

  transition: all 250ms ease-in;

  &.selected {
    border: solid 1px white;
    color: white;
  }

  &.unselected {
    border: solid 1px grey;
    color: grey;

    &:hover {
      border: solid 1px white;
      color: white;
    }
  }
}
</style>
