import axios from 'axios';

export default ({
  namespaced: true,
  state: {
    cart: [],
    parts: null,
    foo: 'robots-foo',
  },
  mutations: {
    addRobotToCart(state, robot) {
      console.log('Add to Robot cart');
      state.cart.push(robot);
    },
    updateParts(state, parts) {
      console.log('Update parts');
      console.log(parts);
      state.parts = parts;
      console.log(parts);
    },
  },
  actions: {
    getParts({ commit }) {
      console.log('actions getParts');
      axios.get('/api/parts')
        .then((result) => commit('updateParts', result.data))
        .catch(console.error);
    },
    addRobotToCart({ commit, state }, robot) {
      const cart = [...state.cart, robot];
      return axios.post('/api/cart', cart)
        .then(() => commit('addRobotToCart', robot));
    },
  },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter((item) => item.head.onSale);
    },
    foo(state) {
      return `robots-getter/${state.foo}`;
    },
  },
});
