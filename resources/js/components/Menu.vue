<template>
 <nav class="navbar navbar-expand-lg bg-danger" data-bs-theme="dark">
  <div class="container-fluid">
    <RouterLink class="navbar-brand" to="/">Délicieuses Recettes</RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink class="nav-link active" aria-current="page"  to="/">Home</RouterLink>
        </li>
       
        <li  class="nav-item">
          <router-link to="/categories" class="nav-item nav-link">Categories</router-link>
        </li>
       
        <li class="nav-item">
          <router-link class="nav-link active" to="/articletable">Articles
</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" to="/about">About
</router-link>
        </li>
      </ul>
    
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">

<router-link class="nav-link active" to="/login">Login
</router-link>
</li>
<li class="nav-item">
<router-link class="nav-link active" to="/register">Register
</router-link>
</li>
<li class="nav-item">
<button @click="logout">Logout</button>
</li>
    <li class="nav-item me-3">
        <router-link class="nav-link position-relative"
            :class="$route.name === 'Cart' ? 'active' : ''" 
            aria-current="page" 
            :to="{ name: 'Cart' }">

            <i class="fa-solid fa-cart-shopping fa-lg" style="color: #ffffff;"></i>

            <span v-if="$store.state.Articlestore.cart.length > 0"
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill ">

                {{ $store.state.Articlestore.cart.length }}
            </span>
        </router-link>
    </li>
</ul>


    </div>
  </div>
</nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import axios from 'axios';
import { useRouter } from 'vue-router';
const router = useRouter();
const logout=async()=> {
let token=""

token=localStorage.getItem('token')
console.log(token)
axios.post('http://localhost:8000/api/logout', null, {

  headers: {
'Authorization': `Bearer ${token}`
}
})

.then((response) => {
console.log(response)
localStorage.removeItem('token')
localStorage.removeItem('user')
router.push("/login")
})
.catch(err => {console.log(err);alert(err) })

}

</script>

<style lang="scss" scoped>

</style>