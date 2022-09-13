 export default function authHeader(){
    const useStr = localStorage.getItem("user")
    let user = null;
    if(useStr) {
        user = JSON.parse(useStr)
    }
    if (user && user.accessToken){
        return {Authorization:'Bearer' + user.accessToken}
    } else{
        return {Authorization:''}
    }
 }