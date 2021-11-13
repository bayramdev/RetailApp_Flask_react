import { lazy } from 'react'

import OsHome from './OsHome'
import OsBrand from './OsBrand'
import OsCategory from './OsCategory'

const routes = [
  { path: '/home', name: 'Home', component: OsHome },
  { path: '/products', name: 'Category', component: OsCategory },
  { path: '/brands', name: 'Brand', component: OsBrand },
]

export default routes