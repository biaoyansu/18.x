var app = new Vue({
  el: '#app',
  data: {
    math: 90,
    physics: 80,
    english: 30,
  },
  computed: {
    sum: function () {
      return parseFloat(this.math) + parseFloat(this.physics) + parseFloat(this.english);
    },
    average: function () {
      return Math.round(this.sum / 3);
    }
  },
});
