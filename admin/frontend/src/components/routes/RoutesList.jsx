import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './data';
import LayoutContainer from '../../layout';
import { useEffect } from 'react';
import { setCountFc } from '../../API/setCountFc';

const RoutesList = () => {
    useEffect(() => {
        setCountFc('Посещение сайта')

    }, [])
    return (
        <Router>
            <Routes>
                {routes.map(route => {
                    return (
                        <Route
                            path={route.path}
                            key={`route ${route.path}`}
                            element={<LayoutContainer><route.component /></LayoutContainer>}
                        >
                        </Route>
                    )
                })}
                {/* <Route element={Error404}/> */}
            </Routes>
        </Router>
    );
};

export default RoutesList;