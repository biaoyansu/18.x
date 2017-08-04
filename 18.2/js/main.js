var app = new Vue({
  el: '#app',
  data: {
    // foodList: ['葱', '姜', '蒜'],
    foodList: [
      {
        name: '葱',
        price: 10,
        discount: .8,
      },
      {
        name: '姜',
        price: 5,
        discount: .5
      },
      {
        name: '蒜',
        price: 4.5,
      },
    ],
  }
});
