<template>
    <div>
        <div class="aa">
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2
shadow">
        <h3 class="text-center">Edit Category</h3>
<div class="row">
<div class="col-md-6">
<form @submit.prevent="updateCategorie">
<div class="form-group">
<label>Name</label>

<input type="text" class="form-control" v-model="categorie.nomcategorie">

</div>
<div class="form-group">
<label>Image</label>

<input type="text" class="form-control" v-model="categorie.imagecategorie">

</div>
<button type="submit" class="btn btn-primary">Update</button>
</form>
</div>
</div>

    </div>
        </div></div>
</template>

<script setup>
import axios from 'axios';
import { useRouter,useRoute } from 'vue-router';
const router = useRouter() ;
const route = useRoute();
import { ref, onMounted } from 'vue';
const categorie = ref({});
const fetchCategorie= async()=> {
await axios
.get(`http://localhost:8000/api/categories/${route.params.id}`)
.then((res) => {
categorie.value = res.data;
})
.catch((err) => {console.error(err)})

}
const updateCategorie= ()=> {
 axios
.patch(`http://localhost:8000/api/categories/${route.params.id}`, categorie.value)

.then(() => {
router.push({ name: 'Viewcategorie' });
})
.catch((err) => {console.error(err)})
}

onMounted(async() => {
await fetchCategorie();
});
</script>

<style lang="css" scoped>
.aa{
    margin-top: 90px;
}
</style>

