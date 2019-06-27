import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        posts: {
            title: '',
            dscr: '',
            id: Math.random()
        }
    },
    actions: {
        addData({ commit }) {
            commit('addPost')
        }
    },
    mutations: {
        updateTitle(state, title) {
            state.posts.title = title
        },
        updateDscr(state, dscr) {
            state.posts.dscr = dscr
        },
        addPost(state) {
            fetch('https://my-blog-35ee1.firebaseio.com/posts.json', {
                method: 'post',
                body: JSON.stringify(state.posts)
            })
        }
    }
})
