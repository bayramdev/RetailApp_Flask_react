import OsHomePage from './pages/OsHomePage'
import OsBrandPage from './pages/OsBrandPage'
import OsCategoryPage from './pages/OsCategoryPage'
import OsProductPage from './pages/OsProductPage'
import OsCheckoutPage from './pages/OsCheckoutPage'

const routes = [
  { path: '', name: 'Home', component: OsHomePage, exact: true },
  { path: '/products/:category', name: 'Category', component: OsCategoryPage },
  { path: '/product', name: 'Product', component: OsProductPage },
  { path: '/brands', name: 'Brand', component: OsBrandPage },
  { path: '/checkout', name: 'Checkout', component: OsCheckoutPage },
]

export default routes