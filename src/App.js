import React, {useState, useEffect} from 'react';
import HomePage from './components/HomePage.js'
import {BrowserRouter as Router, Switch, useParams, Route} from 'react-router-dom'
import NavBar from './components/NavBar.js'
import UserDetail from './components/UserDetail.js'

function App() {
  const [apiData, setApiData] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch("https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key=7NCtbfWhgRdL5fMepnGCYrJIsVxIP2hN")
      .then(resp => resp.json())
      .then(data => {
        setApiData(data)
        setIsLoading(false)
      })
  }, [])

  if(isLoading) {
    return (
      <div>
        <h1>LOADING</h1>
      </div>
    )
  } else {
    // return (
    //   <div>
    //     <h1>{apiData.results.map(el => <p>{el.display_title}</p>)}</h1>
    //   </div>
    // )

    return (
      <Router>
        <NavBar/>
        <div>
          <Switch>
            <Route exact path="/">
              <HomePage apiData={apiData}/>
            </Route>
            <Route exact path="/userDetail/:id" children={
              <UserDetail apiData={apiData}/>
            }/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
