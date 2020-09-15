<template>
    <div>
        <v-form ref="form" style="position: relative" v-model="valid" @submit.prevent="onSubmitForm">
            <v-textarea
            v-model="content"
            filled
            auto-grow
            label="댓글달기"
            :hide-details="hideDetails"
            :success-message="successMessage"
            :success="success"
            @input="onChangeTextarea"
            /> 
            <v-btn color="green" dark absolute top right type="submit">삐약</v-btn>
        </v-form>
    </div>
</template>


<script>
export default {
    props:{
        postId:{
            type:String,
            required:true
        }
    },
    data() {
        return {
            valid: true,
            content: '',
            success: false,
            successMessage: '',
            hideDetails: true,
        }
    },
    methods:{
        onSubmitForm(){
            if(this.$refs.form.validate()){
                const data = {
                    id:Date.now(),
                    postId:this.postId,
                    content: this.content,
                    user:{
                        nickname: this.me.nickname
                    }
                }
                console.log(data);
                
                this.$store.dispatch('posts/addComment',data)
                .then(() => {
                    console.log(`댓글추가성공`);
                    this.content = ''
                    this.success = true
                    this.successMessage = '댓글이 작성되었습니다.'
                    this.hideDetails = false
                    alert('댓글 추가 성공')
                }).catch((err) => {
                     console.log(`댓글 에러`);
                     
                });
            }

        },
        onChangeTextarea(value){
            if(value.length){
                this.hideDetails = true
                this.success = true
                this.successMessage = ''
            }
        }
    },
    computed:{
        me(){
            return this.$store.state.users.me
        }
    }
}
</script>