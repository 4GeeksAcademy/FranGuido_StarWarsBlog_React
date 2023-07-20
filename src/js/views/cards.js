import React, { useState, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";


export const Cards = () => {

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

	/*checking data
	console.log('data', people)
	console.log('data', planets)*/
	




	return (
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>

	</div>
)
	
};
