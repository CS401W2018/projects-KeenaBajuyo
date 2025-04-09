document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    const pass2 = document.getElementById('pass2').value;

    
    if (!firstname || !lastname || !email || !age) {
        alert('Please fill in all required fields.');
        return;
    }

    if (age < 18 || age > 100) {
        alert('Please enter a valid age between 18 and 100.');
        return;
    }

    if (pass !== pass2) {
        alert('Passwords do not match.');
        return;
    }

    
    const formData = {
        firstname: firstname,
        lastname: lastname,
        age: age,
        email: email,
        password: pass,
        state: document.getElementById('state').value,
        year: document.querySelector('input[name="year"]:checked').value,
        agree: document.getElementById('agree').checked,
        comments: document.getElementById('comments').value
    };

    console.log(formData); 

    
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'submit.json', true); 
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                document.getElementById('response').innerHTML = response.message; 
                document.getElementById('myForm').reset(); 
                alert('Form submitted successfully');
            } else {
                alert('Form submission failed: ' + xhr.statusText);
            }
        }
    };

    xhr.onerror = function() {
        alert('Request error...');
    };

    xhr.send(JSON.stringify(formData)); 
});