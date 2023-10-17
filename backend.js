let setor = document.querySelector('input#isetor')
let descricao = document.querySelector('textarea#idescri')
let lista = document.querySelector('select#iaberto')
let chamado = []

function enviar() {
    if(setor.value == 0) {
        alert('Preencha o formulário antes de abrir um chamado!')
    }else {
        chamado.push(setor.value, descricao.value)
        let item = document.createElement('option')
        item.text = `${setor.value}: ${descricao.value}`
        lista.appendChild(item)  
        setor.value = ''
        descricao.value = ''
    }
}   


