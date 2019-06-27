<template>
    <div>
        <v-content>
            <div class="container">
                <div class="d-flex align-items-center flex-column">
                    <div class="col-sm-12 col-md-8 card">
                        <div class="card-body">
                            <h3 class="card-title">{{post.title}}</h3>
                            <p class="card-text">{{post.dscr}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </v-content>
    </div>
</template>
<script>
export default {
    props: {
        id: String
    },
    data() {
        return {
            post: {}
        }
    },
    methods: {
        loadPost() {
            fetch('https://my-blog-35ee1.firebaseio.com/posts.json')
                .then(response => response.json())
                .then(data => {
                    for (let key in data) {
                        if (data[key].id == this.id) {
                            this.post = data[key]
                        }
                    }
                })
        }
    },
    created() {
        this.loadPost()
    },
    updated() {
        this.loadPost()
    }
}

</script>
<style lang="scss" scoped>
@import '~vuetify/dist/vuetify.css';

</style>
