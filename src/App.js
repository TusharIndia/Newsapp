import Navbar from './components/child_component/Navbar';
import News from './components/News';
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


const App = () => {
  const [mode,setMode] = useState('light');
  const [progress,setProgress] = useState(0);
  let country = 'in';

  const togglemode = () => {
    if(mode === "light"){
      setMode('dark');
      document.body.style.backgroundColor = "#292b2d";
    }else{
      setMode('light');
      document.body.style.backgroundColor = "white";
    }
  }

  // setProgress = (progress) =>{
  //   .setState({progress: progress});
  // }

  // togglecountry = async(count) =>  {
  //   console.log(count);
  //   await .setState({country: count});
  //   .render();
  //   console.log(country);
  // }

  let pagesize = 5;
  let apikey = process.env.REACT_APP_NEWS_API 
  // apikey = "6f413f3771e84ce78d41bf9ea363242e";
  // let apikey = "a2c22d0d25ad49e1a4032a90f41d3781";
  return (
      <Router>
      {/* {console.log(apikey)} */}
      <Navbar mode={mode} togglemode={togglemode} country={country}></Navbar>
      <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
      <Routes>
        <Route exact path="/" element={<News apikey={apikey} setProgress={setProgress} mode={mode} pagesize={pagesize} country={country} category={'general'}></News>} />
        <Route exact path="/business" element={<News apikey={apikey} setProgress={setProgress} key="business" mode={mode} pagesize={pagesize} country={country} category={'business'}></News>} />
        <Route exact path="/entertainment" element={<News apikey={apikey} setProgress={setProgress} key="entertainment" mode={mode} pagesize={pagesize} country={country} category={'entertainment'}></News>} /> 
        <Route exact path="/general" element={<News apikey={apikey} setProgress={setProgress} key="general" mode={mode} pagesize={pagesize} country={country} category={'general'}></News>} />
        <Route exact path="/health" element={<News apikey={apikey} setProgress={setProgress} key="health" mode={mode} pagesize={pagesize} country={country} category={'health'}></News>} />
        <Route exact path="/science" element={<News apikey={apikey} setProgress={setProgress} key="science" mode={mode} pagesize={pagesize} country={country} category={'science'}></News>} />
        <Route exact path="/sports" element={<News apikey={apikey} setProgress={setProgress} key="sports" mode={mode} pagesize={pagesize} country={country} category={'sports'}></News>} />
        <Route exact path="/technology" element={<News apikey={apikey} setProgress={setProgress} key="technology" mode={mode} pagesize={pagesize} country={country} category={'technology'}></News>} />
      </Routes>
    </Router>      
    )
}

export default App;