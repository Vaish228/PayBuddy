import { Routes, Route } from 'react-router-dom';
import NotFound from '../pages/NotFound.jsx';
import BasicLayout from '../layouts/BasicLayout.jsx';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Contact from '../pages/Contact.jsx';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<BasicLayout/>}>
            
            <Route path='/' element={<Home/>}></Route>
            <Route path='/About' element = {<About/>}/>
            <Route path='/Contact' element = {<Contact/>} />
            </Route>
            <Route path='*' element = {<NotFound />} />
        </Routes>
    );
}
