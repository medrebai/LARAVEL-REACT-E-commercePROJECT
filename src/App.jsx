import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Listarticle from './components/articles/Listarticle'
import Insertarticle from './components/articles/Listarticle'
import Editarticle from './components/articles/Editarticle'
import Viewarticle from './components/articles/Viewarticle'

import Editcategorie from './components/categories/Editcategorie'
import Insertcategorie from './components/categories/Insertcategorie'
import Listcategorie from './components/categories/Listcategorie'
import Viewcategorie from './components/categories/Viewcategorie'

import Listscategorie from './components/scategories/Listscategorie'
import Insertscategorie from './components/scategories/Insertscategorie'
import Editscategorie from './components/scategories/Editscategorie'
import Viewscategorie from './components/scategories/Viewscategorie'
import Menu from './components/Menu'


function App() {


  return (
    <>
    <Router>
      <Menu/>
      <Routes>
        <Route path="/articles"element={<Listarticle/>}/>
        <Route path="/articles/add"element={<Insertarticle/>}/>
        <Route path="/articles/edit/:id"element={<Editarticle/>}/>
        <Route path="/articles/view/:id"element={<Viewarticle/>}/>



        <Route path="/categories"element={<Listcategorie/>}/>
        <Route path="/categories/add"element={<Insertcategorie/>}/>
        <Route path="/categories/edit/:id"element={<Editcategorie/>}/>
        <Route path="/categories/view/:id"element={<Viewcategorie/>}/>



        <Route path="/scategories"element={<Listscategorie/>}/>
        <Route path="/scategories/add"element={<Insertscategorie/>}/>
        <Route path="/scategories/edit/:id"element={<Editscategorie/>}/>
        <Route path="/scategories/view/:id"element={<Viewscategorie/>}/>
        

      </Routes>
    </Router>
<h1>Bienvenue </h1>
    </>
  )
}

export default App
