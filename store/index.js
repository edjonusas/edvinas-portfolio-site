export const state = () => ({
  homePage: {},
  aboutPage: {},
})

export const getters = {
  getHomePage: (state) => {
    return state.homePage
  },
  getAboutPage: (state) => {
    return state.aboutPage
  },
}

export const mutations = {
  setHomePage(state, data) {
    state.homePage = data
  },
  setAboutPage(state, data) {
    state.aboutPage = data
    console.log(state.aboutPage)
  },
}

export const actions = {
  async getHomePage({ commit }) {
    try {
      const response = await this.$axios.$get('http://localhost:1337/home-page')
      commit('setHomePage', response)
    } catch (err) {
      console.log(err)
    }
  },
  async getAboutPage({ commit }) {
    try {
      const response = await this.$axios.$get('http://localhost:1337/about-page')
      commit('setAboutPage', response)
    } catch (err) {
      console.log(err)
    }
  },
}
