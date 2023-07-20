import React, {useState, useEffect} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import {Navbar} from "./component/navbar";
import { Footer } from "./component/footer";


//create your first component
const Layout = () => {

	const [people, setPeople] = useState([])
	const [planets, setPlanets] = useState([])

	// checking API dataloading sate
	const [loading, setLoading] = useState(true)

	useEffect(() =>{

		// for fetching people data
		async function fetchPeople (){
			let res = await fetch('https://www.swapi.tech/api/people/?format=json');
			let data = await res.json(); //awaiting for promise (data), without it it won't fetch!!!
			setPeople(data.results);
		}

		// for fetching planets data
		async function fetchPlanets (){
			let res = await fetch('https://www.swapi.tech/api/planets/?format=json');
			let data = await res.json(); //awaiting for promise (data), without it it won't fetch!!!
			setPlanets(data.results);
		}

		fetchPeople();
		fetchPlanets();

	}, []) //empty dependency, only calls data one time

	//cheking data
	console.log('data', people)
	console.log('data', planets)
	
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
					<Routes>
						<Route path="/" element={<Navbar/>} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
