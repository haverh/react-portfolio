import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/navbar';
import Main from './components/main/main';
import ContactForm from './components/contact/contact';
import { Routes, Route } from 'react-router-dom';
// import bg from './images/jr-korpa-9XngoIpxcEo-unsplash.jpg';

function App() {
	return (
        <div style={{width:"100%"}}>
			<NavBar/>
			<Routes>
				<Route path='/' element={<Main/>}/>
				<Route path='/home' element={<Main/>}/>
				<Route path='/contact' element={<ContactForm/>}/>
			</Routes>
		</div>
  	)
};

export default App;
