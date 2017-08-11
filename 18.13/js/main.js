var Event = new Vue();

Vue.component('huahua', {
  template: `
    <div>
        我说：<input @keyup="on_change" v-model="i_said"/>
    </div>`,
  methods: {
    on_change: function () {
      Event.$emit('huahua-said-something', this.i_said);
    }
  },
  data: function () {
    return {
      i_said: '',
    }
  }
})
Vue.component('shuandan', {
  template: `<div>花花说：{{huahua_said}}</div>`,
  data: function () {
    return {
      huahua_said: '',
    };
  },
  mounted: function () {
    var me = this;
    Event.$on('huahua-said-something', function(data) {
      me.huahua_said = data;
    });
  }
})

new Vue({
  el: '#app',
})
