const baseUrl = "http://localhost:3000";

async function addPatient(patientData) {
    const repsonse = await fetch(`${baseUrl}/newpatient`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patientData)
    });
    return repsonse;
}


async function newGeneralMedical(patientData) {
    const repsonse = await fetch(`${baseUrl}/newgeneralmedical`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patientData)
    });
    return repsonse;
}


// async function UpdateGeneralMedical(patientData) {
//     const repsonse = await fetch(`${baseUrl}/newgeneralmedical`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(patientData)
//     });
//     return repsonse;
// }

async function updatePatient(patientData, id) {
    const repsonse = await fetch(`${baseUrl}/updatepatient/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patientData)
    });
    return repsonse;
}

async function updateGeneral(patientData, pid) {
    const repsonse = await fetch(`${baseUrl}/updategeneral/${pid}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patientData)
    });
    return repsonse;
}

async function updateVisit(patientData, id) {
    const repsonse = await fetch(`${baseUrl}/updatevisit/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patientData)
    });
    return repsonse;
}


async function newVisit(patientData) {
    const repsonse = await fetch(`${baseUrl}/newvisit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patientData)
    });
    return repsonse;
}




/*
async function getPatient(patientTitle){
    let url = `${baseUrl}/getpatient`;
    if(patientTitle) {
        url += `/?name=${patientTitle}`;
    }
    const response = await fetch(url);
    return response;
}
*/

async function getAllPatients() {
    const response = await fetch(`${baseUrl}/getpatient`);
    return response.json();
}


// async function updatePatient(patient) {
//     const response = await fetch(`${baseUrl}/newpatient`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(patient)
//     });
//     return response;
// }


async function getPatientById(pid) {
    const response = await fetch(`${baseUrl}/getpatient/${pid}`);
    return response.json();
}

async function getpatientbypid(pid) {
    const response = await fetch(`${baseUrl}/getpatientbypid/${pid}`);
    return response.json();
}

async function haveGeneralInfo(pid) {
    const response = await fetch(`${baseUrl}/havegeneralinfo/${pid}`);
    return response.json();
}


async function getgeneralbypid(pid) {
    const response = await fetch(`${baseUrl}/getgeneralbypid/${pid}`);
    return response.json();
}


async function getvisitsbypid(pid) {
    const response = await fetch(`${baseUrl}/getvisitsbypid/${pid}`);
    return response.json();
}


async function getvisitbyId(id) {
    const response = await fetch(`${baseUrl}/getvisitbyId/${id}`);
    return response.json();
}

async function deletePatient(id) {
    const response = await fetch(`${baseUrl}/deletepatient/${id}`, {
        method: "DELETE"
    });
    return response;
}

async function deleteVisit(id) {
    const response = await fetch(`${baseUrl}/deletevisit/${id}`, {
        method: "DELETE"
    });
    return response;
}


/*
async function getPatients(pid) {
    let url = `${baseUrl}/getpatientbyid`;
    if(pid) {
        url += `/?id=${pid}`;
    }
    const response = await fetch(url);
    return response.json();
}
*/