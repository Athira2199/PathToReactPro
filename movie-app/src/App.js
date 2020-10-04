import React,{useState} from 'react';
import axios from 'axios'
import Search from './components/Search'
import Results from './components/Results'
import Result from './components/Result'
import Popup from './components/Popup'
function App() {

  const [state,setState] = useState({
    s:"",
    results:[],
    selected:{}
  })

  const apiurl = 'http://www.omdbapi.com/?apikey=4316db6'

  const search = (e)=>{
    if(e.key == 'Enter'){
      axios(`${apiurl}&s=${state.s}`).then((data)=>{
        setState({...state,results:data.data.Search})
        
      })
    }
  }

  const handleInput = (e)=>{
    let s = e.target.value;
    setState({...state,s:s})
  }  
  
  const openPopup = id=>{
    console.log(id)
    axios(`${apiurl}&i=${id}`).then(data=>{
      console.log(data.data)
      setState({...state,selected:data.data})
    })
  }

  const closePopup = ()=>{
    setState({...state,selected:{}})
  }

  return (
    <div className="App">
      <header className="header">
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search}/>
        {console.log(state.results)}
        {typeof state.results!='undefined'?<Results results={state.results} openPopup={openPopup}/>:<h1>No results for your search</h1>}
        
        {typeof state.selected.Title!='undefined'?<Popup closePopup={closePopup} selected={state.selected}/>:false}
      </main>
    </div>
  );
}

export default App;
