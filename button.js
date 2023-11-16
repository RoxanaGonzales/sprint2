var checkboxTrue = "Enviar";
var checkboxFalse = "Formulario enviado";

function check() { 

    if(document.getElementById('checkBox').checked) {
        alert(checkboxTrue);
}
    else {
        alert(checkboxFalse);
}
}