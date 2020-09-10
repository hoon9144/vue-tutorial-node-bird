<template>
 <v-app>
    <nav>
        <v-toolbar dark color="green">
            <v-toolbar-title>
                <nuxt-link to="/">VueBird</nuxt-link>
            </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-text-field label="검색" hide-details prepend-icon="mdi-magnify" :style="{display:'flex' , alignItems:'center'}" />
            <v-btn text nuxt to="/profile" :style="{display:'flex' , alignItems:'center'}">
                <div>프로필</div>
            </v-btn> 
            <v-btn text nuxt to="/signup" :style="{display:'flex' , alignItems:'center'}">
                <div>회원가입</div>
            </v-btn> 
        </v-toolbar-items> 
         </v-toolbar>
   </nav>
   <!--새로줄간 패딩 없애는설정 no-gutters-->
   <v-row no-gutters>
       <!--가로 전체영역을 12로하고 그중 4를 차지하겠다-->
       <v-col cols="12" md="4">
           <login-form></login-form>
       </v-col>
        <!--가로 전체영역을 12로하고 그중 8를 차지하겠다-->
       <v-col cols="12" md="8">
            <!--router-view 처럼 보여지는 페이지.-->
          <nuxt />
       </v-col>
   </v-row>
 </v-app>
</template>

<script>
import LoginForm from '~/components/LoginForm';
export default {
 components:{
     LoginForm,
 }
}
</script>