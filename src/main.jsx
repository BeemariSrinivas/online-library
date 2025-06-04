import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BookDetails from './components/BookDetails.jsx'
import BrowseBooks from './components/BrowseBooks.jsx'
import AddBook from './components/AddBook.jsx'
import Error from './components/Error.jsx'
import Home from './components/Home.jsx'

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children :([
      {
        path : "/",
        element : <Home/>
      },
      {
        path : "/BrowseBooks",
        element : <BrowseBooks/>
      },
      {
        path : "/AddBook",
        element : <AddBook/>
      },
      {
        path : "/book/:id",
        element : <BookDetails/>
      },
      {
        path : "/category/:category",
        element : <BrowseBooks/>
      }
    ]),
    errorElement : <Error/>
  },
])

createRoot(document.getElementById('root')).render(
  //<StrictMode>
    <RouterProvider router={appRouter}/>
  //</StrictMode>,
)
