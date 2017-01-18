// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex);

const store = new Vuex.Store({
	// Initial application state.
  state: {
    video: {
    	title: 'Danzig - Mother (Karaoke)',
      ytid: 'vIv7suVkVaU',
      source: 'https://www.youtube.com/embed/vIv7suVkVaU'
    },
    searchResults: [],
    queue: []
  },
  mutations: {
    increment (state) {
      state.count++;
    },
    // Update individual object properties so changes are properly observed in UI.
    changeVideo (state, payload) {
    	state.video.source = payload.source;
    	state.video.title = payload.title;
    	state.video.ytid = payload.ytid;
    },
    // Array mutation methods: https://vuejs.org/v2/guide/list.html#Array-Change-Detection
    addSearchResults(state, payload) {
    	payload.forEach(result => state.searchResults.push(result));
    },
    clearSearchResults(state) {
    	state.searchResults.splice(0, state.searchResults.length);
    },
    addSongToQueue(state, payload) {
      state.queue.push(payload);
    },
    clearQueue(state, payload) {
      state.queue.splice(0, state.queue.length);
    }

  }
});

new Vue({ // eslint-disable-line no-new
  el: '#app',
  store,
  render: (h) => h(App)
});
