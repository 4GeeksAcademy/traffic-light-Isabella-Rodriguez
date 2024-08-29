import { useState } from "react";
import React from "react";

const Home = () => {

	const [ colorRed, setColorRed] = useState("none");
	const [ colorOrange, setColorOrange] = useState("none");
	const [ colorGreen, setColorGreen] = useState("none");
	
	function getShadowToRed () {
		console.log("shadow red")
		if (colorRed == "6px 6px 20px rgba(255, 255, 255, 1)") {
			setColorRed("none")
		} else {
			setColorRed("6px 6px 20px rgba(255, 255, 255, 1)")
			setColorOrange("none")
			setColorGreen("none")
		}
	}

	function getShadowToOrange () {
		console.log("shadow orange")
		if (colorOrange == "6px 6px 20px rgba(255, 255, 255, 1)") {
			setColorOrange("none")
		} else {
			setColorOrange("6px 6px 20px rgba(255, 255, 255, 1)")
			setColorRed("none")
			setColorGreen("none")
		}
	}

	function getShadowToGreen () {
		console.log("shadow green")
		if (colorGreen == "6px 6px 20px rgba(255, 255, 255, 1)") {
			setColorGreen("none")
		} else {
			setColorGreen("6px 6px 20px rgba(255, 255, 255, 1)")
			setColorOrange("none")
			setColorRed("none")
		}
	}

	return <>
		<div className="container">

			<div className="bg-black mx-auto" style={{width: "18px", height: "50px"}}></div>
			<div className="bg-black mx-auto rounded" style={{width: "90px", height: "210px"}} >
				<div style={{marginLeft: "20px"}}>
					<button className=" rounded-circle mt-3" onClick={getShadowToRed} style={{width: "50px", height: "50px", backgroundColor: "red", boxShadow:colorRed}}></button>
					<button className=" rounded-circle mt-2" onClick={getShadowToOrange} style={{width: "50px", height: "50px", backgroundColor: "orange", boxShadow:colorOrange}}></button>
					<button className=" rounded-circle mt-2" onClick={getShadowToGreen} style={{width: "50px", height: "50px", backgroundColor: "green", boxShadow:colorGreen}}></button>
				</div>
			</div>
		</div>
	
	</>
};

export default Home;