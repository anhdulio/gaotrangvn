<template>
  <div id="lucky-btn">
    <v-btn dark >{{ message }}</v-btn>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: "I'm feeling lucky"
    }
  }
}
</script>

<style lang="scss" scoped>
  .btn {
    width: 80%;
    max-width: 300px;
    height: 36px;
    background-image: linear-gradient(97deg, #188e9b, #6dd7c7);
    text-transform: none;
  }
</style>


