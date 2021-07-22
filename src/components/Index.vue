<template>
  <div class="main">
    <!-- <input-text v-model="testValue"></input-text> -->
    <div class="cont">
      <div class="square"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testValue: "",
    };
  },

  watch: {
    testValue: {
      handler(val) {
        console.log(val);
      },
    },
  },

  mounted() {
    // console.log(10.0002000.toPercent());
    let aaa = [
      1,
      1,
      "2",
      "2",
      undefined,
      undefined,
      null,
      null,
      true,
      true,
      {},
      {},
      [],
      [],
      NaN,
      NaN,
    ].removeDuplicate();
    console.log(aaa);
  },
};
</script>

<style scoped lang="less">
.cont {
  width: 500px;
  height: 500px;
  border: 1px solid black;
  .square {
    position: absolute;
    // position: relative;
    // left: calc((100% - 100px) / 2);
    width: 100px;
    height: 100px;
    background: blueviolet;
  }
}
</style>