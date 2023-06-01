
const form = document.querySelector('#my-form');
//Get element
const firstNameInput = form.querySelector('#first-name');
const lastNameInput = form.querySelector('#last-name');
const phoneInput = form.querySelector('#phone');
const genderInput = form.querySelector('#gender');
const enquiryInput = form.querySelector('#enquiry');


function Validate()
{
    
    const firstNameValue = firstNameInput.value.trim();
    const lastNameValue = lastNameInput.value.trim();
    const phoneValue = phoneInput.value.trim();
    const genderValue = genderInput.value;
    const enquiryValue = enquiryInput.value.trim();

   
    const nameRegex = /^[a-zA-Z]+$/; // Only accept letters
    const phoneRegex = /^\d+$/; // Only accept numbers
    const genderRegex = /^(Male|Female)$/i; // Accept Male or Female, case insensitive

    let isValid = true; 

    document.getElementById("fn").style.color = "Red";
    document.getElementById("ln").style.color = "Red";
    document.getElementById("pn").style.color = "Red";
    document.getElementById("gd").style.color = "Red";
    document.getElementById("eq").style.color = "Red";

    //Detection firstName
    if (firstNameValue === '') {
        document.getElementById("fn").innerHTML = "First Name: Please enter your first name.";
        isValid = false;
    } else if (!nameRegex.test(firstNameValue)) {
        document.getElementById("fn").innerHTML = "First Name: Please enter letters.";
        isValid = false;
    } else {
        document.getElementById("fn").innerHTML = "First Name:Right";document.getElementById("fn").style.color = "Blue";}

    // Detection lastName
    if (lastNameValue === '') {
        document.getElementById("ln").innerHTML = "Last Name: Please enter your last name.";
        isValid = false;
    } else if (!nameRegex.test(lastNameValue)) {
        document.getElementById("ln").innerHTML = "Last Name: Please enter letters.";
        isValid = false;
    } else {document.getElementById("ln").innerHTML = "Last Name:Right";document.getElementById("ln").style.color = "Blue";}
    

    // Detection phone
    if (phoneValue === '') {
        document.getElementById("pn").innerHTML =('Phone Number: Please enter your phone number.');
        isValid = false;
    } else if (!phoneRegex.test(phoneValue)) {
        document.getElementById("pn").innerHTML =('Phone Number: Invalid input for phone number.');
        isValid = false;
    } else {document.getElementById("pn").innerHTML ='Phone Number: Right';document.getElementById("pn").style.color = "Blue";}

    // Detection gender
    if (genderValue === '') {
        document.getElementById("gd").innerHTML = 'Gender: Please select your gender.';
        isValid = false;
    } else if (!genderRegex.test(genderValue)) {
        document.getElementById("gd").innerHTML = 'Invalid input for gender.';
        isValid = false;
    } else {document.getElementById("gd").innerHTML = 'Gender:Right ';document.getElementById("gd").style.color = "Blue";}

    // Detection enquiry
    if (enquiryValue === '') {
        document.getElementById("eq").innerHTML = 'Question: Please enter your qu.';
        isValid = false;
    } else if (enquiryValue.split(/\s+/).length > 150) {
        document.getElementById("eq").innerHTML = 'Enquiry: Your enquiry should be limited to 150 words.';
        isValid = false;
    } else {document.getElementById("eq").innerHTML = 'Enquiry: Right';document.getElementById("eq").style.color = "Blue";}

}
