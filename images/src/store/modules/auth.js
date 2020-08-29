import api from '../../api/imgur';

const state = {
  token: null,
};

// NOTE: get values of state or calculate new values based on state
const getters = {
  // NOTE: will be called with the actual current state
  isLoggedIn: (state) => {
    // NOTE: !! is a simple way to turn any value into a boolean (null => false, anything else => true)
    return !!state.token;
  }
};

// NOTE: User actions
const actions = {
  // NOTE: First argument is fixed, further ones are defined by developer
  // Here we care only about one property of the first argument -> commit is used to call mutations
  // Never call mutations directly!
  logout: ({ commit }) => {
    // NOTE: first argument of commit() is the name of the mutation, further arguments are passed down to the mutation function
    commit('setToken', null)
  },
  login: () => {
    api.login();
  }
};

// NOTE: functions to mutate the state, they might be called in case of user action (might be NOT!)
const mutations = {
  // NOTE: current state will always be the first argument
  setToken: (state, token) => {
    state.token = token;
  }
};

// NOTE: best practice!
// keep mutations and state simple
// put complexity (ajax requests) in actions
// call multiple simple mutations from actions rather than having complex mutations

// NOTE: getters and actions will be exposed (connected to) vue components

export default {
  state,
  getters,
  actions,
  mutations
}
