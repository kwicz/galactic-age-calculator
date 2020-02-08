import { UserAge } from './userAge.js'; 
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


$(document).ready(function() {

  $("form").submit(function(event) {
    event.preventDefault();
    const age = $("#age").val();
    let cryoYears = $("#cryoYears").val();
    if (userAge >= 80) {
      if (cryoYears > 0) {
        alert("We apologize, but cryogenic freezing is currently only available for Earthlings under 80.");
      }
      cryoYears = 0;
    }
    let userAge = new UserAge (age, cryoYears);
    const mercury = userAge.mercurianCalculator();
    const venus = userAge.venutianCalculator();
    const mars = userAge.martianCalculator();
    const jupiter = userAge.jovianCalculator();
    console.log(mercury, venus, mars, jupiter);

  });
});