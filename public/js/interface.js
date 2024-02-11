/* global bootstrap: false */
(() => {
  "use strict";
  const tooltipTriggerList = Array.from(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.forEach((tooltipTriggerEl) => {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });
})();

$(document).ready(function () {
  /*--------------------------------------------------------------
# GEAR CONTROL
--------------------------------------------------------------*/
  $("#gear").on("click", function () {
    $("#sun").toggleClass("appear50");
    $("#moon").toggleClass("appear100");
  });

// $("#connect").on("click", () => {
//   $("#connect").attr("data-bs-toggle" , "modal") 
//   $("#connect").attr("data-bs-target" , "#exampleModal") 
//   $("#connect").parent().append(`<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
//   aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h1 class="modal-title fs-5" id="exampleModalLabel">ALERT</h1>

//       </div>
//       <div class="modal-body">
//         PLEASE SELECT YOUR PLATEFORM
//       </div>
//       <ul>
//         <li> <a href="/inpatient">InPatient</a> </li>
//         <li> <a href="/outpatient">OutPatient</a> </li>
//         <li> <a href="/ivprep">IV Prep</a> </li>
//         <li> <a href="/dispense">Dispense</a> </li>
//         <li> <a href="/lap">Lap</a> </li>
//       </ul>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>

//       </div>
//     </div>
//   </div>
// </div>`) 

// })


}); // END OF jQuary


