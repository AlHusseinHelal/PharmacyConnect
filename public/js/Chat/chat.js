const socket = io();
const container = document.querySelector('#container');
//MESSAGE FROM SERVER
socket.on("message", (message) => {
  outputMessage(message);
  console.log(message);
  //SCROLL DOWN
  container.scrollTop = container.scrollHeight
});

//MESSAGE SUBMIT
const chatform = document.getElementById("chatform");
chatform.addEventListener("submit", (event) => {
  event.preventDefault();
  const msg = event.target.elements.chat.value;
  socket.emit("chatMessage", msg);
  //EMPTY AND FOCUS
  event.target.elements.chat.value = "";
  event.target.elements.chat.focus();
});

//OUTPUT MESSAGE
function outputMessage(message) {
  const div = document.createElement("div");
  div.classList.add("chat-message");
  div.innerHTML = `<p class="mb-0"><u><i>message time : 12:45 PM</i></u></p>
  <p class="mb-0">${message}</p>`;
  document.getElementById("container").appendChild(div);
}

$(document).ready(function () {
  /*--------------------------------------------------------------
# GEAR CONTROL
--------------------------------------------------------------*/
  $("#gear").on("click", function () {
    $("#sun").toggleClass("appear50");
    $("#moon").toggleClass("appear100");
  });

  /*--------------------------------------------------------------
# ARROW CONTROL
--------------------------------------------------------------*/
  // data-toggle="tooltip" data-placement="top" title="Tooltip on top"
  if (localStorage.getItem("sidebarlarge") === "yes") {
    $("#sidelist").css("transition", "all 2s");
    $("#sidelist").css("width", "250px");
    $("#arrowmove1").removeClass("dnone");
    $("#arrowmove2").addClass("dnone");
    $("#oncotips").css("transition", "all 2s");
    $("#oncotips").css("height", "20vh");
    $("#connectlogo").css("transition", "all 2s");
    $("#connectlogo").css("height", "20vh");
    $("#btn1").css("visibility", "visible");
    $("#btn2").css("visibility", "visible");
    $("#btn3").css("visibility", "visible");
    $("#btn8").css("visibility", "visible");
    $("#btn9").css("visibility", "visible");
    $(".Layer").css("transition", "all 2s");
    $(".Layer").css("width", "25px");
    $(".Layer").css("margin-left", "0px");
    $(".btnsubheadfont").css("margin-left", "20px");
    $(".group").css("transition", "all 2s");
    $(".group").css("margin-left", "16px");
    $(".group").css("font-size", "14px");
    $("#container").css("transition", "all 2s");
    $("#container").css("width", "82vw");
  } else {
    $("#sidelist").css("transition", "all 2s");
    $("#sidelist").css("width", "8rem");
    $("#arrowmove1").addClass("dnone");
    $("#arrowmove2").removeClass("dnone");
    $("#oncotips").css("transition", "all 2s");
    $("#oncotips").css("height", "5vh");
    $("#connectlogo").css("transition", "all 2s");
    $("#connectlogo").css("height", "5vh");
    $("#btn1").css("visibility", "hidden");
    $("#btn2").css("visibility", "hidden");
    $("#btn3").css("visibility", "hidden");
    $("#btn8").css("visibility", "hidden");
    $("#btn9").css("visibility", "hidden");
    $(".Layer").css("transition", "all 2s");
    $(".Layer").css("width", "2em");
    $(".Layer").css("margin-left", "20px");
    $(".btnsubheadfont").css("margin-left", "0px");
    $(".group").css("transition", "all 2s");
    $(".group").css("margin-left", "0px");
    $(".group").css("font-size", "11px");
    $("#container").css("transition", "all 2s");
    $("#container").css("width", "100vw");
  }
  $("#arrowmove1").on("click", function () {
    localStorage.setItem("sidebarlarge", "no");
    $("#sidelist").css("transition", "all 2s");
    $("#sidelist").css("width", "8rem");
    $("#arrowmove1").addClass("dnone");
    $("#arrowmove2").removeClass("dnone");
    $("#oncotips").css("transition", "all 2s");
    $("#oncotips").css("height", "5vh");
    $("#connectlogo").css("transition", "all 2s");
    $("#connectlogo").css("height", "5vh");
    $("#btn1").css("visibility", "hidden");
    $("#btn2").css("visibility", "hidden");
    $("#btn3").css("visibility", "hidden");
    $("#btn8").css("visibility", "hidden");
    $("#btn9").css("visibility", "hidden");
    $(".Layer").css("transition", "all 2s");
    $(".Layer").css("width", "2em");
    $(".Layer").css("margin-left", "20px");
    $(".btnsubheadfont").css("margin-left", "0px");
    $(".group").css("transition", "all 2s");
    $(".group").css("margin-left", "0px");
    $(".group").css("font-size", "11px");
    $("#container").css("transition", "all 2s");
    $("#container").css("width", "100vw");
  });
  $("#arrowmove2").on("click", function () {
    if (localStorage.getItem("sidebarlarge") === "no") {
      localStorage.setItem("sidebarlarge", "yes");
    }
    $("#sidelist").css("transition", "all 2s");
    $("#sidelist").css("width", "250px");
    $("#arrowmove1").removeClass("dnone");
    $("#arrowmove2").addClass("dnone");
    $("#oncotips").css("transition", "all 2s");
    $("#oncotips").css("height", "20vh");
    $("#connectlogo").css("transition", "all 2s");
    $("#connectlogo").css("height", "20vh");
    $("#btn1").css("visibility", "visible");
    $("#btn2").css("visibility", "visible");
    $("#btn3").css("visibility", "visible");
    $("#btn8").css("visibility", "visible");
    $("#btn9").css("visibility", "visible");
    $(".Layer").css("transition", "all 2s");
    $(".Layer").css("width", "25px");
    $(".Layer").css("margin-left", "0px");
    $(".btnsubheadfont").css("margin-left", "20px");
    $(".group").css("transition", "all 2s");
    $(".group").css("margin-left", "16px");
    $(".group").css("font-size", "14px");
    $("#container").css("transition", "all 2s");
    $("#container").css("width", "82vw");
  });

  /*--------------------------------------------------------------
# ADD PRESENTATION
--------------------------------------------------------------*/

  $(".Fluid").on("click", function () {
    $("#container").replaceWith(`<div id="container" class="container"
    style="position: fixed; top: 80px; right:0; width: 82vw; height: 82vh;">

    <div class="row d-flex" style=" justify-content: center; align-items: center; ">
      <div class="col col-12 text-center">
        <object class="my-3 rounded-3" data="../presentation/Fluid & Electrolytes.pdf" type="application/pdf"
          style="height: 100vh; width: 1200px; overflow:hidden;"></object>
      </div>
    </div>
  </div>
</div>
`);
  });
  $(".COPD").on("click", function () {
    $("#container").replaceWith(`<div id="container" class="container"
    style="position: fixed; top: 80px; right:0; width: 82vw; height: 82vh;">

    <div class="row d-flex" style=" justify-content: center; align-items: center; ">
      <div class="col col-12 text-center">
        <object class="my-3 rounded-3" data="../presentation/COPD_in_BPS_pharmacotherapy.pdf" type="application/pdf"
          style="height: 100vh; width: 1200px; overflow:hidden;"></object>
      </div>
    </div>
  </div>
</div>
`);
  });
  $(".Tyrosine").on("click", function () {
    $("#container").replaceWith(`<div id="container" class="container"
    style="position: fixed; top: 80px; right:0; width: 82vw; height: 82vh;">

    <div class="row d-flex" style=" justify-content: center; align-items: center; ">
      <div class="col col-12 text-center">
        <object class="my-3 rounded-3" data="../presentation/Tyrosine.pdf" type="application/pdf"
          style="height: 100vh; width: 1200px; overflow:hidden;"></object>
      </div>
    </div>
  </div>
</div>
`);
  });

  /*--------------------------------------------------------------
# ADD INFOGRAPH
--------------------------------------------------------------*/
  $(".pediatricancer").on("click", function () {
    $("#container")
      .replaceWith(`<div id="container" class="container" style="position: fixed; top: 80px; right:0; width: 82vw; height: 82vh;">    
    <div class="row d-flex text-center" style=" justify-content: center; align-items: center; "> <div class="col col-12">
    <img class="mt-2" src="/infograph/CancerDisease.jpg" alt="" style="height: 550px; width: 1200px;">
    </div>`);
  });
  $(".DinuTuximab").on("click", function () {
    $("#container")
      .replaceWith(`<div id="container" class="container" style="position: fixed; top: 80px; right:0; width: 82vw; height: 82vh;">
        
    <div class="row" style=" justify-content: center; align-items: center; ">
      <div class="col col-12">
        <img src="../Infograph/Dinutuximab.png" alt="" style=" width: 1200px;">
  
      </div>
      
    </div>
    

</div>`);
  });

  /*--------------------------------------------------------------
# ADD MEDICATION CHEMOTHERAPY
--------------------------------------------------------------*/
  $(".Ifosfamide").on("click", function () {
    $("#container")
      .replaceWith(`<div class="container" id="container" style="position: fixed; top: 80px; right:0; width: 82vw; height: 82vh;">
  <div class="row" >
      <div class="col col-12">
          <div class="one mt-3">
              <h1 class="flex-shrink-0">Ifosfamide <br>
                  <p style="color:red;margin-bottom:0">Holoxan<sup>®</sup></p>
                  <span class="mt-1">Medication Monograph</span>
              </h1>
          </div>
          <div class="accordion mt-5 mb-5 flex-shrink-0" id="accordionExample">

              <div class="accordion-item ">
                  <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapsezero" aria-expanded="true" aria-controls="collapsezero">
                          <img src="../svg/mop.svg" alt="" height="30px" class="me-2">
                          MECHANISM OF ACTION
                      </button>
                  </h2>
                  <div id="collapsezero" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                          Ifosfamide causes cross-linking of strands of DNA by binding with nucleic acids and other
                          intracellular structures, resulting in cell death; inhibits protein synthesis and DNA
                          synthesis
                      </div>
                  </div>
              </div>

              <div class="accordion-item ">
                  <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          <img src="../svg/Dose.svg" alt="" height="30px" class="me-2">
                          DOSE
                      </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                          <ul>
                              <li>
                                  <strong><u>Hodgkin Lymphoma:</u></strong>
                                  <p><strong>IV:</strong> 1.8 mg/kg/dose for Children ≥2 years and Adolescents,
                                      <strong>Maximum Dose: 180 mg/dose</strong>.
                                  </p>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>

              <div class="accordion-item ">
                  <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                          <img src="../svg/Infution.svg" alt="" height="30px" class="me-2">
                          ADMINISTRATION
                      </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                          <ul>
                              <li>
                                  <p> <strong>IV:</strong>
                                      Ifosfamide is associated with a moderate emetic potential; antiemetics are
                                      recommended to prevent nausea and vomiting.
                                      <br>
                                      Administer IV over at least 30 minutes (infusion times may vary by protocol;
                                      refer to specific protocol for infusion duration). To prevent bladder toxicity,
                                      ifosfamide should be given with mesna and hydration.
                                  </p>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>

              <div class="accordion-item">
                  <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                          <img src="../svg/sideeffect.svg" alt="" height="30px" class="me-2">
                          TOXICITIES & MANAGEMENT
                      </button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                          <ul>
                              <li><strong>GI Toxicity:</strong> Acute pancreatitis, other serious and fatal GI
                                  complications (including hemorrhage, obstruction, perforation, erosion, ulcer,
                                  enterocolitis, neutropenic colitis, and ileus) have been reported. The risk for GI
                                  complications may be increased in patients with lymphoma with preexisting GI
                                  involvement.</li>
                              <ul><strong>Management:</strong> Prompt diagnostic evaluation and management should be
                                  performed if new or worsening GI symptoms (including severe abdominal pain) occur.
                              </ul>
                              <li><strong>Hyperglycemia:</strong> Hyperglycemia, including new-onset hyperglycemia,
                                  exacerbation of pre-existing diabetes mellitus, and ketoacidosis have been reported,
                                  including grade 3 and 4 events. Hyperglycemia occurred more frequently in patients
                                  with increased body mass or diabetes.</li>
                              <ul><strong>Management:</strong> As normal hyperglycemia but monitoring is enough.</ul>
                              <li><strong>Hepatotoxicity:</strong> Serious hepatotoxicity has occurred; cases were
                                  consistent with hepatocellular injury, with elevations of transaminases and/or
                                  bilirubin.</li>
                              <ul><strong>Management:</strong> Delay, dose adjustments or discontinuation of the drug.
                              </ul>
                              <li><strong>Infusion Reactions/Anaphylaxis:</strong> Infusion reactions, including
                                  anaphylaxis have been reported.</li>
                              <ul><strong>Management:</strong> Paracetamol, an Antihistamine and a Corticosteroid as
                                  pre-medication.</ul>
                              <li><strong>Peripheral Neuropathy:</strong> Peripheral neuropathy is common and is
                                  generally cumulative; grades 1 to 4 neuropathy have been reported. Neuropathy is
                                  usually sensory, although motor neuropathy has also been observed. Based on an
                                  updated analysis, neuropathy completely resolved in a majority of patients receiving
                                  brentuximab in combination with chemotherapy; although some patients experienced
                                  either partial improvement or no improvement. Symptoms of neuropathy include
                                  hypoesthesia, hyperesthesia, paresthesia, discomfort, burning sensation, neuropathic
                                  pain, or weakness.</li>
                              <ul><strong>Management:</strong> Delay, dose adjustments or discontinuation of the drug.
                              </ul>
                              <li><strong>Pulmonary Toxicity:</strong> Noninfectious pulmonary toxicity (eg,
                                  pneumonitis, interstitial lung disease, acute respiratory distress syndrome), some
                                  fatal.</li>
                              <ul><strong>Management:</strong> Discontinuing the offending drug and administering
                                  Corticosteroid therapy either orally or intravenously according to severity.</ul>
                              <li><strong>Progressive Multifocal Leukoencephalopathy (PML):</strong> Cases of
                                  progressive multifocal leukoencephalopathy (PML) and death due to JC virus infection
                                  have been reported. Immunosuppression due to prior chemotherapy treatments or
                                  underlying disease may also contribute to PML development. New-onset signs/symptoms
                                  of CNS abnormalities include changes in mood, memory, cognition, motor
                                  incoordination and/or weakness, speech and/or visual disturbances.</li>
                              <ul><strong>Management:</strong> If PML is confirmed the drug must be permanently
                                  discontinued.</ul>
                              <li><strong>Tumor Lysis Syndrome:</strong> TLS may occur; risk of TLS is higher in
                                  patients with a high tumor burden or with rapid tumor proliferation.</li>
                              <ul><strong>Management:</strong> Administer prophylaxis (anti-hyperuricemic therapy,
                                  aggressive hydration) in patients at high risk. Correct electrolyte abnormalities
                                  and administer supportive care as indicated.</ul>
                              <li><strong>Renal Impairment:</strong> Due to higher exposure of MMAE (the microtubule
                                  disrupting agent component), the incidence of ≥ grade 3 adverse reactions may be
                                  increased in patients with severe impairment.</li>
                              <ul><strong>Management:</strong> Dosage Adjustment to 1.2 mg/kg administered as an
                                  intravenous infusion over 30 minutes every 3 weeks with close monitoring.</ul>
                          </ul>
                      </div>
                  </div>
              </div>

              <div class="accordion-item">
                  <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                          <img src="../svg/sideeffect.svg" alt="" height="30px" class="me-2">
                          DRUG INTERACTIONS
                      </button>
                  </h2>
                  <div id="collapseFour" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                          <ul>
                              <li><strong>Risk X:(Avoid Combination):</strong>
                                  <br>Natalizumab.
                              </li>
                              <li><strong>Risk C:(Monitor Therapy):</strong>
                                  <br>Amphotericin B
                                  <br>Aprepitant
                              
                                  <br>Busulfan
                              
                                  <br>Fluconazole
                              
                                  <br>Imatinib
                                  <br> Itraconazole <br> Phenytoin
                                  <br>Verapamil
                                  <br>Voriconazole
                                  <br>Warfarin
                              
                              </li>
                              </ul>
                      </div>
                  </div>
              </div>

              <div class="accordion-item">
                  <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                          <img src="../svg/Monitor.svg" alt="" height="30px" class="me-2">
                          MONITORING PARAMETER
                      </button>
                  </h2>
                  <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                          <ul>
                              <li>CBC with
                                  differential
                                  (prior to and at
                                  appropriated
                                  intervals after
                                  each cycle, and
                                  as clinically
                                  appropriate).
                              </li>
                              <li>Urine output.</li>
                              <li>Urinalysis (for
                                  erythrocytes
                                  prior to each
                                  dose). 
                                  </li>
                                  <li>Liver function,
                                      and renal
                                      function tests
                                      (prior to and
                                      during
                                      treatment). 
                                      </li>
                                      <li>Monitor for signs/symptoms of neurotoxicity, pulmonary toxicity, urotoxicity/hemorrhagic cystitis, and secondary malignancies. </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>`);
  });

  $(".Cyclophpsphamide").on("click", function () {
    $("#container")
      .replaceWith(`<div class="container" id="container" style="position: fixed; top: 80px; right:0; width: 82vw; height: 82vh;">
    <div class="row">
      <div class="col col-12">
        <div class="one mt-3">
          <h1 class="flex-shrink-0">Cyclophosphamide <br>
            <p style="color:red;margin-bottom:0">Endoxan 1 g<sup>®</sup></p>
            <span class="mt-1">Medication Monograph</span>
          </h1>
        </div>
        <div class="accordion mt-5 mb-5 flex-shrink-0" id="accordionExample">

          <div class="accordion mt-5 mb-5 flex-shrink-0" id="accordionExample">

            <div class="accordion-item ">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapsezero" aria-expanded="true" aria-controls="collapsezero">
                  <img src="/svg/Origin.svg" alt="" height="30px" class="me-2">
                  Origin
                </button>
              </h2>
              <div id="collapsezero" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Alkylating Agent, Nitrogen Mustard.

                </div>
              </div>
            </div>

            <div class="accordion-item ">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseone" aria-expanded="true" aria-controls="collapseone">
                  <img src="/svg/MOP.svg" alt="" height="30px" class="me-2">
                  MECHANISM OF ACTION
                </button>
              </h2>
              <div id="collapseone" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  -Cyclophosphamide is a prodrug that must be metabolized to active metabolites in the liver. It
                  Prevents cell division by cross-linking DNA strands and decreasing DNA
                  synthesis. It is a cell cycle phase nonspecific agent. <br> -Cyclophosphamide also possesses
                  potent
                  immunosuppressive activity.

                </div>
              </div>
            </div>

            <div class="accordion-item ">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapsetwo" aria-expanded="true" aria-controls="collapsetwo">
                  <img src="../svg/Dose.svg" alt="" height="30px" class="me-2">
                  DOSE
                </button>
              </h2>
              <div id="collapsetwo" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <ul>
                    <li>
                      <strong>Acute Lymphoblastic Leukemia</strong>
                      <p><strong>Induction of Remission:</strong>(1000 mg/m2) + Mesna d22 <br>
                        <strong>Contimuation High/Standard Risk:</strong> (300 mg/m2) I.V d1
                    <li>
                      <strong>Retinoblastoma</strong>
                      <p><strong>Extra-Ocular Retinoblastoma:</strong><br>- Age < 36 months (65 mg/kg/day) IV over
                          1 hour.<br>-Age ≥ 36 months (1950 mg/m2/day) IV over 1 hour.</p>
                    </li>
                    <li>
                      <strong>Neuroblastoma</strong>
                      <p><strong>High-Risk Neuroblastoma:</strong> <br>-Days 1,2 </p>
                    </li>
                    </p>
                    </li>
                    <li> <strong>Soft Tissue Sarcoma</strong>
                      <p>-</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="accordion-item ">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapsethree" aria-expanded="true" aria-controls="collapsethree">
                  <img src="../svg/Infution.svg" alt="" height="30px" class="me-2">
                  ADMINISTRATION
                </button>
              </h2>
              <div id="collapsethree" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p>Antiemetics may be recommended to prevent nausea and vomiting; doses ≥1,200 mg/m2 IV are
                    associated with a high emetic potential and doses of 1,000 mg/m2 IV are associated with a
                    moderate emetic risk</p>
                  <ul>
                    <li>
                      <strong>Oral</strong> <br>
                      <p> Capsules and tablets should be swallowed whole. Tablets are not scored and should not be
                        cut, crushed, or chewed. Capsules should not be opened, crushed, or chewed. Wear gloves
                        when handling capsules/tablets and container; avoid exposure to broken capsules. If
                        exposure to capsule contents or crushed/cut tablets, wash hands immediately and
                        thoroughly. Morning administration may be preferred to ensure adequate hydration
                        throughout the day; do not administer tablets/capsules at bedtime.</p>
                    </li>
                    <li><strong>I.V</strong></li><br>
                    <P>-IV push: May administer reconstituted solution without further dilution (20 mg/mL); rate
                      may vary based on protocols (refer to specific protocols). <br>

                      -IV infusion (intermittent or continuous): Infusion rate may vary based on protocol (refer
                      to specific protocol for infusion rate); usually over 15 to 60 minutes; larger doses (>1,800
                      mg/m2) have been infused over 1 to 6 hours by some centers and protocols. <br>

                      -Bladder toxicity: To minimize bladder toxicity, increase normal fluid intake during and for
                      1 to 2 days after cyclophosphamide dose. Most adult patients will require a fluid intake of
                      at least 2 L/day and in pediatric patients twice maintenance (3 L/m2/day). <br>High-dose
                      regimens and depending upon the protocol some standard (low) cyclophosphamide doses should
                      be accompanied by vigorous hydration with mesna therapy (refer to specific protocols and
                      Mesna monograph for additional information). Morning administration may be preferred to
                      ensure adequate hydration throughout the day.</P>
                  </ul>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapsefive" aria-expanded="true" aria-controls="collapsefive">
                  <img src="/svg/sideeffect.svg" alt="" height="30px" class="me-2">
                  DRUG INTERACTIONS
                </button>
              </h2>
              <div id="collapsefive" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <ul>
                    <li><strong>Risk X:(Avoid Combination):</strong>
                      <br>Natalizumab.
                    </li>
                    <li><strong>Risk C:(Monitor Therapy):</strong>
                      <br>Amphotericin B.
                      <br>Allopurinol.

                      <br>Amidarone.

                      <br>Aprepitant

                      <br>Bupivacaine
                      <br> Carbamazepine <br> Fluconazole
                      <br>Hydrochlorothiazide.

                      <br>Itraconazole

                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapsesix" aria-expanded="true" aria-controls="collapsesix">
                  <img src="../svg/Monitor.svg" alt="" height="30px" class="me-2">
                  MONITORING PARAMETER
                </button>
              </h2>
              <div id="collapsesix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <ul>
                    <li>CBC with
                      differential
                      and platelets
                    </li>
                    <li>BUN</li>
                    <li>Serum electrolytes,Serum creatinine, Urinalysis.
                    </li>
                    <li>Assess risk for
                      opportunistic
                      infections (eg,
                      Pneumocystis
                      jirovecii pneumonia,
                      herpes virus
                      infection).

                    </li>
                    <li>Monitor for
                      signs/symptoms of
                      hemorrhagic cystitis
                      or other
                      urinary/renal toxicity. </li>
                    <li>Pulmonary toxicity
                      (if suspect
                      pneumonitis,
                      consider pulmonary
                      function testing to
                      assess the severity
                      of pneumonitis).
                    </li>
                    <li>Cardiac t
                      oxicity
                      (particularly in
                      patients with cardiac
                      risk factors or
                      preexisting cardiac
                      disease).
                    </li>
                    <li>Hepatic toxicity
                      (including hepatic
                      sinusoidal
                      obstruction syndrome).</li>
                    <li>Secondary
                      malignancies. </li>
                    <li>Wound healing
                      impairment. </li>
                    <li>Monitor adherence
                      (for oral dosing).</li>
                    <li>Evaluate pregnancy
                      status prior to use in
                      patients who can
                      become pregnant. </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`);
  });

  $(".Basiliximab").on("click", function () {
    $("#container")
      .replaceWith(`<div class="container" id="container" style="position: fixed; top: 80px; right:0; width: 82vw; height: 82vh;">
    <div class="row">
      <div class="col col-12">
        <div class="one mt-3">
          <h1 class="flex-shrink-0">Basiliximab <br>
            <p style="color:red;margin-bottom:0">Simulect 20mg<sup>®</sup></p>
            <span class="mt-1">Medication Monograph</span>
          </h1>
        </div>
        <div class="accordion mt-5 mb-5 flex-shrink-0" id="accordionExample">

          <div class="accordion mt-5 mb-5 flex-shrink-0" id="accordionExample">

            <div class="accordion-item ">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapsezero" aria-expanded="true" aria-controls="collapsezero">
                  <img src="../svg/Origin.svg" alt="" height="30px" class="me-2">
                  ORIGIN
                </button>
              </h2>
              <div id="collapsezero" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Targeted Therapy, Large Molecules, Monoclonal Antibodies, Interleukin-2 Inhibitors

                </div>
              </div>
            </div>

            <div class="accordion-item ">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseone" aria-expanded="true" aria-controls="collapseone">
                  <img src="../svg/MOP.svg" alt="" height="30px" class="me-2">
                  MECHANISM OF ACTION
                </button>
              </h2>
              <div id="collapseone" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Basiliximab is a chimeric (murine/human) immunosuppressant monoclonal antibody which blocks the
                  alpha-chain of the IL-2 receptor complex; this receptor is expressed on activated T lymphocytes
                  and is a critical pathway for activating cell-mediated allograft rejection.

                </div>
              </div>
            </div>

            <div class="accordion-item ">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapsetwo" aria-expanded="true" aria-controls="collapsetwo">
                  <img src="../svg/Dose.svg" alt="" height="30px" class="me-2">
                  DOSE
                </button>
              </h2>
              <div id="collapsetwo" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <ul>
                    <li>
                      Induction therapy for the prophylaxis of acute organ rejection in patients receiving renal
                      transplant in combination with an immunosuppressive regimen (cyclosporine and
                      corticosteroids) (FDA approved in pediatric patients and adults); Basiliximab has also been
                      used for prophylaxis of acute organ rejection in liver, heart, and lung transplant.
                    </li>
                    <li>
                      <strong>Patient weight <35kg:< /strong> 10 mg per dose
                    </li>
                    <li>
                      <strong>Patient weight ≥35 kg:</strong> 20 mg per dose
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="accordion-item ">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapsethree" aria-expanded="true" aria-controls="collapsethree">
                  <img src="../svg/Infution.svg" alt="" height="30px" class="me-2">
                  ADMINISTRATION
                </button>
              </h2>
              <div id="collapsethree" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <ul>
                    <li><strong>IV: </strong></li>
                    <p>For IV administration only through central or peripheral access. Administer only after
                      confirmation that patient will receive graft and immunosuppression. Reconstituted
                      basiliximab solution may be administered undiluted as a bolus injection or further diluted
                      and infused over 20 to 30 minutes. Bolus injection is associated with nausea, vomiting, and
                      local pain at the injection site. </p>
                  </ul>
                  <ul>
                    <li><strong>When to administer:</strong></li>
                    <p>
                    <ul><strong>Initial dose:</strong> IV: Administered before or up to 6 hours after
                      transplantation</ul>
                    <ul><strong>Second dose:</strong> IV: mg administered 4 days after transplantation</ul>
                    </p>
                  </ul>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapsefour" aria-expanded="true" aria-controls="collapsefour">
                  <img src="../svg/sideeffect.svg" alt="" height="30px" class="me-2">
                  TOXICITIES & MANAGEMENT
                </button>
              </h2>
              <div id="collapsefour" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <ul>
                    <li><strong>Anaphylactoid/Hypersensitivity Reactions: </strong> Severe hypersensitivity
                      reactions, occurring within 24 hours, have been reported. Reactions, including anaphylaxis,
                      have occurred both with the initial exposure and/or following re-exposure after several
                      months; use caution during re-exposure to a subsequent course of therapy in a patient who
                      has previously received Basiliximab. Patients in whom concomitant immunosuppression was
                      prematurely discontinued due to abandoned transplantation or early graft loss are at
                      increased risk for developing a severe hypersensitivity reaction upon re-exposure. </li>
                    <ul><strong>Management:</strong> Discontinue permanently if a severe reaction occurs.
                      Medications for the treatment of hypersensitivity reactions should be available for
                      immediate use.</ul>
                    <li><strong>Diabetes: </strong> In renal transplant recipients receiving Basiliximab plus
                      prednisone, cyclosporine, and mycophenolate, new-onset diabetes, glucose intolerance, and
                      impaired fasting glucose were observed at rates significantly higher than observed in
                      patients receiving prednisone, cyclosporine, and mycophenolate without Basiliximab.</li>
                    <li><strong>Human Antimurine Antibodies (HAMA): </strong> Treatment may result in the
                      development of HAMA.</li>
                    <li><strong>Lymphoproliferative Disorders: </strong> The incidence of lymphoproliferative
                      disorders may be increased by immunosuppressive therapy.</li>
                    <li><strong>Opportunistic Infections: </strong> The incidence of opportunistic infections may
                      be increased by immunosuppressive therapy.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapsefive" aria-expanded="true" aria-controls="collapsefive">
                  <img src="../svg/interaction.svg" alt="" height="30px" class="me-2">
                  DRUG INTERACTIONS
                </button>
              </h2>
              <div id="collapsefive" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <ul>
                    <li><strong>Tofacitinib (Risk X: Avoid Combination):</strong>
                      Immunosuppressants (Therapeutic Immunosuppressant Agents) may enhance the immunosuppressive
                      effect of Tofacitinib.
                      <ul><strong>Management: </strong> Coadministration of tofacitinib with potent
                        immunosuppressants is not recommended. Use with non-biologic disease-modifying
                        antirheumatic drugs (DMARDs) was permitted in psoriatic arthritis clinical trials.</ul>
                    </li>
                    <li><strong>Vaccines (Live) (Risk X: Avoid Combination):</strong>
                      Anti-CD20 B-Cell Depleting Therapies may enhance the adverse/toxic effect of Vaccines
                      (Live). Specifically, the risk of vaccine-associated infection may be increased. Anti-CD20
                      B-Cell Depleting Therapies may diminish the therapeutic effect of Vaccines (Live).
                    </li>
                    <li><strong>Denosumab (Risk D: Consider Therapy Modification):</strong>
                      Immunosuppressants may enhance the immunosuppressive effect of Denosumab.
                      <ul><strong>Management: </strong> Consider the risk of serious infections versus the
                        potential benefits of coadministration of denosumab and immunosuppressants. If combined,
                        monitor for signs/symptoms of serious infections.</ul>
                    </li>
                    <li><strong>Vaccines (Non-Live/Inactivated/Non-Replicating) (Risk D: Consider Therapy
                        Modification):</strong>
                      Anti-CD20 B-Cell Depleting Therapies may diminish the therapeutic effect of Vaccines
                      (Non-Live/Inactivated/Non-Replicating).
                      <ul><strong>Management: </strong> Give non-live/inactivated/non-replicating vaccines at
                        least 2 weeks prior to initiation or 6 months after anti-CD20 B-cell depleting therapies.
                        If vaccinated prior to B cell recovery, consider assessing immune response to vaccination.
                      </ul>
                    </li>
                    <li><strong>Antidiabetic Agents (Risk C: Monitor Therapy) :</strong>
                      Hyperglycemia-Associated Agents may diminish the therapeutic effect of Antidiabetic Agents.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapsesix" aria-expanded="true" aria-controls="collapsesix">
                  <img src="../svg/Monitor.svg" alt="" height="30px" class="me-2">
                  MONITORING PARAMETER
                </button>
              </h2>
              <div id="collapsesix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <ul>
                    <li>CBC with differential, vital signs, immunologic monitoring of T cells, renal function,
                      serum glucose, signs or symptoms of hypersensitivity (more common with subsequent doses),
                      infection.
                    </li>
                    <li>Patients previously administered Basiliximab should only be re-exposed to a subsequent
                      course of therapy with extreme caution due to increased risk of hypersensitivity reactions.
                      Hold second or subsequent dose(s) if severe hypersensitivity reactions or graft failure
                      occurs.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`);
  });

  $(".Rituximab").on("click", function () {
    $("#container")
      .replaceWith(`<div  class="container" id="container" style="position: fixed; top: 80px; right:0; width: 82vw; height: 82vh;">
    <div class="row">
      <div class="col col-12">
        <div class="one mt-3">
          <h1 class="flex-shrink-0">Rituximab <br> <p style="color:red;margin-bottom:0">Rixathon 100 mg/10 ml <sup>®</sup></p>
          <span class="mt-1">Medication Monograph</span>
          </h1>
        </div>
        <div class="accordion mt-5 mb-5 flex-shrink-0" id="accordionExample">
  
          <div class="accordion-item ">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                <img src="../svg/Origin.svg" alt="" height="30px" class="me-2">
                Origin
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                <li>
                  <p>Targeted Therapy, Large Molecules, Monoclonal Antibodies, Anti-CD20
                  </p>
                </li>
                </ul>
              </div>
            </div>
          </div>
  
          <div class="accordion-item ">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                <img src="../svg/MOP.svg" alt="" height="30px" class="me-2">
                MECHANISM OF ACTION
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                <li>
                  <p>Rituximab is a monoclonal antibody directed against the CD20 antigen on the surface of B-lymphocytes. CD20 regulates cell cycle initiation; and, possibly, functions as a calcium channel. Rituximab binds to the antigen on the cell surface, activating complement-dependent B-cell cytotoxicity; and to human Fc receptors, mediating cell killing through an antibody-dependent cellular toxicity.
                  </p>
                </li>
                </ul>
              </div>
            </div>
          </div>
  
          <div class="accordion-item ">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <img src="../svg/Dose.svg" alt="" height="30px" class="me-2">
                DOSE
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                  <li>
                    <strong><u>Mature B-Cell Lymphoma/Leukemia:</u></strong>
                    <p><strong>IV:</strong> 375 mg/m2</p>
                  </li>
                  <li>
                    <strong><u>Ataxia Patients: Group A R-COPAD 1 and 2 (Day 0), Group B (IR) and Group C Induction R-COPADM3 1 and 2 (Day 0), Consolidation CYM1 and 2 (Day 0)</u></strong>
                  </li>
                  <li>
                    <strong><u>Group B Induction R-COPADM3 1 and 2 (Days -2 and 0), Consolidation CYM1 and 2 (Day 0)</u></strong>
                  </li>
                  <li>
                    <strong><u>Group C Induction R-COPADM8 1 and 2 (Days -2 and 0), Consolidation CYVE1 and 2 (Day 0)</u></strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
  
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapsefour" aria-expanded="true" aria-controls="collapsefour">
                <img src="../svg/sideeffect.svg" alt="" height="30px" class="me-2">
                TOXICITIES & MANAGEMENT
              </button>
            </h2>
            <div id="collapsefour" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                <li><strong>Infusion-Related Reactions:</strong> Rituximab administration can result in serious, including fatal, infusion-related reactions. Reactions may include angioedema, bronchospasm, cough, hypotension, hypoxia, throat irritation, urticaria, and in more severe cases, ARDS, pulmonary infiltrates, acute myocardial infarction, ventricular fibrillation, and cardiogenic shock. Deaths within 24 hours of rituximab infusion have occurred. Approximately 80% of fatal infusion-related reactions occurred in association with the first infusion. Monitor patients closely. Discontinue rituximab infusion for severe reactions and provide medical treatment for grade 3 or 4 infusion-related reactions.</li>
                   <ul><strong>Management:</strong> Priming IV lines with the drug. Standardized premedication, including acetaminophen, diphenhydramine and dexamethasone should be considered for all patients receiving first-dose rituximab infusions to reduce hypersensitivity.</ul>
                   <li><strong>Hepatitis B Virus Reactivation:</strong> HBV reactivation can occur in patients treated with rituximab products, in some cases resulting in fulminant hepatitis, hepatic failure, and death.</li>
                   <ul><strong>Management:</strong> Screen all patients for HBV infection before treatment initiation, and monitor patients during and after treatment with rituximab. Discontinue rituximab and concomitant medications in the event of HBV reactivation.</ul>
                   <li><strong>Progressive Multifocal Leukoencephalopathy (PML):</strong> PML due to JC virus infection has been reported with rituximab and may be fatal. Cases were reported in patients with hematologic malignancies receiving rituximab either with combination chemotherapy or with HSCT. Clinical findings included confusion/disorientation, motor weakness/hemiparesis, altered vision/speech, and poor motor coordination with symptoms progressing over weeks to months.</li>
                   <ul><strong>Management:</strong> If PML is confirmed the drug must be permanently discontinued.</ul>   
                   <li><strong>Bowel Obstruction/Perforation:</strong> Abdominal pain, bowel obstruction, and perforation have been reported, with an average onset of symptoms of ~6 days.</li>
                   <ul><strong>Management:</strong> Evaluate abdominal pain or repeated vomiting.</ul>
                   <li><strong>Tumor Lysis Syndrome:</strong> TLS leading to acute renal failure requiring dialysis may occur within 12 to 24 hours following the first dose when used as a single agent in the treatment of NHL. Hyperkalemia, hypocalcemia, hyperuricemia, and/or hyperphosphatemia may occur.</li>
                   <ul><strong>Management:</strong> Administer prophylaxis (anti-hyperuricemic therapy, aggressive hydration) in patients at high risk (high numbers of circulating malignant cells ≥25,000/mm3 or high tumor burden). Correct electrolyte abnormalities and administer supportive care as indicated.</ul>
                   <li><strong>Hypogammaglobulinemia and Infection:</strong> Serious, including fatal, bacterial, fungal, and new or reactivated viral infections can occur during and following the completion of rituximab-based therapy. Infections have been reported in some patients with prolonged hypogammaglobulinemia.</li>
                   <ul><strong>Management:</strong> IgG replacement, which may be given IV or SC.</ul>
                </ul>
              </div>
            </div>
          </div>
  
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapsefive" aria-expanded="true" aria-controls="collapsefive">
                <img src="../svg/interaction.svg" alt="" height="30px" class="me-2">
                DRUG INTERACTIONS
              </button>
            </h2>
            <div id="collapsefive" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                <li><strong>Vaccines (Live) (Risk X: Avoid Combination):</strong>
                  Anti-CD20 B-Cell Depleting Therapies may enhance the adverse/toxic effect of Vaccines (Live). Specifically, the risk of vaccine-associated infection may be increased. Anti-CD20 B-Cell Depleting Therapies may diminish the therapeutic effect of Vaccines (Live).
                </li>  
                <li><strong>Vaccines (Non-Live/Inactivated/Non-Replicating) (Risk D: Consider Therapy Modification):</strong>
                  Anti-CD20 B-Cell Depleting Therapies may diminish the therapeutic effect of Vaccines (Non-Live/Inactivated/Non-Replicating).
                  <ul><strong>Management:</strong> Give non-live/inactivated/non-replicating vaccines at least 2 weeks prior to initiation or 6 months after anti-CD20 B-cell depleting therapies. If vaccinated prior to B cell recovery, consider assessing immune response to vaccination.</ul>
                </li>
                </ul>
              </div>
            </div>
          </div>
  
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapsesix" aria-expanded="true" aria-controls="collapsesix">
                <img src="../svg/Monitor.svg" alt="" height="30px" class="me-2">
                MONITORING PARAMETER
              </button>
            </h2>
            <div id="collapsesix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                  <li>Signs/symptoms of hypersensitivity reactions (during and for 15 minutes after administration).
                  </li>
                </ul>
              </div>
            </div>
          </div>
  
          </div>
        </div>
      </div>
    </div>`);
  });

  /*--------------------------------------------------------------
# ADD MEDICATION CARDIOLOGY
--------------------------------------------------------------*/
  $(".Captopril").on("click", function () {
    $("#container")
      .replaceWith(`<div  class="container" id="container" style="position: fixed; top: 80px; right:0; width: 82vw; height: 82vh;">
    <div class="row">
      <div class="col col-12">
        <div class="one mt-3">
          <h1 class="flex-shrink-0">Captopril 25mg <br> <p style="color:red;margin-bottom:0">CAPOTEN<sup>®</sup></p>
          <span class="mt-1">Medication Monograph</span>
          </h1>
        </div>
        <div class="accordion mt-5 mb-5 flex-shrink-0" id="accordionExample">

          <div class="accordion-item ">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <img src="../svg/Dose.svg" alt="" height="30px" class="me-2">
                DOSE
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                  <li>
                    <strong><u>Heart Failure:</u></strong>
                    <p>Children and Adolescents: Oral: 0.3-6 mg/kg/day divided every 8-12 hours, <strong>maximum daily dose: 150 mg/day</strong>.</p>
                  </li>
                  <li>
                    <strong><u>Hypertension:</u></strong>
                    <p><strong>Infants:</strong> Oral: Initial: 0.15-0.3 mg/kg/dose; titrate dose upward to <strong>maximum of 6 mg/kg/day</strong> in 1-4 divided doses; usual required dose: 2.5-6 mg/kg/day.</p>
                    <p><strong>Children and Adolescents:</strong> Oral: Initial: 0.3-0.5 mg/kg/dose every 8 hours; may titrate as needed up to <strong>maximum daily dose: 6 mg/kg/day</strong> in 3 divided doses, maximum daily dose: 450 mg/day.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item ">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                <img src="../svg/Infution.svg" alt="" height="30px" class="me-2">
                ADMINISTRATION
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>Oral: Administer on an empty stomach 1 hour before meals or 2 hours after meals;
                  If crushing tablet and dissolving in water, allow adequate time for complete dissolution >10 minutes.</p>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                <img src="../svg/sideeffect.svg" alt="" height="30px" class="me-2">
                SIDE EFFECT
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                <li><strong>Cardiovascular:</strong>
                  Hypotension.</li>
                <li><strong>Endocrine metabolic:</strong>
                  Hyperkalemia (11%)</li>
                <li><strong>Renal:</strong> Polyuria, renal insufficiency</li>
                <li><strong>Dermatologic:</strong>
                  Rash.</li>
                <li><strong>Gastrointestinal:</strong> Disorder of taste.</li>
                <li><strong>Respiratory:</strong> Dry productive Cough (0.5% to 2%)</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                <img src="../svg/Monitor.svg" alt="" height="30px" class="me-2">
                MONITORING PARAMETER
              </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                  <li>Blood pressure</li>
                  <li>Electrolytes</li>
                  <li>Renal Function (Sr. creatinine, BUN)</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>`);
  });

  $(".Furosemide").on("click", function () {
    $("#container")
      .replaceWith(`<div  class="container" id="container" style="position: fixed; top: 80px; right:0; width: 82vw; height: 82vh;">
    <div class="row">
      <div class="col col-12">
        <div class="one mt-3">
          <h1 class="flex-shrink-0">Furosemide 40mg <br> Lasix<sup>®</sup>
          <span class="mt-1">Medication Monograph</span>
          </h1>
        </div>
        <div class="accordion mt-5 mb-5 flex-shrink-0" id="accordionExample">

          <div class="accordion-item ">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <img src="../svg/Dose.svg" alt="" height="30px" class="me-2">
                DOSE
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                  <li><strong>Heart Failure & Hypertension:</strong>
                  <p><strong>Infants and Children:</strong> Oral: 2 mg/kg once daily; if ineffective, may increase in increments of 1 to 2 mg/kg/dose every 6 to 8 hours, <strong>not to exceed 6 mg/kg/dose (acute use) and 6 mg/kg/day (chronic use) (600 mg/day)</strong>.</p>
                  <p><strong>IM, IV:</strong> 0.5 to 2 mg/kg/dose every 6 to 12 hours.</p>
                  <p><strong>Continuous IV infusion:</strong>  0.05 mg/kg/hour; titrate dosage to clinical effect.</p>
                </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item ">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                <img src="../svg/Infution.svg" alt="" height="30px" class="me-2">
                ADMINISTRATION
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p><strong>Oral:</strong> May administer with food or milk to decrease GI distress.</p>
                <p><strong>Parenteral: IV:</strong>  May be administered undiluted direct IV at a maximum rate of 0.5 to 1 mg/kg/minute (not to exceed 4 mg/minute); may also be diluted and infused over 10 to 15 minutes (following maximum rate as above)</p>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                <img src="../svg/sideeffect.svg" alt="" height="30px" class="me-2">
                SIDE EFFECT
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                <li><strong>Cardiovascular:</strong>
                  Orthostatic hypotension</li>
                <li><strong>Endocrine metabolic:</strong> Hyperuricemia (40%), Hypomagnesemia, hypokalemia, hyperglycemia</li>
                <li><strong>Otic:</strong> Deafness</li>
                <li><strong>Renal:</strong> Acute kidney injury, nephrolethiasis</li>
                <li><strong>Gastrointestinal:</strong> Loss of appetite.</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                <img src="../svg/Monitor.svg" alt="" height="30px" class="me-2">
                MONITORING PARAMETER
              </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                  <li>Blood pressure</li>
                  <li>Electrolytes</li>
                  <li>Fluid Balance</li>
                  <li>Hearing</li>
                  <li>Renal Function (Sr. creatinine, BUN)</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>`);
  });

  $(".Spironolactone").on("click", function () {
    $("#container")
      .replaceWith(`<div  class="container" id="container" style="position: fixed; top: 80px; right:0; width: 82vw; height: 82vh;">
    <div class="row">
      <div class="col col-12">
        <div class="one mt-3">
          <h1 class="flex-shrink-0">Spironolactone 25mg  <p style="color: red; margin-bottom: 0;">Aldactone<sup>®</sup></p>
          <span class="mt-1">Medication Monograph</span>
          </h1>
        </div>
        <div class="accordion mt-5 mb-5 flex-shrink-0" id="accordionExample">

          <div class="accordion-item ">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <img src="../svg/Dose.svg" alt="" height="30px" class="me-2">
                DOSE
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                <p><strong><u>Heart Failure& Hypertension:</u></strong></p>
                <p><strong>Children:</strong> 1-3.3 mg/kg/day or in divided doses every 12-24 hours; <strong>not to exceed 100 mg/day</strong>. </p>
                <p><strong>Adults (heart failure):</strong> 12.5-25 mg/day once. Maximum target dose 50 mg/day in one or two divided doses.</p>
                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item ">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                <img src="../svg/Infution.svg" alt="" height="30px" class="me-2">
                ADMINISTRATION
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>Oral: Administer with food.</p>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                <img src="../svg/sideeffect.svg" alt="" height="30px" class="me-2">
                SIDE EFFECT
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                <li><strong>Endocrine metabolic:</strong> hyperkalemia, hyperglycemia, hyperuricemia, hypocalcemia, hypomagnesemia, hyponatremia, hypovolemia</li>
                <li><strong>Renal:</strong> Renal failure syndrome, renal insufficiency</li>
                <li><strong>Gynecomastia</strong></li>
                <li><strong>Gastrointestinal</strong> Diarrhea, Nausea and vomiting</li>
                <li><strong>Neurologic:</strong> Somnolence</li>
                <li><strong>Reproductive:</strong> Disorder of menstruation, Erectile dysfunction</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                <img src="../svg/Monitor.svg" alt="" height="30px" class="me-2">
                MONITORING PARAMETER
              </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                  <li>Blood pressure</li>
                  <li>Electrolytes</li>
                  <li>Fluid Balance</li>
                  <li>Gynecomastia</li>
                  <li>Renal Function (Sr. creatinine, BUN)</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>`);
  });

  $(".Lasilactone").on("click", function () {
    $("#container")
      .replaceWith(`<div  class="container" id="container" style="position: fixed; top: 80px; right:0; width: 82vw; height: 82vh;">
    <div class="row">
      <div class="col col-12">
        <div class="one mt-3">
          <h1 class="flex-shrink-0">(Furosemide 20mg +
            Spironolactone 50mg)  <p style="color: red; margin-bottom: 0;">Lasilactone<sup>®</sup></p>
          <span class="mt-1">Medication Monograph</span>
          </h1>
        </div>
        <div class="accordion mt-5 mb-5 flex-shrink-0" id="accordionExample">

          <div class="accordion-item ">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <img src="../svg/Dose.svg" alt="" height="30px" class="me-2">
                DOSE
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                <p><strong>Heart Failure:</strong></p>
                <p>Oral: 1-3.3 mg/kg/day in divided doses once or twice daily. <strong>Maximum daily dose: 3-3.3 mg/kg/day or 100 mg/day of spironolactone</strong>.</p>
                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item ">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                <img src="../svg/Infution.svg" alt="" height="30px" class="me-2">
                ADMINISTRATION
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>Oral: Administer with food</p>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                <img src="../svg/sideeffect.svg" alt="" height="30px" class="me-2">
                SIDE EFFECT
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                <li><strong>Endocrine metabolic:</strong> Hyperuricemia (40%), Hypomagnesemia, Gynecomastia.</li>
                <li><strong>Renal:</strong> Spasm of bladder, Acute kidney injury, nephrolethiasis</li>
                <li><strong>Gastrointestinal:</strong>Loss of appetite, Diarrhea, Nausea and vomiting.</li>
                <li><strong>Otic:</strong>  Deafness</li>
                <li><strong>Neurologic:</strong> Somnolence</li>
                <li><strong>Reproductive:</strong> Disorder of menstruation, Erectile dysfunction</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                <img src="../svg/Monitor.svg" alt="" height="30px" class="me-2">
                MONITORING PARAMETER
              </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                  <li>Blood pressure</li>
                  <li>Electrolytes</li>
                  <li>Fluid Balance</li>
                  <li>Gynecomastia</li>
                  <li>Hearing</li>
                  <li>Renal Function (Sr. creatinine, BUN)</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>`);
  });

  $(".Carvid").on("click", function () {
    $("#container")
      .replaceWith(`<div  class="container" id="container" style="position: fixed; top: 80px; right:0; width: 82vw; height: 82vh;">
    <div class="row">
      <div class="col col-12">
        <div class="one mt-3">
          <h1 class="flex-shrink-0">Carvedilol 6.25mg  <p style="color: red; margin-bottom: 0;">Carvid<sup>®</sup></p>
          <span class="mt-1">Medication Monograph</span>
          </h1>
        </div>
        <div class="accordion mt-5 mb-5 flex-shrink-0" id="accordionExample">

          <div class="accordion-item ">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <img src="../svg/Dose.svg" alt="" height="30px" class="me-2">
                DOSE
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                <li><strong>Heart Failure:</strong>
                  <ul>
                    <li><strong>Infants, Children, and Adolescents ≤ 17 years:</strong>
                      <p>Initial: (0.04 to 0.075) mg/kg/dose twice daily.</p>
                      <p>Maintenance: 0.3-0.75 mg/kg/dose twice daily.</p>
                      <p><strong>Maximum daily dose: 1 mg/kg/day, up to 50 mg/day.</strong></p>
                    </li>
                    <li><strong>Adults:</strong>
                      <p>Immediate release tablets: Oral: Initial: 3.125 mg twice daily for 2 weeks; if tolerated, may increase to 6.25 mg twice daily.</p>
                      <p><strong>Maximum recommended dose:</strong>
                        <85 kg: 25 mg twice daily
                        >85 kg: 50 mg twice daily</p>
                    </li>
                  </ul>
                </li>
                <li><strong>Hypertension:</strong>
                  <ul>
                    <li><strong>Adults:</strong>
                      <p>Oral: Initial: 6.25 mg twice daily; if tolerated, dose should be maintained for 1-2 weeks, then increased to 12.5 mg twice daily.
                        <strong>Maximum daily dose: 50 mg/day</strong>.</p>
                    </li>
                  </ul>
                </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item ">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                <img src="../svg/Infution.svg" alt="" height="30px" class="me-2">
                ADMINISTRATION
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>Administer with food to decrease the risk of orthostatic hypotension.</p>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                <img src="../svg/sideeffect.svg" alt="" height="30px" class="me-2">
                SIDE EFFECT
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                <li><strong>Cardiovascular:</strong>Bradyarrhythmia (3% to 10%), Hypotension (1.8% to 20.2%), Peripheral edema (1% to 7%)</li>
                <li><strong>Hepatic:</strong>increased liver enzymes</li>
                <li><strong>Renal:</strong>renal insufficiency (>1% to ≤3%)</li>
                <li><strong>Endocrine metabolic:</strong>Abnormal weight gain (10% to 12% ), Hyperglycemia (5% to 12% )</li>
                <li><strong>Gastrointestinal:</strong>Diarrhea (2% to 12% )</li>
                <li><strong>Neurologic:</strong>Dizziness (6% to 33% )</li>
                <li><strong>Reproductive:</strong>Erectile dysfunction (13.5% )</li>
                <li><strong>Other:</strong>Fatigue (24%)</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                <img src="../svg/Monitor.svg" alt="" height="30px" class="me-2">
                MONITORING PARAMETER
              </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                  <li>Blood pressure</li>
                  <li>Heart rate</li>
                  <li>Liver function</li>
                  <li>Renal Function (Sr. creatinine, BUN)</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>`);
  });

  $(".Coradarone").on("click", function () {
    $("#container")
      .replaceWith(`<div  class="container" id="container" style="position: fixed; top: 80px; right:0; width: 82vw; height: 82vh;">
    <div class="row">
      <div class="col col-12">
        <div class="one mt-3">
          <h1 class="flex-shrink-0">Amiodarone 200mg  <p style="color: red; margin-bottom: 0;">Coradarone<sup>®</sup></p>
          <span class="mt-1">Medication Monograph</span>
          </h1>
        </div>
        <div class="accordion mt-5 mb-5 flex-shrink-0" id="accordionExample">

          <div class="accordion-item ">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <img src="../svg/Dose.svg" alt="" height="30px" class="me-2">
                DOSE
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                
                  <ul>
                    <li><strong>TACHYArrhythmia:</strong>
                      <p>For infants, Children, and Adolescents:</p>
                      <ul>
                        <li>Oral: Loading dose: <strong>10 to 15 mg/kg/day</strong> in 1 to 2 divided doses/day for 4 to 14 days or until adequate control of arrhythmia or prominent adverse effects occur</li>
                        <li>dosage should then be reduced to <strong>5 mg/kg/day</strong> given once daily for several weeks;</li>
                        <li>If arrhythmia does not recur, reduce to lowest effective dosage possible; usual daily minimal dose: <strong>2.5 mg/kg/day</strong>.</li>
                        <li>Maintenance doses may be given for 5 of 7 days/week.</li>
                      </ul>
                    </li>
                  </ul>
                
                
              </div>
            </div>
          </div>

          <div class="accordion-item ">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                <img src="../svg/Infution.svg" alt="" height="30px" class="me-2">
                ADMINISTRATION
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p><strong>Oral:</strong> Administer at same time in relation to meals.</p>
                <p><strong>In adults:</strong>  may administer in divided doses with meals if GI upset occurs or if taking large daily dose.</p>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                <img src="../svg/sideeffect.svg" alt="" height="30px" class="me-2">
                SIDE EFFECT
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                <li><strong>Cardiovascular:</strong>Brady arrhythmia, Hypotension (Oral, less than 1%; IV, 15.6%)</li>
                <li><strong>Respiratory:</strong>Pulmonary toxicity (oral: 17%; intravenous: <1%)</li>
                <li><strong>Endocrine metabolic:</strong>Thyroid dysfunction</li>
                <li><strong>Hepatic:</strong>Increased liver enzymes (4% to 9%)</li>
                <li><strong>Ophthalmic:</strong>Visual disturbance (4% to 9%)</li>
                <li><strong>Gastrointestinal:</strong>Constipation (4% to 9%), Loss of appetite (4% to 9%), Nausea (10% to 33%), Vomiting (10% to 33%)</li>
                <li><strong>Neurologic:</strong>Abnormal gait (4% to 9%), Coordination problem (4% to 9%), Dizziness (4% to 9%), Involuntary movement (4% to 9%)</li>
                <li><strong>Dermatologic:</strong>Photodermatitis (2% -24%), Photosensitivity (3%-10%)</li>
                <li><strong>Other:</strong>
                  Malaise and fatigue (4% to 9%)</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                <img src="../svg/Monitor.svg" alt="" height="30px" class="me-2">
                MONITORING PARAMETER
              </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                  <li>Heart rate and rhythm</li>
                  <li>Blood pressure</li>
                  <li>ECG</li>
                  <li>Chest x-ray</li>
                  <li>Pulmonary function</li>
                  <li>Thyroid function, Weight gain or loss</li>
                  <li>Serum electrolytes (potassium and magnesium)</li>
                  <li>Liver enzymes</li>
                  <li>Ophthalmologic exams including fundoscopy and slit-lamp examinations</li>
                  <li>Monitor infusion site.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>`);
  });

  $(".Propranolol").on("click", function () {
    $("#container")
      .replaceWith(`<div  class="container" id="container" style="position: fixed; top: 80px; right:0; width: 82vw; height: 82vh;">
    <div class="row">
      <div class="col col-12">
        <div class="one mt-3">
          <h1 class="flex-shrink-0">Propranolol 10mg  <p style="color: red; margin-bottom: 0;">Inderal<sup>®</sup></p>
          <span class="mt-1">Medication Monograph</span>
          </h1>
        </div>
        <div class="accordion mt-5 mb-5 flex-shrink-0" id="accordionExample">

          <div class="accordion-item ">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <img src="../svg/Dose.svg" alt="" height="30px" class="me-2">
                DOSE
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                <li><strong>Arrhythmia:</strong>
                <p><strong>For Infants, Children, and Adolescents:</strong> Oral: Initial: 0.5 to 1 mg/kg/day in divided doses every 6 to 8 hours; titrate dosage upward every 3 to 5 days; usual daily dose: 2 to 4 mg/kg/day; higher doses may be needed;
                  <strong>Maximum daily dose:</strong> 16 mg/kg/day or 60 mg/day.</p></li>
                <li><strong>Hypertension:</strong>
                <p><strong>Children and Adolescents 1 to 17 years:</strong> Oral: Initial: 1 to 2 mg/kg/day divided in 2 to 3 doses/day; titrate dose to effect.
                  <strong>Maximum dose:</strong> 4 mg/kg/day up to 640 mg/day.</p></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item ">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                <img src="../svg/Infution.svg" alt="" height="30px" class="me-2">
                ADMINISTRATION
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>Oral:
                  Take on an empty stomach.</p>
                
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                <img src="../svg/sideeffect.svg" alt="" height="30px" class="me-2">
                SIDE EFFECT
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                <li><strong>Cardiovascular:</strong>bradycardia, cardiac failure, exacerbation of angina pectoris (with drug withdrawal), hypotension</li>
                <li><strong>Gastrointestinal:</strong>Diarrhea.</li>
                <li><strong>Respiratory:</strong>Bronchospasm</li>
                <li><strong>Other:</strong>Fatigue</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                <img src="../svg/Monitor.svg" alt="" height="30px" class="me-2">
                MONITORING PARAMETER
              </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                  <li>Heart rate</li>
                  <li>Blood pressure</li>
                  
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>`);
  });

  $(".Atenolol").on("click", function () {
    $("#container")
      .replaceWith(`<div  class="container" id="container" style="position: fixed; top: 80px; right:0; width: 82vw; height: 82vh;">
    <div class="row">
      <div class="col col-12">
        <div class="one mt-3">
          <h1 class="flex-shrink-0">Atenolol 100mg  <p style="color: red; margin-bottom: 0;">Tenormin<sup>®</sup></p>
          <span class="mt-1">Medication Monograph</span>
          </h1>
        </div>
        <div class="accordion mt-5 mb-5 flex-shrink-0" id="accordionExample">

          <div class="accordion-item ">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <img src="../svg/Dose.svg" alt="" height="30px" class="me-2">
                DOSE
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                <li><strong>Hypertension:</strong>
                <p>Infants, Children, and Adolescents: Oral: Usual range: 0.5 to 1 mg/kg/day either once daily or in divided doses every 12 hours, maximum daily dose: 2 mg/kg/day not to exceed 100 mg/day</p></li>
                <li><strong>Supraventricular tachycardia:</strong>
                <p>Usual range: 0.3 to 1 mg/kg/day either once daily or in divided doses every 12 hours. maximum daily dose: 2 mg/kg/day not to exceed 100 mg/day</p></li>
                <li><strong>Marfan Syndrome:</strong>
                <p>Initial: 0.5 mg/kg/day, titrate up to 4 mg/kg/day, maximum daily dose: 250 mg/day</p></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item ">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                <img src="../svg/Infution.svg" alt="" height="30px" class="me-2">
                ADMINISTRATION
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>Oral:
                  May be administered without regard to food.</p>
                
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                <img src="../svg/sideeffect.svg" alt="" height="30px" class="me-2">
                SIDE EFFECT
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                <li><strong>Cardiovascular:</strong>Bradyarrhythmia (3% to 18%), Cold extremities (12%), Hypotension (4% to 25%)</li>
                <li><strong>Respiratory:</strong>Bronchospasm</li>
                <li><strong>Neurologic:</strong>Dizziness (13%)</li>
                <li><strong>Psychiatric:</strong>Depression (up to 12%)</li>
                <li><strong>Other:</strong>Fatigue (up to 26% )</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                <img src="../svg/Monitor.svg" alt="" height="30px" class="me-2">
                MONITORING PARAMETER
              </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                  <li>Heart rate</li>
                  <li>Blood pressure</li>
                  <li>ECG</li>
                  <li>Fluid Balance</li>
                  <li>Respiratory rate</li>
                  
                  
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>`);
  });

  $(".Apresoline").on("click", function () {
    $("#container")
      .replaceWith(`<div  class="container" id="container" style="position: fixed; top: 80px; right:0; width: 82vw; height: 82vh;">
    <div class="row">
      <div class="col col-12">
        <div class="one mt-3">
          <h1 class="flex-shrink-0">Hydralazine chloride tablet 25mg  IV: 20mg/ml<p style="color: red; margin-bottom: 0;">Apresoline<sup>®</sup></p>
          <span class="mt-1">Medication Monograph</span>
          </h1>
        </div>
        <div class="accordion mt-5 mb-5 flex-shrink-0" id="accordionExample">

          <div class="accordion-item ">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <img src="../svg/Dose.svg" alt="" height="30px" class="me-2">
                DOSE
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                <li><strong>Heart Failure:</strong>
                <p><strong>Oral:</strong> Infants, Children, and Adolescents: 0.75 to 3 mg/kg/day divided every 6 to 12 hours;
                  <strong>Maximum daily dose:</strong> 7 mg/kg/day or 200 mg/day whichever is less.</p>
                <p><strong>IV: Infants:</strong> 0.1 to 0.5 mg/kg/dose every 6 to 8 hours; maximum dose: 2 mg/kg/dose.</p>
                <p><strong>Children and Adolescents:</strong> 0.15 to 0.2 mg/kg/dose every 4 to 6 hours; <strong>Maximum dose: 20 mg/dose</strong>.</p>
              </li>
                <li><strong>Hypertension:</strong>
                <p><strong>Chronic:</strong>Chronic: Children and Adolescents: Oral: Initial: 0.75 mg/kg/day in 2 to 4 divided doses, maximum initial dose: 10 mg/dose; may increase gradually over 3 to 4 weeks up to a maximum of 7.5 mg/kg/day in 2 to 4 divided doses not to exceed 200 mg/day.</p>
                <p><strong>Hypertensive emergency/urgency:</strong> Infants, Children, and Adolescents: IM, IV: Initial: 0.1 to 0.2 mg/kg/dose every 4 to 6 hours; increase as required to suggested usual range: 0.2 to 0.6 mg/kg/dose every 4 to 6 hours as needed; maximum dose: 20 mg/dose; Manufacturer labeling suggests a dose range of 1.7 to 3.5 mg/kg/day divided in 4 to 6 doses.</p>
              </li>
                
                
                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item ">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                <img src="../svg/Infution.svg" alt="" height="30px" class="me-2">
                ADMINISTRATION
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>Oral: Administer with food.</p>
                
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                <img src="../svg/sideeffect.svg" alt="" height="30px" class="me-2">
                SIDE EFFECT
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                <li><strong>Cardiovascular:</strong> Angina pectoris, Edema, Palpitations, tachycardia.</li>
                <li><strong>Gastrointestinal:</strong>
                  Diarrhea, Loss of appetite, Nausea, Vomiting.</li>
                <li><strong>Hematologic & oncologic:</strong> Agranulocytosis, decreased hemoglobin, decreased red blood cells, eosinophilia, leukopenia, lymphadenopathy, purpuric disease, splenomegaly</li>
                <li><strong>Neurologic:</strong>
                  Headache.</li>
                
                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                <img src="../svg/Monitor.svg" alt="" height="30px" class="me-2">
                MONITORING PARAMETER
              </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                  <li>Blood pressure (monitor closely with IV use), standing and sitting/supine</li>
                  <li>Heart rate</li>
                  <li>ANA titer (if needed)</li>                    
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>`);
  });

  $(".Nifedipine").on("click", function () {
    $("#container")
      .replaceWith(`<div  class="container" id="container" style="position: fixed; top: 80px; right:0; width: 82vw; height: 82vh;">
    <div class="row">
      <div class="col col-12">
        <div class="one mt-3">
          <h1 class="flex-shrink-0">Nifedipine<p style="color: red; margin-bottom: 0;">Epilate Retard 20mg<sup>®</sup></p>
          <span class="mt-1">Medication Monograph</span>
          </h1>
        </div>
        <div class="accordion mt-5 mb-5 flex-shrink-0" id="accordionExample">

          <div class="accordion-item ">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <img src="../svg/Dose.svg" alt="" height="30px" class="me-2">
                DOSE
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
              <li>
                <strong>Hypertension:</strong>
                <ul>
                  <li><strong><u>Hypertensive urgency:</u></strong>
                  <p>Children and Adolescents: <strong>Immediate release:
                    0.04 to 0.25 mg/kg/dose; maximum single dose: 10 mg/dose</strong>; may repeat if needed every 4 to 6 hours;
                    <strong>Maximum daily dose: 1 to 2 mg/kg/day</strong></p></li>
                  <li><strong><u>Hypertension (chronic treatment):</u></strong>
                  <p>Children and Adolescents (able to swallow whole tablet): <strong>Extended release:</strong>
                    Oral: Initial: <strong>0.25 to 0.5 mg/kg/day</strong> once daily or divided in 2 doses every 12 hours
                    <strong>Maximum daily dose: 3 mg/kg/day up to 120 mg/day</strong></p></li>
                  
                </ul>
              </li>
                
                
                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item ">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                <img src="../svg/Infution.svg" alt="" height="30px" class="me-2">
                ADMINISTRATION
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>Oral: Administer with or without food. Liquid-filled capsule may be punctured and drug solution administered orally. When Nifedipine is administered sublingually, only a small amount is absorbed sublingually. </p>
                <p>Extended release: Tablets should be swallowed whole; do not crush, break, chew, or divide.</p>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                <img src="../svg/sideeffect.svg" alt="" height="30px" class="me-2">
                SIDE EFFECT
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                <li><strong>Cardiovascular:</strong> Hypotension (up to 5%), Palpitations (up to 7%), Peripheral edema (7% to 29%), cardiac failure (2%)</li>
                <li><strong>Dermatologic:</strong> Flushing (4% to 25%)</li>
                <li><strong>Gastrointestinal:</strong> Nausea (up to 10%)</li>
                <li><strong>Neurologic:</strong>  Dizziness (4% to 10%), Headache (19% to 23%)</li>
                  <li><strong>Psychiatric:</strong> Feeling nervous</li>
                  <li><strong>Respiratory:</strong> 
                    Cough, Dyspnea.</li>
                
                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                <img src="../svg/Monitor.svg" alt="" height="30px" class="me-2">
                MONITORING PARAMETER
              </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                  <li>Blood pressure, heatr rate</li>
                  <li>Signs and symptoms of CHF</li>
                  <li>Peripheral edema</li>                    
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>`);
  });

  $(".Minipress").on("click", function () {
    $("#container")
      .replaceWith(`<div  class="container" id="container" style="position: fixed; top: 80px; right:0; width: 82vw; height: 82vh;">
    <div class="row">
      <div class="col col-12">
        <div class="one mt-3">
          <h1 class="flex-shrink-0">Prazocin HCL 1 & 2 mg<p style="color: red; margin-bottom: 0;">Minipress<sup>®</sup>
            </p>
            <span class="mt-1">Medication Monograph</span>
          </h1>
        </div>
        <div class="accordion mt-5 mb-5 flex-shrink-0" id="accordionExample">

          <div class="accordion-item ">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <img src="../svg/Dose.svg" alt="" height="30px" class="me-2">
                DOSE
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                  
                      <li><strong>Hypertension:</strong>
                      <p><strong>Children and Adolescents:</strong> Limited data available:
                        Oral: Initial: 0.05-0.1 mg/kg/day in divided doses every 8 hours; may titrate up to 0.5 mg/kg/day in divided doses 3 times daily
                        <strong>Maximum daily dose: 20 mg/day</strong>.</p></li>

              


                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item ">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                <img src="../svg/Infution.svg" alt="" height="30px" class="me-2">
                ADMINISTRATION
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>Oral:
                  Administer without regard to meals at the same time each day.</p>
                
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                <img src="../svg/sideeffect.svg" alt="" height="30px" class="me-2">
                SIDE EFFECT
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                  <li><strong>Cardiovascular:</strong> Orthostatic hypotension (1% to 4%), Palpitations (5.3%)</li>
                  
                  <li><strong>Gastrointestinal:</strong> Nausea (4.9%)</li>
                  <li><strong>Neurologic:</strong> Asthenia (6.5%), Dizziness (10.3%), Headache (7.8%), Lethargy (6.9%), Somnolence (7.6% )</li>
                  

                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                <img src="../svg/Monitor.svg" alt="" height="30px" class="me-2">
                MONITORING PARAMETER
              </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
              <p>Blood pressure (standing and sitting or supine)</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>`);
  });

  $(".Doxazosin").on("click", function () {
    $("#container")
      .replaceWith(`<div  class="container" id="container" style="position: fixed; top: 80px; right:0; width: 82vw; height: 82vh;">
    <div class="row">
      <div class="col col-12">
        <div class="one mt-3">
          <h1 class="flex-shrink-0">Doxazosin 2mg<p style="color: red; margin-bottom: 0;">Cardura<sup>®</sup>
            </p>
            <span class="mt-1">Medication Monograph</span>
          </h1>
        </div>
        <div class="accordion mt-5 mb-5 flex-shrink-0" id="accordionExample">

          <div class="accordion-item ">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <img src="../svg/Dose.svg" alt="" height="30px" class="me-2">
                DOSE
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                  <li><strong>Hypertension:</strong>
                    <p><strong>Children and Adolescents:</strong>
                      Oral: Immediate release: Initial: 1 mg/day; maximum daily dose: 4 mg/day
                      Adult :
                      Initial: 1 mg once daily; titrate as needed based on patient response up to a dose of 16 mg once
                      daily
                      <strong>maximum: 16 mg/day</strong>.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item ">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                <img src="../svg/Infution.svg" alt="" height="30px" class="me-2">
                ADMINISTRATION
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>Immediate release:
                  Administer without regard to meals at the same time each day.</p>

              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                <img src="../svg/sideeffect.svg" alt="" height="30px" class="me-2">
                SIDE EFFECT
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                  <li><strong>Cardiovascular:</strong> edema</li>

                  <li><strong>Gastrointestinal:</strong> Abdominal pain, dyspepsia, nausea, xerostomia</li>
                  <li><strong>Central nervous system:</strong> dizziness, fatigue, vertigo</li>


                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                <img src="../svg/Monitor.svg" alt="" height="30px" class="me-2">
                MONITORING PARAMETER
              </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                  <li>Standing and sitting/supine blood pressure, especially 2 to 6 hours after the initial dose, then prior to doses</li>
                  <li>Urinary symptoms if used for dysfunctional voiding or BPH treatment</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>`);
  });

  $(".Capozide").on("click", function () {
    $("#container")
      .replaceWith(`<div  class="container" id="container" style="position: fixed; top: 80px; right:0; width: 82vw; height: 82vh;">
    <div class="row">
      <div class="col col-12">
        <div class="one mt-3">
          <h1 class="flex-shrink-0">Captopril 50mg
            +
            HCT 25mg<p style="color: red; margin-bottom: 0;">Capozide<sup>®</sup>
            </p>
            <span class="mt-1">Medication Monograph</span>
          </h1>
        </div>
        <div class="accordion mt-5 mb-5 flex-shrink-0" id="accordionExample">

          <div class="accordion-item ">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <img src="../svg/Dose.svg" alt="" height="30px" class="me-2">
                DOSE
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                  <li><strong>Hypertension:</strong>
                    <p><strong>Adults:</strong>
                      The usual maintenance dose is <strong>50 mg/25 mg</strong> (1 tablet) once a day, in the morning.</p>
                    <p><strong>A maximum daily dose of 50 mg captopril /25 mg hydrochlorothiazide</strong> should not be exceeded. If satisfactory reduction of blood pressure has not been achieved, additional antihypertensive medication may be added.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item ">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                <img src="../svg/Infution.svg" alt="" height="30px" class="me-2">
                ADMINISTRATION
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>Oral:
                  Administer on an empty stomach, May administer with food or milk or without food, administer early in day to avoid nocturia..</p>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                <img src="../svg/sideeffect.svg" alt="" height="30px" class="me-2">
                SIDE EFFECT
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                  <li><strong>Cardiovascular:</strong> Hypotension.</li>
                  <li><strong>Gastrointestinal:</strong> Disorder of taste.</li>
                  <li><strong>Renal:</strong> Polyuria, renal failure, renal insufficiency</li>
                  <li><strong>Endocrine metabolic:</strong> Hyperkalemia (11%)</li>
                  <li><strong>Dermatologic:</strong>Rash, Photo-toxicity</li>
                  <li><strong>Respiratory:</strong> Cough (0.5% to 2%)</li>
                  <li><strong>Neurologic:</strong>  Vertigo</li>


                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                <img src="../svg/Monitor.svg" alt="" height="30px" class="me-2">
                MONITORING PARAMETER
              </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                  <li>Blood pressure</li>
                  <li>BUN</li>
                  <li>Serum creatinine</li>
                  <li>Electrolytes</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>`);
  });

  $(".Valsartan").on("click", function () {
    $("#container")
      .replaceWith(`<div  class="container" id="container" style="position: fixed; top: 80px; right:0; width: 82vw; height: 82vh;">
    <div class="row">
      <div class="col col-12">
        <div class="one mt-3">
          <h1 class="flex-shrink-0">Valsartan 40, 80, 160 mg<p style="color: red; margin-bottom: 0;">Tareg<sup>®</sup>
            </p>
            <span class="mt-1">Medication Monograph</span>
          </h1>
        </div>
        <div class="accordion mt-5 mb-5 flex-shrink-0" id="accordionExample">

          <div class="accordion-item ">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <img src="../svg/Dose.svg" alt="" height="30px" class="me-2">
                DOSE
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                  <li><strong>Heart failure (with reduced EF):</strong>
                  <p>Adults
                    Initial: 20 to 40 mg twice daily
                    Target dose: 160 mg twice daily</p></li>
                  <li><strong>Hypertension:</strong>
                    <p><strong>Children and Adolescents ≤16 years:</strong>
                      Initial: 1 mg/kg once daily; maximum initial daily dose: 40 mg/day; may titrate to effect up to a maximum dose of 4 mg/kg/dose once daily or maximum daily dose: 160 mg/day.</p>
                    <p>Adolescents ≥17 years:
                      Initial: 80 mg or 160 mg once daily (in patients who are not volume depleted); dose may be increased to achieve desired effect;</p>
                    <p><strong>maximum daily dose:</strong> 320 mg/day; in adults, usual dosage range: 80 to 320 mg once daily.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item ">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                <img src="../svg/Infution.svg" alt="" height="30px" class="me-2">
                ADMINISTRATION
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>May be administered without regard to food.</p>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                <img src="../svg/sideeffect.svg" alt="" height="30px" class="me-2">
                SIDE EFFECT
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                  <li><strong>Cardiovascular:</strong>
                    Hypotension (5.5% to 6.9%)</li>
                  <li><strong>Endocrine & metabolic:</strong> Hyperkalemia (2%)</li>
                  <li><strong>Renal:</strong>
                    Serum blood urea nitrogen raised (heart failure, 16.6%), Serum creatinine raised (hypertension, 0.8%; heart failure, 3.9%; post-myocardial infarction.</li>
                  <li><strong>Neurologic:</strong>
                    Dizziness (2% to 17%), Headache (> 1%)</li>
                  <li><strong>Respiratory:</strong> Cough</li>


                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                <img src="../svg/Monitor.svg" alt="" height="30px" class="me-2">
                MONITORING PARAMETER
              </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                  <li>Baseline and periodic BP</li>
                  <li>Electrolytes</li>
                  <li>Renal function</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>`);
  });

  $(".Sotalol").on("click", function () {
    $("#container")
      .replaceWith(`<div  class="container" id="container" style="position: fixed; top: 80px; right:0; width: 82vw; height: 82vh;">
    <div class="row">
      <div class="col col-12">
        <div class="one mt-3">
          <h1 class="flex-shrink-0">Sotalol 40 & 80 mg<p style="color: red; margin-bottom: 0;">Betacor<sup>®</sup>
            </p>
            <span class="mt-1">Medication Monograph</span>
          </h1>
        </div>
        <div class="accordion mt-5 mb-5 flex-shrink-0" id="accordionExample">

          <div class="accordion-item ">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <img src="../svg/Dose.svg" alt="" height="30px" class="me-2">
                DOSE
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                  <li><strong><u>Arrhythmia:</u></strong>
                  <p>Children and adolescents: Initial: 30 mg/m2/dose given every 8 hours; increase dosage gradually if needed; allow at least 36 hours between dosage increments. May increase gradually to a maximum of 60 mg/m2/dose given every 8 hours; not to exceed adult doses (usual <strong>maximum adult daily dose: 320 mg/day</strong>)</p></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item ">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                <img src="../svg/Infution.svg" alt="" height="30px" class="me-2">
                ADMINISTRATION
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>Administer without regard to meals.</p>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                <img src="../svg/sideeffect.svg" alt="" height="30px" class="me-2">
                SIDE EFFECT
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                <li><strong>Cardiovascular:</strong> Bradycardia (dose related; 8% to 13%), chest pain (8%), palpitations (8%)</li>
                <li><strong>Nervous system:</strong> Dizziness (13% to 16%), fatigue (dose related; 19% to 26%), headache (12%)</li>
                <li><strong>Neuromuscular & skeletal:</strong> Asthenia (5% to 11%)</li>
                <li><strong>Respiratory:</strong> Dyspnea (dose related; 9% to 18%)</li>


                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                <img src="../svg/Monitor.svg" alt="" height="30px" class="me-2">
                MONITORING PARAMETER
              </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
              <p>Serum creatinine (creatinine clearance), Heart rate, blood pressure, magnesium, potassium,ECG (eg, QTc interval, PR interval) During initiation and titration period, monitor QTc interval 2 to 4 hours after each dose. If QTc interval is ≥500 msec, reduce dose, prolong the dosing interval, or discontinue sotalol. If the QTc interval is &lt;500 msec after 3 days (after fifth or sixth dose if patient receiving once-daily dosing), patient may be discharged on current regimen. Monitor QTc interval periodically thereafter.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>`);
  });

  $(".Ivabradine").on("click", function () {
    $("#container")
      .replaceWith(`<div  class="container" id="container" style="position: fixed; top: 80px; right:0; width: 82vw; height: 82vh;">
    <div class="row">
      <div class="col col-12">
        <div class="one mt-3">
          <h1 class="flex-shrink-0">Ivabradine 5 mg<p style="color: red; margin-bottom: 0;">Procrolan<sup>®</sup>
            </p>
            <span class="mt-1">Medication Monograph</span>
          </h1>
        </div>
        <div class="accordion mt-5 mb-5 flex-shrink-0" id="accordionExample">

          <div class="accordion-item ">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <img src="../svg/Dose.svg" alt="" height="30px" class="me-2">
                DOSE
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                  <li>Heart failure, dilated cardiomyopathy:
                    <p><strong>&lt;40 kg:</strong> <u>Oral:</u> Initial: 0.05 mg/kg/dose twice daily; may increase dose every 2 weeks by 0.05 mg/kg/dose as tolerated to achieve a 20% reduction in heart rate without inducing bradycardia.</p>
                    <p><strong>Maximum dose:</strong> Age-dependent:≥6 months to &lt;1 year: 0.2 mg/kg/dose twice daily.</p>
                    <p><strong>≥1 year:</strong> 0.3 mg/kg/dose twice daily, not to exceed 7.5 mg/dose twice daily.</p>
                    <p><strong>≥40 kg:</strong> Oral: Initial: 2.5 mg twice daily; may increase dose every 2 weeks by 2.5 mg as tolerated to achieve a 20% reduction in heart rate without inducing bradycardia; maximum dose: 7.5 mg/dose twice daily.</p>
                    <p><strong>Adolescents ≥18 years:</strong> <u>Oral:</u> Initial: 5 mg twice daily or 2.5 mg twice daily in patients with a history of conduction defects or who may experience hemodynamic compromise due to bradycardia; after 2 weeks, adjust dose to achieve a resting heart rate between 50 and 60 beats per minute (bpm); adjust dose as needed based on resting heart rate and tolerability; maximum dose: 7.5 mg/dose twice daily.</p>
                  </li>
                </ul>
                <p><strong>Dosage adjustment based on resting heart rate:</strong>
                <ul>
                  <li>If heart rate >60 bpm: Increase dose by 2.5 mg twice daily; maximum dose: 7.5 mg/dose twice daily.</li>
                  <li>If heart rate 50 to 60 bpm: Maintain dose.</li>
                  <li>If heart rate &lt;50 bpm or signs and symptoms of bradycardia: Decrease dose by 2.5 mg twice daily; if current dose is 2.5 mg twice daily, discontinue therapy.</li>
                </ul></p>
              </div>
            </div>
          </div>

          <div class="accordion-item ">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                <img src="../svg/Infution.svg" alt="" height="30px" class="me-2">
                ADMINISTRATION
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>Administer with food.</p>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                <img src="../svg/sideeffect.svg" alt="" height="30px" class="me-2">
                SIDE EFFECT
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                <li><strong>Cardiovascular:</strong> Bradycardia (4% to 10%)
                  hypertension (9%)
                  atrial fibrillation (8%)</li>
                <li><strong>Central Nervous system:</strong> Phosphene (3%)</li>
                <li><strong>Neuromuscular & skeletal:</strong> Asthenia (5% to 11%)</li>
                <li><strong>Respiratory:</strong> Dyspnea (dose related; 9% to 18%)</li>


                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                <img src="../svg/Monitor.svg" alt="" height="30px" class="me-2">
                MONITORING PARAMETER
              </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
              <ul>
                <li>Heart rate (prior to initiation, prior to increasing dose, or after decreasing dose)</li>
                <li>Monitor heart rate more closely if receiving other negative chronotropes (eg, amiodarone, beta-blockers, digoxin)</li>
                <li>Blood pressure</li>
                <li>Regularly monitor cardiac rhythm (assessing for atrial fibrillation)</li>
              </ul>
              <p><strong>Dosage adjustment for bradycardia:</strong><strong>&lt; 40 Kg Initial dose:</strong> Decrease dose to 0.02 mg/kg/dose twice daily.</p>
              <p></p>
              <p><strong>During titration:</strong>
                Decrease dose to previous dose.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>`);
  });
  $(".SacubitrilandValsartan").on("click", function () {
    $("#container")
      .replaceWith(`<div  class="container" id="container" style="position: fixed; top: 80px; right:0; width: 82vw; height: 82vh;">
      <div class="row">
        <div class="col col-12">
          <div class="one mt-3">
            <h1 class="flex-shrink-0">Sacubitril and Valsartan
              24 mg /26 mg<p style="color: red; margin-bottom: 0;">(Entresto) - NF<sup>®</sup>
              </p>
              <span class="mt-1">Medication Monograph</span>
            </h1>
          </div>
          <div class="accordion mt-5 mb-5 flex-shrink-0" id="accordionExample">
  
            <div class="accordion-item ">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <img src="../svg/Dose.svg" alt="" height="30px" class="me-2">
                  DOSE
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <h5><strong>NOTES:</strong></h5>
                  <ol>
                    <li>Dose presented as the combined mg dose of sacubitril and valsartan.</li>
                    <li>Concomitant use of an angiotensin-converting enzyme (ACE) inhibitor is contraindicated; allow a 36-hour washout period when switching from or to an ACE inhibitor.</li>
                  </ol>

                  <ul>
                    <li><strong><u>Patients previously taking a moderate to high dose ACE inhibitor (ie, ≥0.2 mg/kg/day or 10 mg/day of enalapril or equivalent) or angiotensin II receptor blocker (ARB):</u></strong>
                    <ul>
                      <li><strong>&lt;40 kg:</strong> Oral: Initial: 1.6 mg/kg/dose twice daily; titrate dose in 2 weeks to 2.3 mg/kg/dose twice daily, then 2 weeks later to 3.1 mg/kg/dose twice daily.</li>
                      <li><strong>40 to &lt;50 kg:</strong> Oral: Initial: Sacubitril 24 mg/valsartan 26 mg twice daily; titrate dose in 2 weeks to sacubitril 49 mg / valsartan 51 mg twice daily, then 2 weeks later to sacubitril 72 mg/valsartan 78 mg (three 24/26 mg tablets) twice daily.</li>
                      <li><strong>≥50 kg:</strong> Oral: Initial: Sacubitril 49 mg/valsartan 51 mg twice daily; titrate dose in 2 weeks to sacubitril 72 mg/valsartan 78 mg (three 24/26 mg tablets) twice daily, then 2 weeks later to sacubitril 97 mg/valsartan 103 mg twice daily.</li>
                    </ul>
                    </li>
                    <li><strong><u>Patients not currently taking an ACE inhibitor or an ARB or previously taking low doses of an ACE inhibitor (ie, 0.1 mg/kg/day or 5 mg/day of enalapril or equivalent) or ARB:</u></strong>
                    <ul>
                      <li><strong>≤50 kg:</strong> Oral Suspension: Initial: 0.8 mg/kg/dose twice daily; titrate dose in 2 weeks to 1.6 mg/kg/dose twice daily, then 2 weeks later to 2.3 mg/kg/dose twice daily, then 2 weeks later to 3.1 mg/kg/dose twice daily.</li>
                      <li>Tablets: Children and Adolescents weighing >50 kg: Oral: Initial: Sacubitril 24 mg/valsartan 26 mg twice daily; titrate dose in 2 weeks to sacubitril 49 mg/valsartan 51 mg twice daily, then 2 weeks later to sacubitril 72 mg/valsartan 78 mg (three 24/26 mg tablets) twice daily, then 2 weeks later to sacubitril 97 mg/valsartan 103 mg twice daily.</li>
                    
                    </ul>
                    </li>
                  </ul>
                  
                  <ul>
                    
                  </ul>
                </div>
              </div>
            </div>
  
            <div class="accordion-item ">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                  <img src="../svg/Infution.svg" alt="" height="30px" class="me-2">
                  ADMINISTRATION
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p>Administer with or without food</p>
                </div>
              </div>
            </div>
  
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                  <img src="../svg/sideeffect.svg" alt="" height="30px" class="me-2">
                  SIDE EFFECT
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <ul>
                  <li><strong>Cardiovascular:</strong> Hypotension (18%) Orthostatic hypotension (2%)</li>
                  <li><strong>Endocrine & metabolic:</strong>Hyperkalemia (12%)</li>
                  <li><strong>Renal:</strong>Increased serum creatinine (16% to 17%) Acute kidney injury (≤5%)</li>
                  <li><strong>Hematologic & oncologic:</strong> Decreased hematocrit (≤7%), decreased hemoglobin (≤7%)</li>
                  <li><strong>Hypersensitivity:</strong> Angioedema</li>
                  <li><strong>Nervous system:</strong> Dizziness (6%), falling (2%)</li>
                  <li><strong>Respiratory:</strong>Cough (9%)</li>
                  </ul>
                </div>
              </div>
            </div>
  
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                  <img src="../svg/Monitor.svg" alt="" height="30px" class="me-2">
                  MONITORING PARAMETER
                </button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                <ul>
                  <li>At baseline, within 1 to 2 weeks after initiation, and after dose changes, reassess BP (including postural BP changes), kidney function, and serum potassium (especially for patients taking concomitant potassium-sparing diuretics, potassium supplements, and/or potassium containing salts).</li>
                  <li>Patients with systolic BP &lt;80 mm Hg, low serum sodium, diabetes mellitus, and impaired kidney function should be closely monitored.</li>
                </ul>
                
                </div>
              </div>
            </div>
  
          </div>
        </div>
      </div>
    </div>`);
  });
  $(".Dapagliflozin").on("click", function () {
    $("#container")
      .replaceWith(`<div class="container" id="container" style="position: fixed; top: 80px; right:0; width: 82vw; height: 82vh;">
      <div class="row">
        <div class="col col-12">
          <div class="one mt-3">
            <h1 class="flex-shrink-0">Dapagliflozin 10 mg<p style="color: red; margin-bottom: 0;">(Forxiga) -
                NF<sup>®</sup>
              </p>
              <span class="mt-1">Medication Monograph</span>
            </h1>
          </div>
          <div class="accordion mt-5 mb-5 flex-shrink-0" id="accordionExample">

            <div class="accordion-item ">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <img src="../svg/Dose.svg" alt="" height="30px" class="me-2">
                  DOSE
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                <div class="accordion-body">

                  <ul>
                    <li><strong><u>Heart Failure:</u></strong>
                      <p><strong>Note:</strong> Should be considered for use in combination with other
                        evidence-based therapies as part of an optimal medical regimen for heart failure. Benefits
                        were consistently demonstrated in patients with or without type 2 diabetes, regardless of
                        ejection fraction</p>
                      <p><strong>Adults: Oral: 10 mg once daily</strong></p>
                    </li>
                  </ul>

                </div>
              </div>
            </div>

            <div class="accordion-item ">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                  <img src="../svg/Infution.svg" alt="" height="30px" class="me-2">
                  ADMINISTRATION
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p>Administer in the morning with or without food</p>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                  <img src="../svg/sideeffect.svg" alt="" height="30px" class="me-2">
                  SIDE EFFECT
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <ul>
                    <li><strong>Endocrine & metabolic:</strong>Dyslipidemia (3%), hypovolemia (1% to 3%),
                      Ketoacidosis</li>
                    <li><strong>Gastrointestinal:</strong>Nausea (3%) </li>
                    <li><strong>Genitourinary:</strong> (2%), increased urine output (3% to 4%), urinary tract infection (6%);</li>
                    <li><strong>Infection:</strong>Genitourinary fungal infection (3% to 8%)</li>
                    <li><strong>Neuromuscular & skeletal:</strong>Back pain (4%), limb pain (2%)</li>
                    <li><strong>Respiratory:</strong>Nasopharyngitis (7%)</li>
                    <li><strong>Dermatologic:</strong>Severe dermatological reaction</li>
                    <li><strong>Hypersensitivity:</strong>Anaphylaxis (severe), angioedema</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                  <img src="../svg/Monitor.svg" alt="" height="30px" class="me-2">
                  MONITORING PARAMETER
                </button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <ul>
                    <li>Blood glucose; renal function (baseline and periodically during treatment); monitor for genital mycotic infections and urinary tract infection; monitor for signs/symptoms of necrotizing fasciitis (eg, fever and malaise along with genital or perianal pain, tenderness, erythema, swelling), hypersensitivity reactions; volume status (eg, weight, BP, hematocrit, electrolytes; baseline and periodically during treatment) and signs/symptoms of hypotension; if signs/symptoms of ketoacidosis (eg, nausea/vomiting, abdominal pain, malaise, shortness of breath), confirm diagnosis by direct measurement of blood ketones and arterial pH (measurement of serum bicarbonate or urinary ketones may not be adequate)</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>`);
  });
  $(".Sildenafil").on("click", function () {
    $("#container")
      .replaceWith(`<div class="container" id="container" style="position: fixed; top: 80px; right:0; width: 82vw; height: 82vh;">
      <div class="row">
        <div class="col col-12">
          <div class="one mt-3">
            <h1 class="flex-shrink-0">Sildenafil 100 mg<p style="color: red; margin-bottom: 0;">Virecta<sup>®</sup>
              </p>
              <span class="mt-1">Medication Monograph</span>
            </h1>
          </div>
          <div class="accordion mt-5 mb-5 flex-shrink-0" id="accordionExample">

            <div class="accordion-item ">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <img src="../svg/Dose.svg" alt="" height="30px" class="me-2">
                  DOSE
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                <div class="accordion-body">

                  <ul>
                    <li><strong><u>Pulmonary arterial hypertension:</u></strong>
                      <p><strong>Infants:</strong>Initial: 0.25 mg/kg/dose every 6 hours or 0.5 mg/kg/dose every 8 hours; titrate as needed; maximum reported dose range: 1 to 2 mg/kg/dose every 6 to 8 hours.
                        Note: May consider lower initial doses (eg, 0.25 mg/kg/dose every 8 hours) in critically ill patients receiving concomitant vasoactive agents, especially infants <4 months of age</p>
                      <p><strong>Children and Adolescents &lt;18 years:</strong>≤20 kg: Oral: 10 mg three times daily.
                        >20 to 45 kg: Oral: 20 mg three times daily.
                        >45 kg: Oral: 20 mg three times daily; titrate as needed; maximum dose: 40 mg/dose.</p>
                    </li>
                  </ul>

                </div>
              </div>
            </div>

            <div class="accordion-item ">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                  <img src="../svg/Infution.svg" alt="" height="30px" class="me-2">
                  ADMINISTRATION
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p>Administer doses with or without food</p>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                  <img src="../svg/sideeffect.svg" alt="" height="30px" class="me-2">
                  SIDE EFFECT
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <ul>
                    <li><strong>Cardiovascular:</strong>Flushing (9% to 19%), Angina pectoris (&lt;2%), edema (&lt;2%), heart failure (&lt;2%), hypotension (&lt;2%), palpitations (&lt;2%) </li>
                    <li><strong>Gastrointestinal:</strong>Diarrhea (9 -12%), dyspepsia (3% to 17%), xerostomia (<2%)</li>
                    <li><strong>Nervous system:</strong>Headache (16% to 49%)</li>
                    <li><strong>Neuromuscular & skeletal:</strong>Back pain (3% to 13%), limb pain (7% to 15%), myalgia (2% -14%)</li>
                    <li><strong>Ophthalmic:</strong>Visual disturbance (2% to 11%; including vision color changes, blurred vision, and photophobia)</li>
                    <li><strong>Otic:</strong>Auditory impairment (&lt;2%), hearing loss (&lt;2%)</li>
                    <li><strong>Respiratory:</strong>Epistaxis (2- 13%)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                  <img src="../svg/Monitor.svg" alt="" height="30px" class="me-2">
                  MONITORING PARAMETER
                </button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <ul>
                    <li>Monitor blood pressure and pulse when used concurrently with medications that lower blood pressure; monitor for pulmonary edema
                      ECG</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>`);
  });
  $(".Amlodipine").on("click", function () {
    $("#container")
      .replaceWith(`  <div class="container" id="container" style="position: fixed; top: 80px; right:0; width: 82vw; height: 82vh;">
      <div class="row">
        <div class="col col-12">
          <div class="one mt-3">
            <h1 class="flex-shrink-0">Amlodipine 5 mg<p style="color: red; margin-bottom: 0;">Norvasc<sup>®</sup>
              </p>
              <span class="mt-1">Medication Monograph</span>
            </h1>
          </div>
          <div class="accordion mt-5 mb-5 flex-shrink-0" id="accordionExample">

            <div class="accordion-item ">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <img src="../svg/Dose.svg" alt="" height="30px" class="me-2">
                  DOSE
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                <div class="accordion-body">

                  <ul>
                    <li><strong><u>Hypertension:</u></strong>
                      <p><strong>&lt;6 years:</strong> Limited data available: Initial: 0.1 mg/kg/dose once daily; titrate based on clinical response; maximum daily dose: 0.6 mg/kg/day or 5 mg/day.</p>
                      <p><strong>&#8805;6 years</strong> and Adolescents:Initial: 2.5 mg once daily; titrate based on clinical response; maximum daily dose: 10 mg/day</p>
                    </li>
                  </ul>

                </div>
              </div>
            </div>

            <div class="accordion-item ">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                  <img src="../svg/Infution.svg" alt="" height="30px" class="me-2">
                  ADMINISTRATION
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p>Administer without regard to meals</p>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                  <img src="../svg/sideeffect.svg" alt="" height="30px" class="me-2">
                  SIDE EFFECT
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <ul>
                    <li><strong>Cardiovascular:</strong>Flushing &#8804;3%, dose related, , palpitations &#8804;5%, dose related</li>
                    <li><strong>Gastrointestinal:</strong>Abdominal pain (2%), nausea (3%)</li>
                    <li><strong>Nervous system:</strong>dizziness (doses ≥5 mg/day: 3%), fatigue (5%)</li>
                    <li><strong>Neuromuscular & skeletal:</strong>Muscle cramps (≤2%)</li>
                    <li><strong>Dermatologic:</strong>Pruritus (≤2%), skin rash (≤2%)</li>
                    <li><strong>Respiratory:</strong>Dyspnea (≤2%)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                  <img src="../svg/Monitor.svg" alt="" height="30px" class="me-2">
                  MONITORING PARAMETER
                </button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <ul>
                    <li>Heart rate</li>
                      <li>Blood Pressure</li>
                      <li>Peripheral edema</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>`);
  });

  /*--------------------------------------------------------------
# ADD DIC COMMUNICATION
--------------------------------------------------------------*/
  $(".NonChemoTherapy").on("click", function () {
    $("#container")
      .replaceWith(`<div  class="container" id="container" style="position: fixed; top: 80px; right:0; width: 82vw; height: 82vh;">
  <table class="mx-auto table table-striped table-bordered mt-3 ">
    <thead>
      <tr>
        <th style="position: sticky; top: 0;" class="text-center  p-0 pt-3 pb-3" scope="col">Drug</th>
        <th style="position: sticky; top: 0;" class="text-center p-0 pt-3 pb-3" scope="col">CONC</th>
        <th style="position: sticky; top: 0;" class="text-center px-1 py-3" scope="col">MIN DIL (MAX CONC)
        </th>
        <th style="position: sticky; top: 0;" class="text-center px-1 py-3 " scope="col">NS</th>
        <th style="position: sticky; top: 0;" class="text-center  px-1 py-3" scope="col">D5W</th>
        <th style="position: sticky; top: 0;" class="text-center " scope="col">BUD Infusion Room
          Temperature</th>
        <th style="position: sticky; top: 0;" class="text-center " scope="col">BUD Infusion
          Refrigerator</th>
      </tr>
    </thead>
    <tbody id="tbody" style="font-size: 10px; margin-top: 41.6px;">
      <tr>
        <td class="text-center"> Acyclovir </td>
        <td class="text-center">500mg/5ml </td>
        <td class="text-center">10mg/ml
          Neonates, infants: 7mg/ml </td>
        <td class="text-center">
          <svg style="fill: #298c43;" width="22" height="22" id="Layer_1" data-name="Layer 1"
            viewBox="0 0 25 27">
            <path class="cls-1"
              d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
            <path class="cls-1"
              d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
          </svg>

        </td>
        <td class="text-center">
          <svg style="fill: #de2b38;" width="22" height="22" id="Layer_1" data-name="Layer 1"
            viewBox="0 0 25 27">
            <path class="cls-1"
              d="m22.5,8.04c-.06.04-2.52,1.97-2.52,1.97v10.03c0,.73-.59,1.32-1.32,1.32H5.57c-.73,0-1.32-.59-1.32-1.32V6.95c0-.73.59-1.32,1.32-1.32h11.85c1.03-.74,2.1-1.46,3.2-2.12-.57-.33-1.24-.51-1.95-.51H5.57c-2.18,0-3.95,1.77-3.95,3.95v13.09c0,2.18,1.77,3.95,3.95,3.95h13.09c2.18,0,3.95-1.77,3.95-3.95V7.95l-.12.09Z" />
            <path class="cls-1"
              d="m21.38,4.28c-1.43.87-2.81,1.8-4.14,2.79-1.33,1-2.62,2.03-3.87,3.11-.35.3-.69.61-1.04.92-.11-.13-.22-.26-.32-.39l-.48-.62-.24-.31-.22-.32-.45-.64c-.08-.11-.15-.22-.22-.33-.07-.11-.15-.22-.24-.31-.09-.1-.19-.19-.31-.27-.12-.08-.25-.16-.41-.21l-.19-.06c-.13-.04-.27-.07-.42-.08-.87-.04-1.61.63-1.65,1.5-.03.7.29,1.2.63,1.68l.51.72.26.36.28.35.56.69c.15.18.31.35.46.52-.05.05-.11.1-.16.16l-.88.87c-.29.29-.59.58-.87.88-.29.29-.57.6-.82.93-.13.16-.25.34-.36.52-.06.09-.11.18-.16.27-.05.09-.1.19-.15.3-.17.37-.18.82.02,1.21.35.68,1.18.94,1.85.59l.08-.04c.09-.04.18-.1.26-.15.08-.06.17-.11.25-.17.16-.12.32-.24.47-.37.31-.26.59-.53.87-.82.28-.29.56-.57.84-.86l.85-.85c.07-.07.14-.14.21-.21.13.11.27.23.41.34.11.09.23.19.35.28l.36.27.36.26c.12.09.25.17.37.25.12.08.25.17.37.25.13.08.26.16.39.23.13.08.26.16.39.23l.4.22c.13.07.27.14.41.21.14.07.27.14.42.2.14.06.28.13.43.18.08.03.14.06.23.09l.26.09c.54.19,1.17,0,1.51-.49.41-.59.26-1.41-.34-1.81l-.22-.15h-.02s-.02-.02-.03-.03l-.07-.04s-.1-.06-.15-.09c-.1-.06-.21-.13-.31-.19-.11-.06-.21-.13-.32-.2-.11-.07-.21-.14-.31-.21l-.31-.22c-.1-.07-.21-.15-.31-.23-.1-.08-.21-.15-.31-.23-.1-.08-.2-.16-.3-.24-.1-.08-.2-.16-.3-.24l-.29-.25-.29-.25c-.09-.09-.19-.18-.28-.27-.05-.05-.11-.1-.16-.15.32-.29.63-.59.96-.88l.89-.81.9-.79c.3-.26.6-.52.91-.78l.46-.39.23-.19.23-.19.93-.75c.31-.25.63-.49.94-.73l.47-.37c.16-.12.32-.24.48-.35l.95-.71.03-.02c.54-.4.69-1.15.34-1.74-.38-.62-1.19-.82-1.81-.44Z" />
          </svg>
        </td>
        <td class="text-center"> 24 hr </td>
        <td class="text-center"> do not refrigerate </td>
      </tr>
      <tr>
        <td class="text-center">Albumin </td>
        <td class="text-center">10gm/50ml </td>
        <td class="text-center"> -----</td>
        <td class="text-center"> <svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
            data-name="Layer 1" viewBox="0 0 25 27">
            <path class="cls-1"
              d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
            <path class="cls-1"
              d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
          </svg> </td>
        <td class="text-center"> <svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
            data-name="Layer 1" viewBox="0 0 25 27">
            <path class="cls-1"
              d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
            <path class="cls-1"
              d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
          </svg> </td>
        <td class="text-center">Use within 4 hours after opening vial</td>
        <td class="text-center">Store in refrigerator if opened </td>
      </tr>
      <tr>
        <td class="text-center">Amikacin sulfate </td>
        <td class="text-center">500mg/2ml </td>
        <td class="text-center">10mg/ml </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
            data-name="Layer 1" viewBox="0 0 25 27">
            <path class="cls-1"
              d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
            <path class="cls-1"
              d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
          </svg> </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
            data-name="Layer 1" viewBox="0 0 25 27">
            <path class="cls-1"
              d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
            <path class="cls-1"
              d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
          </svg> </td>
        <td class="text-center">24 hr </td>
        <td class="text-center">7 days </td>
      </tr>
      <tr>
        <td class="text-center">Ampicillin-Sulbactam </td>
        <td class="text-center">1500mg/4ml </td>
        <td class="text-center">45mg/ml (30mg/ml ampicillin and 15mg/ml sulbactam) </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
            data-name="Layer 1" viewBox="0 0 25 27">
            <path class="cls-1"
              d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
            <path class="cls-1"
              d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
          </svg> </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
            data-name="Layer 1" viewBox="0 0 25 27">
            <path class="cls-1"
              d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
            <path class="cls-1"
              d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
          </svg> </td>
        <td class="text-center">8 hrs. (NS) </td>
        <td class="text-center">48 hrs. (NS) </td>
      </tr>
      <tr>
        <td class="text-center">Amoxicillin-Clavulanic acid </td>
        <td class="text-center">600mg/10ml </td>
        <td class="text-center">20mg amoxicillin/ml </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
            data-name="Layer 1" viewBox="0 0 25 27">
            <path class="cls-1"
              d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
            <path class="cls-1"
              d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
          </svg> </td>
        <td class="text-center"><svg style="fill: #de2b38;" width="22" height="22" id="Layer_1"
            data-name="Layer 1" viewBox="0 0 25 27">
            <path class="cls-1"
              d="m22.5,8.04c-.06.04-2.52,1.97-2.52,1.97v10.03c0,.73-.59,1.32-1.32,1.32H5.57c-.73,0-1.32-.59-1.32-1.32V6.95c0-.73.59-1.32,1.32-1.32h11.85c1.03-.74,2.1-1.46,3.2-2.12-.57-.33-1.24-.51-1.95-.51H5.57c-2.18,0-3.95,1.77-3.95,3.95v13.09c0,2.18,1.77,3.95,3.95,3.95h13.09c2.18,0,3.95-1.77,3.95-3.95V7.95l-.12.09Z" />
            <path class="cls-1"
              d="m21.38,4.28c-1.43.87-2.81,1.8-4.14,2.79-1.33,1-2.62,2.03-3.87,3.11-.35.3-.69.61-1.04.92-.11-.13-.22-.26-.32-.39l-.48-.62-.24-.31-.22-.32-.45-.64c-.08-.11-.15-.22-.22-.33-.07-.11-.15-.22-.24-.31-.09-.1-.19-.19-.31-.27-.12-.08-.25-.16-.41-.21l-.19-.06c-.13-.04-.27-.07-.42-.08-.87-.04-1.61.63-1.65,1.5-.03.7.29,1.2.63,1.68l.51.72.26.36.28.35.56.69c.15.18.31.35.46.52-.05.05-.11.1-.16.16l-.88.87c-.29.29-.59.58-.87.88-.29.29-.57.6-.82.93-.13.16-.25.34-.36.52-.06.09-.11.18-.16.27-.05.09-.1.19-.15.3-.17.37-.18.82.02,1.21.35.68,1.18.94,1.85.59l.08-.04c.09-.04.18-.1.26-.15.08-.06.17-.11.25-.17.16-.12.32-.24.47-.37.31-.26.59-.53.87-.82.28-.29.56-.57.84-.86l.85-.85c.07-.07.14-.14.21-.21.13.11.27.23.41.34.11.09.23.19.35.28l.36.27.36.26c.12.09.25.17.37.25.12.08.25.17.37.25.13.08.26.16.39.23.13.08.26.16.39.23l.4.22c.13.07.27.14.41.21.14.07.27.14.42.2.14.06.28.13.43.18.08.03.14.06.23.09l.26.09c.54.19,1.17,0,1.51-.49.41-.59.26-1.41-.34-1.81l-.22-.15h-.02s-.02-.02-.03-.03l-.07-.04s-.1-.06-.15-.09c-.1-.06-.21-.13-.31-.19-.11-.06-.21-.13-.32-.2-.11-.07-.21-.14-.31-.21l-.31-.22c-.1-.07-.21-.15-.31-.23-.1-.08-.21-.15-.31-.23-.1-.08-.2-.16-.3-.24-.1-.08-.2-.16-.3-.24l-.29-.25-.29-.25c-.09-.09-.19-.18-.28-.27-.05-.05-.11-.1-.16-.15.32-.29.63-.59.96-.88l.89-.81.9-.79c.3-.26.6-.52.91-.78l.46-.39.23-.19.23-.19.93-.75c.31-.25.63-.49.94-.73l.47-.37c.16-.12.32-.24.48-.35l.95-.71.03-.02c.54-.4.69-1.15.34-1.74-.38-.62-1.19-.82-1.81-.44Z" />
          </svg> </td>
        <td class="text-center">1 hr </td>
        <td class="text-center">4 hr </td>
      </tr>
      <tr>
        <td class="text-center">Anidulafungin </td>
        <td class="text-center">100mg/30ml </td>
        <td class="text-center">0.77mg/ml </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
            data-name="Layer 1" viewBox="0 0 25 27">
            <path class="cls-1"
              d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
            <path class="cls-1"
              d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
          </svg> </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
            data-name="Layer 1" viewBox="0 0 25 27">
            <path class="cls-1"
              d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
            <path class="cls-1"
              d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
          </svg> </td>
        <td class="text-center">48 hr </td>
        <td class="text-center">48 hr </td>
      </tr>
      <tr>
        <td class="text-center">Aztreonam </td>
        <td class="text-center">1000mg/10ml </td>
        <td class="text-center">20mg/ml </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
            data-name="Layer 1" viewBox="0 0 25 27">
            <path class="cls-1"
              d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
            <path class="cls-1"
              d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
          </svg> </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
            data-name="Layer 1" viewBox="0 0 25 27">
            <path class="cls-1"
              d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
            <path class="cls-1"
              d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
          </svg> </td>
        <td class="text-center">48 hr </td>
        <td class="text-center">7 days </td>
      </tr>
      <tr>
        <td class="text-center">Ca leucovorin </td>
        <td class="text-center">50mg/5ml </td>
        <td class="text-center">0.5mg/ml </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
            data-name="Layer 1" viewBox="0 0 25 27">
            <path class="cls-1"
              d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
            <path class="cls-1"
              d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
          </svg> </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
            data-name="Layer 1" viewBox="0 0 25 27">
            <path class="cls-1"
              d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
            <path class="cls-1"
              d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
          </svg> </td>
        <td class="text-center">4 days </td>
        <td class="text-center">4 days </td>
      </tr>
      <tr>
        <td class="text-center">Cefepime </td>
        <td class="text-center">1000mg/10ml </td>
        <td class="text-center">40mg/ml </td>
        <td class="text-center"><svg style="fill: #de2b38;" width="22" height="22" id="Layer_1"
            data-name="Layer 1" viewBox="0 0 25 27">
            <path class="cls-1"
              d="m22.5,8.04c-.06.04-2.52,1.97-2.52,1.97v10.03c0,.73-.59,1.32-1.32,1.32H5.57c-.73,0-1.32-.59-1.32-1.32V6.95c0-.73.59-1.32,1.32-1.32h11.85c1.03-.74,2.1-1.46,3.2-2.12-.57-.33-1.24-.51-1.95-.51H5.57c-2.18,0-3.95,1.77-3.95,3.95v13.09c0,2.18,1.77,3.95,3.95,3.95h13.09c2.18,0,3.95-1.77,3.95-3.95V7.95l-.12.09Z" />
            <path class="cls-1"
              d="m21.38,4.28c-1.43.87-2.81,1.8-4.14,2.79-1.33,1-2.62,2.03-3.87,3.11-.35.3-.69.61-1.04.92-.11-.13-.22-.26-.32-.39l-.48-.62-.24-.31-.22-.32-.45-.64c-.08-.11-.15-.22-.22-.33-.07-.11-.15-.22-.24-.31-.09-.1-.19-.19-.31-.27-.12-.08-.25-.16-.41-.21l-.19-.06c-.13-.04-.27-.07-.42-.08-.87-.04-1.61.63-1.65,1.5-.03.7.29,1.2.63,1.68l.51.72.26.36.28.35.56.69c.15.18.31.35.46.52-.05.05-.11.1-.16.16l-.88.87c-.29.29-.59.58-.87.88-.29.29-.57.6-.82.93-.13.16-.25.34-.36.52-.06.09-.11.18-.16.27-.05.09-.1.19-.15.3-.17.37-.18.82.02,1.21.35.68,1.18.94,1.85.59l.08-.04c.09-.04.18-.1.26-.15.08-.06.17-.11.25-.17.16-.12.32-.24.47-.37.31-.26.59-.53.87-.82.28-.29.56-.57.84-.86l.85-.85c.07-.07.14-.14.21-.21.13.11.27.23.41.34.11.09.23.19.35.28l.36.27.36.26c.12.09.25.17.37.25.12.08.25.17.37.25.13.08.26.16.39.23.13.08.26.16.39.23l.4.22c.13.07.27.14.41.21.14.07.27.14.42.2.14.06.28.13.43.18.08.03.14.06.23.09l.26.09c.54.19,1.17,0,1.51-.49.41-.59.26-1.41-.34-1.81l-.22-.15h-.02s-.02-.02-.03-.03l-.07-.04s-.1-.06-.15-.09c-.1-.06-.21-.13-.31-.19-.11-.06-.21-.13-.32-.2-.11-.07-.21-.14-.31-.21l-.31-.22c-.1-.07-.21-.15-.31-.23-.1-.08-.21-.15-.31-.23-.1-.08-.2-.16-.3-.24-.1-.08-.2-.16-.3-.24l-.29-.25-.29-.25c-.09-.09-.19-.18-.28-.27-.05-.05-.11-.1-.16-.15.32-.29.63-.59.96-.88l.89-.81.9-.79c.3-.26.6-.52.91-.78l.46-.39.23-.19.23-.19.93-.75c.31-.25.63-.49.94-.73l.47-.37c.16-.12.32-.24.48-.35l.95-.71.03-.02c.54-.4.69-1.15.34-1.74-.38-.62-1.19-.82-1.81-.44Z" />
          </svg> </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
            data-name="Layer 1" viewBox="0 0 25 27">
            <path class="cls-1"
              d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
            <path class="cls-1"
              d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
          </svg> </td>
        <td class="text-center">24 hr</td>
        <td class="text-center">7 days</td>
      </tr>
      <tr>
        <td class="text-center">Ceftazidime </td>
        <td class="text-center">1000mg/10ml </td>
        <td class="text-center">40mg/ml
          Neonates, Fluid restriction: 125mg/ml </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
            data-name="Layer 1" viewBox="0 0 25 27">
            <path class="cls-1"
              d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
            <path class="cls-1"
              d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
          </svg> </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
            data-name="Layer 1" viewBox="0 0 25 27">
            <path class="cls-1"
              d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
            <path class="cls-1"
              d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
          </svg> </td>
        <td class="text-center">24 hr </td>
        <td class="text-center">7 days </td>
      </tr>
      <tr>
        <td class="text-center">Ceftazidime-Avibactam </td>
        <td class="text-center">2.5 gm /12.5ml ( 2000mg Ceftazidime/ 500mg avibactam after reconstituted with
          10ml ) </td>
        <td class="text-center">50mg/ml (40mg/ml Ceftazidime and 10mg/ml avibactam) </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
            data-name="Layer 1" viewBox="0 0 25 27">
            <path class="cls-1"
              d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
            <path class="cls-1"
              d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
          </svg> </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
            data-name="Layer 1" viewBox="0 0 25 27">
            <path class="cls-1"
              d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
            <path class="cls-1"
              d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
          </svg> </td>
        <td class="text-center">12 hr </td>
        <td class="text-center">24 hr </td>
      </tr>
      <tr>
        <td class="text-center">Ceftriaxone </td>
        <td class="text-center">1000mg/10ml </td>
        <td class="text-center"> 40mg/ml</td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
          <path class="cls-1"
            d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
        </svg> </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
          <path class="cls-1"
            d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
        </svg> </td>
        <td class="text-center">24 hr </td>
        <td class="text-center">7 days </td>
      </tr>
      <tr>
        <td class="text-center">Colistimethate </td>
        <td class="text-center">4mg/ml </td>
        <td class="text-center">4mg/ml </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
          <path class="cls-1"
            d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
        </svg> </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
          <path class="cls-1"
            d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
        </svg> </td>
        <td class="text-center">24 hr </td>
        <td class="text-center">24 hr </td>
      </tr>
      <tr>
        <td class="text-center">Enoxaparin </td>
        <td class="text-center">2000 I.U/20mg, 4000 I.U/40mg, 6000 I.U/60mg, 8000 I.U/80mg </td>
        <td class="text-center">----- </td>
        <td class="text-center">----- </td>
        <td class="text-center">----- </td>
        <td class="text-center">24 hr </td>
        <td class="text-center">7 days </td>
      </tr>
      <tr>
        <td class="text-center">Ertapenem </td>
        <td class="text-center">1000mg/10ml </td>
        <td class="text-center">20mg/ml </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
          <path class="cls-1"
            d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
        </svg> </td>
        <td class="text-center"><svg style="fill: #de2b38;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m22.5,8.04c-.06.04-2.52,1.97-2.52,1.97v10.03c0,.73-.59,1.32-1.32,1.32H5.57c-.73,0-1.32-.59-1.32-1.32V6.95c0-.73.59-1.32,1.32-1.32h11.85c1.03-.74,2.1-1.46,3.2-2.12-.57-.33-1.24-.51-1.95-.51H5.57c-2.18,0-3.95,1.77-3.95,3.95v13.09c0,2.18,1.77,3.95,3.95,3.95h13.09c2.18,0,3.95-1.77,3.95-3.95V7.95l-.12.09Z" />
          <path class="cls-1"
            d="m21.38,4.28c-1.43.87-2.81,1.8-4.14,2.79-1.33,1-2.62,2.03-3.87,3.11-.35.3-.69.61-1.04.92-.11-.13-.22-.26-.32-.39l-.48-.62-.24-.31-.22-.32-.45-.64c-.08-.11-.15-.22-.22-.33-.07-.11-.15-.22-.24-.31-.09-.1-.19-.19-.31-.27-.12-.08-.25-.16-.41-.21l-.19-.06c-.13-.04-.27-.07-.42-.08-.87-.04-1.61.63-1.65,1.5-.03.7.29,1.2.63,1.68l.51.72.26.36.28.35.56.69c.15.18.31.35.46.52-.05.05-.11.1-.16.16l-.88.87c-.29.29-.59.58-.87.88-.29.29-.57.6-.82.93-.13.16-.25.34-.36.52-.06.09-.11.18-.16.27-.05.09-.1.19-.15.3-.17.37-.18.82.02,1.21.35.68,1.18.94,1.85.59l.08-.04c.09-.04.18-.1.26-.15.08-.06.17-.11.25-.17.16-.12.32-.24.47-.37.31-.26.59-.53.87-.82.28-.29.56-.57.84-.86l.85-.85c.07-.07.14-.14.21-.21.13.11.27.23.41.34.11.09.23.19.35.28l.36.27.36.26c.12.09.25.17.37.25.12.08.25.17.37.25.13.08.26.16.39.23.13.08.26.16.39.23l.4.22c.13.07.27.14.41.21.14.07.27.14.42.2.14.06.28.13.43.18.08.03.14.06.23.09l.26.09c.54.19,1.17,0,1.51-.49.41-.59.26-1.41-.34-1.81l-.22-.15h-.02s-.02-.02-.03-.03l-.07-.04s-.1-.06-.15-.09c-.1-.06-.21-.13-.31-.19-.11-.06-.21-.13-.32-.2-.11-.07-.21-.14-.31-.21l-.31-.22c-.1-.07-.21-.15-.31-.23-.1-.08-.21-.15-.31-.23-.1-.08-.2-.16-.3-.24-.1-.08-.2-.16-.3-.24l-.29-.25-.29-.25c-.09-.09-.19-.18-.28-.27-.05-.05-.11-.1-.16-.15.32-.29.63-.59.96-.88l.89-.81.9-.79c.3-.26.6-.52.91-.78l.46-.39.23-.19.23-.19.93-.75c.31-.25.63-.49.94-.73l.47-.37c.16-.12.32-.24.48-.35l.95-.71.03-.02c.54-.4.69-1.15.34-1.74-.38-.62-1.19-.82-1.81-.44Z" />
        </svg> </td>
        <td class="text-center">6 hr </td>
        <td class="text-center">12 hr </td>
      </tr>
      <tr>
        <td class="text-center">Esomeprazole </td>
        <td class="text-center">40mg/5ml </td>
        <td class="text-center">0.8mg/ml </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
          <path class="cls-1"
            d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
        </svg> </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
          <path class="cls-1"
            d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
        </svg> </td>
        <td class="text-center">24 hr </td>
        <td class="text-center">7 days </td>
      </tr>
      <tr>
        <td class="text-center">Filgrastim </td>
        <td class="text-center">300 mcg/ml </td>
        <td class="text-center">>/= 15mcg/ml
          &lt; 15mcg/ml use with albumin 2mg/ml </td>
        <td class="text-center"><svg style="fill: #de2b38;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m22.5,8.04c-.06.04-2.52,1.97-2.52,1.97v10.03c0,.73-.59,1.32-1.32,1.32H5.57c-.73,0-1.32-.59-1.32-1.32V6.95c0-.73.59-1.32,1.32-1.32h11.85c1.03-.74,2.1-1.46,3.2-2.12-.57-.33-1.24-.51-1.95-.51H5.57c-2.18,0-3.95,1.77-3.95,3.95v13.09c0,2.18,1.77,3.95,3.95,3.95h13.09c2.18,0,3.95-1.77,3.95-3.95V7.95l-.12.09Z" />
          <path class="cls-1"
            d="m21.38,4.28c-1.43.87-2.81,1.8-4.14,2.79-1.33,1-2.62,2.03-3.87,3.11-.35.3-.69.61-1.04.92-.11-.13-.22-.26-.32-.39l-.48-.62-.24-.31-.22-.32-.45-.64c-.08-.11-.15-.22-.22-.33-.07-.11-.15-.22-.24-.31-.09-.1-.19-.19-.31-.27-.12-.08-.25-.16-.41-.21l-.19-.06c-.13-.04-.27-.07-.42-.08-.87-.04-1.61.63-1.65,1.5-.03.7.29,1.2.63,1.68l.51.72.26.36.28.35.56.69c.15.18.31.35.46.52-.05.05-.11.1-.16.16l-.88.87c-.29.29-.59.58-.87.88-.29.29-.57.6-.82.93-.13.16-.25.34-.36.52-.06.09-.11.18-.16.27-.05.09-.1.19-.15.3-.17.37-.18.82.02,1.21.35.68,1.18.94,1.85.59l.08-.04c.09-.04.18-.1.26-.15.08-.06.17-.11.25-.17.16-.12.32-.24.47-.37.31-.26.59-.53.87-.82.28-.29.56-.57.84-.86l.85-.85c.07-.07.14-.14.21-.21.13.11.27.23.41.34.11.09.23.19.35.28l.36.27.36.26c.12.09.25.17.37.25.12.08.25.17.37.25.13.08.26.16.39.23.13.08.26.16.39.23l.4.22c.13.07.27.14.41.21.14.07.27.14.42.2.14.06.28.13.43.18.08.03.14.06.23.09l.26.09c.54.19,1.17,0,1.51-.49.41-.59.26-1.41-.34-1.81l-.22-.15h-.02s-.02-.02-.03-.03l-.07-.04s-.1-.06-.15-.09c-.1-.06-.21-.13-.31-.19-.11-.06-.21-.13-.32-.2-.11-.07-.21-.14-.31-.21l-.31-.22c-.1-.07-.21-.15-.31-.23-.1-.08-.21-.15-.31-.23-.1-.08-.2-.16-.3-.24-.1-.08-.2-.16-.3-.24l-.29-.25-.29-.25c-.09-.09-.19-.18-.28-.27-.05-.05-.11-.1-.16-.15.32-.29.63-.59.96-.88l.89-.81.9-.79c.3-.26.6-.52.91-.78l.46-.39.23-.19.23-.19.93-.75c.31-.25.63-.49.94-.73l.47-.37c.16-.12.32-.24.48-.35l.95-.71.03-.02c.54-.4.69-1.15.34-1.74-.38-.62-1.19-.82-1.81-.44Z" />
        </svg> </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
          <path class="cls-1"
            d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
        </svg> </td>
        <td class="text-center">24hr better in refrigerator </td>
        <td class="text-center">24hr </td>
      </tr>
      <tr>
        <td class="text-center">Fluconazole </td>
        <td class="text-center">200mg/100ml </td>
        <td class="text-center">----- </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
          <path class="cls-1"
            d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
        </svg> </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
          <path class="cls-1"
            d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
        </svg> </td>
        <td class="text-center">24 hr </td>
        <td class="text-center">7 days </td>
      </tr>
      <tr>
        <td class="text-center">Gentamicin </td>
        <td class="text-center">80mg/2ml </td>
        <td class="text-center">10mg/ml </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
          <path class="cls-1"
            d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
        </svg> </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
          <path class="cls-1"
            d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
        </svg> </td>
        <td class="text-center">24 hr </td>
        <td class="text-center">4 days </td>
      </tr>
      <tr>
        <td class="text-center">Levofloxacin </td>
        <td class="text-center">500mg/100ml </td>
        <td class="text-center">----- </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
          <path class="cls-1"
            d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
        </svg> </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
          <path class="cls-1"
            d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
        </svg> </td>
        <td class="text-center">24 hr </td>
        <td class="text-center">7 days </td>
      </tr>
      <tr>
        <td class="text-center">Linezolid </td>
        <td class="text-center">600mg/300ml
          200mg /100ml </td>
        <td class="text-center">----- </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
          <path class="cls-1"
            d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
        </svg> </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
          <path class="cls-1"
            d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
        </svg> </td>
        <td class="text-center">24 hr better in refrigerator </td>
        <td class="text-center">24 hr </td>
      </tr>
      <tr>
        <td class="text-center">Liposomal Amphotericin B </td>
        <td class="text-center">50mg/13ml </td>
        <td class="text-center">2mg/ml </td>
        <td class="text-center"><svg style="fill: #de2b38;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m22.5,8.04c-.06.04-2.52,1.97-2.52,1.97v10.03c0,.73-.59,1.32-1.32,1.32H5.57c-.73,0-1.32-.59-1.32-1.32V6.95c0-.73.59-1.32,1.32-1.32h11.85c1.03-.74,2.1-1.46,3.2-2.12-.57-.33-1.24-.51-1.95-.51H5.57c-2.18,0-3.95,1.77-3.95,3.95v13.09c0,2.18,1.77,3.95,3.95,3.95h13.09c2.18,0,3.95-1.77,3.95-3.95V7.95l-.12.09Z" />
          <path class="cls-1"
            d="m21.38,4.28c-1.43.87-2.81,1.8-4.14,2.79-1.33,1-2.62,2.03-3.87,3.11-.35.3-.69.61-1.04.92-.11-.13-.22-.26-.32-.39l-.48-.62-.24-.31-.22-.32-.45-.64c-.08-.11-.15-.22-.22-.33-.07-.11-.15-.22-.24-.31-.09-.1-.19-.19-.31-.27-.12-.08-.25-.16-.41-.21l-.19-.06c-.13-.04-.27-.07-.42-.08-.87-.04-1.61.63-1.65,1.5-.03.7.29,1.2.63,1.68l.51.72.26.36.28.35.56.69c.15.18.31.35.46.52-.05.05-.11.1-.16.16l-.88.87c-.29.29-.59.58-.87.88-.29.29-.57.6-.82.93-.13.16-.25.34-.36.52-.06.09-.11.18-.16.27-.05.09-.1.19-.15.3-.17.37-.18.82.02,1.21.35.68,1.18.94,1.85.59l.08-.04c.09-.04.18-.1.26-.15.08-.06.17-.11.25-.17.16-.12.32-.24.47-.37.31-.26.59-.53.87-.82.28-.29.56-.57.84-.86l.85-.85c.07-.07.14-.14.21-.21.13.11.27.23.41.34.11.09.23.19.35.28l.36.27.36.26c.12.09.25.17.37.25.12.08.25.17.37.25.13.08.26.16.39.23.13.08.26.16.39.23l.4.22c.13.07.27.14.41.21.14.07.27.14.42.2.14.06.28.13.43.18.08.03.14.06.23.09l.26.09c.54.19,1.17,0,1.51-.49.41-.59.26-1.41-.34-1.81l-.22-.15h-.02s-.02-.02-.03-.03l-.07-.04s-.1-.06-.15-.09c-.1-.06-.21-.13-.31-.19-.11-.06-.21-.13-.32-.2-.11-.07-.21-.14-.31-.21l-.31-.22c-.1-.07-.21-.15-.31-.23-.1-.08-.21-.15-.31-.23-.1-.08-.2-.16-.3-.24-.1-.08-.2-.16-.3-.24l-.29-.25-.29-.25c-.09-.09-.19-.18-.28-.27-.05-.05-.11-.1-.16-.15.32-.29.63-.59.96-.88l.89-.81.9-.79c.3-.26.6-.52.91-.78l.46-.39.23-.19.23-.19.93-.75c.31-.25.63-.49.94-.73l.47-.37c.16-.12.32-.24.48-.35l.95-.71.03-.02c.54-.4.69-1.15.34-1.74-.38-.62-1.19-.82-1.81-.44Z" />
        </svg> </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
          <path class="cls-1"
            d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
        </svg> </td>
        <td class="text-center">24 hr </td>
        <td class="text-center">48 hr </td>
      </tr>
      <tr>
        <td class="text-center">Meropenem </td>
        <td class="text-center">1gm/20ml </td>
        <td class="text-center">20mg/ml </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
          <path class="cls-1"
            d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
        </svg> </td>
        <td class="text-center"><svg style="fill: #de2b38;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m22.5,8.04c-.06.04-2.52,1.97-2.52,1.97v10.03c0,.73-.59,1.32-1.32,1.32H5.57c-.73,0-1.32-.59-1.32-1.32V6.95c0-.73.59-1.32,1.32-1.32h11.85c1.03-.74,2.1-1.46,3.2-2.12-.57-.33-1.24-.51-1.95-.51H5.57c-2.18,0-3.95,1.77-3.95,3.95v13.09c0,2.18,1.77,3.95,3.95,3.95h13.09c2.18,0,3.95-1.77,3.95-3.95V7.95l-.12.09Z" />
          <path class="cls-1"
            d="m21.38,4.28c-1.43.87-2.81,1.8-4.14,2.79-1.33,1-2.62,2.03-3.87,3.11-.35.3-.69.61-1.04.92-.11-.13-.22-.26-.32-.39l-.48-.62-.24-.31-.22-.32-.45-.64c-.08-.11-.15-.22-.22-.33-.07-.11-.15-.22-.24-.31-.09-.1-.19-.19-.31-.27-.12-.08-.25-.16-.41-.21l-.19-.06c-.13-.04-.27-.07-.42-.08-.87-.04-1.61.63-1.65,1.5-.03.7.29,1.2.63,1.68l.51.72.26.36.28.35.56.69c.15.18.31.35.46.52-.05.05-.11.1-.16.16l-.88.87c-.29.29-.59.58-.87.88-.29.29-.57.6-.82.93-.13.16-.25.34-.36.52-.06.09-.11.18-.16.27-.05.09-.1.19-.15.3-.17.37-.18.82.02,1.21.35.68,1.18.94,1.85.59l.08-.04c.09-.04.18-.1.26-.15.08-.06.17-.11.25-.17.16-.12.32-.24.47-.37.31-.26.59-.53.87-.82.28-.29.56-.57.84-.86l.85-.85c.07-.07.14-.14.21-.21.13.11.27.23.41.34.11.09.23.19.35.28l.36.27.36.26c.12.09.25.17.37.25.12.08.25.17.37.25.13.08.26.16.39.23.13.08.26.16.39.23l.4.22c.13.07.27.14.41.21.14.07.27.14.42.2.14.06.28.13.43.18.08.03.14.06.23.09l.26.09c.54.19,1.17,0,1.51-.49.41-.59.26-1.41-.34-1.81l-.22-.15h-.02s-.02-.02-.03-.03l-.07-.04s-.1-.06-.15-.09c-.1-.06-.21-.13-.31-.19-.11-.06-.21-.13-.32-.2-.11-.07-.21-.14-.31-.21l-.31-.22c-.1-.07-.21-.15-.31-.23-.1-.08-.21-.15-.31-.23-.1-.08-.2-.16-.3-.24-.1-.08-.2-.16-.3-.24l-.29-.25-.29-.25c-.09-.09-.19-.18-.28-.27-.05-.05-.11-.1-.16-.15.32-.29.63-.59.96-.88l.89-.81.9-.79c.3-.26.6-.52.91-.78l.46-.39.23-.19.23-.19.93-.75c.31-.25.63-.49.94-.73l.47-.37c.16-.12.32-.24.48-.35l.95-.71.03-.02c.54-.4.69-1.15.34-1.74-.38-.62-1.19-.82-1.81-.44Z" />
        </svg> </td>
        <td class="text-center">4 hr </td>
        <td class="text-center">24 hr </td>
      </tr>
      <tr>
        <td class="text-center">Mesna </td>
        <td class="text-center">400mg/4ml </td>
        <td class="text-center">20mg/ml </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
          <path class="cls-1"
            d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
        </svg> </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
          <path class="cls-1"
            d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
        </svg> </td>
        <td class="text-center">24 hr </td>
        <td class="text-center">48 hr </td>
      </tr>
      <tr>
        <td class="text-center">Methylprednisolone </td>
        <td class="text-center">500mg/8ml </td>
        <td class="text-center">125mg/ml </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
          <path class="cls-1"
            d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
        </svg> </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
          <path class="cls-1"
            d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
        </svg> </td>
        <td class="text-center">4 hr </td>
        <td class="text-center">24 hr </td>
      </tr>
      <tr>
        <td class="text-center">Metronidazole </td>
        <td class="text-center">500mg/100ml </td>
        <td class="text-center">----- </td>
        <td class="text-center"> </td>
        <td class="text-center"> </td>
        <td class="text-center">24 hr </td>
        <td class="text-center">Do not refrigerate </td>
      </tr>
      <tr>
        <td class="text-center">Octreotide </td>
        <td class="text-center">100mcg/ml
          200mcg/ml </td>
        <td class="text-center">Dilute in 50 ml (may be given undiluted) </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
          <path class="cls-1"
            d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
        </svg> </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
          <path class="cls-1"
            d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
        </svg> </td>
        <td class="text-center">24 hr better in refrigerator </td>
        <td class="text-center">24 hr </td>
      </tr>
      <tr>
        <td class="text-center">Ondansetron </td>
        <td class="text-center">4mg/2ml </td>
        <td class="text-center">1mg/ml </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
          <path class="cls-1"
            d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
        </svg> </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
          <path class="cls-1"
            d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
        </svg> </td>
        <td class="text-center">24 hr </td>
        <td class="text-center">48 hr </td>
      </tr>
      <tr>
        <td class="text-center">Phenytoin </td>
        <td class="text-center">250mg/5ml </td>
        <td class="text-center">5mg/ml </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
          <path class="cls-1"
            d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
        </svg> </td>
        <td class="text-center"><svg style="fill: #de2b38;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m22.5,8.04c-.06.04-2.52,1.97-2.52,1.97v10.03c0,.73-.59,1.32-1.32,1.32H5.57c-.73,0-1.32-.59-1.32-1.32V6.95c0-.73.59-1.32,1.32-1.32h11.85c1.03-.74,2.1-1.46,3.2-2.12-.57-.33-1.24-.51-1.95-.51H5.57c-2.18,0-3.95,1.77-3.95,3.95v13.09c0,2.18,1.77,3.95,3.95,3.95h13.09c2.18,0,3.95-1.77,3.95-3.95V7.95l-.12.09Z" />
          <path class="cls-1"
            d="m21.38,4.28c-1.43.87-2.81,1.8-4.14,2.79-1.33,1-2.62,2.03-3.87,3.11-.35.3-.69.61-1.04.92-.11-.13-.22-.26-.32-.39l-.48-.62-.24-.31-.22-.32-.45-.64c-.08-.11-.15-.22-.22-.33-.07-.11-.15-.22-.24-.31-.09-.1-.19-.19-.31-.27-.12-.08-.25-.16-.41-.21l-.19-.06c-.13-.04-.27-.07-.42-.08-.87-.04-1.61.63-1.65,1.5-.03.7.29,1.2.63,1.68l.51.72.26.36.28.35.56.69c.15.18.31.35.46.52-.05.05-.11.1-.16.16l-.88.87c-.29.29-.59.58-.87.88-.29.29-.57.6-.82.93-.13.16-.25.34-.36.52-.06.09-.11.18-.16.27-.05.09-.1.19-.15.3-.17.37-.18.82.02,1.21.35.68,1.18.94,1.85.59l.08-.04c.09-.04.18-.1.26-.15.08-.06.17-.11.25-.17.16-.12.32-.24.47-.37.31-.26.59-.53.87-.82.28-.29.56-.57.84-.86l.85-.85c.07-.07.14-.14.21-.21.13.11.27.23.41.34.11.09.23.19.35.28l.36.27.36.26c.12.09.25.17.37.25.12.08.25.17.37.25.13.08.26.16.39.23.13.08.26.16.39.23l.4.22c.13.07.27.14.41.21.14.07.27.14.42.2.14.06.28.13.43.18.08.03.14.06.23.09l.26.09c.54.19,1.17,0,1.51-.49.41-.59.26-1.41-.34-1.81l-.22-.15h-.02s-.02-.02-.03-.03l-.07-.04s-.1-.06-.15-.09c-.1-.06-.21-.13-.31-.19-.11-.06-.21-.13-.32-.2-.11-.07-.21-.14-.31-.21l-.31-.22c-.1-.07-.21-.15-.31-.23-.1-.08-.21-.15-.31-.23-.1-.08-.2-.16-.3-.24-.1-.08-.2-.16-.3-.24l-.29-.25-.29-.25c-.09-.09-.19-.18-.28-.27-.05-.05-.11-.1-.16-.15.32-.29.63-.59.96-.88l.89-.81.9-.79c.3-.26.6-.52.91-.78l.46-.39.23-.19.23-.19.93-.75c.31-.25.63-.49.94-.73l.47-.37c.16-.12.32-.24.48-.35l.95-.71.03-.02c.54-.4.69-1.15.34-1.74-.38-.62-1.19-.82-1.81-.44Z" />
        </svg> </td>
        <td class="text-center">4 hr </td>
        <td class="text-center">Do not refrigerate </td>
      </tr>
      <tr>
        <td class="text-center">Piperacillin-Tazobactam </td>
        <td class="text-center">4000mg piperacillin/20ml </td>
        <td class="text-center">80mg/ml piperacillin </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
          <path class="cls-1"
            d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
        </svg> </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
          <path class="cls-1"
            d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
        </svg> </td>
        <td class="text-center">24 hr </td>
        <td class="text-center">7 days </td>
      </tr>
      <tr>
        <td class="text-center">Teicoplanin </td>
        <td class="text-center">200mg/3ml </td>
        <td class="text-center">67mg/ml (doses >800mg should be further diluted in 50ml) </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
          <path class="cls-1"
            d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
        </svg> </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
          <path class="cls-1"
            d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
        </svg> </td>
        <td class="text-center">24 hr </td>
        <td class="text-center">7 days </td>
      </tr>
      <tr>
        <td class="text-center">Tigecycline </td>
        <td class="text-center">50mg/5ml </td>
        <td class="text-center">1mg/ml </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
          <path class="cls-1"
            d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
        </svg> </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
          <path class="cls-1"
            d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
        </svg> </td>
        <td class="text-center">24 hr </td>
        <td class="text-center">48hr </td>
      </tr>
      <tr>
        <td class="text-center">Tramadol </td>
        <td class="text-center">100mg/2ml </td>
        <td class="text-center">50mg/ml </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
          <path class="cls-1"
            d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
        </svg> </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
          <path class="cls-1"
            d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
        </svg> </td>
        <td class="text-center">24 hr </td>
        <td class="text-center">7 days </td>
      </tr>
      <tr>
        <td class="text-center">Vancomycin </td>
        <td class="text-center">500mg/10ml </td>
        <td class="text-center">5mg/ml (10mg/ml if fluid restriction is necessary) </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
          <path class="cls-1"
            d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
        </svg> </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
          <path class="cls-1"
            d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
        </svg> </td>
        <td class="text-center">24 hr </td>
        <td class="text-center">7 days </td>
      </tr>
      <tr>
        <td class="text-center">Vitamin B </td>
        <td class="text-center">62.5mg/2ml </td>
        <td class="text-center">Dilute to 10 or 20 ml (may be given undiluted)</td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
          <path class="cls-1"
            d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
        </svg> </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
          <path class="cls-1"
            d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
        </svg> </td>
        <td class="text-center">24 hr </td>
        <td class="text-center">48hr </td>
      </tr>
      <tr>
        <td class="text-center">Vitamin K </td>
        <td class="text-center">10mg/ml </td>
        <td class="text-center">Dilute in 50ml </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
          <path class="cls-1"
            d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
        </svg> </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
          <path class="cls-1"
            d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
        </svg> </td>
        <td class="text-center">24 hr </td>
        <td class="text-center">7 days </td>
      </tr>
      <tr>
        <td class="text-center">Voriconazole </td>
        <td class="text-center">200mg/20ml </td>
        <td class="text-center">5mg/ml </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
          <path class="cls-1"
            d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
        </svg> </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
          <path class="cls-1"
            d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
        </svg> </td>
        <td class="text-center">24 hr </td>
        <td class="text-center">24 hr </td>
      </tr>
      <tr>
        <td class="text-center">Zoledronic acid </td>
        <td class="text-center">4mg/5ml </td>
        <td class="text-center">Dilute in 100 ml </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
          <path class="cls-1"
            d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
        </svg> </td>
        <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
          data-name="Layer 1" viewBox="0 0 25 27">
          <path class="cls-1"
            d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
          <path class="cls-1"
            d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
        </svg> </td>
        <td class="text-center">Within 24 hours </td>
        <td class="text-center">24 hr </td>
      </tr>

    </tbody>




  </table>
</div>`);
  });
  $(".ChemoTherapy").on("click", function () {
    $("#container")
      .replaceWith(`<div class="container" id="container" style="position: fixed; top: 80px; right:0; width: 82vw; height: 82vh;">
    <table class="mx-auto table table-striped table-bordered mt-3 ">
      <thead>
        <tr>
          <th style="position: sticky; top: 0;" class="text-center  p-0 pt-3 pb-3" scope="col">Drug</th>
          <th style="position: sticky; top: 0;" class="text-center p-0 pt-3 pb-3" scope="col">CONC</th>
          <th style="position: sticky; top: 0;" class="text-center px-1 py-3" scope="col">MIN DIL (MAX CONC)
          </th>
          <th style="position: sticky; top: 0;" class="text-center px-1 py-3 " scope="col">NS</th>
          <th style="position: sticky; top: 0;" class="text-center  px-1 py-3" scope="col">D5W</th>
          <th style="position: sticky; top: 0;" class="text-center " scope="col">BUD Infusion Room
            Temperature</th>
          <th style="position: sticky; top: 0;" class="text-center " scope="col">BUD Infusion
            Refrigerator</th>
        </tr>
      </thead>
      <tbody id="tbody" style="font-size: 10px; margin-top: 41.6px;">
        <tr>
          <td class="text-center"> 5-FU </td>
          <td class="text-center">250mg/5ml</td>
          <td class="text-center">50 mg/ml </td>
          <td class="text-center">
            <svg style="fill: #de2b38;" width="22" height="22" id="Layer_1" data-name="Layer 1"
              viewBox="0 0 25 27">
              <path class="cls-1"
                d="m22.5,8.04c-.06.04-2.52,1.97-2.52,1.97v10.03c0,.73-.59,1.32-1.32,1.32H5.57c-.73,0-1.32-.59-1.32-1.32V6.95c0-.73.59-1.32,1.32-1.32h11.85c1.03-.74,2.1-1.46,3.2-2.12-.57-.33-1.24-.51-1.95-.51H5.57c-2.18,0-3.95,1.77-3.95,3.95v13.09c0,2.18,1.77,3.95,3.95,3.95h13.09c2.18,0,3.95-1.77,3.95-3.95V7.95l-.12.09Z" />
              <path class="cls-1"
                d="m21.38,4.28c-1.43.87-2.81,1.8-4.14,2.79-1.33,1-2.62,2.03-3.87,3.11-.35.3-.69.61-1.04.92-.11-.13-.22-.26-.32-.39l-.48-.62-.24-.31-.22-.32-.45-.64c-.08-.11-.15-.22-.22-.33-.07-.11-.15-.22-.24-.31-.09-.1-.19-.19-.31-.27-.12-.08-.25-.16-.41-.21l-.19-.06c-.13-.04-.27-.07-.42-.08-.87-.04-1.61.63-1.65,1.5-.03.7.29,1.2.63,1.68l.51.72.26.36.28.35.56.69c.15.18.31.35.46.52-.05.05-.11.1-.16.16l-.88.87c-.29.29-.59.58-.87.88-.29.29-.57.6-.82.93-.13.16-.25.34-.36.52-.06.09-.11.18-.16.27-.05.09-.1.19-.15.3-.17.37-.18.82.02,1.21.35.68,1.18.94,1.85.59l.08-.04c.09-.04.18-.1.26-.15.08-.06.17-.11.25-.17.16-.12.32-.24.47-.37.31-.26.59-.53.87-.82.28-.29.56-.57.84-.86l.85-.85c.07-.07.14-.14.21-.21.13.11.27.23.41.34.11.09.23.19.35.28l.36.27.36.26c.12.09.25.17.37.25.12.08.25.17.37.25.13.08.26.16.39.23.13.08.26.16.39.23l.4.22c.13.07.27.14.41.21.14.07.27.14.42.2.14.06.28.13.43.18.08.03.14.06.23.09l.26.09c.54.19,1.17,0,1.51-.49.41-.59.26-1.41-.34-1.81l-.22-.15h-.02s-.02-.02-.03-.03l-.07-.04s-.1-.06-.15-.09c-.1-.06-.21-.13-.31-.19-.11-.06-.21-.13-.32-.2-.11-.07-.21-.14-.31-.21l-.31-.22c-.1-.07-.21-.15-.31-.23-.1-.08-.21-.15-.31-.23-.1-.08-.2-.16-.3-.24-.1-.08-.2-.16-.3-.24l-.29-.25-.29-.25c-.09-.09-.19-.18-.28-.27-.05-.05-.11-.1-.16-.15.32-.29.63-.59.96-.88l.89-.81.9-.79c.3-.26.6-.52.91-.78l.46-.39.23-.19.23-.19.93-.75c.31-.25.63-.49.94-.73l.47-.37c.16-.12.32-.24.48-.35l.95-.71.03-.02c.54-.4.69-1.15.34-1.74-.38-.62-1.19-.82-1.81-.44Z" />
            </svg>

          </td>
          <td class="text-center">
            <svg style="fill: #298c43;" width="22" height="22" id="Layer_1" data-name="Layer 1"
              viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg>
          </td>
          <td class="text-center">7 days</td>
          <td class="text-center">7 days</td>
        </tr>
        <tr>
          <td class="text-center">Asparaginase (medac) </td>
          <td class="text-center">10000 I.U medac/4ml</td>
          <td class="text-center"> -----</td>
          <td class="text-center"> <svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center"> <svg style="fill: #de2b38;" width="22" height="22" id="Layer_1" data-name="Layer 1"
            viewBox="0 0 25 27">
            <path class="cls-1"
              d="m22.5,8.04c-.06.04-2.52,1.97-2.52,1.97v10.03c0,.73-.59,1.32-1.32,1.32H5.57c-.73,0-1.32-.59-1.32-1.32V6.95c0-.73.59-1.32,1.32-1.32h11.85c1.03-.74,2.1-1.46,3.2-2.12-.57-.33-1.24-.51-1.95-.51H5.57c-2.18,0-3.95,1.77-3.95,3.95v13.09c0,2.18,1.77,3.95,3.95,3.95h13.09c2.18,0,3.95-1.77,3.95-3.95V7.95l-.12.09Z" />
            <path class="cls-1"
              d="m21.38,4.28c-1.43.87-2.81,1.8-4.14,2.79-1.33,1-2.62,2.03-3.87,3.11-.35.3-.69.61-1.04.92-.11-.13-.22-.26-.32-.39l-.48-.62-.24-.31-.22-.32-.45-.64c-.08-.11-.15-.22-.22-.33-.07-.11-.15-.22-.24-.31-.09-.1-.19-.19-.31-.27-.12-.08-.25-.16-.41-.21l-.19-.06c-.13-.04-.27-.07-.42-.08-.87-.04-1.61.63-1.65,1.5-.03.7.29,1.2.63,1.68l.51.72.26.36.28.35.56.69c.15.18.31.35.46.52-.05.05-.11.1-.16.16l-.88.87c-.29.29-.59.58-.87.88-.29.29-.57.6-.82.93-.13.16-.25.34-.36.52-.06.09-.11.18-.16.27-.05.09-.1.19-.15.3-.17.37-.18.82.02,1.21.35.68,1.18.94,1.85.59l.08-.04c.09-.04.18-.1.26-.15.08-.06.17-.11.25-.17.16-.12.32-.24.47-.37.31-.26.59-.53.87-.82.28-.29.56-.57.84-.86l.85-.85c.07-.07.14-.14.21-.21.13.11.27.23.41.34.11.09.23.19.35.28l.36.27.36.26c.12.09.25.17.37.25.12.08.25.17.37.25.13.08.26.16.39.23.13.08.26.16.39.23l.4.22c.13.07.27.14.41.21.14.07.27.14.42.2.14.06.28.13.43.18.08.03.14.06.23.09l.26.09c.54.19,1.17,0,1.51-.49.41-.59.26-1.41-.34-1.81l-.22-.15h-.02s-.02-.02-.03-.03l-.07-.04s-.1-.06-.15-.09c-.1-.06-.21-.13-.31-.19-.11-.06-.21-.13-.32-.2-.11-.07-.21-.14-.31-.21l-.31-.22c-.1-.07-.21-.15-.31-.23-.1-.08-.21-.15-.31-.23-.1-.08-.2-.16-.3-.24-.1-.08-.2-.16-.3-.24l-.29-.25-.29-.25c-.09-.09-.19-.18-.28-.27-.05-.05-.11-.1-.16-.15.32-.29.63-.59.96-.88l.89-.81.9-.79c.3-.26.6-.52.91-.78l.46-.39.23-.19.23-.19.93-.75c.31-.25.63-.49.94-.73l.47-.37c.16-.12.32-.24.48-.35l.95-.71.03-.02c.54-.4.69-1.15.34-1.74-.38-.62-1.19-.82-1.81-.44Z" />
          </svg> </td>
          <td class="text-center">24 hr.</td>
          <td class="text-center">24 hr.</td>
        </tr>
        <tr>
          <td class="text-center">Pegasparagase</td>
          <td class="text-center">3750 I.U/5ml</td>
          <td class="text-center">-----</td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center">Stored in refrigerator</td>
          <td class="text-center">48hr</td>
        </tr>
        <tr>
          <td class="text-center">Azacitidine</td>
          <td class="text-center">100mg/10ml</td>
          <td class="text-center">4 mg/ml</td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center"><svg style="fill: #de2b38;" width="22" height="22" id="Layer_1" data-name="Layer 1"
            viewBox="0 0 25 27">
            <path class="cls-1"
              d="m22.5,8.04c-.06.04-2.52,1.97-2.52,1.97v10.03c0,.73-.59,1.32-1.32,1.32H5.57c-.73,0-1.32-.59-1.32-1.32V6.95c0-.73.59-1.32,1.32-1.32h11.85c1.03-.74,2.1-1.46,3.2-2.12-.57-.33-1.24-.51-1.95-.51H5.57c-2.18,0-3.95,1.77-3.95,3.95v13.09c0,2.18,1.77,3.95,3.95,3.95h13.09c2.18,0,3.95-1.77,3.95-3.95V7.95l-.12.09Z" />
            <path class="cls-1"
              d="m21.38,4.28c-1.43.87-2.81,1.8-4.14,2.79-1.33,1-2.62,2.03-3.87,3.11-.35.3-.69.61-1.04.92-.11-.13-.22-.26-.32-.39l-.48-.62-.24-.31-.22-.32-.45-.64c-.08-.11-.15-.22-.22-.33-.07-.11-.15-.22-.24-.31-.09-.1-.19-.19-.31-.27-.12-.08-.25-.16-.41-.21l-.19-.06c-.13-.04-.27-.07-.42-.08-.87-.04-1.61.63-1.65,1.5-.03.7.29,1.2.63,1.68l.51.72.26.36.28.35.56.69c.15.18.31.35.46.52-.05.05-.11.1-.16.16l-.88.87c-.29.29-.59.58-.87.88-.29.29-.57.6-.82.93-.13.16-.25.34-.36.52-.06.09-.11.18-.16.27-.05.09-.1.19-.15.3-.17.37-.18.82.02,1.21.35.68,1.18.94,1.85.59l.08-.04c.09-.04.18-.1.26-.15.08-.06.17-.11.25-.17.16-.12.32-.24.47-.37.31-.26.59-.53.87-.82.28-.29.56-.57.84-.86l.85-.85c.07-.07.14-.14.21-.21.13.11.27.23.41.34.11.09.23.19.35.28l.36.27.36.26c.12.09.25.17.37.25.12.08.25.17.37.25.13.08.26.16.39.23.13.08.26.16.39.23l.4.22c.13.07.27.14.41.21.14.07.27.14.42.2.14.06.28.13.43.18.08.03.14.06.23.09l.26.09c.54.19,1.17,0,1.51-.49.41-.59.26-1.41-.34-1.81l-.22-.15h-.02s-.02-.02-.03-.03l-.07-.04s-.1-.06-.15-.09c-.1-.06-.21-.13-.31-.19-.11-.06-.21-.13-.32-.2-.11-.07-.21-.14-.31-.21l-.31-.22c-.1-.07-.21-.15-.31-.23-.1-.08-.21-.15-.31-.23-.1-.08-.2-.16-.3-.24-.1-.08-.2-.16-.3-.24l-.29-.25-.29-.25c-.09-.09-.19-.18-.28-.27-.05-.05-.11-.1-.16-.15.32-.29.63-.59.96-.88l.89-.81.9-.79c.3-.26.6-.52.91-.78l.46-.39.23-.19.23-.19.93-.75c.31-.25.63-.49.94-.73l.47-.37c.16-.12.32-.24.48-.35l.95-.71.03-.02c.54-.4.69-1.15.34-1.74-.38-.62-1.19-.82-1.81-.44Z" />
          </svg> </td>
          <td class="text-center">1 hr.</td>
          <td class="text-center">1 hr.</td>
        </tr>
        <tr>
          <td class="text-center">Bendamustine HCL</td>
          <td class="text-center">100mg/25ml</td>
          <td class="text-center">0.6 mg/ml</td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1" data-name="Layer 1"
            viewBox="0 0 25 27">
            <path class="cls-1"
              d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
            <path class="cls-1"
              d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
          </svg>> </td>
          <td class="text-center">3 hr </td>
          <td class="text-center">48 hr </td>
        </tr>
        <tr>
          <td class="text-center">Bleomycin</td>
          <td class="text-center">15mg/5ml</td>
          <td class="text-center">3 mg/ml</td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center"><svg style="fill: #de2b38;" width="22" height="22" id="Layer_1" data-name="Layer 1"
            viewBox="0 0 25 27">
            <path class="cls-1"
              d="m22.5,8.04c-.06.04-2.52,1.97-2.52,1.97v10.03c0,.73-.59,1.32-1.32,1.32H5.57c-.73,0-1.32-.59-1.32-1.32V6.95c0-.73.59-1.32,1.32-1.32h11.85c1.03-.74,2.1-1.46,3.2-2.12-.57-.33-1.24-.51-1.95-.51H5.57c-2.18,0-3.95,1.77-3.95,3.95v13.09c0,2.18,1.77,3.95,3.95,3.95h13.09c2.18,0,3.95-1.77,3.95-3.95V7.95l-.12.09Z" />
            <path class="cls-1"
              d="m21.38,4.28c-1.43.87-2.81,1.8-4.14,2.79-1.33,1-2.62,2.03-3.87,3.11-.35.3-.69.61-1.04.92-.11-.13-.22-.26-.32-.39l-.48-.62-.24-.31-.22-.32-.45-.64c-.08-.11-.15-.22-.22-.33-.07-.11-.15-.22-.24-.31-.09-.1-.19-.19-.31-.27-.12-.08-.25-.16-.41-.21l-.19-.06c-.13-.04-.27-.07-.42-.08-.87-.04-1.61.63-1.65,1.5-.03.7.29,1.2.63,1.68l.51.72.26.36.28.35.56.69c.15.18.31.35.46.52-.05.05-.11.1-.16.16l-.88.87c-.29.29-.59.58-.87.88-.29.29-.57.6-.82.93-.13.16-.25.34-.36.52-.06.09-.11.18-.16.27-.05.09-.1.19-.15.3-.17.37-.18.82.02,1.21.35.68,1.18.94,1.85.59l.08-.04c.09-.04.18-.1.26-.15.08-.06.17-.11.25-.17.16-.12.32-.24.47-.37.31-.26.59-.53.87-.82.28-.29.56-.57.84-.86l.85-.85c.07-.07.14-.14.21-.21.13.11.27.23.41.34.11.09.23.19.35.28l.36.27.36.26c.12.09.25.17.37.25.12.08.25.17.37.25.13.08.26.16.39.23.13.08.26.16.39.23l.4.22c.13.07.27.14.41.21.14.07.27.14.42.2.14.06.28.13.43.18.08.03.14.06.23.09l.26.09c.54.19,1.17,0,1.51-.49.41-.59.26-1.41-.34-1.81l-.22-.15h-.02s-.02-.02-.03-.03l-.07-.04s-.1-.06-.15-.09c-.1-.06-.21-.13-.31-.19-.11-.06-.21-.13-.32-.2-.11-.07-.21-.14-.31-.21l-.31-.22c-.1-.07-.21-.15-.31-.23-.1-.08-.21-.15-.31-.23-.1-.08-.2-.16-.3-.24-.1-.08-.2-.16-.3-.24l-.29-.25-.29-.25c-.09-.09-.19-.18-.28-.27-.05-.05-.11-.1-.16-.15.32-.29.63-.59.96-.88l.89-.81.9-.79c.3-.26.6-.52.91-.78l.46-.39.23-.19.23-.19.93-.75c.31-.25.63-.49.94-.73l.47-.37c.16-.12.32-.24.48-.35l.95-.71.03-.02c.54-.4.69-1.15.34-1.74-.38-.62-1.19-.82-1.81-.44Z" />
          </svg> </td>
          <td class="text-center">24 hr </td>
          <td class="text-center">12 hr </td>
        </tr>
        <tr>
          <td class="text-center">Brentuximab Vedotin</td>
          <td class="text-center">50mg/10ml</td>
          <td class="text-center">1.8 mg/ml</td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center">Stored in refrigerator</td>
          <td class="text-center">24 hr</td>
        </tr>
        <tr>
          <td class="text-center">Busulfan</td>
          <td class="text-center">60mg/10ml</td>
          <td class="text-center">0.5 mg/ml</td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center"><svg style="fill: #de2b38;" width="22" height="22" id="Layer_1" data-name="Layer 1"
            viewBox="0 0 25 27">
            <path class="cls-1"
              d="m22.5,8.04c-.06.04-2.52,1.97-2.52,1.97v10.03c0,.73-.59,1.32-1.32,1.32H5.57c-.73,0-1.32-.59-1.32-1.32V6.95c0-.73.59-1.32,1.32-1.32h11.85c1.03-.74,2.1-1.46,3.2-2.12-.57-.33-1.24-.51-1.95-.51H5.57c-2.18,0-3.95,1.77-3.95,3.95v13.09c0,2.18,1.77,3.95,3.95,3.95h13.09c2.18,0,3.95-1.77,3.95-3.95V7.95l-.12.09Z" />
            <path class="cls-1"
              d="m21.38,4.28c-1.43.87-2.81,1.8-4.14,2.79-1.33,1-2.62,2.03-3.87,3.11-.35.3-.69.61-1.04.92-.11-.13-.22-.26-.32-.39l-.48-.62-.24-.31-.22-.32-.45-.64c-.08-.11-.15-.22-.22-.33-.07-.11-.15-.22-.24-.31-.09-.1-.19-.19-.31-.27-.12-.08-.25-.16-.41-.21l-.19-.06c-.13-.04-.27-.07-.42-.08-.87-.04-1.61.63-1.65,1.5-.03.7.29,1.2.63,1.68l.51.72.26.36.28.35.56.69c.15.18.31.35.46.52-.05.05-.11.1-.16.16l-.88.87c-.29.29-.59.58-.87.88-.29.29-.57.6-.82.93-.13.16-.25.34-.36.52-.06.09-.11.18-.16.27-.05.09-.1.19-.15.3-.17.37-.18.82.02,1.21.35.68,1.18.94,1.85.59l.08-.04c.09-.04.18-.1.26-.15.08-.06.17-.11.25-.17.16-.12.32-.24.47-.37.31-.26.59-.53.87-.82.28-.29.56-.57.84-.86l.85-.85c.07-.07.14-.14.21-.21.13.11.27.23.41.34.11.09.23.19.35.28l.36.27.36.26c.12.09.25.17.37.25.12.08.25.17.37.25.13.08.26.16.39.23.13.08.26.16.39.23l.4.22c.13.07.27.14.41.21.14.07.27.14.42.2.14.06.28.13.43.18.08.03.14.06.23.09l.26.09c.54.19,1.17,0,1.51-.49.41-.59.26-1.41-.34-1.81l-.22-.15h-.02s-.02-.02-.03-.03l-.07-.04s-.1-.06-.15-.09c-.1-.06-.21-.13-.31-.19-.11-.06-.21-.13-.32-.2-.11-.07-.21-.14-.31-.21l-.31-.22c-.1-.07-.21-.15-.31-.23-.1-.08-.21-.15-.31-.23-.1-.08-.2-.16-.3-.24-.1-.08-.2-.16-.3-.24l-.29-.25-.29-.25c-.09-.09-.19-.18-.28-.27-.05-.05-.11-.1-.16-.15.32-.29.63-.59.96-.88l.89-.81.9-.79c.3-.26.6-.52.91-.78l.46-.39.23-.19.23-.19.93-.75c.31-.25.63-.49.94-.73l.47-.37c.16-.12.32-.24.48-.35l.95-.71.03-.02c.54-.4.69-1.15.34-1.74-.38-.62-1.19-.82-1.81-.44Z" />
          </svg> </td>
          <td class="text-center">24 hr.</td>
          <td class="text-center">12 hr.</td>
        </tr>
        <tr>
          <td class="text-center">Carboplatin</td>
          <td class="text-center">450mg/45ml</td>
          <td class="text-center">10 mg/ml</td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1" data-name="Layer 1"
            viewBox="0 0 25 27">
            <path class="cls-1"
              d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
            <path class="cls-1"
              d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
          </svg> </td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center">24 hr</td>
          <td class="text-center">Do not refrigerate</td>
        </tr>
        <tr>
          <td class="text-center">Carbinol (HIKMA) </td>
          <td class="text-center">450mg/45ml</td>
          <td class="text-center">10 mg/ml</td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center">8 hr</td>
          <td class="text-center">Do not refrigerate</td>
        </tr>
        <tr>
          <td class="text-center">Cisplatin</td>
          <td class="text-center">10mg/10ml, 50mg/50ml</td>
          <td class="text-center">2 mg/ml</td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center"><svg style="fill: #de2b38;" width="22" height="22" id="Layer_1" data-name="Layer 1"
            viewBox="0 0 25 27">
            <path class="cls-1"
              d="m22.5,8.04c-.06.04-2.52,1.97-2.52,1.97v10.03c0,.73-.59,1.32-1.32,1.32H5.57c-.73,0-1.32-.59-1.32-1.32V6.95c0-.73.59-1.32,1.32-1.32h11.85c1.03-.74,2.1-1.46,3.2-2.12-.57-.33-1.24-.51-1.95-.51H5.57c-2.18,0-3.95,1.77-3.95,3.95v13.09c0,2.18,1.77,3.95,3.95,3.95h13.09c2.18,0,3.95-1.77,3.95-3.95V7.95l-.12.09Z" />
            <path class="cls-1"
              d="m21.38,4.28c-1.43.87-2.81,1.8-4.14,2.79-1.33,1-2.62,2.03-3.87,3.11-.35.3-.69.61-1.04.92-.11-.13-.22-.26-.32-.39l-.48-.62-.24-.31-.22-.32-.45-.64c-.08-.11-.15-.22-.22-.33-.07-.11-.15-.22-.24-.31-.09-.1-.19-.19-.31-.27-.12-.08-.25-.16-.41-.21l-.19-.06c-.13-.04-.27-.07-.42-.08-.87-.04-1.61.63-1.65,1.5-.03.7.29,1.2.63,1.68l.51.72.26.36.28.35.56.69c.15.18.31.35.46.52-.05.05-.11.1-.16.16l-.88.87c-.29.29-.59.58-.87.88-.29.29-.57.6-.82.93-.13.16-.25.34-.36.52-.06.09-.11.18-.16.27-.05.09-.1.19-.15.3-.17.37-.18.82.02,1.21.35.68,1.18.94,1.85.59l.08-.04c.09-.04.18-.1.26-.15.08-.06.17-.11.25-.17.16-.12.32-.24.47-.37.31-.26.59-.53.87-.82.28-.29.56-.57.84-.86l.85-.85c.07-.07.14-.14.21-.21.13.11.27.23.41.34.11.09.23.19.35.28l.36.27.36.26c.12.09.25.17.37.25.12.08.25.17.37.25.13.08.26.16.39.23.13.08.26.16.39.23l.4.22c.13.07.27.14.41.21.14.07.27.14.42.2.14.06.28.13.43.18.08.03.14.06.23.09l.26.09c.54.19,1.17,0,1.51-.49.41-.59.26-1.41-.34-1.81l-.22-.15h-.02s-.02-.02-.03-.03l-.07-.04s-.1-.06-.15-.09c-.1-.06-.21-.13-.31-.19-.11-.06-.21-.13-.32-.2-.11-.07-.21-.14-.31-.21l-.31-.22c-.1-.07-.21-.15-.31-.23-.1-.08-.21-.15-.31-.23-.1-.08-.2-.16-.3-.24-.1-.08-.2-.16-.3-.24l-.29-.25-.29-.25c-.09-.09-.19-.18-.28-.27-.05-.05-.11-.1-.16-.15.32-.29.63-.59.96-.88l.89-.81.9-.79c.3-.26.6-.52.91-.78l.46-.39.23-.19.23-.19.93-.75c.31-.25.63-.49.94-.73l.47-.37c.16-.12.32-.24.48-.35l.95-.71.03-.02c.54-.4.69-1.15.34-1.74-.38-.62-1.19-.82-1.81-.44Z" />
          </svg> </td>
          <td class="text-center">7 days</td>
          <td class="text-center">Do not refrigerate</td>
        </tr>
        <tr>
          <td class="text-center">UNISTIN (HIKMA)</td>
          <td class="text-center">10mg/10ml, 50mg/50ml</td>
          <td class="text-center">2 mg/ml</td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center"><svg style="fill: #de2b38;" width="22" height="22" id="Layer_1" data-name="Layer 1"
            viewBox="0 0 25 27">
            <path class="cls-1"
              d="m22.5,8.04c-.06.04-2.52,1.97-2.52,1.97v10.03c0,.73-.59,1.32-1.32,1.32H5.57c-.73,0-1.32-.59-1.32-1.32V6.95c0-.73.59-1.32,1.32-1.32h11.85c1.03-.74,2.1-1.46,3.2-2.12-.57-.33-1.24-.51-1.95-.51H5.57c-2.18,0-3.95,1.77-3.95,3.95v13.09c0,2.18,1.77,3.95,3.95,3.95h13.09c2.18,0,3.95-1.77,3.95-3.95V7.95l-.12.09Z" />
            <path class="cls-1"
              d="m21.38,4.28c-1.43.87-2.81,1.8-4.14,2.79-1.33,1-2.62,2.03-3.87,3.11-.35.3-.69.61-1.04.92-.11-.13-.22-.26-.32-.39l-.48-.62-.24-.31-.22-.32-.45-.64c-.08-.11-.15-.22-.22-.33-.07-.11-.15-.22-.24-.31-.09-.1-.19-.19-.31-.27-.12-.08-.25-.16-.41-.21l-.19-.06c-.13-.04-.27-.07-.42-.08-.87-.04-1.61.63-1.65,1.5-.03.7.29,1.2.63,1.68l.51.72.26.36.28.35.56.69c.15.18.31.35.46.52-.05.05-.11.1-.16.16l-.88.87c-.29.29-.59.58-.87.88-.29.29-.57.6-.82.93-.13.16-.25.34-.36.52-.06.09-.11.18-.16.27-.05.09-.1.19-.15.3-.17.37-.18.82.02,1.21.35.68,1.18.94,1.85.59l.08-.04c.09-.04.18-.1.26-.15.08-.06.17-.11.25-.17.16-.12.32-.24.47-.37.31-.26.59-.53.87-.82.28-.29.56-.57.84-.86l.85-.85c.07-.07.14-.14.21-.21.13.11.27.23.41.34.11.09.23.19.35.28l.36.27.36.26c.12.09.25.17.37.25.12.08.25.17.37.25.13.08.26.16.39.23.13.08.26.16.39.23l.4.22c.13.07.27.14.41.21.14.07.27.14.42.2.14.06.28.13.43.18.08.03.14.06.23.09l.26.09c.54.19,1.17,0,1.51-.49.41-.59.26-1.41-.34-1.81l-.22-.15h-.02s-.02-.02-.03-.03l-.07-.04s-.1-.06-.15-.09c-.1-.06-.21-.13-.31-.19-.11-.06-.21-.13-.32-.2-.11-.07-.21-.14-.31-.21l-.31-.22c-.1-.07-.21-.15-.31-.23-.1-.08-.21-.15-.31-.23-.1-.08-.2-.16-.3-.24-.1-.08-.2-.16-.3-.24l-.29-.25-.29-.25c-.09-.09-.19-.18-.28-.27-.05-.05-.11-.1-.16-.15.32-.29.63-.59.96-.88l.89-.81.9-.79c.3-.26.6-.52.91-.78l.46-.39.23-.19.23-.19.93-.75c.31-.25.63-.49.94-.73l.47-.37c.16-.12.32-.24.48-.35l.95-.71.03-.02c.54-.4.69-1.15.34-1.74-.38-.62-1.19-.82-1.81-.44Z" />
          </svg> </td>
          <td class="text-center">9hrs</td>
          <td class="text-center">Do not refrigerate</td>
        </tr>
        <tr>
          <td class="text-center">Cyclophosphamide </td>
          <td class="text-center">1000mg/50ml</td>
          <td class="text-center">20 mg/ml</td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center">24 hr</td>
          <td class="text-center">36hr in D5W
            6 days in NS</td>
        </tr>
        <tr>
          <td class="text-center">Cycloph.(2-10mg/ml)/Mesna (0.5mg/ml) D5W</td>
          <td class="text-center">1000mg/50ml</td>
          <td class="text-center">20 mg/ml</td>
          <td class="text-center"><svg style="fill: #de2b38;" width="22" height="22" id="Layer_1" data-name="Layer 1"
            viewBox="0 0 25 27">
            <path class="cls-1"
              d="m22.5,8.04c-.06.04-2.52,1.97-2.52,1.97v10.03c0,.73-.59,1.32-1.32,1.32H5.57c-.73,0-1.32-.59-1.32-1.32V6.95c0-.73.59-1.32,1.32-1.32h11.85c1.03-.74,2.1-1.46,3.2-2.12-.57-.33-1.24-.51-1.95-.51H5.57c-2.18,0-3.95,1.77-3.95,3.95v13.09c0,2.18,1.77,3.95,3.95,3.95h13.09c2.18,0,3.95-1.77,3.95-3.95V7.95l-.12.09Z" />
            <path class="cls-1"
              d="m21.38,4.28c-1.43.87-2.81,1.8-4.14,2.79-1.33,1-2.62,2.03-3.87,3.11-.35.3-.69.61-1.04.92-.11-.13-.22-.26-.32-.39l-.48-.62-.24-.31-.22-.32-.45-.64c-.08-.11-.15-.22-.22-.33-.07-.11-.15-.22-.24-.31-.09-.1-.19-.19-.31-.27-.12-.08-.25-.16-.41-.21l-.19-.06c-.13-.04-.27-.07-.42-.08-.87-.04-1.61.63-1.65,1.5-.03.7.29,1.2.63,1.68l.51.72.26.36.28.35.56.69c.15.18.31.35.46.52-.05.05-.11.1-.16.16l-.88.87c-.29.29-.59.58-.87.88-.29.29-.57.6-.82.93-.13.16-.25.34-.36.52-.06.09-.11.18-.16.27-.05.09-.1.19-.15.3-.17.37-.18.82.02,1.21.35.68,1.18.94,1.85.59l.08-.04c.09-.04.18-.1.26-.15.08-.06.17-.11.25-.17.16-.12.32-.24.47-.37.31-.26.59-.53.87-.82.28-.29.56-.57.84-.86l.85-.85c.07-.07.14-.14.21-.21.13.11.27.23.41.34.11.09.23.19.35.28l.36.27.36.26c.12.09.25.17.37.25.12.08.25.17.37.25.13.08.26.16.39.23.13.08.26.16.39.23l.4.22c.13.07.27.14.41.21.14.07.27.14.42.2.14.06.28.13.43.18.08.03.14.06.23.09l.26.09c.54.19,1.17,0,1.51-.49.41-.59.26-1.41-.34-1.81l-.22-.15h-.02s-.02-.02-.03-.03l-.07-.04s-.1-.06-.15-.09c-.1-.06-.21-.13-.31-.19-.11-.06-.21-.13-.32-.2-.11-.07-.21-.14-.31-.21l-.31-.22c-.1-.07-.21-.15-.31-.23-.1-.08-.21-.15-.31-.23-.1-.08-.2-.16-.3-.24-.1-.08-.2-.16-.3-.24l-.29-.25-.29-.25c-.09-.09-.19-.18-.28-.27-.05-.05-.11-.1-.16-.15.32-.29.63-.59.96-.88l.89-.81.9-.79c.3-.26.6-.52.91-.78l.46-.39.23-.19.23-.19.93-.75c.31-.25.63-.49.94-.73l.47-.37c.16-.12.32-.24.48-.35l.95-.71.03-.02c.54-.4.69-1.15.34-1.74-.38-.62-1.19-.82-1.81-.44Z" />
          </svg></td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1" data-name="Layer 1"
            viewBox="0 0 25 27">
            <path class="cls-1"
              d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
            <path class="cls-1"
              d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
          </svg></td>
          <td class="text-center">6 hrs</td>
          <td class="text-center">48 hr.</td>
        </tr>
        <tr>
          <td class="text-center">Cyclosporine</td>
          <td class="text-center">50mg/ml</td>
          <td class="text-center">2.5 mg/ml</td>
          <td class="text-center"><svg style="fill: #de2b38;" width="22" height="22" id="Layer_1" data-name="Layer 1"
            viewBox="0 0 25 27">
            <path class="cls-1"
              d="m22.5,8.04c-.06.04-2.52,1.97-2.52,1.97v10.03c0,.73-.59,1.32-1.32,1.32H5.57c-.73,0-1.32-.59-1.32-1.32V6.95c0-.73.59-1.32,1.32-1.32h11.85c1.03-.74,2.1-1.46,3.2-2.12-.57-.33-1.24-.51-1.95-.51H5.57c-2.18,0-3.95,1.77-3.95,3.95v13.09c0,2.18,1.77,3.95,3.95,3.95h13.09c2.18,0,3.95-1.77,3.95-3.95V7.95l-.12.09Z" />
            <path class="cls-1"
              d="m21.38,4.28c-1.43.87-2.81,1.8-4.14,2.79-1.33,1-2.62,2.03-3.87,3.11-.35.3-.69.61-1.04.92-.11-.13-.22-.26-.32-.39l-.48-.62-.24-.31-.22-.32-.45-.64c-.08-.11-.15-.22-.22-.33-.07-.11-.15-.22-.24-.31-.09-.1-.19-.19-.31-.27-.12-.08-.25-.16-.41-.21l-.19-.06c-.13-.04-.27-.07-.42-.08-.87-.04-1.61.63-1.65,1.5-.03.7.29,1.2.63,1.68l.51.72.26.36.28.35.56.69c.15.18.31.35.46.52-.05.05-.11.1-.16.16l-.88.87c-.29.29-.59.58-.87.88-.29.29-.57.6-.82.93-.13.16-.25.34-.36.52-.06.09-.11.18-.16.27-.05.09-.1.19-.15.3-.17.37-.18.82.02,1.21.35.68,1.18.94,1.85.59l.08-.04c.09-.04.18-.1.26-.15.08-.06.17-.11.25-.17.16-.12.32-.24.47-.37.31-.26.59-.53.87-.82.28-.29.56-.57.84-.86l.85-.85c.07-.07.14-.14.21-.21.13.11.27.23.41.34.11.09.23.19.35.28l.36.27.36.26c.12.09.25.17.37.25.12.08.25.17.37.25.13.08.26.16.39.23.13.08.26.16.39.23l.4.22c.13.07.27.14.41.21.14.07.27.14.42.2.14.06.28.13.43.18.08.03.14.06.23.09l.26.09c.54.19,1.17,0,1.51-.49.41-.59.26-1.41-.34-1.81l-.22-.15h-.02s-.02-.02-.03-.03l-.07-.04s-.1-.06-.15-.09c-.1-.06-.21-.13-.31-.19-.11-.06-.21-.13-.32-.2-.11-.07-.21-.14-.31-.21l-.31-.22c-.1-.07-.21-.15-.31-.23-.1-.08-.21-.15-.31-.23-.1-.08-.2-.16-.3-.24-.1-.08-.2-.16-.3-.24l-.29-.25-.29-.25c-.09-.09-.19-.18-.28-.27-.05-.05-.11-.1-.16-.15.32-.29.63-.59.96-.88l.89-.81.9-.79c.3-.26.6-.52.91-.78l.46-.39.23-.19.23-.19.93-.75c.31-.25.63-.49.94-.73l.47-.37c.16-.12.32-.24.48-.35l.95-.71.03-.02c.54-.4.69-1.15.34-1.74-.38-.62-1.19-.82-1.81-.44Z" />
          </svg> </td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1" data-name="Layer 1"
            viewBox="0 0 25 27">
            <path class="cls-1"
              d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
            <path class="cls-1"
              d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
          </svg> </td>
          <td class="text-center">24 hr.</td>
          <td class="text-center">Do not refrigerate</td>
        </tr>
        <tr>
          <td class="text-center">Cytarabine </td>
          <td class="text-center">1000mg/10ml, 2000mg/20ml </td>
          <td class="text-center">-----</td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center">7 days</td>
          <td class="text-center">Do not refrigerate</td>
        </tr>
        <tr>
          <td class="text-center">Dacarbazine</td>
          <td class="text-center">200mg/20ml</td>
          <td class="text-center">10 mg/ml (>400mg/250ml)</td>
          <td class="text-center"><svg style="fill: #de2b38;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m22.5,8.04c-.06.04-2.52,1.97-2.52,1.97v10.03c0,.73-.59,1.32-1.32,1.32H5.57c-.73,0-1.32-.59-1.32-1.32V6.95c0-.73.59-1.32,1.32-1.32h11.85c1.03-.74,2.1-1.46,3.2-2.12-.57-.33-1.24-.51-1.95-.51H5.57c-2.18,0-3.95,1.77-3.95,3.95v13.09c0,2.18,1.77,3.95,3.95,3.95h13.09c2.18,0,3.95-1.77,3.95-3.95V7.95l-.12.09Z" />
              <path class="cls-1"
                d="m21.38,4.28c-1.43.87-2.81,1.8-4.14,2.79-1.33,1-2.62,2.03-3.87,3.11-.35.3-.69.61-1.04.92-.11-.13-.22-.26-.32-.39l-.48-.62-.24-.31-.22-.32-.45-.64c-.08-.11-.15-.22-.22-.33-.07-.11-.15-.22-.24-.31-.09-.1-.19-.19-.31-.27-.12-.08-.25-.16-.41-.21l-.19-.06c-.13-.04-.27-.07-.42-.08-.87-.04-1.61.63-1.65,1.5-.03.7.29,1.2.63,1.68l.51.72.26.36.28.35.56.69c.15.18.31.35.46.52-.05.05-.11.1-.16.16l-.88.87c-.29.29-.59.58-.87.88-.29.29-.57.6-.82.93-.13.16-.25.34-.36.52-.06.09-.11.18-.16.27-.05.09-.1.19-.15.3-.17.37-.18.82.02,1.21.35.68,1.18.94,1.85.59l.08-.04c.09-.04.18-.1.26-.15.08-.06.17-.11.25-.17.16-.12.32-.24.47-.37.31-.26.59-.53.87-.82.28-.29.56-.57.84-.86l.85-.85c.07-.07.14-.14.21-.21.13.11.27.23.41.34.11.09.23.19.35.28l.36.27.36.26c.12.09.25.17.37.25.12.08.25.17.37.25.13.08.26.16.39.23.13.08.26.16.39.23l.4.22c.13.07.27.14.41.21.14.07.27.14.42.2.14.06.28.13.43.18.08.03.14.06.23.09l.26.09c.54.19,1.17,0,1.51-.49.41-.59.26-1.41-.34-1.81l-.22-.15h-.02s-.02-.02-.03-.03l-.07-.04s-.1-.06-.15-.09c-.1-.06-.21-.13-.31-.19-.11-.06-.21-.13-.32-.2-.11-.07-.21-.14-.31-.21l-.31-.22c-.1-.07-.21-.15-.31-.23-.1-.08-.21-.15-.31-.23-.1-.08-.2-.16-.3-.24-.1-.08-.2-.16-.3-.24l-.29-.25-.29-.25c-.09-.09-.19-.18-.28-.27-.05-.05-.11-.1-.16-.15.32-.29.63-.59.96-.88l.89-.81.9-.79c.3-.26.6-.52.91-.78l.46-.39.23-.19.23-.19.93-.75c.31-.25.63-.49.94-.73l.47-.37c.16-.12.32-.24.48-.35l.95-.71.03-.02c.54-.4.69-1.15.34-1.74-.38-.62-1.19-.82-1.81-.44Z" />
            </svg> </td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center">24 hr.</td>
          <td class="text-center">96 hr.</td>
        </tr>
        <tr>
          <td class="text-center">Dactinomycin</td>
          <td class="text-center">0.5mg/ml</td>
          <td class="text-center">> 10 mcg/ml</td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center">4 hr.</td>
          <td class="text-center">Do not refrigerate</td>
        </tr>
        <tr>
          <td class="text-center">Doxorubicin </td>
          <td class="text-center">50mg/25ml</td>
          <td class="text-center">2 mg/ml</td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center">7 days</td>
          <td class="text-center">7 days</td>
        </tr>
        <tr>
          <td class="text-center">Etoposide </td>
          <td class="text-center">100mg/5ml </td>
          <td class="text-center">0.4 mg/ml</td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center"><svg style="fill: #de2b38;" width="22" height="22" id="Layer_1" data-name="Layer 1"
            viewBox="0 0 25 27">
            <path class="cls-1"
              d="m22.5,8.04c-.06.04-2.52,1.97-2.52,1.97v10.03c0,.73-.59,1.32-1.32,1.32H5.57c-.73,0-1.32-.59-1.32-1.32V6.95c0-.73.59-1.32,1.32-1.32h11.85c1.03-.74,2.1-1.46,3.2-2.12-.57-.33-1.24-.51-1.95-.51H5.57c-2.18,0-3.95,1.77-3.95,3.95v13.09c0,2.18,1.77,3.95,3.95,3.95h13.09c2.18,0,3.95-1.77,3.95-3.95V7.95l-.12.09Z" />
            <path class="cls-1"
              d="m21.38,4.28c-1.43.87-2.81,1.8-4.14,2.79-1.33,1-2.62,2.03-3.87,3.11-.35.3-.69.61-1.04.92-.11-.13-.22-.26-.32-.39l-.48-.62-.24-.31-.22-.32-.45-.64c-.08-.11-.15-.22-.22-.33-.07-.11-.15-.22-.24-.31-.09-.1-.19-.19-.31-.27-.12-.08-.25-.16-.41-.21l-.19-.06c-.13-.04-.27-.07-.42-.08-.87-.04-1.61.63-1.65,1.5-.03.7.29,1.2.63,1.68l.51.72.26.36.28.35.56.69c.15.18.31.35.46.52-.05.05-.11.1-.16.16l-.88.87c-.29.29-.59.58-.87.88-.29.29-.57.6-.82.93-.13.16-.25.34-.36.52-.06.09-.11.18-.16.27-.05.09-.1.19-.15.3-.17.37-.18.82.02,1.21.35.68,1.18.94,1.85.59l.08-.04c.09-.04.18-.1.26-.15.08-.06.17-.11.25-.17.16-.12.32-.24.47-.37.31-.26.59-.53.87-.82.28-.29.56-.57.84-.86l.85-.85c.07-.07.14-.14.21-.21.13.11.27.23.41.34.11.09.23.19.35.28l.36.27.36.26c.12.09.25.17.37.25.12.08.25.17.37.25.13.08.26.16.39.23.13.08.26.16.39.23l.4.22c.13.07.27.14.41.21.14.07.27.14.42.2.14.06.28.13.43.18.08.03.14.06.23.09l.26.09c.54.19,1.17,0,1.51-.49.41-.59.26-1.41-.34-1.81l-.22-.15h-.02s-.02-.02-.03-.03l-.07-.04s-.1-.06-.15-.09c-.1-.06-.21-.13-.31-.19-.11-.06-.21-.13-.32-.2-.11-.07-.21-.14-.31-.21l-.31-.22c-.1-.07-.21-.15-.31-.23-.1-.08-.21-.15-.31-.23-.1-.08-.2-.16-.3-.24-.1-.08-.2-.16-.3-.24l-.29-.25-.29-.25c-.09-.09-.19-.18-.28-.27-.05-.05-.11-.1-.16-.15.32-.29.63-.59.96-.88l.89-.81.9-.79c.3-.26.6-.52.91-.78l.46-.39.23-.19.23-.19.93-.75c.31-.25.63-.49.94-.73l.47-.37c.16-.12.32-.24.48-.35l.95-.71.03-.02c.54-.4.69-1.15.34-1.74-.38-.62-1.19-.82-1.81-.44Z" />
          </svg> </td>
          <td class="text-center">24 hr (0.4mg/ml)
            96hr (0.2mg/ml)</td>
          <td class="text-center">Do not refrigerate</td>
        </tr>
        <tr>
          <td class="text-center">Fludarabine </td>
          <td class="text-center">50mg/5ml</td>
          <td class="text-center">1 mg/ml</td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center">48 hr</td>
          <td class="text-center">48 hr</td>
        </tr>
        <tr>
          <td class="text-center">Gemcitabine</td>
          <td class="text-center">1000mg/25ml</td>
          <td class="text-center">38 mg/ml</td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1" data-name="Layer 1"
            viewBox="0 0 25 27">
            <path class="cls-1"
              d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
            <path class="cls-1"
              d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
          </svg> </td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center">24 hr</td>
          <td class="text-center">Do not refrigerate</td>
        </tr>
        <tr>
          <td class="text-center">Ifosphamide </td>
          <td class="text-center">2000mg/40ml </td>
          <td class="text-center">20 mg/ml</td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1" data-name="Layer 1"
            viewBox="0 0 25 27">
            <path class="cls-1"
              d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
            <path class="cls-1"
              d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
          </svg> </td>
          <td class="text-center">24 hr</td>
          <td class="text-center">7 days</td>
        </tr>
        <tr>
          <td class="text-center">Ifosfamide/Mesna 1:1 NS, Final conc. 20mg/ml</td>
          <td class="text-center">2000mg/40ml</td>
          <td class="text-center">20 mg/ml</td>
          <td class="text-center"><svg style="fill: #de2b38;" width="22" height="22" id="Layer_1" data-name="Layer 1"
            viewBox="0 0 25 27">
            <path class="cls-1"
              d="m22.5,8.04c-.06.04-2.52,1.97-2.52,1.97v10.03c0,.73-.59,1.32-1.32,1.32H5.57c-.73,0-1.32-.59-1.32-1.32V6.95c0-.73.59-1.32,1.32-1.32h11.85c1.03-.74,2.1-1.46,3.2-2.12-.57-.33-1.24-.51-1.95-.51H5.57c-2.18,0-3.95,1.77-3.95,3.95v13.09c0,2.18,1.77,3.95,3.95,3.95h13.09c2.18,0,3.95-1.77,3.95-3.95V7.95l-.12.09Z" />
            <path class="cls-1"
              d="m21.38,4.28c-1.43.87-2.81,1.8-4.14,2.79-1.33,1-2.62,2.03-3.87,3.11-.35.3-.69.61-1.04.92-.11-.13-.22-.26-.32-.39l-.48-.62-.24-.31-.22-.32-.45-.64c-.08-.11-.15-.22-.22-.33-.07-.11-.15-.22-.24-.31-.09-.1-.19-.19-.31-.27-.12-.08-.25-.16-.41-.21l-.19-.06c-.13-.04-.27-.07-.42-.08-.87-.04-1.61.63-1.65,1.5-.03.7.29,1.2.63,1.68l.51.72.26.36.28.35.56.69c.15.18.31.35.46.52-.05.05-.11.1-.16.16l-.88.87c-.29.29-.59.58-.87.88-.29.29-.57.6-.82.93-.13.16-.25.34-.36.52-.06.09-.11.18-.16.27-.05.09-.1.19-.15.3-.17.37-.18.82.02,1.21.35.68,1.18.94,1.85.59l.08-.04c.09-.04.18-.1.26-.15.08-.06.17-.11.25-.17.16-.12.32-.24.47-.37.31-.26.59-.53.87-.82.28-.29.56-.57.84-.86l.85-.85c.07-.07.14-.14.21-.21.13.11.27.23.41.34.11.09.23.19.35.28l.36.27.36.26c.12.09.25.17.37.25.12.08.25.17.37.25.13.08.26.16.39.23.13.08.26.16.39.23l.4.22c.13.07.27.14.41.21.14.07.27.14.42.2.14.06.28.13.43.18.08.03.14.06.23.09l.26.09c.54.19,1.17,0,1.51-.49.41-.59.26-1.41-.34-1.81l-.22-.15h-.02s-.02-.02-.03-.03l-.07-.04s-.1-.06-.15-.09c-.1-.06-.21-.13-.31-.19-.11-.06-.21-.13-.32-.2-.11-.07-.21-.14-.31-.21l-.31-.22c-.1-.07-.21-.15-.31-.23-.1-.08-.21-.15-.31-.23-.1-.08-.2-.16-.3-.24-.1-.08-.2-.16-.3-.24l-.29-.25-.29-.25c-.09-.09-.19-.18-.28-.27-.05-.05-.11-.1-.16-.15.32-.29.63-.59.96-.88l.89-.81.9-.79c.3-.26.6-.52.91-.78l.46-.39.23-.19.23-.19.93-.75c.31-.25.63-.49.94-.73l.47-.37c.16-.12.32-.24.48-.35l.95-.71.03-.02c.54-.4.69-1.15.34-1.74-.38-.62-1.19-.82-1.81-.44Z" />
          </svg> </td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center">7 days</td>
          <td class="text-center">Do not refrigerate</td>
        </tr>
        <tr>
          <td class="text-center">Irinotecan </td>
          <td class="text-center">100mg/5ml </td>
          <td class="text-center">2.8 mg/ml </td>
          <td class="text-center"><svg style="fill: #de2b38;" width="22" height="22" id="Layer_1" data-name="Layer 1"
            viewBox="0 0 25 27">
            <path class="cls-1"
              d="m22.5,8.04c-.06.04-2.52,1.97-2.52,1.97v10.03c0,.73-.59,1.32-1.32,1.32H5.57c-.73,0-1.32-.59-1.32-1.32V6.95c0-.73.59-1.32,1.32-1.32h11.85c1.03-.74,2.1-1.46,3.2-2.12-.57-.33-1.24-.51-1.95-.51H5.57c-2.18,0-3.95,1.77-3.95,3.95v13.09c0,2.18,1.77,3.95,3.95,3.95h13.09c2.18,0,3.95-1.77,3.95-3.95V7.95l-.12.09Z" />
            <path class="cls-1"
              d="m21.38,4.28c-1.43.87-2.81,1.8-4.14,2.79-1.33,1-2.62,2.03-3.87,3.11-.35.3-.69.61-1.04.92-.11-.13-.22-.26-.32-.39l-.48-.62-.24-.31-.22-.32-.45-.64c-.08-.11-.15-.22-.22-.33-.07-.11-.15-.22-.24-.31-.09-.1-.19-.19-.31-.27-.12-.08-.25-.16-.41-.21l-.19-.06c-.13-.04-.27-.07-.42-.08-.87-.04-1.61.63-1.65,1.5-.03.7.29,1.2.63,1.68l.51.72.26.36.28.35.56.69c.15.18.31.35.46.52-.05.05-.11.1-.16.16l-.88.87c-.29.29-.59.58-.87.88-.29.29-.57.6-.82.93-.13.16-.25.34-.36.52-.06.09-.11.18-.16.27-.05.09-.1.19-.15.3-.17.37-.18.82.02,1.21.35.68,1.18.94,1.85.59l.08-.04c.09-.04.18-.1.26-.15.08-.06.17-.11.25-.17.16-.12.32-.24.47-.37.31-.26.59-.53.87-.82.28-.29.56-.57.84-.86l.85-.85c.07-.07.14-.14.21-.21.13.11.27.23.41.34.11.09.23.19.35.28l.36.27.36.26c.12.09.25.17.37.25.12.08.25.17.37.25.13.08.26.16.39.23.13.08.26.16.39.23l.4.22c.13.07.27.14.41.21.14.07.27.14.42.2.14.06.28.13.43.18.08.03.14.06.23.09l.26.09c.54.19,1.17,0,1.51-.49.41-.59.26-1.41-.34-1.81l-.22-.15h-.02s-.02-.02-.03-.03l-.07-.04s-.1-.06-.15-.09c-.1-.06-.21-.13-.31-.19-.11-.06-.21-.13-.32-.2-.11-.07-.21-.14-.31-.21l-.31-.22c-.1-.07-.21-.15-.31-.23-.1-.08-.21-.15-.31-.23-.1-.08-.2-.16-.3-.24-.1-.08-.2-.16-.3-.24l-.29-.25-.29-.25c-.09-.09-.19-.18-.28-.27-.05-.05-.11-.1-.16-.15.32-.29.63-.59.96-.88l.89-.81.9-.79c.3-.26.6-.52.91-.78l.46-.39.23-.19.23-.19.93-.75c.31-.25.63-.49.94-.73l.47-.37c.16-.12.32-.24.48-.35l.95-.71.03-.02c.54-.4.69-1.15.34-1.74-.38-.62-1.19-.82-1.81-.44Z" />
          </svg> </td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center">24 hr </td>
          <td class="text-center">48 hr</td>
        </tr>
        <tr>
          <td class="text-center">Melphalan </td>
          <td class="text-center">0mg/10ml </td>
          <td class="text-center">0.45 mg/ml</td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1" data-name="Layer 1"
            viewBox="0 0 25 27">
            <path class="cls-1"
              d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
            <path class="cls-1"
              d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
          </svg> </td>
          <td class="text-center"> <svg style="fill: #de2b38;" width="22" height="22" id="Layer_1" data-name="Layer 1"
            viewBox="0 0 25 27">
            <path class="cls-1"
              d="m22.5,8.04c-.06.04-2.52,1.97-2.52,1.97v10.03c0,.73-.59,1.32-1.32,1.32H5.57c-.73,0-1.32-.59-1.32-1.32V6.95c0-.73.59-1.32,1.32-1.32h11.85c1.03-.74,2.1-1.46,3.2-2.12-.57-.33-1.24-.51-1.95-.51H5.57c-2.18,0-3.95,1.77-3.95,3.95v13.09c0,2.18,1.77,3.95,3.95,3.95h13.09c2.18,0,3.95-1.77,3.95-3.95V7.95l-.12.09Z" />
            <path class="cls-1"
              d="m21.38,4.28c-1.43.87-2.81,1.8-4.14,2.79-1.33,1-2.62,2.03-3.87,3.11-.35.3-.69.61-1.04.92-.11-.13-.22-.26-.32-.39l-.48-.62-.24-.31-.22-.32-.45-.64c-.08-.11-.15-.22-.22-.33-.07-.11-.15-.22-.24-.31-.09-.1-.19-.19-.31-.27-.12-.08-.25-.16-.41-.21l-.19-.06c-.13-.04-.27-.07-.42-.08-.87-.04-1.61.63-1.65,1.5-.03.7.29,1.2.63,1.68l.51.72.26.36.28.35.56.69c.15.18.31.35.46.52-.05.05-.11.1-.16.16l-.88.87c-.29.29-.59.58-.87.88-.29.29-.57.6-.82.93-.13.16-.25.34-.36.52-.06.09-.11.18-.16.27-.05.09-.1.19-.15.3-.17.37-.18.82.02,1.21.35.68,1.18.94,1.85.59l.08-.04c.09-.04.18-.1.26-.15.08-.06.17-.11.25-.17.16-.12.32-.24.47-.37.31-.26.59-.53.87-.82.28-.29.56-.57.84-.86l.85-.85c.07-.07.14-.14.21-.21.13.11.27.23.41.34.11.09.23.19.35.28l.36.27.36.26c.12.09.25.17.37.25.12.08.25.17.37.25.13.08.26.16.39.23.13.08.26.16.39.23l.4.22c.13.07.27.14.41.21.14.07.27.14.42.2.14.06.28.13.43.18.08.03.14.06.23.09l.26.09c.54.19,1.17,0,1.51-.49.41-.59.26-1.41-.34-1.81l-.22-.15h-.02s-.02-.02-.03-.03l-.07-.04s-.1-.06-.15-.09c-.1-.06-.21-.13-.31-.19-.11-.06-.21-.13-.32-.2-.11-.07-.21-.14-.31-.21l-.31-.22c-.1-.07-.21-.15-.31-.23-.1-.08-.21-.15-.31-.23-.1-.08-.2-.16-.3-.24-.1-.08-.2-.16-.3-.24l-.29-.25-.29-.25c-.09-.09-.19-.18-.28-.27-.05-.05-.11-.1-.16-.15.32-.29.63-.59.96-.88l.89-.81.9-.79c.3-.26.6-.52.91-.78l.46-.39.23-.19.23-.19.93-.75c.31-.25.63-.49.94-.73l.47-.37c.16-.12.32-.24.48-.35l.95-.71.03-.02c.54-.4.69-1.15.34-1.74-.38-.62-1.19-.82-1.81-.44Z" />
          </svg></td>
          <td class="text-center">1 hr </td>
          <td class="text-center">Do not refrigerate </td>
        </tr>
        <tr>
          <td class="text-center">Methotrexate </td>
          <td class="text-center">5000mg/50ml</td>
          <td class="text-center">25 mg/ml</td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center">24 hr</td>
          <td class="text-center">7 days</td>
        </tr>
        <tr>
          <td class="text-center">Methotrexate (in NS/ plastic syringe ) </td>
          <td class="text-center">5000mg/50ml</td>
          <td class="text-center">25 mg/ml </td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center">30 days </td>
          <td class="text-center">90 days </td>
        </tr>
        <tr>
          <td class="text-center">Mitoxantrone </td>
          <td class="text-center">20mg/10ml </td>
          <td class="text-center">0.5 mg/ml </td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1" data-name="Layer 1"
            viewBox="0 0 25 27">
            <path class="cls-1"
              d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
            <path class="cls-1"
              d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
          </svg> </td>
          <td class="text-center">7 days </td>
          <td class="text-center">7 days </td>
        </tr>
        <tr>
          <td class="text-center">Oxaliplatin </td>
          <td class="text-center">50mg/10ml </td>
          <td class="text-center">0.7 mg/ml </td>
          <td class="text-center"><svg style="fill: #de2b38;" width="22" height="22" id="Layer_1" data-name="Layer 1"
            viewBox="0 0 25 27">
            <path class="cls-1"
              d="m22.5,8.04c-.06.04-2.52,1.97-2.52,1.97v10.03c0,.73-.59,1.32-1.32,1.32H5.57c-.73,0-1.32-.59-1.32-1.32V6.95c0-.73.59-1.32,1.32-1.32h11.85c1.03-.74,2.1-1.46,3.2-2.12-.57-.33-1.24-.51-1.95-.51H5.57c-2.18,0-3.95,1.77-3.95,3.95v13.09c0,2.18,1.77,3.95,3.95,3.95h13.09c2.18,0,3.95-1.77,3.95-3.95V7.95l-.12.09Z" />
            <path class="cls-1"
              d="m21.38,4.28c-1.43.87-2.81,1.8-4.14,2.79-1.33,1-2.62,2.03-3.87,3.11-.35.3-.69.61-1.04.92-.11-.13-.22-.26-.32-.39l-.48-.62-.24-.31-.22-.32-.45-.64c-.08-.11-.15-.22-.22-.33-.07-.11-.15-.22-.24-.31-.09-.1-.19-.19-.31-.27-.12-.08-.25-.16-.41-.21l-.19-.06c-.13-.04-.27-.07-.42-.08-.87-.04-1.61.63-1.65,1.5-.03.7.29,1.2.63,1.68l.51.72.26.36.28.35.56.69c.15.18.31.35.46.52-.05.05-.11.1-.16.16l-.88.87c-.29.29-.59.58-.87.88-.29.29-.57.6-.82.93-.13.16-.25.34-.36.52-.06.09-.11.18-.16.27-.05.09-.1.19-.15.3-.17.37-.18.82.02,1.21.35.68,1.18.94,1.85.59l.08-.04c.09-.04.18-.1.26-.15.08-.06.17-.11.25-.17.16-.12.32-.24.47-.37.31-.26.59-.53.87-.82.28-.29.56-.57.84-.86l.85-.85c.07-.07.14-.14.21-.21.13.11.27.23.41.34.11.09.23.19.35.28l.36.27.36.26c.12.09.25.17.37.25.12.08.25.17.37.25.13.08.26.16.39.23.13.08.26.16.39.23l.4.22c.13.07.27.14.41.21.14.07.27.14.42.2.14.06.28.13.43.18.08.03.14.06.23.09l.26.09c.54.19,1.17,0,1.51-.49.41-.59.26-1.41-.34-1.81l-.22-.15h-.02s-.02-.02-.03-.03l-.07-.04s-.1-.06-.15-.09c-.1-.06-.21-.13-.31-.19-.11-.06-.21-.13-.32-.2-.11-.07-.21-.14-.31-.21l-.31-.22c-.1-.07-.21-.15-.31-.23-.1-.08-.21-.15-.31-.23-.1-.08-.2-.16-.3-.24-.1-.08-.2-.16-.3-.24l-.29-.25-.29-.25c-.09-.09-.19-.18-.28-.27-.05-.05-.11-.1-.16-.15.32-.29.63-.59.96-.88l.89-.81.9-.79c.3-.26.6-.52.91-.78l.46-.39.23-.19.23-.19.93-.75c.31-.25.63-.49.94-.73l.47-.37c.16-.12.32-.24.48-.35l.95-.71.03-.02c.54-.4.69-1.15.34-1.74-.38-.62-1.19-.82-1.81-.44Z" />
          </svg> </td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center">6 hr</td>
          <td class="text-center">24 hr</td>
        </tr>
        <tr>
          <td class="text-center">Paclitaxol </td>
          <td class="text-center">100mg/17ml </td>
          <td class="text-center">1.2 mg/ml</td>
          <td class="text-center"><svg style="fill: #de2b38;" width="22" height="22" id="Layer_1" data-name="Layer 1"
            viewBox="0 0 25 27">
            <path class="cls-1"
              d="m22.5,8.04c-.06.04-2.52,1.97-2.52,1.97v10.03c0,.73-.59,1.32-1.32,1.32H5.57c-.73,0-1.32-.59-1.32-1.32V6.95c0-.73.59-1.32,1.32-1.32h11.85c1.03-.74,2.1-1.46,3.2-2.12-.57-.33-1.24-.51-1.95-.51H5.57c-2.18,0-3.95,1.77-3.95,3.95v13.09c0,2.18,1.77,3.95,3.95,3.95h13.09c2.18,0,3.95-1.77,3.95-3.95V7.95l-.12.09Z" />
            <path class="cls-1"
              d="m21.38,4.28c-1.43.87-2.81,1.8-4.14,2.79-1.33,1-2.62,2.03-3.87,3.11-.35.3-.69.61-1.04.92-.11-.13-.22-.26-.32-.39l-.48-.62-.24-.31-.22-.32-.45-.64c-.08-.11-.15-.22-.22-.33-.07-.11-.15-.22-.24-.31-.09-.1-.19-.19-.31-.27-.12-.08-.25-.16-.41-.21l-.19-.06c-.13-.04-.27-.07-.42-.08-.87-.04-1.61.63-1.65,1.5-.03.7.29,1.2.63,1.68l.51.72.26.36.28.35.56.69c.15.18.31.35.46.52-.05.05-.11.1-.16.16l-.88.87c-.29.29-.59.58-.87.88-.29.29-.57.6-.82.93-.13.16-.25.34-.36.52-.06.09-.11.18-.16.27-.05.09-.1.19-.15.3-.17.37-.18.82.02,1.21.35.68,1.18.94,1.85.59l.08-.04c.09-.04.18-.1.26-.15.08-.06.17-.11.25-.17.16-.12.32-.24.47-.37.31-.26.59-.53.87-.82.28-.29.56-.57.84-.86l.85-.85c.07-.07.14-.14.21-.21.13.11.27.23.41.34.11.09.23.19.35.28l.36.27.36.26c.12.09.25.17.37.25.12.08.25.17.37.25.13.08.26.16.39.23.13.08.26.16.39.23l.4.22c.13.07.27.14.41.21.14.07.27.14.42.2.14.06.28.13.43.18.08.03.14.06.23.09l.26.09c.54.19,1.17,0,1.51-.49.41-.59.26-1.41-.34-1.81l-.22-.15h-.02s-.02-.02-.03-.03l-.07-.04s-.1-.06-.15-.09c-.1-.06-.21-.13-.31-.19-.11-.06-.21-.13-.32-.2-.11-.07-.21-.14-.31-.21l-.31-.22c-.1-.07-.21-.15-.31-.23-.1-.08-.21-.15-.31-.23-.1-.08-.2-.16-.3-.24-.1-.08-.2-.16-.3-.24l-.29-.25-.29-.25c-.09-.09-.19-.18-.28-.27-.05-.05-.11-.1-.16-.15.32-.29.63-.59.96-.88l.89-.81.9-.79c.3-.26.6-.52.91-.78l.46-.39.23-.19.23-.19.93-.75c.31-.25.63-.49.94-.73l.47-.37c.16-.12.32-.24.48-.35l.95-.71.03-.02c.54-.4.69-1.15.34-1.74-.38-.62-1.19-.82-1.81-.44Z" />
          </svg> </td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center">24 hr</td>
          <td class="text-center">Do not refrigerate </td>
        </tr>
        <tr>
          <td class="text-center">Anti-human T-lymphocyte immunoglobulin from rabbits </td>
          <td class="text-center">100mg/5ml </td>
          <td class="text-center">0.5 mg/ml </td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center"><svg style="fill: #de2b38;" width="22" height="22" id="Layer_1" data-name="Layer 1"
            viewBox="0 0 25 27">
            <path class="cls-1"
              d="m22.5,8.04c-.06.04-2.52,1.97-2.52,1.97v10.03c0,.73-.59,1.32-1.32,1.32H5.57c-.73,0-1.32-.59-1.32-1.32V6.95c0-.73.59-1.32,1.32-1.32h11.85c1.03-.74,2.1-1.46,3.2-2.12-.57-.33-1.24-.51-1.95-.51H5.57c-2.18,0-3.95,1.77-3.95,3.95v13.09c0,2.18,1.77,3.95,3.95,3.95h13.09c2.18,0,3.95-1.77,3.95-3.95V7.95l-.12.09Z" />
            <path class="cls-1"
              d="m21.38,4.28c-1.43.87-2.81,1.8-4.14,2.79-1.33,1-2.62,2.03-3.87,3.11-.35.3-.69.61-1.04.92-.11-.13-.22-.26-.32-.39l-.48-.62-.24-.31-.22-.32-.45-.64c-.08-.11-.15-.22-.22-.33-.07-.11-.15-.22-.24-.31-.09-.1-.19-.19-.31-.27-.12-.08-.25-.16-.41-.21l-.19-.06c-.13-.04-.27-.07-.42-.08-.87-.04-1.61.63-1.65,1.5-.03.7.29,1.2.63,1.68l.51.72.26.36.28.35.56.69c.15.18.31.35.46.52-.05.05-.11.1-.16.16l-.88.87c-.29.29-.59.58-.87.88-.29.29-.57.6-.82.93-.13.16-.25.34-.36.52-.06.09-.11.18-.16.27-.05.09-.1.19-.15.3-.17.37-.18.82.02,1.21.35.68,1.18.94,1.85.59l.08-.04c.09-.04.18-.1.26-.15.08-.06.17-.11.25-.17.16-.12.32-.24.47-.37.31-.26.59-.53.87-.82.28-.29.56-.57.84-.86l.85-.85c.07-.07.14-.14.21-.21.13.11.27.23.41.34.11.09.23.19.35.28l.36.27.36.26c.12.09.25.17.37.25.12.08.25.17.37.25.13.08.26.16.39.23.13.08.26.16.39.23l.4.22c.13.07.27.14.41.21.14.07.27.14.42.2.14.06.28.13.43.18.08.03.14.06.23.09l.26.09c.54.19,1.17,0,1.51-.49.41-.59.26-1.41-.34-1.81l-.22-.15h-.02s-.02-.02-.03-.03l-.07-.04s-.1-.06-.15-.09c-.1-.06-.21-.13-.31-.19-.11-.06-.21-.13-.32-.2-.11-.07-.21-.14-.31-.21l-.31-.22c-.1-.07-.21-.15-.31-.23-.1-.08-.21-.15-.31-.23-.1-.08-.2-.16-.3-.24-.1-.08-.2-.16-.3-.24l-.29-.25-.29-.25c-.09-.09-.19-.18-.28-.27-.05-.05-.11-.1-.16-.15.32-.29.63-.59.96-.88l.89-.81.9-.79c.3-.26.6-.52.91-.78l.46-.39.23-.19.23-.19.93-.75c.31-.25.63-.49.94-.73l.47-.37c.16-.12.32-.24.48-.35l.95-.71.03-.02c.54-.4.69-1.15.34-1.74-.38-.62-1.19-.82-1.81-.44Z" />
          </svg> </td>
          <td class="text-center">24 hr</td>
          <td class="text-center">24 hr </td>
        </tr>
        <tr>
          <td class="text-center">Rituximab </td>
          <td class="text-center">100mg/10ml </td>
          <td class="text-center">4 mg/ml </td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center">24 hr</td>
          <td class="text-center">24hr (additional 24hr in RT after refrigeration) </td>
        </tr>
        <tr>
          <td class="text-center">Thiotepa </td>
          <td class="text-center">100mg/10ml </td>
          <td class="text-center">1 mg/ml </td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center"><svg style="fill: #de2b38;" width="22" height="22" id="Layer_1" data-name="Layer 1"
            viewBox="0 0 25 27">
            <path class="cls-1"
              d="m22.5,8.04c-.06.04-2.52,1.97-2.52,1.97v10.03c0,.73-.59,1.32-1.32,1.32H5.57c-.73,0-1.32-.59-1.32-1.32V6.95c0-.73.59-1.32,1.32-1.32h11.85c1.03-.74,2.1-1.46,3.2-2.12-.57-.33-1.24-.51-1.95-.51H5.57c-2.18,0-3.95,1.77-3.95,3.95v13.09c0,2.18,1.77,3.95,3.95,3.95h13.09c2.18,0,3.95-1.77,3.95-3.95V7.95l-.12.09Z" />
            <path class="cls-1"
              d="m21.38,4.28c-1.43.87-2.81,1.8-4.14,2.79-1.33,1-2.62,2.03-3.87,3.11-.35.3-.69.61-1.04.92-.11-.13-.22-.26-.32-.39l-.48-.62-.24-.31-.22-.32-.45-.64c-.08-.11-.15-.22-.22-.33-.07-.11-.15-.22-.24-.31-.09-.1-.19-.19-.31-.27-.12-.08-.25-.16-.41-.21l-.19-.06c-.13-.04-.27-.07-.42-.08-.87-.04-1.61.63-1.65,1.5-.03.7.29,1.2.63,1.68l.51.72.26.36.28.35.56.69c.15.18.31.35.46.52-.05.05-.11.1-.16.16l-.88.87c-.29.29-.59.58-.87.88-.29.29-.57.6-.82.93-.13.16-.25.34-.36.52-.06.09-.11.18-.16.27-.05.09-.1.19-.15.3-.17.37-.18.82.02,1.21.35.68,1.18.94,1.85.59l.08-.04c.09-.04.18-.1.26-.15.08-.06.17-.11.25-.17.16-.12.32-.24.47-.37.31-.26.59-.53.87-.82.28-.29.56-.57.84-.86l.85-.85c.07-.07.14-.14.21-.21.13.11.27.23.41.34.11.09.23.19.35.28l.36.27.36.26c.12.09.25.17.37.25.12.08.25.17.37.25.13.08.26.16.39.23.13.08.26.16.39.23l.4.22c.13.07.27.14.41.21.14.07.27.14.42.2.14.06.28.13.43.18.08.03.14.06.23.09l.26.09c.54.19,1.17,0,1.51-.49.41-.59.26-1.41-.34-1.81l-.22-.15h-.02s-.02-.02-.03-.03l-.07-.04s-.1-.06-.15-.09c-.1-.06-.21-.13-.31-.19-.11-.06-.21-.13-.32-.2-.11-.07-.21-.14-.31-.21l-.31-.22c-.1-.07-.21-.15-.31-.23-.1-.08-.21-.15-.31-.23-.1-.08-.2-.16-.3-.24-.1-.08-.2-.16-.3-.24l-.29-.25-.29-.25c-.09-.09-.19-.18-.28-.27-.05-.05-.11-.1-.16-.15.32-.29.63-.59.96-.88l.89-.81.9-.79c.3-.26.6-.52.91-.78l.46-.39.23-.19.23-.19.93-.75c.31-.25.63-.49.94-.73l.47-.37c.16-.12.32-.24.48-.35l.95-.71.03-.02c.54-.4.69-1.15.34-1.74-.38-.62-1.19-.82-1.81-.44Z" />
          </svg></td>
          <td class="text-center">4 hr </td>
          <td class="text-center">24 hr. </td>
        </tr>
        <tr>
          <td class="text-center">Topotecan</td>
          <td class="text-center">4mg/5ml </td>
          <td class="text-center">0.5 mg/ml</td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center">24 hr </td>
          <td class="text-center">7 days </td>
        </tr>
        <tr>
          <td class="text-center">Vinblastine </td>
          <td class="text-center">10mg/10ml </td>
          <td class="text-center">-----</td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center">24 hr</td>
          <td class="text-center">7 days </td>
        </tr>
        <tr>
          <td class="text-center">Vincristine </td>
          <td class="text-center">1mg/1ml</td>
          <td class="text-center">----- </td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center">24 hr</td>
          <td class="text-center">7 days</td>
        </tr>
        <tr>
          <td class="text-center">Vinorelbine </td>
          <td class="text-center">50mg/5ml </td>
          <td class="text-center">2 mg/ml (I.V bag)</td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center"><svg style="fill: #298c43;" width="22" height="22" id="Layer_1"
              data-name="Layer 1" viewBox="0 0 25 27">
              <path class="cls-1"
                d="m19.13,11.97c-.14.17-.28.35-.41.52v8.39c0,.72-.58,1.3-1.3,1.3H4.46c-.72,0-1.3-.58-1.3-1.3V7.93c0-.72.58-1.3,1.3-1.3h12.22c.49-.58.94-1.12,1.42-1.65l.41-.46.23-.26c-.42-.15-.87-.23-1.33-.23H4.46c-2.16,0-3.91,1.75-3.91,3.91v12.95c0,2.16,1.75,3.91,3.91,3.91h12.95c2.16,0,3.91-1.75,3.91-3.91v-11.56c-.68.79-1.39,1.65-2.19,2.65Z" />
              <path class="cls-1"
                d="m24.26,2.86c-.38-.63-1.2-.84-1.83-.47-.36.21-.69.45-1.01.7-.16.12-.31.26-.46.39-.15.13-.3.27-.44.41-.3.28-.56.58-.83.87l-.41.44-.4.45c-.53.6-1.05,1.21-1.56,1.82l-.76.93-.74.94c-.97,1.26-1.92,2.54-2.83,3.84-.46.65-.9,1.31-1.35,1.96-.16.25-.32.49-.49.74-.35-.29-.66-.61-.94-.97-.57-.72-1.02-1.6-1.39-2.55v-.02c-.26-.63-.96-.97-1.62-.76-.69.22-1.07.95-.85,1.64.18.57.39,1.15.66,1.72.26.57.58,1.13.96,1.66.38.53.82,1.03,1.31,1.47.48.44,1.01.82,1.55,1.15.65.4,1.52.22,1.95-.42l.03-.04c.43-.64.88-1.27,1.33-1.9.45-.63.9-1.26,1.36-1.88.92-1.24,1.85-2.47,2.81-3.68.96-1.2,1.94-2.39,2.96-3.53l.38-.43.39-.42c.26-.28.52-.56.77-.84.25-.28.5-.58.73-.88.24-.3.47-.6.67-.94l.03-.05c.25-.41.27-.94,0-1.37Z" />
            </svg> </td>
          <td class="text-center">24 hr </td>
          <td class="text-center">24 hr </td>
        </tr>

      </tbody>
    </table>
  </div>`);
  });
  $(".Sorafenib-Guidelines").on("click", function () {
    $("#container").replaceWith(`<div>
    
    <div id="container" class="container"
    style="position: fixed; top: 80px; right:0; width: 82vw; height: 82vh;">

      <div class="row d-flex" style=" justify-content: center; align-items: center; ">
        <div class="col col-12 text-center">
          <object class="my-2 rounded-2" data="../pdf/Sorafenib-Guidelines.pdf" type="application/pdf"
            style="height: 100vh; width: 1200px; overflow:hidden;"></object>
        </div>
      </div>
    </div>
  </div>`);
  });
  $(".FN-Guidelines").on("click", function () {
    $("#container").replaceWith(`  <div>
    
    <div  class="container" id="container" style="position: fixed; top: 80px; right:0; width: 82vw; height: 82vh;">

      <div class="row d-flex" style=" justify-content: center; align-items: center; ">
        <div class="col col-12 text-center">
          <object class="my-2 rounded-2" data="../pdf/FN-Guidelines.pdf" type="application/pdf"
            style="height: 100vh; width: 1200px; overflow:hidden;"></object>
        </div>
      </div>
    </div>
  </div>`);
  });
  $(".DasatinibGuidelines").on("click", function () {
    $("#container").replaceWith(`<div>

    <div  class="container" id="container" style="position: fixed; top: 80px; right:0; width: 82vw; height: 82vh;">

      <div class="row d-flex" style=" justify-content: center; align-items: center; ">
        <div class="col col-12 text-center">
          <object class="my-2 rounded-2" data="../pdf/Dasatinib-Administration-Guidelines.pdf" type="application/pdf"
            style="height: 100vh; width: 1200px; overflow:hidden;"></object>
        </div>
      </div>
    </div>
  </div>`);
  });
  $(".Algorithm").on("click", function () {
    $("#container")
      .replaceWith(`<div  class="container" id="container" style="position: fixed; top: 80px; right:0; width: 82vw; height: 82vh;">

    <div class="row d-flex" style=" justify-content: center; align-items: center; ">
      <div class="col col-12 text-center">
        <object class="my-2 rounded-2" data="../pdf/Algorithm for Child Status Epilepticus emergency.pdf" type="application/pdf"
          style="height: 100vh; width: 1200px; overflow:hidden;"></object>
      </div>
    </div>
  </div>
</div>`);
  });
  $(".Psycho-Oncolgy").on("click", function () {
    $("#container")
      .replaceWith(`<div  class="container" id="container" style="position: fixed; top: 80px; right:0; width: 82vw; height: 82vh;">

    <div class="row d-flex" style=" justify-content: center; align-items: center; ">
      <div class="col col-12 text-center">
        <object class="my-2 rounded-2" data="../pdf/Psycho-Oncolgy Guidlines.pdf" type="application/pdf"
          style="height: 100vh; width: 1200px; overflow:hidden;"></object>
      </div>
    </div>
  </div>
</div>`);
  });
  $(".Neuro-Oncology").on("click", function () {
    $("#container")
      .replaceWith(`<div  class="container" id="container" style="position: fixed; top: 80px; right:0; width: 82vw; height: 82vh;">

    <div class="row d-flex" style=" justify-content: center; align-items: center; ">
      <div class="col col-12 text-center">
        <object class="my-2 rounded-2" data="../pdf/Neuro-Oncology Guidlines.pdf" type="application/pdf"
          style="height: 100vh; width: 1200px; overflow:hidden;"></object>
      </div>
    </div>
  </div>
</div>`);
  });
  /*--------------------------------------------------------------
# CHANGE COLOR WHEN PRESS
--------------------------------------------------------------*/
  // maintab
  $(".btnheadfont").on("click", function () {
    $(this)
      .toggleClass("black")
      .parent()
      .parent()
      .siblings()
      .find(".btnheadfont")
      .removeClass("black");
    $(".Layer").toggleClass("blackfill");
    $(this)
      .parent()
      .parent()
      .siblings()
      .find(".Layer")
      .removeClass("blackfill");
    $(this)
      .parent()
      .parent()
      .find("ul")
      .find(".btnsubheadfont")
      .removeClass("blue");
  });

  $(".Layer").on("click", function () {
    $(this)
      .toggleClass("blackfill")
      .parent()
      .parent()
      .siblings()
      .find(".Layer")
      .removeClass("blackfill");
    $(".btnheadfont").toggleClass("black");
    $(this)
      .parent()
      .parent()
      .siblings()
      .find(".btnheadfont")
      .removeClass("black");
  });

  // SUBTAB
  $(".btnsubheadfont").on("click", function () {
    $(this)
      .addClass("blue")
      .parent()
      .siblings()
      .find(".btnsubheadfont")
      .removeClass("blue");
  });

  // MINILIST
  $(".group li").on("click", function () {
    $(this)
      .addClass("backgroundcolor")
      .siblings()
      .removeClass("backgroundcolor");
  });

  /*--------------------------------------------------------------
# UP ARROW
--------------------------------------------------------------*/

  $("main").on("scroll", function () {
    if ($("main").scrollTop() == 0) {
      $("#uparrow").addClass("opacity");
    } else {
      $("#uparrow").removeClass("opacity");
    }
  });

  $("#uparrow").on("click", function () {
    $("main").scrollTop("0");
  });

  $("#container").on("scroll", function () {
    if ($("#container").scrollTop() == 0) {
      $("#uparrow2").addClass("opacity");
    } else {
      $("#uparrow2").removeClass("opacity");
    }
  });

  $("#uparrow2").on("click", function () {
    $("#container").scrollTop("0");
    $("#iframe").scrollTop("0");
  });
}); // END OF jQuary