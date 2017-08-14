Vue.directive('pin', function (el, binding) {

  var pinned = binding.value;
  if (pinned) {
    el.style.position = 'fixed';
    el.style.top = '10px';
    el.style.left = '10px';
  } else {
    el.style.position = 'static';
  }
})

new Vue({
  el: '#app',
  data: {
    card1: {
      pinned: false,
    },
    card2: {
      pinned: false,
    },
  }
})
