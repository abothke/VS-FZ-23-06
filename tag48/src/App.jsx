import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './assets/pages/home/Home'
import About from './assets/pages/about/About'
import Contact from './assets/pages/contact/Contact'
import UserList from './components/userList/UserList'
import UserDetail from './components/userDetail/UserDetail'

function App() {

  return (
    <>
      <Routes>
        <Route
        path='/'
        element={<Home />}
        />
        <Route 
        path='/about'
        element={<About />}
        />
        <Route 
        path='/contact'
        element={<Contact />}
        />
        <Route 
        path='/userlist'
        element={<UserList />}
        />
        <Route
        path='/userlist/:id'
        element={<UserDetail
        />} />
      </Routes>
    </>
  )
}

export default App