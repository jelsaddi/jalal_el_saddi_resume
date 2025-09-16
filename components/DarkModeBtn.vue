<template>
  <div>
    <i
      v-if="!darkMode"
      style="font-size:35px; color:white;"
      class="fas fa-sun btn"
      @click="setDarkMode"
    ></i>
    <i
      v-else
      style="font-size:35px;"
      class="fas fa-moon btn"
      @click="setLightMode"
    ></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkMode: false,
      colorMode: 'light'
    }
  },
  mounted() {
    // initialize based on existing preference
    this.darkMode = this.$colorMode.preference === 'dark';
    this.colorMode = this.darkMode ? 'dark' : 'light';
  },
  methods: {
    setDarkMode() {
      this.darkMode = true;
      this.colorMode = 'dark';
      if (this.$colorMode) this.$colorMode.preference = 'dark';
    },
    setLightMode() {
      this.darkMode = false;
      this.colorMode = 'light';
      if (this.$colorMode) this.$colorMode.preference = 'light';
    }
  }
};
</script>
