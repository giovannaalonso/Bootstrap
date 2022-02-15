let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let duvida = document.querySelector('#duvida')


function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length <3 ){
        txtNome.innerHTML = 'Nome Inválido!'
        txtNome.style.color = "red"
       
        }else{
            txtNome.innerHTML = 'Nome Válido!'
            txtNome.style.color = "green"
            nomeOk =  true
        }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido!'
        txtEmail.style.color = 'red'
        
    }else{
            txtEmail.innerHTML = 'E-mail Válido!'
            txtEmail.style.color = "green"
            emailOk = true
    }
}

function validaDuvida(){
    let txtDuvida = document.querySelector('#txtDuvida')
    if (duvida.value.length <= 100){
        duvidaOk =  true
        
    }else{
        txtDuvida.innerHTML = 'Número de caracteres máximo atingido.'
        txtDuvida.style.color = "red"
    }
}
function enviar() {
    if(nomeOk == true && emailOk == true && duvidaOk == true) {
        alert('Formulário enviado com sucesso!')
    }else{
        alert('Preencha o formulário corretamente antes de enviar')
    }
}