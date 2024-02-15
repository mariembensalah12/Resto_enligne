<template>
    <Addarticletable/>

 <div class="card">
     <DataTable :value="articles" stripedRows  paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]"  showGridlines  dataKey="id" :loading="isLoading">
         <Column header="Image">
           <template #body="{ data }" >
              <img :src="data.imageart"   class="shadow-6" width="100"/> 
           </template>
         </Column>
       
         <Column field="name" header="name"  sortable ></Column>
        
         
         <Column field="prix" header="Prix"  sortable ></Column>
         <Column field="id" header="Actions" style="min-width: 12rem">
     <template #body="val">
     
         <div class="d-flex">
     <Cardarticle :art="val.data"/>
      
     <Editarticletable  :art="val.data" />
     <button type="button" class="btn btn-warning rounded-circle " @click="deletearticle(val.data.id)">
         <span style="color: rgb(245, 5, 5)">
             <i class="fa-solid fa-trash"></i>
   
    </span>
    
     </button> 
    </div>
         </template>
         </Column>
 </DataTable>
 </div>

</template>

<script setup>
import api from '../config/api';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { ref,onMounted } from 'vue';
import Editarticletable from './Editarticletable.vue';
import Addarticletable from './Addarticletable.vue';
import Cardarticle from './Cardarticle.vue';
const articles=ref([])
const isLoading=ref(true)
const getarticles=async()=>{
await api.get("/api/articles")
.then(res=>{
 articles.value=res.data
 isLoading.value=false
 
})
.catch(error=>{
 console.log(error)
})
}

onMounted(() => {
 getarticles();
});


const deletearticle=async(id)=>{
if (window.confirm("Etes-vous sûr de vouloir supprimer ?")) {
 try {
     await api.delete(`/api/articles/${id}`)
     getarticles()
} catch (error) {
 console.log(error)
     
 }
}

}
</script>
<style scoped>
.drag{
margin-top: 100px;
}
</style>