import { Routes, Route } from 'react-router-dom';
import NotFound from '../pages/NotFound.jsx';
import BasicLayout from '../layouts/BasicLayout.jsx';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Contact from '../pages/Contact.jsx';
import Features from '../pages/Features.jsx';
import Signup from '../pages/Signup.jsx';
import Login from '../pages/Login.jsx';
export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<BasicLayout />}>

                <Route path='/' element={<Home />}></Route>
                <Route path='/About' element={<About />} />
                <Route path='/Contact' element={<Contact />} />
                <Route path='/Features' element={<Features />} />
                
            </Route>
            <Route path='/signup' element = {<Signup/>}/>
            <Route path='/login' element = {<Login/>}/>
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}
