import { Earth } from './earth.js';	
import './styles.css';
import $ from 'jquery';
import 'bootstrap';


$(document).ready(function() {

	$("form").submit(function(event) {
		event.preventDefault();
		const userAge = $("#age").val()
		checkNumber(userAge);
		if (checkNumber === false) {
			alert("Please tell us your age.");
		}
		const cryoYears = $("#cryoYears").val();
		checkNumber(cryoYears);
		if (checkNumber === false) {
			alert("Please tell us the number of years you plan to be frozen.");
		}
		const mercury = userAge.mercurianCalculator();
		const venus = userAge.venutianCalculator();
		const mars = userAge.martianCalculator();
		const jupiter = userAge.jovianCalculator();
	});


});