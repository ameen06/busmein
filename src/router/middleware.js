import axios from "@/axios"
import IonicPreference from '@/store/IonicPreference'

const middlewares = {
    checkForRoutes: async function (to, from) {
        const user = await IonicPreference.getPreference('user_zxery');

        if(user != null && to.name == 'login') {
            return {name: from.name}
        }
        else if(user != null && to.name == 'register') {
            return {name: from.name}
        }
        else{
            return true
        }
    },
    checkBearerToken: async function() {
        var user = await IonicPreference.getPreference('user_zxery');

        if(!user) {
            axios.defaults.headers.common['Authorization'] = '';
            return {name: 'login'}
        }
        
        user = JSON.parse(user);
        axios.defaults.headers.common['Authorization'] = `Bearer ${user.auth_token}`;

        return true
    }
}

export default middlewares