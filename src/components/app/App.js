import React, {useState, createContext} from "react";
import {Routes, Route} from "react-router-dom";
import NotFound from "../notFound/NotFound";
import {routes} from "../../routes/Routes";

export const store = createContext();

const App = () => {
    const [url, setUrl] = useState('https://api.goup.uz/api/v1/');

    return <store.Provider value={{url}}>
        <Routes>
            {routes.map((route, index) => (<Route key={index} {...route} />))}
            <Route path={'*'} element={<NotFound/>}/>
        </Routes>
    </store.Provider>
};

export default App;