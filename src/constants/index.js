import Home from "../containers/Home";
import ProductListPage from "../containers/ProductListPage";
import Service from "../containers/Service";
import Cart from "../containers/Cart";
import Checkout from "../containers/Checkout";
import Pages from "../containers/Pages";
import BlogSidebar from "../containers/BlogSidebar";
import ContactUs from "../containers/ContactUs";

export const API_URL = "http://localhost/pishop/api";

export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  UPDATED: 202,
};

export const FILTER_PRICE = [
  {
    value: "20-50",
    label: "20$ - 50$",
  },
  {
    value: "50-100",
    label: "50$ - 100$",
  },
  {
    value: "100-250",
    label: "100$ - 250$",
  },
];

export const OPTION_SORT_NUMBER = [
  { value: 9, label: "09" },
  { value: 15, label: "15" },
  { value: 25, label: "25" },
];

export const OPTION_SORT_TYPE = [
  { value: "name", label: "Name" },
  { value: "price", label: "Price" },
  { value: "size", label: "Size" },
];
export const FRONTEND_ROUTES = [
  {
    path: "/",
    name: "Home",
    exact: true,
    component: Home,
  },
  {
    path: "/product-list",
    name: "Product",
    exact: true,
    component: ProductListPage,
  },
  {
    path: "/service",
    name: "Service",
    exact: true,
    component: Service,
  },
  {
    path: "/shop-grid",
    name: "Shop Grid",
    exact: true,
    component: ProductListPage,
  },
  {
    path: "/cart",
    name: "Cart",
    exact: true,
    component: Cart,
  },
  {
    path: "/checkout",
    name: "Checkout",
    exact: true,
    component: Checkout,
  },
  {
    path: "/pages",
    name: "Pages",
    exact: true,
    component: Pages,
  },
  {
    path: "/blog",
    name: "Blog",
    exact: true,
    component: BlogSidebar,
  },
  {
    path: "/blog/single-sidebar",
    name: "Blog Single Sidebar",
    exact: true,
    component: BlogSidebar,
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    exact: true,
    component: ContactUs,
  },
];
