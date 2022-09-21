import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import { publicRoutes, privateRoutes } from '../config/routes';

function App() {
  return (
    <div className={`${styles.wrapper}`}>
			<BrowserRouter>
				<div className={`${styles.appContainer}`}>
					<Routes>
						{publicRoutes.map((publicRoute, index) => (
							<Route
								key={`public-${index + 1}`}
								path={publicRoute.path}
								element={publicRoute.component}
							/>
						))}
						{privateRoutes.map((privateRoute, index) => (
							<Route
								key={`private-${index + 1}`}
								path={privateRoute.path}
								// element={<PrivateRoute>{privateRoute.component}</PrivateRoute>}
								element={privateRoute.component}
							/>
						))}
						<Route path='*' element={<Navigate to='/' />} />
					</Routes>
				</div>
			</BrowserRouter>
    </div>
  );
}

export default App;
