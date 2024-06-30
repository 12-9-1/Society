const urlPeople = 'https://667c4c483c30891b865c227c.mockapi.io/Peoples';

const fetchData = async () => {
    console.log("fetching data...");
    const response = await fetch(urlPeople);
    console.log({ response });

    const data = await response.json();
    console.log({ data });

    return data;
}

fetchData();

const submitForm = document.getElementById('submitForm');
const nameInput = document.getElementById('name');
const lastnameInput = document.getElementById('lastname');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const idPeopleInput = document.getElementById('idPeople');

submitForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = nameInput.value;
    const lastname = lastnameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const idPeople = idPeopleInput.value;

    console.log("Respuesta de los inputs", {
        name,
        lastname,
        email,
        password,
        idPeople
    });

    const newPerson = {
        name,
        lastname,
        email,
        password,
        idPeople
    };

    console.log("El objeto que vamos a enviar al endpoint", newPerson);

    console.log("Qué me devuelve JSON.stringify", JSON.stringify(newPerson));

    try {
        const response = await fetch(urlPeople, {
            method: 'POST',
            body: JSON.stringify(newPerson),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log({ response });

        const data = await response.json();
        console.log({ data });

    } catch (error) {
        console.error("Error al enviar la persona", error);
    }
});
