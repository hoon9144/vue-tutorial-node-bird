<template>
        <v-card style= "margin-bottom: 20px">
            <v-container>
                <v-form v-model="valid" ref="form" @submit.prevent="onSubmitForm">
                    <v-textarea
                        v-model="content"
                        outlined
                        auto-grow
                        clearable
                        label="어떤 신기한 일이 있었나요?"
                        :hide-details="hideDetails"
                        :success-messages="successMessages"
                        :success="success"
                        :rules="[v => !!v.trim() || '내용을 입력하세요']"
                        @input="onChangeTextarea"
                    />
                 <v-btn color="green" absolute right type="submit">짹짹</v-btn>
                 <v-btn>이미지 업로드</v-btn>
                </v-form>            
            </v-container>
        </v-card>
</template>

<script>
import {mapState} from 'vuex'

export default {
    data(){
        return {
            hideDetails:false,
            successMessages:'',
            success:false,
            content:'',
            valid:false
        }
    },
    computed:{
       ...mapState('users',['me'])
    },
    methods:{ 
        onChangeTextarea(){ 
            this.hideDetails = true,
            this.success = false,
            this.successMessages = ''
           //console.log(this.content)

        },
        onSubmitForm(){
            if(this.$refs.form.validate()){
                const data = {
                    content : this.content,
                    user:{
                        nickname : this.me.nickname
                    },
                    Comments:[],
                    Images:[],
                    id:Date.now(),
                    createdAt:Date.now()
                }
                this.$store.dispatch('posts/add' , data
                ).then(() => {
                    console.log(`post ok`);
                    this.content = '',
                    this.hideDetails = false,
                    this.success = true,
                    this.successMessages = '게시글 등록 성공!'
                    console.log(this.$store.state.posts.mainPosts);
                    
                }).catch((err) => {
                    console.log(`post err ${err}`)
                });
            }
        }
    }
}
</script>

<style>
    
</style>