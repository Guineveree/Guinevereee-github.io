var vid = document.getElementById('mivideo');

var btn = document.getElementById('btnComenzar');
var btn = document.getElementById('btnPausar');
var btn = document.getElementById('btnReiniciar');

//window.onload = function() {
  adjustVideoSize();
}

//window.onresize = function() {
  adjustVideoSize();
}

//function adjustVideoSize() {
  //if (window.innerWidth/window.innerHeight >= 4/3)
  //vid.width = window.innerWidth;
  //vid.height = window.innerWidth * 3/4
}// else {
  //vid.width = window.innerHeight * 4/3;
  //vid.height = window.innerHeight;

  }
}

//btn.style.position = "absolute";
//btn.style.width = Math.floor(vid.widht * 0.15) + "px";
//btn.style.height = Math.floor(vid.height * 0.30) + "px";
//btn.style.left = Math.floor(vid.widht * 0.20) + "px";
//btn.style.top = Math.floor(vid.height * 0.8) + "px";
//<button id="btnComenzar" onclick="Comenzar()">Comenzar</button>
//<button id="btnPausar" onclick="Pausar()">Pausar</button>
//<button id="btnReiniciar" onclick="Reiniciar()">Reiniciar</button>




function btnComenzar() {
  vid.currentTime = 0;
  vid.play();
}
function btnPausar() {
  vid.currentTime = 0;
  vid.pause();
}
function btnReiniciar() {
  vid.currentTime = 0;
  vid.play();
}
