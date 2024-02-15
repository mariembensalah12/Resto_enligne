import Accueil from './components/accueil.vue';
import ArticlesList from './components/ArticlesList.vue'; 
import Cart from './components/cart/Cart.vue';
import Payment from './components/cart/Payment.vue';
import ViewCategory from './components/categories/viewCategory.vue';
import addCategory from "./components/categories/addCategory.vue";
import EditCategory from './components/categories/editCategory.vue';
import Viewarticletable from "./components/articles/Viewarticletable.vue"
import About from "./components/About.vue"
import Login from './components/authentification/login.vue'
import Register from './components/authentification/register.vue'

export const routes = [
{
name: 'accueil',
path: '/',
component: Accueil
},
{
    path: '/categories/:categoryId/articles',
    name: 'category-articles',
    component: ArticlesList,
    
  },
  {
    path:'/cart',
    name:'Cart',
    component:Cart
    },
    {
      path:'/payment',
      name:'Payment',
      component:Payment,
      

      },
      {
        name: 'Viewcategorie',
        path: '/categories',
        component: ViewCategory,
        meta:{isAuth:true}
        },
        {
          name:"Addcategorie",
          path:"/addcategorie",
          component:addCategory
          },
          {
            name: 'editCategory',
            path: '/editCategory/:id',
            component: EditCategory
},{
  name:"Viewarticletable",
  path:"/articletable",
  component:Viewarticletable,meta:{isAuth:true}
  },
  {
    name:"about",
    path:"/about",
    component:About
  },{
    name: "login",
    path: "/login",
    component: Login,
    },
    {
    name: "register",
    path: "/register",
    component: Register,
    },

];

 