import firebase from 'firebase/compat/app';

export default {
  actions: {
    async CREATE_CATEGORY({ commit, dispatch }, { title, limit }) {
      try {
        const uid = await dispatch('GET_ID');
        const category = await firebase.database().ref(`/users/${uid}/categories`).push({ title, limit });
        console.log(category);
        return { title, limit, id: category.key };
      } catch (e) {
        console.log(e);
        commit('SET_ERROR', e);
        throw e;
      }
    },
    async FETCH_CATEGORIES({ commit, dispatch }) {
      try {
        const uid = await dispatch('GET_ID');
        const categories = (await firebase.database().ref(`/users/${uid}/categories`).once('value')).val() || {};
        return Object.keys(categories).map((key) => ({ ...categories[key], id: key }));
      } catch (e) {
        console.log(e);
        commit('SET_ERROR', e);
        throw e;
      }
    },
    async UPDATE_CATEGORY({ commit, dispatch }, { title, limit, id }) {
      try {
        const uid = await dispatch('GET_ID');
        await firebase.database().ref(`/users/${uid}/categories`).child(id).update({ title, limit });
      } catch (e) {
        commit('SET_ERROR', e);
        throw e;
      }
    },
  },
};
