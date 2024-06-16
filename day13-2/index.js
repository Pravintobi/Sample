document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const food = Array.from(document.querySelectorAll('input[name="food"]:checked')).map(e => e.value);
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;

    if (food.length < 2) {
        alert('Please choose at least 2 food options.');
        return;
    }

    const tbody = document.querySelector('#userTable tbody');
    const newRow = tbody.insertRow();

    newRow.insertCell().textContent = firstName;
    newRow.insertCell().textContent = lastName;
    newRow.insertCell().textContent = email;
    newRow.insertCell().textContent = address;
    newRow.insertCell().textContent = pincode;
    newRow.insertCell().textContent = gender;
    newRow.insertCell().textContent = food.join(', ');
    newRow.insertCell().textContent = state;
    newRow.insertCell().textContent = country;

    document.getElementById('userForm').reset();
});

// Test Suite
// function testFormSubmission() {
//     document.getElementById('firstName').value = 'bom';
//     document.getElementById('lastName').value = 'pakiri';
//     document.getElementById('email').value = 'bompakiri.doe@example.com';
//     document.getElementById('address').value = '420 dubaikurukusandhu dubai';
//     document.getElementById('pincode').value = '620026';
//     document.querySelector('input[name="gender"][value="Male"]').checked = true;
//     document.querySelectorAll('input[name="food"]').forEach(checkbox => checkbox.checked = false);
//     document.querySelector('input[name="food"][value="Pizza"]').checked = true;
//     document.querySelector('input[name="food"][value="Burger"]').checked = true;
//     document.getElementById('state').value = 'tamilNadu';
//     document.getElementById('country').value = 'India';

//     document.querySelector('form').dispatchEvent(new Event('submit', { cancelable: true }));

//     const rows = document.querySelectorAll('#userTable tbody tr');
//     const lastRow = rows[rows.length - 1];

//     console.assert(lastRow.cells[0].textContent === 'bom ', 'First Name Test Failed');
//     console.assert(lastRow.cells[1].textContent === 'pakiri', 'Last Name Test Failed');
//     console.assert(lastRow.cells[2].textContent === 'bompakiri.doe@example.com', 'Email Test Failed');
//     console.assert(lastRow.cells[3].textContent === '420 dubai St', 'Address Test Failed');
//     console.assert(lastRow.cells[4].textContent === '620026', 'Pincode Test Failed');
//     console.assert(lastRow.cells[5].textContent === 'Male', 'Gender Test Failed');
//     console.assert(lastRow.cells[6].textContent === 'Pizza, Burger', 'Food Test Failed');
//     console.assert(lastRow.cells[7].textContent === 'tamilNadu', 'State Test Failed');
//     console.assert(lastRow.cells[8].textContent === 'India', 'Country Test Failed');

//     console.log('All tests passed!');
//}

//testFormSubmission();