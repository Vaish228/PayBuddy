import { Routes, Route } from 'react-router-dom';
import NotFound from '../pages/NotFound.jsx';
import BasicLayout from '../layouts/BasicLayout.jsx';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<BasicLayout/>}>
            
            </Route>
            <Route path='*' element = {<NotFound />} />
        </Routes>
    );
}