let form = document.getElementById('form');
form.addEventListener('submit', formSend);
let sending = document.querySelector(".sendingMessage");


async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);

    const data = new FormData(form);

    if (error === 0) {
        alert('Отправка');
        console.log(data);
    }else {
        alert('Заполните обязательные поля');
    }
}

function formValidate(form) {
    let errors = 0;

    let formReq = document.querySelectorAll("._req");

    for (let i = 0; i < formReq.length; i++) {
        let input = formReq[i];
        formRemoveError(input);

        if(input.classList.contains('_email')){
            if(emailTest(input)) {
                formAddError(input);
                errors++;
            }
        }else {
            if (input.value === '') {
                formAddError(input);
                errors++;
            }
        }
    }
    return errors;
}

function formAddError(input) {
    input.classList.add('_error');
}
function formRemoveError(input) {
    input.classList.remove('_error');
}

function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
