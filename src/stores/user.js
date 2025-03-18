import { defineStore } from "pinia";
import {ref, computed} from "vue";

export const userProfile = defineStore('user', ()=>{
  const token = ref(localStorage.getItem('token') || '');
  const firstName = ref('');
  const lastName = ref('');
  const userName = ref('');
  const email = ref('');
  const password = ref('');

  const profileName = computed (()=>
    firstName.value + ' ' + lastName.value

  )
  function setUser(fName,lName,uName,email){
    firstName.value= fName ?? ''
    lastName.value=lName ?? ''
    userName.value= uName ??''
    email.value= email ?? ''
  }
  function setToken(newToken){
    token.value = newToken;
    localStorage.setItem('token',newToken);
  }

  function clearToken(){
    token.value = '';
    localStorage.removeItem('token');
  }


  return{firstName,lastName,userName,profileName,email,token,setUser,setToken,clearToken,getToken}
})
