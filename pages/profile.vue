<template>
    <div>
     <v-container>
         <v-card style="margin-bottom: 20px">
             <v-container>
                 <v-subheader>내 프로필</v-subheader>
             <v-form ref="form" v-model="valid" @submit.prevent="changeNickname">
                 <v-container>
                 <v-text-field
                 v-model="nickname"
                 label="닉네임"
                 required
                 :rules="nicknameRules"
                 />
                 <v-btn color="blue" type="submit">수정</v-btn>
                 </v-container>
             </v-form>
            </v-container>
         </v-card>
         <v-card style="margin-bottom: 20px">
             <v-container>
                 <v-subheader>팔로잉</v-subheader>
                    <follow-list></follow-list>
             </v-container>
         </v-card>
          <v-card style="margin-bottom: 20px">
             <v-container>
                 <v-subheader>팔로워</v-subheader>
                    <follow-list></follow-list>
             </v-container>
         </v-card>
     </v-container>
    </div>
</template>


<script>
import FollowList from '~/components/FollowList'
export default{
    data(){
        return{
            valid:false,
            nickname:'',
            nicknameRules:[v => !!v.trim() || '닉네임을 입력해주세요!!!'],
        }
    },
    components:{
        FollowList,
    },
    methods:{
        changeNickname(){
            this.$store.dispatch('users/changeNickname' , {nickname : this.nickname})
            console.log(this.nickname);
        }
    }
}
</script>

<style>

</style>