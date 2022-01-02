function addNewPatient() {
    const namestr = document.getElementById("name").value;
    const uniIDstr = document.getElementById("uniID").value;
    const sectionstr = document.getElementById("section").value;
    const addressstr = document.getElementById("address").value;
    const dobstr = document.getElementById("dob").value;
    const phoneNostr = document.getElementById("phoneNo").value;

    const patientData = {
        name: namestr,
        pid: uniIDstr,
        Address: addressstr,
        phone: phoneNostr,
        speciallty: sectionstr,
        dob: dobstr
    };
    addPatient(patientData)
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

function updatePatientButton() {
    const namestr = document.getElementById("name").value;
    const uniIDstr = document.getElementById("uniID").value;
    const sectionstr = document.getElementById("section").value;
    const addressstr = document.getElementById("address").value;
    const dobstr = document.getElementById("dob").value;
    const phoneNostr = document.getElementById("phoneNo").value;

    const patientData = {
        name: namestr,
        pid: uniIDstr,
        Address: addressstr,
        phone: phoneNostr,
        speciallty: sectionstr,
        dob: dobstr
    };

    const ID = localStorage.getItem('ID');

    updatePatient(patientData, ID)
        .then(response => {
            if (response.ok) {
                alert('updated my man celebrate, go nuts');
            } else {
                alert('ERRORRRRRRRRR U beautiful stupid HEHE');
            }
            updatePatientsTables()
        })

    .catch(error => {
        console.log(error)
    })

}



/*
function getPatientData() {
    var modal = document.getElementById("editNoteModal");
    var noteIdAttribute = document.createAttribute("noteid");
    noteIdAttribute.value = noteId;
    modal.setAttributeNode(noteIdAttribute);
    getNoteById(noteId).then(data => {
        document.getElementById("editTitle").value = data["title"];
        document.getElementById("editContent").value = data["content"];
    });
}
*/

function getPatientInfo() {
    var table = document.getElementById("Table");
    getAllPatients().then(data => {
            data.forEach(patient => {
                var row = table.insertRow(1);
                var idAttribute = document.createAttribute("id");
                idAttribute.value = patient["_id"];
                row.setAttributeNode(idAttribute);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                var cell6 = row.insertCell(5);
                cell1.innerHTML = patient["name"];
                cell2.innerHTML = patient["pid"];
                cell3.innerHTML = patient["phone"];
                cell4.innerHTML = `<a onclick="loadPatientDataForGeneral('${patient["_id"]}')" href="generalmedical.html?id=${patient["_id"]}" > Medical Info </a>`;
                cell5.innerHTML = `<a onclick="openEditModal('${patient["_id"]}')" href="#" class="btn btn-info btn-lg"> 
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
        </svg> </a>`
                cell6.innerHTML = `<a <a onclick="confirmDeletePatient('${patient["_id"]}')" href="#" class="btn btn-info btn-lg"> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
          </svg> </a>`



            })

        })
        /* .then(() => {
            if(noteId) {
                var row = document.getElementById(noteId);
                row.setAttribute("style", "animation: new-row 5s;");
            }
        }); */
}


function getVisitsInfo() {
    const pid = localStorage.getItem('pid');
    var table = document.getElementById("Table");
    var rowCount = table.rows.length;
    while (--rowCount) {
        table.deleteRow(rowCount);
    }
    getvisitsbypid(pid).then(data => {
            data.forEach(Element => {
                var row = table.insertRow(1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                var cell6 = row.insertCell(5);
                cell1.innerHTML = Element["date"];
                cell2.innerHTML = Element["time"];
                cell3.innerHTML = Element["dx"];
                cell4.innerHTML = Element["meds"];
                cell5.innerHTML = `<a href="dailyvisit.html?id=${Element["_id"]}" > Visit Info </a>`;
                cell6.innerHTML = `<a onclick="confirmDeleteVisit('${Element["_id"]}')" href="#" class="btn btn-info btn-lg"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg> </a>`


            })

        })
        /* .then(() => {
            if(noteId) {
                var row = document.getElementById(noteId);
                row.setAttribute("style", "animation: new-row 5s;");
            }
        }); */
}

function openEditModal(id) {

    var modal = document.getElementById("editNPatientModal");
    var closeSpan = document.getElementById("closeAdd");
    var cancelButton = document.getElementById("cancelAddPatientBtn");

    localStorage.setItem('ID', id);
    modal.style.display = "block";
    loadPatientData(id);
    closeSpan.onclick = () => {
        modal.style.display = "none";
    }

    cancelButton.onclick = () => {
        modal.style.display = "none";
    }



}


function loadPatientData(pid) {
    /*
    var modal = document.getElementById("editNPatientModal");
    
    var noteIdAttribute = document.createAttribute("pid");
    noteIdAttribute.value = pid;
    modal.setAttributeNode(noteIdAttribute);
    */
    // it was discovered that this doesnt do anything .... by mary and ghuf
    getPatientById(pid).then(data => {
        document.getElementById("name").value = data["name"];
        document.getElementById("uniID").value = data["pid"];
        document.getElementById("phoneNo").value = data["phone"];
        document.getElementById("address").value = data["Address"];
        document.getElementById("section").value = data["speciallty"];
        document.getElementById("dob").value = data["dob"];

    });
}



/*
function loadPatientDataForGeneral(pid) {
    console.log("pid", pid); 
    document.getElementById("name").value = "mary";
     document.getElementById("id").value = "hello";
        document.getElementById("number").value ="bye";
    
    var modal = document.getElementsById("generalInfo");
    var noteIdAttribute = document.createAttribute("pid");
    noteIdAttribute.value = pid;
    modal.setAttributeNode(noteIdAttribute);
    
   
    getPatientById(pid).then(data => {
        document.getElementById("name").value = data["name"];
        document.getElementById("id").value = data["pid"];
        document.getElementById("number").value = data["phone"];

    });

}

*/

function updatePatientsTable(pid) {
    var table = document.getElementById("Table");
    var rowCount = table.rows.length;
    while (--rowCount) {
        table.deleteRow(rowCount);
    }

    getpatientbypid(pid).then(data => {
        data.forEach(patient => {
            var row = table.insertRow(1);
            var idAttribute = document.createAttribute("id");
            idAttribute.value = patient["_id"];
            row.setAttributeNode(idAttribute);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);
            cell1.innerHTML = patient["name"];
            cell2.innerHTML = patient["pid"];
            cell3.innerHTML = patient["phone"];
            cell4.innerHTML = `<a onclick="loadPatientDataForGeneral('${patient["_id"]}')" href="generalmedical.html?id=${patient["_id"]}" > Medical Info </a>`;
            cell5.innerHTML = `<a onclick="openEditModal('${patient["_id"]}')" href="#" class="btn btn-info btn-lg"> 
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
        </svg> </a>`;
            cell6.innerHTML = `<a onclick="confirmDeletePatient('${patient["_id"]}')" href="#" class="btn btn-info btn-lg"> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
          </svg> </a>`;
        })
    }).then(() => {
        if (pid) {
            var row = document.getElementById(uniID);
        }
    });
}

function searchPatients() {
    const searchId = document.getElementById("searchpatient").value;
    if (searchId == "") {
        alert('Enter the patient pid');
        updatePatientsTables();
    } else {
        updatePatientsTable(searchId);
    }

}

// added by mary 17th dec 2021 // 

function updatePatientsTables() {
    var table = document.getElementById("Table");
    var rowCount = table.rows.length;
    while (--rowCount) {
        table.deleteRow(rowCount);
    }

    getAllPatients().then(data => {
            data.forEach(patient => {
                var row = table.insertRow(1);
                var idAttribute = document.createAttribute("id");
                idAttribute.value = patient["_id"];
                row.setAttributeNode(idAttribute);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                var cell6 = row.insertCell(5);
                cell1.innerHTML = patient["name"];
                cell2.innerHTML = patient["pid"];
                cell3.innerHTML = patient["phone"];
                cell4.innerHTML = `<a onclick="loadPatientDataForGeneral('${patient["_id"]}')" href="generalmedical.html?id=${patient["_id"]}" > Medical Info </a>`;
                cell5.innerHTML = `<a onclick="openEditModal('${patient["_id"]}')" href="#" class="btn btn-info btn-lg"> 
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
        </svg> </a>`;
                cell6.innerHTML = `<a onclick="confirmDeletePatient('${patient["_id"]}')" href="#" class="btn btn-info btn-lg"> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
          </svg> </a>`;
            })
        })
        // .then(() => {
        //     if (pid) {
        //         var row = document.getElementById(uniID);
        //     }
        // });
}

function confirmDeletePatient(id) {
    var action = confirm("Are you sure you want to delete this patient?");
    if (action == true) {
        deletePatient(id).then(() => {
            updatePatientsTables();
        })
    }
}

function confirmDeleteVisit(id) {
    var action = confirm("Are you sure you want to delete this patient?");
    if (action == true) {
        deleteVisit(id).then(() => {
            getVisitsInfo();
        })
    }
}


// added by mary 17th dec 2021 // 

function addNewGeneralMedical(event) {

    event.preventDefault(); // prevent refresh page
    console.log("inside addnewgeneralMedical");
    const blood = document.getElementById("bloodGroup").value;
    const allergy = document.getElementById("allergies").value;
    const disease = document.getElementById("chronicDis").value;
    const hx = document.getElementById("familyHistory").value;
    //   const tempx = document.getElementById("temp").value;
    //   const bpx = document.getElementById("bp").value;
    //   const prx = document.getElementById("pr").value;
    //    const o2 = document.getElementById("o2sat").value;
    //  const smoke = document.getElementById("smoking").value;
    // const pidx = document.getElementById("pid").value;
    const pidx = localStorage.getItem("pid");
    const patientData = {
        bloodGroup: blood,
        allergies: allergy,
        chronicDis: disease,
        familyHistory: hx,
        pid: pidx
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



function addNewVisit(event) {
    event.preventDefault(); // prevent refresh page
    console.log("new");
    const complaint = document.getElementById("complaint").value;
    const physical = document.getElementById("physical").value;
    const dx = document.getElementById("dx").value;
    const meds = document.getElementById("meds").value;
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const temp = document.getElementById("temp").value;
    const pulse = document.getElementById("pulse").value;
    const bp = document.getElementById("bp").value;
    const o2sat = document.getElementById("o2sat").value;
    d = new Date();
    const time = d.getHours() + ":" + d.getMinutes();
    const date = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
    const pidx = localStorage.getItem("pid");
    console.log("pidx", pidx);





    const patientData = {
        complaint: complaint,
        physical: physical,
        dx: dx,
        meds: meds,
        weight: weight,
        height: height,
        temp: temp,
        pulse: pulse,
        bp: bp,
        o2sat: o2sat,
        time: time,
        date: date,
        pid: pidx
    };

    newVisit(patientData)
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


function UpdateVisit(event) {
    event.preventDefault(); // prevent refresh page
    console.log("update");
    const complaint = document.getElementById("complaint").value;
    const physical = document.getElementById("physical").value;
    const dx = document.getElementById("dx").value;
    const meds = document.getElementById("meds").value;
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const temp = document.getElementById("temp").value;
    const pulse = document.getElementById("pulse").value;
    const bp = document.getElementById("bp").value;
    const o2sat = document.getElementById("o2sat").value;
    const pidx = localStorage.getItem("pid");
    const urlParams = new URLSearchParams(window.location.search);
    var ID = urlParams.get("id");





    const patientData = {
        complaint: complaint,
        physical: physical,
        dx: dx,
        meds: meds,
        weight: weight,
        height: height,
        temp: temp,
        pulse: pulse,
        bp: bp,
        o2sat: o2sat,
        pid: pidx
    };

    updateVisit(patientData, ID)
        .then(response => {
            if (response.ok) {
                alert('updated my man celebrate, go nuts');
            } else {
                alert('ERRORRRRRRRRR U beautiful stupid HEHE');
            }
        })

    .catch(error => {
        console.log(error)
    })

}


//collect general info from forms then test if we need update or creat
function haveGenralInfoTest(event) {

    event.preventDefault();
    const pidx = localStorage.getItem("pid");
    haveGeneralInfo(pidx)
        .then(response => {
            if (response) {
                updateGeneralInfo(event);
            } else {
                addNewGeneralMedical(event);
            }
        })
        .catch(error => {
            console.log(error)
        })


}


function haveVisitInfoTest(event) {

    event.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    var ID = urlParams.get("id");

    if (ID == null) {
        addNewVisit(event)

    } else {
        UpdateVisit(event)
    }



}


function updateGeneralInfo(event) {

    console.log("old");
    event.preventDefault(); // prevent refresh page
    const blood = document.getElementById("bloodGroup").value;
    const allergy = document.getElementById("allergies").value;
    const disease = document.getElementById("chronicDis").value;
    const hx = document.getElementById("familyHistory").value;
    const pidx = localStorage.getItem("pid");
    const patientData = {
        bloodGroup: blood,
        allergies: allergy,
        chronicDis: disease,
        familyHistory: hx,
        pid: pidx
    };

    updateGeneral(patientData, pidx)
        .then(response => {
            if (response.ok) {
                alert('updated my man celebrate, go nuts');
            } else {
                alert('ERRORRRRRRRRR U beautiful stupid HEHE');
            }
        })

    .catch(error => {
        console.log(error)
    })

}


// function SaveUpdatedGeneral() {
//     const blood = document.getElementById("bloodGroup").value;
//     const allergy = document.getElementById("allergies").value;
//     const disease = document.getElementById("chronicDis").value;
//     const hx = document.getElementById("familyHistory").value;
//     const pidx = localStorage.getItem("pid");

//     const patientData = { bloodGroup: blood, allergie: allergy, chronicDis: disease, familyHistory: hx, pid: pidx }

//     UpdateGeneralMedical(patientData)
//         .then(response => {
//             if (response.ok) {
//                 alert('added my man celebrate, go nuts');
//             } else {
//                 alert('stupid HEHE');
//             }
//         })

//     .catch(error => {
//         console.log(error)
//     })


// }