import firebase from 'firebase/compat/app';

export default {
  state: {
    info: {},
  },
  mutations: {
    SET_INFO(state, info) {
      state.info = info;
    },
    CLEAR_INFO(state) {
      state.info = {};
    },
  },
  actions: {
    async FETCH_INFO({ commit, dispatch }) {
      try {
        const uid = await dispatch('GET_ID');
        console.log(uid);
        // const ref = firebase.database().ref(`/users/${uid}/info`);
        //
        // ref.on('value', (snapshot) => {
        //   snapshot.forEach((childSnapshot) => {
        //     const childData = childSnapshot.val();
        //     console.log(childData);
        //   });
        // });
        const info = await firebase.database().ref(`/users/${uid}/info`).once('value');
        // проблема не решена, обязательно решить. Проблема: вывод данных из firebase.database
        console.log(info);
        commit('SET_INFO', info);
        // const info = await firebase.database().ref(`/users/${uid}/info`);
        // //  .once('value',(snap) => snap.val());
        // // .once('value')).val();
        // console.log(info);
        // commit('SET_INFO', info);
      } catch (e) {
        console.log(e);
      }
    },
  },
  getters: {
    INFO: (s) => s.info,
  },
};
