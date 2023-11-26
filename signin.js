function togglePassword() {
  let senha = document.getElementById('senha');
  senha.type = senha.type === 'password' ? 'text' : 'password';
}

function entrar() {
  let usuario = document.getElementById('usuario').value;
  let senha = document.getElementById('senha').value;
  let msgError = document.getElementById('msgError');

  
  let listaUser = JSON.parse(localStorage.getItem('listaUser')) || [];

  
  let userValid = listaUser.find(
    (item) => usuario === item.userCad && senha === item.senhaCad
  );

  if (userValid) {
    let token = Math.random().toString(16).substr(2);
    localStorage.setItem('token', token);
    localStorage.setItem('userLogado', JSON.stringify(userValid));

  
    window.location.href = './Selecaodecadastro.html';
  } else {
   
    msgError.style.display = 'block';
    msgError.innerHTML = 'Usuário ou senha incorretos';
  }
}
