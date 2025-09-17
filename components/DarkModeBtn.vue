<template>
  <div>
    <i v-if="!darkMode" style="font-size:35px; color:white;" class="fas fa-sun btn" @click="setDarkMode"></i>
    <i v-else style="font-size:35px;" class="fas fa-moon btn" @click="setLightMode"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkMode: false
    };
  },
  mounted() {
    console.log('Mounted hook called');
    console.log('$colorMode available:', this.$colorMode);

    if (this.$colorMode) {
      this.darkMode = this.$colorMode.preference === 'dark';
      console.log('Initial darkMode set from $colorMode:', this.darkMode);
    }
  },
  methods: {
    setDarkMode() {
      console.log('setDarkMode called');
      this.darkMode = true;
      console.log('darkMode updated:', this.darkMode);

      if (this.$colorMode) {
        this.$colorMode.preference = 'dark';
        console.log('$colorMode.preference set to dark');
      } else {
        console.warn('$colorMode is undefined');
      }
    },
    setLightMode() {
      console.log('setLightMode called');
      this.darkMode = false;
      console.log('darkMode updated:', this.darkMode);

      if (this.$colorMode) {
        this.$colorMode.preference = 'light';
        console.log('$colorMode.preference set to light');
      } else {
        console.warn('$colorMode is undefined');
      }
    }
  }
};
</script>
