const initstate={}
const authReducer=(state=initstate,action) =>{
    switch(action.type){
        case 'LOGIN_ERROR':
            return {...state,authError:'Login Failed'}
        case 'LOGIN_SUCCESS':
            console.log('Success')
            return {...state,authError:null}
        case 'SIGNOUT_SUCCESS':
            console.log('SignOut Success')
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('SignOut Success')
            return {...state,authError:null}
        case 'SIGNUP_ERROR':
            console.log('SignOut Error')
            return {...state,authError:action.err.message}
       default :
            return state
    }

}

export default authReducer