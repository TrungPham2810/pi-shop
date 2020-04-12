import Home from "../containers/Home";
import ProductList from "../containers/ProductList";
import Service from "../containers/Service";
import Cart from "../containers/Cart";
import Checkout from "../containers/Checkout";
import Pages from "../containers/Pages";
import BlogSidebar from "../containers/BlogSidebar";
import ContactUs from "../containers/ContactUs";

export const FRONTEND_ROUTES = [
    {
        path:'/',
        name:'Home',
        exact:true,
        component: Home
    },
    {
        path:'/product',
        name:'Product',
        exact:true,
        component: ProductList
    },
    {
        path:'/service',
        name:'Service',
        exact:true,
        component: Service
    },
    {
        path:'/shop-grid',
        name:'Shop Grid',
        exact:true,
        component: ProductList
    },
    {
        path:'/cart',
        name:'Cart',
        exact:true,
        component: Cart
    },
    {
        path:'/checkout',
        name:'Checkout',
        exact:true,
        component: Checkout
    },
    {
        path:'/shop',
        name:'Shop',
        exact:true,
        component: ProductList,
    
    },
    {
        path:'/pages',
        name:'Pages',
        exact:true,
        component: Pages
    },
    {
        path:'/blog',
        name:'Blog',
        exact:true,
        component: BlogSidebar,
       
    },
    {
        path:'/blog/single-sidebar',
        name:'Blog Single Sidebar',
        exact:true,
        component: BlogSidebar
    },
    {
        path:'/contact-us',
        name:'Contact Us',
        exact:true,
        component: ContactUs
    },
];