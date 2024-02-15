<template>
  <div class="app-container">
    <div class="front-wrapper">
      <div class="front-sidebar">
        <div class="brand">
          <h1><span class="ti-bolt"></span></h1>
        </div>
        <div class="front-sidemenu">
          <div v-for="cat in categories" :key="cat.id" >
            <div>
              <img :src="cat.imagecategorie" width="70" height="80" />
              <router-link :to="{ name: 'category-articles', params: { categoryId: cat.id } }">
                <button type="button" class="btn btn-light">{{ cat.nomcategorie }}</button>
</router-link>

            </div>
          </div>
        </div>
      </div>
      <div class="front-main">
            <div class="main-grid">
               
      <div class="main-content">
        
        
          <div class="row">
          <div class="card" style="width: 18rem; margin: 6px" v-for="article in articles" :key="article.id">
            <img :src="article.imageart" :alt="article.name" width="200" height="200" />
            <div class="card-body">
              <h5 class="card-title">{{ article.name.substr(0, 20) }}</h5>
              <div style="text-align: center">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Prix : {{ article.prix }} TND</li>
                </ul>
                <button class="btn btn-outline-primary" @click="addToCart(article)">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
 
  
</template>

<script setup >
import { ref, onMounted } from 'vue';
import axios from "../components/config/api";
import store from '../store';
import { RouterLink } from 'vue-router';

const categories = ref([]);
const articles = ref([]);

const selectedCategory = ref(null);

const getcategories = async () => {
  await axios.get("http://localhost:8000/api/categories")
    .then(res => { categories.value = res.data; })
    .catch(error => { console.log(error); });
};


const getArticles = (page = 1) => {
  axios.get('/api/articles/')
    .then(response => { articles.value = response.data; });
};





const addToCart = (article) => {
  store.commit("Articlestore/addCart", { product: article, qty: 1 });
};

onMounted(() => {
  getcategories();
  getArticles();
});

</script>

<style lang="css" scoped>
.app-container {
  display: flex;
}

.front-wrapper {
  display: flex;
}

.front-sidebar {
  width: 150px;
  background-color: #f0f0f0;
  padding: 20px;
  margin-top: 20px;
}

.brand {
  text-align: center;
  margin-bottom: 20px;
}

.front-sidemenu {
  display: flex;
  flex-direction: column;
}

.front-sidemenu div {
  margin-bottom: 10px;
  cursor: pointer;
}
.row {
  display: flex;
  flex-wrap: wrap;
}

.card {
  width: calc(33.33% - 12px);
  margin: 6px;
  box-sizing: border-box;
}

.new-row {
  clear: both;
}
.front-main {
  margin-top: 60px; /* Ajoutez la marge que vous souhaitez */
}
</style>
