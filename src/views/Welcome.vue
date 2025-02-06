<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue"
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import Navigation from '../views/Navigation.vue';
import Progress from '../views/Progress.vue';
import Live from '../views/Live.vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { RouterView } from 'vue-router';
library.add(faCaretDown);


const router = useRouter();
const firstName = ref("");
const userName=ref('');
//const firstName=ref('');
const lastName=ref('');
const email=ref('');

onMounted(()=>{
  const value = localStorage.getItem("userName");
  const token = localStorage.getItem("token");
  console.log("Token retrieved:", token);
    if(value){
      let name= JSON.parse(value);
      firstName.value=name.firstName || "Guest";
      console.log('Name:'+ name.userName);
    }

});

async function signOut(event){


    const token = localStorage.getItem("token");

    console.log("Token: "+ token);
    console.log("Locals: "+ localStorage.getItem('token'))
    //console.log("Lastname: "+ localStorage.getItem("lastName" ));
    const serverUrl= 'https://hap-app-api.azurewebsites.net/user/logout';
    const options = {
	    method: "POST",
		  headers: {
			Authorization: `Bearer ${token}`,
		},
	};
  let response = await fetch(serverUrl,options)
  console.log("Status: "+ response.status)


    if(response.status===200){




      localStorage.clear();
      console.log("You have been successfully logged out");

      router.push("/");

    }

  else {
		console.log("HTTP-Error: " + response.status)
	}
}
async function deleteFunc(e) {
  e.preventDefault();
  let result= confirm("Are you sure you want to delete your Account?");
  if(result){
    const token= localStorage.getItem("token");
    console.log(token);

    const serverUrl = "https://hap-app-api.azurewebsites.net/user";
    const options = {
      method :"DELETE",
      headers:{Authorization:`Bearer ${token}`,

    },

    };
    let response= await fetch(serverUrl,options);

    if(response.ok){
      localStorage.removeItem("token")
      alert("Your account has been successfully deleted!")
      router.push("/")


    }
    else{
      console.log("error!!")
    }
  }
  else{
    console.log("Account deletion canceled!")
  }
}
  async function profileFunc(event){
    event.preventDefault();

    const token = localStorage.getItem("token");

    console.log("Token: "+ token);
    console.log("Locals: "+ localStorage.getItem('token'))
    const serverUrl= 'https://hap-app-api.azurewebsites.net/user';
    const options = {
      method: "GET",
      headers: {
      Authorization: `Bearer ${token}`,
    },
    };
    let response = await fetch(serverUrl,options)
    console.log("Status: "+ response.status)


    if(response.status===200){
      //firstName.value= localStorage.getItem("firstName");
      //lastName.value=localStorage.getItem("lastName");
      //userName.value=localStorage.getItem("userName");
     // email.value=localStorage.getItem("email");


      console.log("Got user's data");


    }

    else {
    console.log("HTTP-Error: " + response.status)
    }
  }





</script>

<template>
  <div class="view">
  <Header>
    <nav>
      <a @click.prevent="signOut" class="link">Log Out</a>
    </nav>
    <div class="dropdown">
    <font-awesome-icon :icon="['fas', 'caret-down']" />
    <div class="content">
    <div @click="deleteFunc">
      <a>DELETE</a>
    </div>
    <div>
      <RouterLink to="/welcome/profile"><a>PROFILE</a></RouterLink>
    </div>
    </div>

    </div>
  </Header>

  <!--<h1 class="container">WELCOME, {{ firstName }}!</h1>-->
  <main>
       <RouterView name="leftSidebar" class="column">

      </RouterView>
       <RouterView name="focus" class="column">
        </RouterView>
       <RouterView name="rightSidebar" class="column">
         </RouterView>
    </main>
  <Footer>

  </Footer>
  </div>
</template>

<style scoped></style>
