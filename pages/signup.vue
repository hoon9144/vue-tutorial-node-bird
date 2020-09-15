<template>
    <div>
       <v-container>
           <v-card>
               <v-subheader>회원가입</v-subheader>
               <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
                   <v-container>
                   <v-text-field 
                   label= "이메일"
                   type="text"
                   required
                   v-model="email"
                   :rules="emailRules"
                    />
                    <v-text-field 
                   label= "닉네임"
                   type="text"
                   required
                   v-model="nickname"
                   :rules="nicknameRules"
                    />
                    <v-text-field 
                   label= "비밀번호"
                   type="password"
                   required
                   v-model="password"
                   :rules="passwordRules"
                    />
                     <v-text-field 
                   label= "비밀번호확인"
                   type="password"
                   required
                   v-model="passwordCheck"
                   :rules="passwordCheckRules"
                    />
                    <v-checkbox
                    required
                    label = "홍렬이말을 잘 들을것을 동의 합니까?"
                    v-model="terms"
                    :rules="[v => !!v || '약관에 동의해야합니다']"
                    />
                    <v-btn color="green" type="submit">가입하기</v-btn>
                    </v-container>
               </v-form>
           </v-card>
       </v-container>
    </div>
</template>


<script>
export default{
    data() {
        return {

            userData:null,
            valid:false,
            email:'',
            password:'',
            passwordCheck:'',
            nickname:'',
            terms:false,
            emailRules:[
                v => !!v || '이메일이 유효하지 않습니다.',
                v => /.+@.+/.test(v) || '이메일이 유효하지 않습니다.'
            ],
            nicknameRules:[v => !!v || '닉네임을 입력해주세요!'],
            passwordRules:[v => !!v || '비밀번호를 입력해주세요!'],
            passwordCheckRules:[
                v => !!v || '비밀번호 확인은 필수입니다.' ,
                v => v === this.password || '비밀번호가 일치하지 않습니다.'
                ],

        }
    },
    methods:{
        onSubmitForm(){
            //this 객체사용
            const vm = this;
            //폼유효성 검사 this.$refs.form 으로접근
            console.log(this.$refs.form.validate());
            if(this.$refs.form.validate()){

                this.userData = {
                 email:vm.email,
                 nickname:this.nickname,
                 password:vm.password,
                 terms:this.terms
                }
                //유저데이터 정보 콘솔에서 확인
                console.log(JSON.stringify(this.userData))
                this.$store.dispatch('users/signUp' , this.userData)
                .then(() => {
                    alert('회원가입 성공')
                    this.$router.push('/')
                }).catch((err) => {
                    alert(`회원가입 실패 ${err}`)
                });
            }else{
                alert('양식을 모두 입력해주세요')
            }
        }
    }

}
</script>

<style>

</style>