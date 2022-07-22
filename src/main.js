import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import './assets/css/styles.css';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons';
import { createStore } from 'vuex';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'


/* add icons to the library */
library.add(fas);

const store = createStore({
    state () {
      return {
        currentScore: 10000,
        scores: [0, 10000,50000,100000,500000,1000000,2000000],
        correctAnswer: '',
      }
    },
    mutations: {
        nextScore (state) {
            let currentIndex = state.scores.indexOf(state.currentScore);
            let nextIndex = (currentIndex + 1) % state.scores.length;
            state.currentScore = state.scores[nextIndex];
        },
        previousScore (state) {
            let currentIndex = state.scores.indexOf(state.currentScore);
            let previousIndex = (currentIndex - 1) % state.scores.length;
            state.currentScore = state.scores[previousIndex];
        },
        setCurrentScore (state, payload) {
            state.currentScore = payload;
        },
        setCorrenctAnswer (state, payload) {
          state.correctAnswer = payload;
        }
    }
  });

const app = createApp(App);

app.use(store);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(VueSweetalert2);
app.mount("#app");
