import { Route, createBrowserRouter, createRoutesFromElements, Outlet } from "react-router-dom";
import Header from "./components/links/Header";
import Footer from "./components/links/Footer";

import LoginPage from "./components/pages/Login";
import SignupPage from "./components/pages/Sign-up";
import HomePage from "./components/pages/Home";
import ServicesPage from "./components/pages/services";


const RootLayout = () => {
    return (
        <main>
            <Header />
            <Outlet />
            <Footer />
        </main>
    )
}


const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/services" element={<ServicesPage/> } />
            <Route path="/login" element={<LoginPage/> } />
            <Route path="/sign-up" element={<SignupPage/> } />
        </Route>
    )
)
export default Router;