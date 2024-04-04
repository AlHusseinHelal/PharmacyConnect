let username
const getUsername = () => {
  return username;
}

const setUsername = 

$(document).ready(function () {
  /*--------------------------------------------------------------
# GEAR CONTROL
--------------------------------------------------------------*/
  $("#gear").on("click", function () {
    $("#sun").toggleClass("appear50");
    $("#moon").toggleClass("appear100");
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
