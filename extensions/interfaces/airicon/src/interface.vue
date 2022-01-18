<template>
  <input :value="value" @input="handleChange($event.target.value)" />
  <select name="icon" id="icon">
    <option value="test">Test</option>
    <option value="test2">Test2</option>
  </select>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: null,
    },
  },
  emits: ['input'],
  setup(props, { emit }) {
    return { handleChange };

    function handleChange(value) {
      emit('input', value);
    }
  },
};
</script>

<style scoped>

</style>