import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AllData from './screens/AllData'
import Dashboard from './screens/Dashboard'
import ParticularData from './screens/ParticularData'


const App = () => {
  return (
    <Router>

      <main className='py-3'>
        <Route path='/' component={Dashboard} exact />
        <Route path='/data' component={AllData} exact />
        <Route path='/api/info/:id' component={ParticularData} />
      </main>
    </Router>
  )
}

export default App
