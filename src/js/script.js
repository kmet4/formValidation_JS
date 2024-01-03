document.addEventListener('DOMContentLoaded', () => {
    let form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        // const data = new FormData(form);

        if (error.length === 0) {
            alert('Отправка');
            form.classList.add('_sending');
        }else {
            alert(error.join('\n'))
        }
    }

    function formValidate(form) {
        let errors = [];

        let formReq = document.querySelectorAll("._req");


        formReq.forEach((input) => {
            formRemoveError(input);
            if(input.classList.contains('_email') && emailTest(input)){
                formAddError(input);
                errors.push('Вы неправильно ввели почту!');
            }
            else if (input.classList.contains('_tel') && telTest(input)) {
                formAddError(input);
                errors.push('Вы неправильно ввели номер телефона!');
            }else {
                if (input.value === '') {
                    formAddError(input);
                    errors.push('Вы не заполнили поле!');
                }
            }
        })
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
    function telTest(input) {
        return !/^\+\d{1,3}\(\d{3}\)\d{3}-\d{2}-\d{2}$/.test(input.value);
    }
});