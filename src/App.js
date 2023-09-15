import React from 'react';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import RecommendedVideos from './components/recommendedVideos/recommendedVideos';
import SearchPage from './pages/searchPage/searchPage';
import './App.css';



function App(){
    return <div className='app'>
        
        <Router>
            <Header />
            <Routes>            
                <Route 
                    path='/' 
                    element={
                        <div className='app__page'>
                            <Sidebar />
                            <RecommendedVideos />
                        </div>
                    }>              
                </Route>
                
                <Route 
                    path='/search/:items' 
                    element={
                        <div className='app__page'>
                            <Sidebar />
                            <SearchPage />
                        </div>
                    }>               
                </Route>
            </Routes>
        </Router>
    </div>
    

    
};

export default App;