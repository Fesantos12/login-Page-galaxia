function salvaEmail () {
    const inputEmail = document.getElementById('email');
    const form = document.getElementById('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Email Salvo com sucesso!');
        console.log({
            email: inputEmail.value,
        });
    })
}

salvaEmail();