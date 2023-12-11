import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from "./page/Signup/Signup";
import Update from './page/Update/Update';
import { Provider } from './helper/provider/Provider';

export default function AppRouter(){
  
    return (
        <Router>
            <Provider >
            <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="/account" element={<Update />} />
            </Routes>
            </Provider>
        </Router>
    )
}