import OsHomePage from './pages/OsHomePage'
import OsBrandPage from './pages/OsBrandPage'
import OsCategoryPage from './pages/OsCategoryPage'
import OsProductPage from './pages/OsProductPage'

const routes = [
  { path: '/', name: 'Home', component: OsHomePage, exact: true },
  { path: '/products', name: 'Category', component: OsCategoryPage },
  { path: '/product', name: 'Product', component: OsProductPage },
  { path: '/brands', name: 'Brand', component: OsBrandPage },
]

export default routes