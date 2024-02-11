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
    $(".Layer").css("transition", "all 2s");
    $(".Layer").css("width", "25px");
    $(".Layer").css("margin-left", "0px");
    $(".btnsubheadfont").css("margin-left", "20px");
    $(".group").css("transition", "all 2s");
    $(".group").css("margin-left", "16px");
    $(".group").css("font-size", "14px");
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
    $(".Layer").css("transition", "all 2s");
    $(".Layer").css("width", "2em");
    $(".Layer").css("margin-left", "20px");
    $(".btnsubheadfont").css("margin-left", "0px");
    $(".group").css("transition", "all 2s");
    $(".group").css("margin-left", "0px");
    $(".group").css("font-size", "11px");
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
    $(".Layer").css("transition", "all 2s");
    $(".Layer").css("width", "2em");
    $(".Layer").css("margin-left", "20px");
    $(".btnsubheadfont").css("margin-left", "0px");
    $(".group").css("transition", "all 2s");
    $(".group").css("margin-left", "0px");
    $(".group").css("font-size", "11px");
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
    $(".Layer").css("transition", "all 2s");
    $(".Layer").css("width", "25px");
    $(".Layer").css("margin-left", "0px");
    $(".btnsubheadfont").css("margin-left", "20px");
    $(".group").css("transition", "all 2s");
    $(".group").css("margin-left", "16px");
    $(".group").css("font-size", "14px");
  });

  /*--------------------------------------------------------------
# ADD PRESENTATION
--------------------------------------------------------------*/
  $(".Asthma").on("click", function () {
    $(
      "#container"
    ).replaceWith(`<div id="container" class="container" style="justify-content: center; align-items: center; height: 100vh;">
    <div class="row d-flex" style=" justify-content: center; align-items: center; ">
      <div class="col col-12">
        <img src="../Presentation/Asthma BPS Pharmacotherapy.png" alt="" style="height: fit-content; width: 1200px;">    
      </div>
      </div>
    </div>`);
  });

  $(".Dinutuximab").on("click", function () {
    $(
      "#container"
    ).replaceWith(`<div id="container" class="container" style="justify-content: center; align-items: center; height: 100vh;">
    <div class="row d-flex" style=" justify-content: center; align-items: center; ">
      <div class="col col-12">
        <img src="../Presentation/Dinutuximab-01.png" alt="" style="height: fit-content; width: 1200px;">  
      </div>
    </div>
  </div>`);
  });

  $(".adrenocortical").on("click", function () {
    $(
      "#container"
    ).replaceWith(`<div id="container" class="container" style="justify-content: center; align-items: center; height: 100vh;">
    <div class="row d-flex" style=" justify-content: center; align-items: center; ">
      <div class="col col-12">
        <img src="../Presentation/adrenocortical carcinoma-01.png" alt="" style="height: fit-content; width: 1200px;">    
      </div>  
    </div>
</div>`);
  });

  $(".Targeted").on("click", function () {
    $(
      "#container"
    ).replaceWith(`  <div id="container" class="container" style="justify-content: center; align-items: center; height: 100vh;">
    <div class="row d-flex" style=" justify-content: center; align-items: center; ">
      <div class="col col-12">
        <img src="../Presentation/Targeted Therapy - Large Molecules-01.png" alt="" style="height: fit-content; width: 1200px;">  
      </div>      
    </div>
</div>
`);
  });

  /*--------------------------------------------------------------
# ADD INFOGRAPH
--------------------------------------------------------------*/
  $(".pediatricancer").on("click", function () {
    $(
      "#container"
    ).replaceWith(`<div id="container" class="container h-100 d-flex " style="justify-content: center; align-items: center;">    
    <div class="row d-flex" style=" justify-content: center; align-items: center; "> <div class="col col-12">
    <img src="../infograph/Cancer Disease.jpg" alt="" style="height: 550px; width: 1200px;">
    </div>`);
  });
  $(".DinuTuximab").on("click", function () {
    $(
      "#container"
    ).replaceWith(`<div id="container" class="container h-100  " style="justify-content: center; align-items: center;">
        
    <div class="row" style=" justify-content: center; align-items: center; ">
      <div class="col col-12">
        <img src="../Infograph/Dinutuximab.png" alt="" style=" width: 1200px;">
  
      </div>
      
    </div>
    

</div>`);
  });

  /*--------------------------------------------------------------
# ADD MEDICATION CARDIOLOGY
--------------------------------------------------------------*/
  $(".Ifosfamide").on("click", function () {
    $("#container").replaceWith(`<div class="container" id="container">
  <div class="row">
      <div class="col col-12">
          <div class="one mt-5">
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

  /*--------------------------------------------------------------
# ADD MEDICATION CARDIOLOGY
--------------------------------------------------------------*/
  $(".Captopril").on("click", function () {
    $("#container").replaceWith(`<div  class="container" id="container">
    <div class="row">
      <div class="col col-12">
        <div class="one mt-5">
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
    $("#container").replaceWith(`<div  class="container" id="container">
    <div class="row">
      <div class="col col-12">
        <div class="one mt-5">
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
    $("#container").replaceWith(`<div class="container" id="container">
    <div class="row">
      <div class="col col-12">
        <div class="one mt-5">
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
    $("#container").replaceWith(`<div class="container" id="container">
    <div class="row">
      <div class="col col-12">
        <div class="one mt-5">
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
    $("#container").replaceWith(`<div class="container" id="container">
    <div class="row">
      <div class="col col-12">
        <div class="one mt-5">
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
    $("#container").replaceWith(`<div class="container" id="container">
    <div class="row">
      <div class="col col-12">
        <div class="one mt-5">
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
    $("#container").replaceWith(`<div class="container" id="container">
    <div class="row">
      <div class="col col-12">
        <div class="one mt-5">
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
    $("#container").replaceWith(`<div class="container" id="container">
    <div class="row">
      <div class="col col-12">
        <div class="one mt-5">
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
    $("#container").replaceWith(`<div class="container" id="container">
    <div class="row">
      <div class="col col-12">
        <div class="one mt-5">
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
    $("#container").replaceWith(`<div class="container" id="container">
    <div class="row">
      <div class="col col-12">
        <div class="one mt-5">
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
    $("#container").replaceWith(`<div class="container" id="container">
    <div class="row">
      <div class="col col-12">
        <div class="one mt-5">
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
    $("#container").replaceWith(`<div class="container" id="container">
    <div class="row">
      <div class="col col-12">
        <div class="one mt-5">
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
    $("#container").replaceWith(`<div class="container" id="container">
    <div class="row">
      <div class="col col-12">
        <div class="one mt-5">
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
    $("#container").replaceWith(`<div class="container" id="container">
    <div class="row">
      <div class="col col-12">
        <div class="one mt-5">
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
    $("#container").replaceWith(`<div class="container" id="container">
    <div class="row">
      <div class="col col-12">
        <div class="one mt-5">
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
    $("#container").replaceWith(`<div class="container" id="container">
    <div class="row">
      <div class="col col-12">
        <div class="one mt-5">
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
  // $(window).scroll(function () {
  //   if ($(window).scrollTop() == 0) {
  //     $("#uparrow").addClass("dnone")
  //   } else {$("#uparrow").removeClass("dnone") }
  // })

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
  });

  // Add Row

  $("#editicon").on("click", function (event) {
    event.preventDefault();
    const row = `<tr id="tr">
    <form action="/line" method="post">
      <td class="text-center">
        <input class="patientname form-control" type="text" name="patientname"  />
      </td>
      <td class="text-center">
        <input class="mrn form-control" type="number" name="mrn" />
      </td>
      <td class="text-center">
        <select class="custom-select form-control" id="type" name="type">
          <option selected hidden disabled>Choose...</option>
          <option value="1">ICU</option>
          <option value="2">BMT</option>
          <option value="3">3rd Old</option>
          <option value="3">3rd New</option>
          <option value="3">4th</option>
          <option value="3">5th</option>
          <option value="3">6th</option>
          <option value="3">ICC</option>
          <option value="3">ER</option>
          <option value="3">Dispense</option>
        </select>
      </td>
      <td class="text-center">
        <input value="" class="form-control comment" type="text" name="comment"  />
      </td>
      <td class="text-center">
        <input disabled class="form-control time2" type="text" name="time2" />
      </td>
      <td class="text-center p-0 py-3">
        <button type="submit" class="icon" data-bs-toggle="modal" data-bs-target="#exampleModal"></button>
      </td>

      <td class="text-center">
        <input type="checkbox" class="checkbox" style="height: 2em" />
      </td>
      <td>
        <input class="form-control time text-center" type="text" name="time"  disabled />
      </td>
    </form>
  </tr>`;
    $("#tbody").append(row);
  });

  // })

  $("#tbody").on("click", function () {
    const dt = new Date();
    const now = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    const target = $(event.target).parent().siblings().find(".time");

    if ($(event.target).prop("checked") == true) {
      target.attr("value", now);
    } else {
      target.attr("value", "");
    }
  });

  $("#tbody").on("change", function () {
    const dt = new Date();
    const now = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    const target = $(event.target).parent().siblings().find(".time2");

    if ($(event.target).hasClass("comment") == true) {
      target.attr("value", now);
    }
  });

  // $("#tbody").on("click", function () {
  //   const patientname = $(event.target).parent().siblings().find(".patientname");
  //   console.log(patientname)

  //   const mrn = $(event.target).parent().siblings().find(".mrn");
  //   console.log(mrn)

  //   const comment = $(event.target).parent().siblings().find(".comment");
  //   console.log(comment)

    
  //  if (patientname.val() === "") {
    
  //   $("#modalbody").replaceWith(`<h4>Please Enter PatientName</h4> `) 
  //  } else if (mrn.val() === "") {
  //   $("#modalbody").replaceWith(`<h4>Please Enter MRN</h4> `) 
  //  }

    
  // });
}); // END OF jQuary
// saveicon.addEventListener("click", () => {
//   let patientname = document.getElementById("patientname").value
//   let mrn = document.getElementById("mrn").value
//   let comment = document.getElementById("comment").value
//   if (patientname === "") {
//     modalbody.innerHTML = `<h4 >Please Enter PatientName</h4> `
//   } else if (mrn === "") {
//     modalbody.innerHTML = `<h4 >Please Enter MRN</h4> `
//   } else if (comment === "") {
//     modalbody.innerHTML = `<h4 >Please Enter Comment</h4> `
//   } else {
//     modalbody.innerHTML = `<h4 >Are You Sure </h4> `
//   }
// })

tbody.addEventListener("click", (eo) => {
  if (eo.target.classList.contains("icon")) {
    const comment = eo.target.parentElement.previousElementSibling.previousElementSibling.firstChild
    const mrn = eo.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.firstChild
    const patientname = eo.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.firstChild  
    if (patientname.value === "") {
      modalbody.innerHTML = `<h4 >Please Enter Patient Name</h4> `;
      modaltitle.innerHTML = `<h4 >Alert</h4> `;
      modalfooter.innerHTML = `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>`
      
    } else if (mrn.value === "") {
      modalbody.innerHTML = `<h4 >Please Enter MRN</h4> `;
      modaltitle.innerHTML = `<h4 >Alert</h4> `;
      modalfooter.innerHTML = `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>`
    } else if (comment.value === "") {
      modalbody.innerHTML = `<h4 >Please Write a Comment</h4> `;
      modaltitle.innerHTML = `<h4 >Alert</h4> `;
      modalfooter.innerHTML = `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>`
      
    } else {
      modalbody.innerHTML = `<h4 >Are You Sure</h4> `;
      modaltitle.innerHTML = `<h4 >SAVED</h4> `;
      modalfooter.innerHTML = `<button id="save" type="button" class="btn btn-primary">Save changes</button>`
    }
  }
});

// OPEN AND CLOSE LIST

// btn1.addEventListener("click", (params) => {
//   infographcollapse.classList.remove("show");
//   medicationcollapse.classList.remove("show");
//   antibioticcollapse.classList.remove("show");
//   anticancercollapse.classList.remove("show");
//   antifungalcollapse.classList.remove("show");
//   Cardiologycollapse.classList.remove("show");
//   DICcollapse.classList.remove("show");
// });

// btn2.addEventListener("click", (params) => {
//   presentationcollapse.classList.remove("show");
//   medicationcollapse.classList.remove("show");
//   antibioticcollapse.classList.remove("show");
//   anticancercollapse.classList.remove("show");
//   antifungalcollapse.classList.remove("show");
//   Cardiologycollapse.classList.remove("show");
//   DICcollapse.classList.remove("show");
// });

// btn3.addEventListener("click", (params) => {
//   presentationcollapse.classList.remove("show");
//   infographcollapse.classList.remove("show");
//   antibioticcollapse.classList.remove("show");
//   anticancercollapse.classList.remove("show");
//   antifungalcollapse.classList.remove("show");
//   Cardiologycollapse.classList.remove("show");
//   DICcollapse.classList.remove("show");
// });

// btn4.addEventListener("click", (params) => {
//   presentationcollapse.classList.remove("show");
//   infographcollapse.classList.remove("show");
//   antibioticcollapse.classList.remove("show");
//   antifungalcollapse.classList.remove("show");
//   Cardiologycollapse.classList.remove("show");
//   DICcollapse.classList.remove("show");
// });

// btn5.addEventListener("click", (params) => {
//   presentationcollapse.classList.remove("show");
//   infographcollapse.classList.remove("show");
//   anticancercollapse.classList.remove("show");
//   antifungalcollapse.classList.remove("show");
//   Cardiologycollapse.classList.remove("show");
//   DICcollapse.classList.remove("show");
// });

// btn6.addEventListener("click", (params) => {
//   presentationcollapse.classList.remove("show");
//   infographcollapse.classList.remove("show");
//   anticancercollapse.classList.remove("show");
//   antibioticcollapse.classList.remove("show");
//   Cardiologycollapse.classList.remove("show");
//   DICcollapse.classList.remove("show");
// });

// btn7.addEventListener("click", (params) => {
//   btn7.classList.toggle("red");
//   presentationcollapse.classList.remove("show");
//   infographcollapse.classList.remove("show");
//   anticancercollapse.classList.remove("show");
//   antibioticcollapse.classList.remove("show");
//   antifungalcollapse.classList.remove("show");
//   DICcollapse.classList.remove("show");
// });

// btn8.addEventListener("click", (params) => {
//   btn8.classList.toggle("red");
//   presentationcollapse.classList.remove("show");
//   infographcollapse.classList.remove("show");
//   anticancercollapse.classList.remove("show");
//   antibioticcollapse.classList.remove("show");
//   antifungalcollapse.classList.remove("show");
//   medicationcollapse.classList.remove("show");
// });
