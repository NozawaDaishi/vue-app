Vue.createApp({
  data() {
    return {
      message: "",
    };
  },
  methods: {
    onClick() {
      this.message = new Date().toLocaleString();
    },
  },
}).mount("#app");
