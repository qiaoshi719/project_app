<template>
  <div class="main">
    <input :value="val2" @input="inputFun" type="text" />
  </div>
</template>

<script>
export default {
  props: {
    val: {
      type: String,
      default: "",
    },
  },

  computed: {
    val2() {
      return this.val;
    },
  },

  data() {
    return {};
  },

  methods: {
    inputFun($event) {
      this.$emit("input", $event.target.value);
    },
  },
};
</script>

<style>
</style>