const state = {
  isLogined: false,
  userInfo: {}
};

const getters = {
};

const actions = {
  login( {commit}, userInfo ) {
    commit('login', userInfo);
  },
  logout( {commit} ) {
    commit('logout');
  }
};

const mutations = {
  login(state, userInfo) {
    state.isLogined = true;
    state.userInfo = userInfo;
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  },
  logout(state) {
    state.isLogined = false;
    state.userInfo = {};
    localStorage.removeItem('userInfo');
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}