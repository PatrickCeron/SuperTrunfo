var carta1 = {
    nome: "Blackland Fire Dragon",
    imagem:'https://th.bing.com/th/id/OIP.DUEd_U-fYPUMmAnUvBddggAAAA?pid=ImgDet&w=131&h=193&c=7',
    atributos: {
      Ataque: 2500,
      Defesa: 800,
      Magia: 200
    }
  };
  
  var carta2 = {
    nome: "Darkmagician",
    imagem:'https://th.bing.com/th/id/OIP.w7ymqaxA19zAthbvXVElLgAAAA?pid=ImgDet&w=182&h=265&c=7',
    atributos: {
      Ataque: 3000,
      Defesa: 2800,
      Magia: 5000
    }
  };
  
  var carta3 = {
    nome: "Time Wizard",
    imagem:'https://th.bing.com/th/id/OIP.bx5PDq0AhR2qbAZmgxbBDAHaKw?pid=ImgDet&w=182&h=264&c=7',
    atributos: {
      Ataque: 500,
      Defesa: 200,
      Magia: 150
    }
  };

  var carta4 = {
    nome:"Celtic Guardian",
    imagem:'https://th.bing.com/th/id/OIP.BMtZoXDNJVDE29Q6MMEcZAAAAA?pid=ImgDet&w=182&h=265&c=7',
    atributos: {
      Ataque: 800,
      Defesa: 2000,
      Magia: 3000
    }
  };

  var carta5 = {
    nome:"Sumooned Skull",
    imagem:'https://th.bing.com/th/id/OIP.TBl-IeQp9l-kMyfxx4MCkQAAAA?pid=ImgDet&w=182&h=265&c=7',
    atributos: {
      Ataque: 2600,
      Defesa: 1900,
      Magia: 650
    }
  };

  var carta6 = {
    nome:"Kuriboh",
    imagem:'https://th.bing.com/th/id/OIP.UJ7KXR6m9kGVvUAOcx1GZwHaK3?pid=ImgDet&w=177&h=260&c=7',
    atributos: {
      Ataque: 400,
      Defesa: 300,
      Magia: 100
    }
  };

  var carta7 = {
    nome:"Curso Of Dragon",
    imagem:'https://th.bing.com/th/id/OIP.kRkNbbsyS1ZNs732EZrJCwAAAA?pid=ImgDet&w=144&h=212&c=7',
    atributos: {
      Ataque: 2500,
      Defesa: 2000,
      Magia:400
    }
  };

  var carta8 = {
    nome:"Battle Steer",
    imagem:"https://th.bing.com/th/id/OIP.A8rQpydmFqfGmPPE7u-uoQAAAA?pid=ImgDet&w=182&h=264&c=7",
    atributos: {
      Ataque: 1800,
      Defesa: 1300,
      Magia: 500
    }
  };

  var carta9 = {
    nome:"Feral Imp",
    imagem:"https://th.bing.com/th/id/OIP.D82IRCIW07KjFPFZG5m6WgAAAA?pid=ImgDet&w=141&h=206&c=7",
    atributos: {
      Ataque: 1300,
      Defesa: 1500,
      Magia: 600
    }
  };

  carta10 = {
    nome:"Mystical Elf",
    imagem:"https://th.bing.com/th/id/OIP.Ystx8sl8EOmWEwfrkjlOHwAAAA?pid=ImgDet&w=146&h=212&c=7",
    atributos: {
      Ataque:1500,
      Defesa:3000,
      Magia:400
    }
  };
  
  var cartas = [carta1, carta2, carta3,carta4,carta5,carta6,carta7,carta8,carta9,carta10];
  var cartaMaquina;
  var cartaJogador;
  window.document.getElementById('next').disabled = true;
  
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 10);
    cartaMaquina = cartas[numeroCartaMaquina];
  
    var numeroCartaJogador = parseInt(Math.random() * 10);
    while (numeroCartaMaquina == numeroCartaJogador) {
      numeroCartaJogador = parseInt(Math.random() * 10);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
  
    window.document.getElementById('next').disabled = true;

    exibirCartaJogador();
  }
  
  
  function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
  
    for (var i = 0; i < radioAtributos.length; i++) {
      if (radioAtributos[i].checked == true) {
        return radioAtributos[i].value;
      }
    }
  }
  
  
  function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  
    if (valorCartaJogador > valorCartaMaquina) {
      var htmlResultado = "<p class='resultado-final' >Você venceu</p>"
    } else if (valorCartaMaquina > valorCartaJogador) {
      htmlResultado = "<p class='resultado-final' >Você perdeu</p>"
    } else {
      htmlResultado = "<p class='resultado-final' >Empate</p>"
    }
    divResultado.innerHTML = htmlResultado;
    window.document.getElementById('btnJogar').disabled=true;
    exibirCartaMaquina();
    window.document.getElementById('next').disabled = false;
  }

  function exibirCartaJogador() {
    var divCartaJogador = window.document.getElementById('carta-jogador');
    divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHtml = "<div id='opcoes' class='carta-status'>"

    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
    }

    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    divCartaJogador.innerHTML = moldura + nome + tagHtml + opcoesTexto + "</div>"
    
}

function exibirCartaMaquina() {
    var divCartaMaquina = window.document.getElementById('carta-maquina');
    divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHtml = "<div id='opcoes' class='carta-status'>"

    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
}
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    divCartaMaquina.innerHTML = moldura + nome + tagHtml + opcoesTexto + "</div>"
    
}

function proximaRodada() {
    var numeroCartaMaquina = parseInt(Math.random() * 10);
    cartaMaquina = cartas[numeroCartaMaquina];
  
    var numeroCartaJogador = parseInt(Math.random() * 10);
    while (numeroCartaMaquina == numeroCartaJogador) {
      numeroCartaJogador = parseInt(Math.random() * 10);
    }
    var nome = '<p class="carta-subtitle">""</p>'
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
  
    var divCartaMaquina = window.document.getElementById('carta-maquina');
    divCartaMaquina.style.backgroundImage= "";
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHtml = "<div id='opcoes' class='carta-status'>"

    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto += "<p type='text' name='atributo' value='" + "'>" + " " + "</p>";
      var nome = `<p class="carta-subtitle"></p>`
    divCartaMaquina.innerHTML = moldura + nome + tagHtml + opcoesTexto + "</div>"
    exibirCartaJogador();
    window.document.getElementById('next').disabled = true;
}
}