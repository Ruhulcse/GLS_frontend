import Aos from 'aos';
import 'aos/dist/aos.css';
import "flatpickr/dist/themes/light.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import "simplebar-react/dist/simplebar.min.css";
import "../src/assets/scss/app.scss";
import App from './App.jsx';
import './index.css';
import store from './store';
import { blogsApi } from './store/api/blogs/blogsApi.js';

Aos.init({
	duration: 1500,
});

store.dispatch(blogsApi.endpoints.getBlogs.initiate());

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
