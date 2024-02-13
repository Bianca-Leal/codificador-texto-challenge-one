function criptografar() {
  let palavra = document.getElementById("inputTexto").value.toLowerCase();
  let substituicoes = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
  };

  let palavracriptografada = "";

  for (let i = 0; i < palavra.length; i++) {
    let letra = palavra[i];
    if (letra in substituicoes) {
      palavracriptografada += substituicoes[letra];
    } else {
      palavracriptografada += letra;
    }
  }
    document.getElementById("texto2").innerText = palavracriptografada;
    document.getElementById("copiar").style.display = "block";
    document.getElementById("imagem").style.display= "none";
    document.getElementById("texto").style.display= "none"; 
    var imagem = document.getElementById('imagem2');
    imagem.src = 'assets/detetive2.png';
    document.getElementById("imagem2").style.display = "block";
}

function descriptografar() {
  let palavra = document.getElementById("inputTexto").value.toLowerCase();
  let substituicoes = {
    "ai": "a",
    "enter": "e",
    "imes": "i",
    "ober": "o",
    "ufat": "u"
  };

  let palavracriptografada = "";

  for (let i = 0; i < palavra.length; i++) {
    let letra = palavra[i];
    if (letra in substituicoes) {
      palavracriptografada += substituicoes[letra];
    } else {
      palavracriptografada += letra;
    }
  }

  document.getElementById("texto2").innerText = palavracriptografada;
  document.getElementById("copiar").style.display = "block";
}

function copiar() {
  var conteudo = document.querySelector("#texto2").innerText;
  navigator.clipboard.writeText(conteudo).then(function() {
    alert("Texto copiado!");
  }).catch(function(err) {
    console.error('Erro ao copiar texto: ', err);
  });
}



 