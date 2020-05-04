<template>
<section class="signup-container">
    signup as {{userType}}
        <component v-if="userType" :is="`${userType}Create`" class="user-signup"></component>
</section>
</template>

<script>
import influencerCreate from '../cmps/influencer/influencer-create.vue'
import brandCreate from '../cmps/brand-create.vue'
export default {
    name: 'signup-page',
    data(){
        return{
            userType: 'brand'
        }
    },
    methods:{
        setUsesrType(userType){
            this.userType = userType;
        }
    },
    components:{
        influencerCreate,
        brandCreate
    }
}
</script>
