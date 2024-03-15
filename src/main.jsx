import Aos from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import "simplebar-react/dist/simplebar.min.css";
import App from './App.jsx';
import './index.css';
import store from './store';
import "../src/assets/scss/app.scss";

Aos.init({
	duration: 1500,
});

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
