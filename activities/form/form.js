document.getElementById('myForm').addEventListener('submit',function(event){event.preventDefault();

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    const pass2 = document.getElementById('pass2').value;
    if (!fullname || !email || !pass || !pass2) {
        alert('This tags cannot be empty');
        return;
    }
    if (pass !== pass2) {
        alert('Passwords do not match');
        return;
    }

    const formData = {
        fullname: fullname,
        email: email,
        password: document.getElementById('pass').value,
        state: document.getElementById('state').value,
        remember: document.getElementById('agree').checked,
    };
    console.log(formData);
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById('response').innerHTML = response.message;
            documents.getElementById('myForm').reset();

            alert('Form submitted successfully');
        } else if (xhr.readyState === 4) {
            alert('Form submission failed');
        }
    };
    xhr.send(JSON.stringify(formData));
    alert('Success: ${fullname} ${email} ${pass} ${pass2}');
});