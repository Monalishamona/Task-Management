import React from 'react'
import Home from './pages/Home'
import ImportantTask from './pages/ImportantTask'
import Alltasks from './pages/Alltasks'
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import CompletedTasks from './pages/CompletedTasks';
import IncompleteTask from './pages/IncompleteTask';
import Signup from './pages/Signup';
import Login from './pages/Login';
const App = () => {
  return (
    <div className="bg-gray-900 text-white h-screen p-2 relative">
      <Router>
        <Routes>
        <Route exact path='/' element={<Home />} >
        <Route  index element={<Alltasks />} />
        <Route path='/importantTasks' element={<ImportantTask />}/>
        <Route path='/completedTasks' element={<CompletedTasks />}/>
        <Route path='/incompletedTasks' element={<IncompleteTask />}/>
        {/* <Route exact path='/' element={<Home />} /> */}
        </Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App

