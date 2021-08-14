import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: {
      items: [],
    },
    isAuthenticated: false,
    token: '',
    isLoading: false
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('cart')) {
        state.cart = JSON.parse(localStorage.getItem('cart'))
      } else {
        localStorage.setItem('cart', JSON.stringify(state.cart))
      }
    },
    addToCart(state, itemToAdd) {
      const exists = state.cart.items.filter(addedItem => addedItem.product.id === itemToAdd.product.id)
      if (exists.length > 0) {
        exists[0].quantity = parseInt(exists[0].quantity) + parseInt(itemToAdd.quantity)
      } else {
        state.cart.items.push(itemToAdd)
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    setIsLoading(state, status){
      state.isLoading = status
    }
  },
  actions: {
  },
  modules: {
  }
})
