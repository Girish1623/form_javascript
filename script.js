function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('Fullname').value;
    document.getElementById('name-data').innerText = `Full Name: ${name}`;

    const dob = document.getElementById('bday').value;
    document.getElementById('birthday').innerText = `Date of Birth: ${dob}`;

    const genderInputs = document.getElementsByName('gender');
    let selectedGender = '';
    for (const input of genderInputs) {
        if (input.checked) {
            selectedGender = input.value;
            break;
        }
    }
    document.getElementById('user-gender').innerText = ` Gender: ${selectedGender}`;

    const mobile = document.getElementById('mobilenumber').value;
    document.getElementById('user-number').innerText = ` Mobile Number: ${mobile}`;

    const email = document.getElementById('email').value;
    document.getElementById('user-email').innerText = `Email: ${email}`;

    const address = document.getElementById('address').value;
    document.getElementById('user-address').innerText = ` Address: ${address}`;

    const pincode = document.getElementById('pincode').value;
    document.getElementById('user-pincode').innerText = ` Pincode: ${pincode}`;

    const city = document.getElementById('city').value;
    document.getElementById('user-city').innerText = ` City: ${city}`;


    const state = document.getElementById('state').value;
    document.getElementById('user-state').innerText = ` State: ${state}`;



    document.getElementById('Fullname').value = '';
    document.getElementById('bday').value = '';
    document.getElementById('mobilenumber').value = '';
    document.getElementById('email').value = '';
    document.getElementById('address').value = '';
    document.getElementById('pincode').value = '';
    document.getElementById('city').value = '';
    document.getElementById('state').value = '';

    for (const input of genderInputs) {
        input.checked = false;
    }

}