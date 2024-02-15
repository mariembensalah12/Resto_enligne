<template>
   <div class="drag">
<div v-if="isLoading">

<h2> Loading .... </h2>
</div>
<div v-else class="row">
    <div class="col-md-12" style="display:flex;flex-wrap:wrap;justify-content:center">

    <div class="card" style="width: 18rem; margin: 8px" v-for="article in articles" :key="article.id" >
            <img :src="article.imageart" :alt="article.name" width="200" height="200" />
            <div class="card-body">
              <h5 class="card-title">{{ article.name }}</h5>
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
    



</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from "../components/config/api";
import store from '../store';
import { useRoute } from 'vue-router';
const categoryName = ref('');
const articles = ref([]);


const getArticles = async () => {
    
    const route = useRoute(); // Utilisez useRoute pour obtenir la route actuelle
  const categoryId = route.params.categoryId;
  try {
    // Faites une requête API pour récupérer les articles en fonction de la catégorie
    const response = await axios.get(`http://localhost:8000/api/categories/${categoryId}/articles`);

    categoryName.value = response.data.nomcategorie; // Assurez-vous que votre API retourne le nom de la catégorie
    articles.value = response.data.articles;
  } catch (error) {
    console.error('Error fetching articles:', error);
  }
};
onMounted(() => {
  getArticles();
});
const addToCart=(prod)=> {
store.commit("Articlestore/addCart", {product:prod,qty:1});

}
</script>

<style lang="css" scoped>
.drag{
margin-top: 70px;
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


  
 
</style>