Vue.createApp({
  data: function () {
    return {
      current: new Date().toLocaleString(),
    };
  },
  // 算出プロパティ
  computed: {
    randomc: function () {
      return Math.random();
    },
  },
  methods: {
    onClick: function () {
      this.current = new Date().toLocaleString();
    },
    randomm: function () {
      return Math.random();
    },
  },
}).mount("#app");
