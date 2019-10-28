const TAB_NAMES = [ '玩Android', '体系', '公众号', '导航', '项目' ];

const state = {
  tabIndex: 0,
  leftMenuShow: false
};

const getters = {
  tabName : (state) => {
    return TAB_NAMES[state.tabIndex];
  }
};

const actions = {
  changeTabIndex( {commit}, tabIndex ) {
    commit('changeTabIndex', tabIndex);
  },
  switchLeftMenu( {commit} ) {
    commit('switchLeftMenu');
  }
};

const mutations = {
  changeTabIndex(state, tabIndex) {
    state.tabIndex = tabIndex;
  },
  switchLeftMenu(state) {
    state.leftMenuShow = !state.leftMenuShow;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}