import OsHomePage from './pages/OsHomePage'
import OsBrandPage from './pages/OsBrandPage'
import OsCategoryPage from './pages/OsCategoryPage'
import OsProductPage from './pages/OsProductPage'
import OsCheckoutPage from './pages/OsCheckoutPage'
import { withRouter } from 'react-router-dom'

const routes = [
  { path: '', name: 'Home', component: withRouter(OsHomePage), exact: true },
  { path: '/products/:category', name: 'Category', component: withRouter(OsCategoryPage), exact: true },
  { path: '/product/:sku', name: 'Product', component: withRouter(OsProductPage), exact: true },
  { path: '/brands/:brand', name: 'Brand', component: OsBrandPage },
  { path: '/checkout', name: 'Checkout', component: OsCheckoutPage },
]

export default routes