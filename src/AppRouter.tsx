import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from "./page/Signup/Signup";
import Update from './page/Update/Update';
export default function AppRouter(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="/account" element={<Update />} />
            </Routes>
        </Router>
    )
}