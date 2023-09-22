function submitForm() {
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let age = document.getElementById("age").value;

    let user = {
        name: name,
        surname: surname,
        age: age
    };

    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Ваш об'єкт: " + JSON.stringify(user);
}
