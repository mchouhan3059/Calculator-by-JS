let buttons = document.querySelectorAll('button')
    let input = document.querySelector('input')
    let operators = ['+', '-', '*', '/']
    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (btn.innerText == 'Clear') {
                input.value = '';
            }

            else if (operators.includes(btn.innerText) && (operators.includes(input.value.slice(-1)))) {
                input.value = input.value.slice(0, -1) + btn.innerText;
            }

            else if (btn.innerText == '=') {
                input.value = eval(input.value)
            }

            else {
                input.value += btn.innerText;
            }

        })
    })