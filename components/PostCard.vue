<template>
    <div style="margin-bottom: 20px">
        <v-card >
            <v-image
            
             />
             <v-card-text>
                 <div>
                     <h3>{{ post.user.nickname }}</h3>
                     <div>{{ post.content }}</div>
                 </div>
             </v-card-text>
            <v-card-actions>
            <v-btn text color="orange">
                <v-icon>mdi-twitter-retweet</v-icon>
            </v-btn>
            <v-btn text color="orange">
                <v-icon>mdi-heart-outline</v-icon>
            </v-btn>
            <v-btn text color="orange" @click="onToggleComment">
                <v-icon>mdi-comment-outline</v-icon>
            </v-btn> 
            <!-- 마우스 호버하면 메뉴버튼 나오는거-->
            <v-menu offset-y open-on-hover> 
                <template v-slot:activator = "{ on }">
                    <v-btn text color="orange" v-on="on">
                    <v-icon>mdi-dots-horizontal</v-icon>
                    </v-btn> 
                </template>
                 <div style="background: white">
                    <v-btn dark color="red" @click="onRemovePost">삭제</v-btn>
                    <v-btn text color="orange" @click="onEditPost">수정</v-btn>
                </div>
            </v-menu>
            </v-card-actions>                                   
        </v-card>

        <template v-if="commentOpened">
            <comment-form :post-id="post.id"/>
            <v-list>
                <v-list-item v-for="c in post.Comments" :key="c.id">
                    <v-list-item-avatar color = "teal">
                        <span>{{c.user.nickname[0]}}</span>
                    </v-list-item-avatar>
                    <v-list-content>
                        <h3>{{c.user.nickname}}</h3>
                        <div>{{c.content}}</div>
                    </v-list-content>
                </v-list-item>
            </v-list>
        </template>
    </div>
</template>

<script>
import CommentForm from '~/components/CommentForm.vue'
import {mapState} from 'vuex'
export default {
    props: {
        post:{
            type: Object,
            required: true,
        }
    },
    components:{
        CommentForm
    },
    data(){
        return {
            commentOpened:false
            }
    },
    methods:{
        onRemovePost(){
            this.$store.dispatch('posts/remove',{
                id: this.post.id
            })
        },
        onEditPost(){

        },
        onToggleComment(){
            this.commentOpened = !this.commentOpened
        }
    }
}
</script>