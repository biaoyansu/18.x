Vue.component('like', {
  template: '#like-component-tpl',
  data: function () {
    return {
      like_count: 10,
      liked: false,
    }
  },
  methods: {
    toggle_like: function () {
      if (!this.liked)
        this.like_count++;
      else
        this.like_count--;

      this.liked = !this.liked;
    }
  }
})

new Vue({
  el: '#app',
})
