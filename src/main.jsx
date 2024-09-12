import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'

import Home from './page/Home'
import About from './page/About'
import Contact from './page/Contact'
import SingleProduct from './page/SingleProduct'
import Products from './page/Products'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "About",
        element: <About />
      },
      {
        path: "Contact",
        element: <Contact />
      },
      {
        path: "Products",
        element: <Products />
      },
      {
        path: "SingleProduct/:id",
        element: <SingleProduct />
      },
      {
        path: "*",
        element: <h1>Not found</h1>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}> </RouterProvider>
)
