const TAB_NAMES = [ '玩Android', '体系', '公众号', '导航', '项目' ];

const state = {
  tabIndex: 0
};

const getters = {
  tabName : (state) => {
    return TAB_NAMES[state.tabIndex];
  }
};

const actions = {
  changeTabIndex( {commit}, tabIndex ) {
    commit('changeTabIndex', tabIndex);
  }
};

const mutations = {
  changeTabIndex(state, tabIndex) {
    state.tabIndex = tabIndex;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}