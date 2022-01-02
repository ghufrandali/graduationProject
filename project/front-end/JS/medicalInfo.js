 var generalpid;

 function loadgeneralInfo(ID) {



     getgeneralbypid(ID).then(data => {

         if (data.length === 0) {
             alert('this is a new patient, enter his general info please')
         }


         data.forEach(element => {
             document.getElementById("bloodGroup").value = element["bloodGroup"];
             document.getElementById("allergies").value = element["allergies"];
             document.getElementById("chronicDis").value = element["chronicDis"];
             document.getElementById("familyHistory").value = element["familyHistory"];
             console.log("elemeeent", element);
         });

     })

 }



 function loadPatientDataForGeneral() {
     const urlParams = new URLSearchParams(window.location.search);
     var ID = urlParams.get("id");
     // console.log("ID", ID);
     this.generalpid = ID;

     if (ID == null) {
         ID = localStorage.getItem("pid");
         getpatientbypid(ID).then(data => {
             console.log(data);
             data.forEach(element => {
                 document.getElementById("name").value = element["name"];
                 document.getElementById("number").value = element["phone"];
                 document.getElementById("id").value = element["pid"];
                 document.getElementById("dob").value = element["dob"];
                 console.log("elemeeent", element);
                 loadgeneralInfo(ID);

             });


         });


     } else {



         getPatientById(ID).then(data => {
             console.log("general data ", data);

             document.getElementById("name").value = data["name"];
             document.getElementById("id").value = data["pid"];
             document.getElementById("number").value = data["phone"];
             document.getElementById("dob").value = data["dob"];
             localStorage.setItem("pid", data["pid"]);
             loadgeneralInfo(data["pid"]);

         });

     }




 }

 function loadVisitInfo() {
     const urlParams = new URLSearchParams(window.location.search);
     var ID = urlParams.get("id");

     if (ID) {

         getvisitbyId(ID).then(data => {


             document.getElementById("weight").value = data["weight"];
             document.getElementById("height").value = data["height"];
             document.getElementById("temp").value = data["temp"];
             document.getElementById("bp").value = data["bp"];
             document.getElementById("o2sat").value = data["o2sat"];
             document.getElementById("complaint").value = data["complaint"];
             document.getElementById("physical").value = data["physical"];
             document.getElementById("meds").value = data["meds"];
             document.getElementById("pulse").value = data["pulse"];
             document.getElementById("dx").value = data["dx"];


         })
     }


 }

 function loadPatientDataForVisit() {

     const ID = localStorage.getItem("pid");
     // console.log("ID", ID);
     this.generalpid = ID;


     getpatientbypid(ID).then(data => {
         //  const test = document.getElementById("name");
         // console.log("name isssss", test);
         console.log(data);
         data.forEach(element => {
             document.getElementById("name").value = element["name"];
             document.getElementById("number").value = element["phone"];
             document.getElementById("id").value = element["pid"];
             document.getElementById("dob").value = element["dob"];
             console.log("elemeeent", element);
         });


     });


 }

 /*

 function addNewGeneralMedical() {
     loadPatientDataForGeneral();
     const blood = document.getElementById("bloodGroup").value;
     const allergy = document.getElementById("allergies").value;
     const disease = document.getElementById("chronicDis").value;
     const hx = document.getElementById("familyHistory").value;
     const tempx = document.getElementById("temp").value;
     const bpx = document.getElementById("bp").value;
     const prx = document.getElementById("pr").value;
     const o2 = document.getElementById("o2sat").value;
     const smoke = document.getElementById("smoking").value;
     const pidx = generalpid;
     
     
     const urlParams = new URLSearchParams(window.location.search);
     const pidx = urlParams.get("id");  
     console.log("idddd", pidx);
     
     

     const patientData = {
         bloodGroup: blood, allergies: allergy, chronicDis: disease, familyHistory: hx, temp: tempx, bp: bpx, pr: prx, o2sat: o2, smoking: smoke, pid: pidx
     };
     newGeneralMedical(patientData)
         .then(response => {
             if (response.ok) {
                 alert('added my man celebrate, go nuts');
             } else {
                 alert('ERRORRRRRRRRR U beautiful stupid HEHE');
             }
         })

         .catch(error => {
             console.log(error)
         })

 }


 function addNewGeneralMedical() {
     const bloodGroupstr = document.getElementById("bloodGroup").value;
     const allergiesstr = document.getElementById("allergies").value;
     const chronicDisstr = document.getElementById("chronicDis").value;
     const familyHistorystr = document.getElementById("familyHistory").value;
     const smokingstr = document.getElementById("smoking").value;
     const tempstr = document.getElementById("temp").value;
     const bpstr = document.getElementById("bp").value;
     const prstr = document.getElementById("pr").value;
     const o2satstr = document.getElementById("o2sat").value;


     const patientData = { bloodGroup : bloodGroupstr, allergies:allergiesstr, chronicDis:chronicDisstr, familyHistory:familyHistorystr, smoking:smokingstr, temp:tempstr, bp:bpstr , pr: prstr , o2sat:o2satstr, pid: generalpid };

     newGeneralMedical(patientData)
     .then(response => {
         if(response.ok) {
             alert('added my man celebrate, go nuts');
         } else {
             alert('ERRORRRRRRRRR U beautiful stupid HEHE');
         }
     })

     .catch(error => {
         console.log(error)
     })

 }

 */