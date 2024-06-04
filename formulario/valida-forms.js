function validarCampos(){
    const nome=document.getElementById("nome").ariaValueMax;
    //pegar o elemento pelo seu id 
    const email =
    document.getElementById("e-mail").value;
    const senha =
    document.getElementById("senha").value;
    const telefone=
    document.getElementById('telefone').value;
    const termoAdesão=
    document=getElementById('termoAdesão').value;
    const corfirmarSenha=getElementById('confirmarSenha').value;

    if (nome == "") {
        alert('por favor , preencha o campo nome.');
        event.preventDefault();
        return;
    }
    if (telefone== "") {
        alert('por favor , preencha o campo telefone.');
        event.preventDefault();
        return;
    }
    if (senha.lenght< 8 ) {
        alert('A senha deve ter no mínimo 8 caracteres');
        event.preventDefault();
        return;



}
const letrasMaiúculas =/[A-Z]/;
const letrasMinusculas = /[a-z]/;
const numeros=/[0-9]/;
const caracteresEspeciais=/[:@#$%^&()_+{}[\]!;<>,.?-]/;

if (
    !letrasMaiúsculas.test(senha) ||
    !letrasMinusculas.test(senha)||
    !numeros.test(senha) ||
    !caracteresEspeciais.test(senha)
    ) {
    alert(
        'sua senha deve conter pelo menos uma letra maiúscula,uma letra minúscula,um número e um caractere especial'
    );
    event.preventDefault();
    return;
}
 if (senha !== conirmarSenha){
    alert('As senhas devem ser iguais');
    event.preventDefault();
    return;
 }
 if (termoAdesão.checked){
    alert('Voçê deve acertar os termos para confirmar');
    event.preventDefault();
    return;
 }
 

}