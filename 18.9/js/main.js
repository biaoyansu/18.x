// Vue.component('alert', );
var alert_component = {
  template: '<button @click="on_click">弹弹弹</button>',
  methods: {
    on_click: function () {
      alert('Yo.');
    }
  }
};

new Vue({
  el: '#seg1',
  components: {
    alert: alert_component
  }
});

new Vue({
  el: '#seg2'
});
