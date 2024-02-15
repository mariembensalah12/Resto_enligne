<template>
     <Menu class="sticky-header" />
    
    <RouterView></RouterView>

    </template>
    <script setup>
    import Menu from './components/Menu.vue';
    


    
    
    </script>
     <style scoped>
     .sticky-header {
     position: fixed;
     top: 0;
     left: 0;
     width: 100%;
     background-color: #f1f1f1;
     padding: 10px;
     z-index: 1000;
     /* Ajoutez d'autres styles selon vos besoins */
     }
     </style>
     