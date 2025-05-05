import { Routes, Route } from 'react-router-dom';
import BasicLayout from '../layouts/BasicLayout.jsx';

export default function AppRoutes() {
    return (
       <Routes>
        <Route path="/" element={<BasicLayout />} />
       </Routes>
    );
}