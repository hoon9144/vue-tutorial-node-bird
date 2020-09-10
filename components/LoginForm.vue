<template>
    <v-container>
        <v-card>
            <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
                <v-container>
                    <v-text-field
                    label="이메일"
                    type="text"
                    required
                    v-model="email"
                    :rules="[v => !!v || '이메일을 입력해주세요' , v => /.+@+./.test(v) || '유효하지 않는 이메일입니다.']"
                    />
                         <v-text-field
                    label="비밀번호"
                    type="password"
                    required
                    v-model="password"
                    :rules="[v => !!v || '비밀번호를 입력해주세요.']"
                    />
                    <v-btn color="green" type="submit" :disabled="!valid">로그인</v-btn>
                    <v-btn nuxt to="/signup">회원가입</v-btn>
                </v-container>
            </v-form>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data(){
        return {
            valid:false,
            email:'',
            password:''
        }
    },
    methods:{
        onSubmitForm(){
            console.log(this.$refs.form.validate());
        }
    }
}
</script>