import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase/compat/app';
import info from './info';

// import auth from './auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null,
  },
  mutations: {
    SET_ERROR(state, error) {
      state.error = error;
    },
    CLEAR_ERROR(state) {
      state.error = null;
    },
    SIGNIN: () => {

    },
    REGISTRATION: () => {

    },
  },
  actions: {
    async FETCH_CURRENCY() {
      const key = process.env.VUE_APP_FIXER;
      const res = await fetch(`http://data.fixer.io/api/latest?access_key=${key}&symbols=USD,EUR,RUB`);
      return res.json();
    },
    async LOGIN({ commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        commit('SIGNIN');
      } catch (error) {
        commit('SET_ERROR', error);
        throw error;
      }
    },
    async LOG_OUT({ commit }) {
      await firebase.auth().signOut();
      commit('CLEAR_INFO');
    },
    async REGISTER({ commit, dispatch }, { email, password, name }) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const uid = await dispatch('GET_ID');
        await firebase.database().ref(`/users/${uid}/info`).set({
          bill: 10000,
          name,
        });
        // commit('REGISTRATION');
      } catch (error) {
        commit('SET_ERROR', error);
        throw error;
      }
    },
    GET_ID() {
      const user = firebase.auth().currentUser;
      return user ? user.uid : null;
    },
  },
  getters: {
    ERROR: (s) => s.error,
  },
  modules: {
    info,
  },
});
