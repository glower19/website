import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './data';
import LayoutContainer from '../../layout';

const RoutesList = () => {
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