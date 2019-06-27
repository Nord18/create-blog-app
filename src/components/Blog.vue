<template>
    <div>
        <v-content>
            <v-layout class="search" justify-center>
                <v-flex xs12 md7 lg5>
                    <v-text-field v-model.trim="search" label="Search..." outline></v-text-field>
                </v-flex>
            </v-layout>
            <div class="container">
                <div class="d-flex align-items-center flex-column">
                    <div class="col-sm-12 col-md-8 card" v-for="post, index in filterBlog" :key="index">
                        <div class="card-body">
                            <h3 class="card-title">{{post.title}}</h3>
                            <p class="card-text">{{post.dscr}}</p>
                            <router-link class="link" :to="'/blog/' + post.id">Open</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </v-content>
    </div>
</template>
<script>
export default {
    data() {
        return {
            search: '',
            blog: []
        }
    },
    computed: {
        filterBlog() {
            return this.blog.filter(post => {
                return post.title.match(this.search);
            })
        }
    },
    methods: {
        loadData() {
            fetch('https://my-blog-35ee1.firebaseio.com/posts.json')
                .then(response => response.json())
                .then(data => {
                    const arr = [];
                    for (let key in data) {
                        arr.push(data[key])
                    };
                    this.blog = arr
                })
        }
    },
    created() {
        this.loadData()
    },
    updated() {
        this.loadData()
    }
}

</script>
<style lang="scss" scoped>
@import '~vuetify/dist/vuetify.css';

.link {
    text-decoration: none;
}

.search {
    margin-top: 20px;
}

.card {
    margin-bottom: 20px;
}

</style>
