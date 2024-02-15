<template>
    <div class="aa">
       
            <router-link :to="{name: 'Addcategorie'}" class="btn btn-primary">New
Category</router-link>
        </div>


        <div class="py-6">
<table class="table table-striped shadow">
<thead>
<tr>
<td>Image</td>
<td>Nom catégorie</td>
<td>Modifier</td>
<td>Supprimer</td>
</tr>
</thead>
<tbody>
<tr v-for="cat in categories" :key="cat.id">
<td><img :src="cat.imagecategorie" width="70"

height="80"/> </td>

<td>{{ cat.nomcategorie }}</td>
<td>
<router-link :to="{name: 'editCategory', params: { id: cat.id }}" class="btn btn-warning">Modifier</router-link>
</td>
<td><button class="btn btn-danger mx-2"
@click="deletecategorie(cat.id)">Supprimer</button></td>
</tr>
</tbody>
</table>

</div>

  
</template>

<script setup>
import { ref,onMounted } from 'vue';
import axios from 'axios';
const categories=ref([])
const getcategories=async()=>{
await axios.get("http://localhost:8000/api/categories")
.then(res=>{
categories.value=res.data
console.log(categories.value)
})
.catch(error=>{
console.log(error)
})
}
onMounted(() => {
getcategories();
});
const deletecategorie=async(id)=>{
try {
await axios.delete(`http://localhost:8000/api/categories/${id}`)

getcategories()
} catch (error) {
console.log(error)
}
}
</script>

<style lang="css" scoped>
.aa{
    margin-top: 60px;
}
</style>