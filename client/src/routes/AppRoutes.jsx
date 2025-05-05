import { Routes, Route } from 'react-router-dom';
import BasicLayout from '../layouts/BasicLayout.jsx';
import Home from '../pages/Home.jsx';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<BasicLayout/>}>
            <Route path='/' element={<Home/>}></Route>
            </Route>
        </Routes>
    );
}
