alert('hey! I am connected');

//Selectors
const form = document.getElementById('addPatientModel');
const patientName = document.getElementById('name');
const PID = document.getElementById('uniID');
const phoneNum = document.getElementById('phoneNo');
const department = document.getElementById('section');
const BirthD = document.getElementById('dob');


//Event Listeners
form.addEventListener('Submit', (e) => {
    e.preventDefault();
    checkInputs();
});


//Functions
function checkInputs(){

    //get the values from the inputs
    const patientNameValue = patientName.value; 
    const PIDValue = PID.value;
    const phoneNumValue = phoneNum.value;
    const departmentValue = department.value;
    const BirthDValue = BirthD.value;

    if(patientNameValue=== ''){
        //show error
        //add error class
        setErrorFor(patientName, 'patient name cannot be blank')
    } else {
        //add success class
        setSuccessFor(patientName);
    }
    

    if(PIDValue=== ''){
        //show error
        //add error class
        setErrorFor(PID, 'Patient ID cannot be blank')
    } else {
        //add success class
        setSuccessFor(PID);
    }

}

function setErrorFor(input, massege) {
    const Box = input.parentElement; //.box
    const smallMsg = Box.querySelector('small');
    
    // add error msg inside
    smallMsg.innerText = massege;

    //add error class
    Box.className = 'box error';
}

function setSuccessFor(input) {
    const Box = input.parentElement; //.box

    //add success class
    Box.className = 'box success';
}

