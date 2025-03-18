<script setup>
import { onMounted } from 'vue'
import Messages from './Messages.vue'
import {ref} from 'vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { RouterLink } from 'vue-router';
import { RouterView } from 'vue-router';

library.add(faMagnifyingGlass);


  const messages = ref([]);
  const newMessagesCount= ref('')
  const latestMessageTime = new Date().toISOString();
  const newMessagesTime = ref('');
  const search=ref([]);
  const  users= ref([]);
  const firstName=ref('');
  const showResults = ref(false);
  const lastName=ref('');
  //newMessagesTime.value= messages.value[0].updatedAt;


  async function getMessages() {


    const token = localStorage.getItem("token");
   // const latestMessageTime = messages.value[0].updatedAt;

    const serverUrl=`https://hap-app-api.azurewebsites.net/messages?limit=10`
    const options = {
      method: "GET",
      headers:{
        Authorization:`Bearer ${token}`,
      },



    };
    let response = await fetch(serverUrl,options);
    if(response.ok){
      const data = await response.json();
      messages.value.push(...data);
      newMessagesTime.value= messages.value[0].updatedAt;


      console.log("messages");
    }
    else{
      console.log(response.status);
    }

  }


  function autoLoad(){
  const intersectionObserver = new IntersectionObserver((arr)=>{
    for(let entry of arr){
      if(entry.isIntersecting){
          getMessages();

      }
    }

  },


   {
        //root: document.querySelector("main"),
        root: null,
        threshold:0.1,
        //rootMargin: "-40px"
    }
  );
    //intersectionObserver.observe(document.querySelector("#btn-load"))  // observe the footer
    const loadMorebutton = document.querySelector("#btn-load");
    if(loadMorebutton){
      intersectionObserver.observe(loadMorebutton);
    }


  }

  async function countMessages() {
   // event.preventDefault();
    //getMessages();

   //this is supposed to represent the time of the last value added in the server
   console.log('Old time'+ newMessagesTime.value)

    const token = localStorage.getItem("token");
    const serverUrl= `https://hap-app-api.azurewebsites.net/messages/count?after=${newMessagesTime.value}`
    console.log('Value'+ newMessagesTime.value);
    const options ={
      method: "GET",
      headers:{
      Authorization: `Bearer ${token}`,
    },

    };
    let response= await fetch(serverUrl,options);
    if(response.status==200){

      const data= await response.json();

      newMessagesCount.value=data.total;
      console.log(data.total);




      console.log('new Messages shown');
    //console.log("count: "+ newMessagesCount.value);

    }
    else{
      console.log('Status of response '+response.status);
    }
  }




  //This function basically shows new messages at the top
  async function showNewMessages(event){
    event.preventDefault();
    //const latestMessageTime = new Date().toISOString();
    //console.log(latestMessageTime);
    const token = localStorage.getItem("token");
    const serverUrl=`https://hap-app-api.azurewebsites.net/messages?limit=1&after=${newMessagesTime.value}`;
    const options = {
      method: "GET",
      headers:{
        Authorization:`Bearer ${token}`,
      },



    };
    let response = await fetch(serverUrl,options);
    const data = await response.json();
    if(data.total===0){
      console.log('no new messages')
      return;
    }
    if(response.status===200){


      messages.value.unshift(...data);

      console.log("showing messages");

    }
    else{
      console.log('error in showing messages');

    }

  }
  async function searchUsers(event){
    event.preventDefault();


    const token = localStorage.getItem("token");
    console.log(search.value);
    const serverUrl=`https://hap-app-api.azurewebsites.net/users?search=firstName:${search.value}|lastName:${search.value}&sortBy=firstName:asc|firstName:desc&skip=0&limit=1`;

    const options = {
      method: "GET",
      headers:{
        Authorization:`Bearer ${token}`,
      },
     // body: JSON.stringify(users),



    };
    let response = await fetch(serverUrl,options);

    console.log(response)

    if(response.status===200){
      users.value = await response.json();
      console.log(users.value)



      //console.log(search.value);



    }
    else{
      console.log('error in showing users');

    }

  }




onMounted(async () => {


   await getMessages();
   countMessages();
   autoLoad();




  });




</script>

<template>
  <main>
    <section>
      <div >
        <input type="text" v-model="search" class="searchLogoWrap" placeholder="Search Users">

        <font-awesome-icon :icon="['fas', 'magnifying-glass']"  class="searchLogo"  @click="searchUsers"/>
        <div v-if="users.length>0" class="searchBox" >
        <RouterLink style="text-decoration: none;" v-for="(user,key) in users" :key="key" :to="`/user/${user._id}?name=${user.userName}`">
    {{ user.firstName }} {{ user.lastName }}
  </RouterLink>

</div>

        </div>
    <button @click="showNewMessages" class="display-messageCount">


      <div > </div>Show new Messages</button>
    <div class="message-box">
      <Messages v-for="(message,index) in messages" :key="index"
      :senderName="message.senderName"
      :updatedAt="message.updatedAt"
      :text="message.text"

    />

    <button id="btn-load">Show More Message</button>
    </div>



    </section>



  </main>
</template>


<style>
body{
  box-sizing: border-box;
  margin: 0;



}

section {
  margin-top: 0px;
  background-color: rgb(152, 145, 210);

  height:75vh;
  width: 33vw;
  overflow: hidden;


}
.message-box{


  overflow-y: scroll;
  overflow-x: hidden;
  height: 300px;
  width:33vw;



}
.searchBox{
  background-color:white;
  margin-top: 20px;
  height: 100px;
  border-radius: 20px;
  align-content: center;

}
#btn-load{
  cursor: pointer;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 100vmax;
  padding: 1.25em 1.5em;
  font-weight: var(--fw-bold);
  font-size: var(--fs-button);
  line-height: 1;
  position: relative;
  margin-top:30px;
}
#btn-load:hover{
  background-color: #484650;
}
.display-messageCount{
  cursor: pointer;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 100vmax;
  padding: 1.25em 1.5em;
  font-weight: var(--fw-bold);
  font-size: var(--fs-button);
  line-height: 1;
  position: relative;
  margin-top:50px;
  margin-bottom: 20px;


}
.display-messageCount:hover{
  background-color: #484650;

}
.searchLogo{
  position: relative;
  display: flex;
  justify-self: end;
  padding-right: 35px;
  margin-top: -26px;
  color: black;
  cursor: pointer;


}
.searchLogoWrap{
  height:30px;
  width: 30vw;
  background-color: rgb(238, 234, 234);
  border: 2px solid black;
  margin-top: 30px;
  border-radius: 10px;

}

</style>
