import { Routes, Route } from 'react-router-dom';
import Header from "../components/common/Header.jsx";
import BasicLayout from '../layouts/BasicLayout.jsx';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<BasicLayout/>}></Route>
        </Routes>
    );
}