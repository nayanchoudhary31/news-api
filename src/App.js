import React from 'react';
import { NewsContextProvider } from './components/NewsContext';
import News from './components/News';
import './app.css'

const App = ()=>{
    return(
        <NewsContextProvider>
            <News/>
        </NewsContextProvider>
        
    )

}

export default App;