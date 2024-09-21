function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5x85fs4SCOV":
        Script1();
        break;
      case "5mlZm4QPlR1":
        Script2();
        break;
      case "6Ls625itXoF":
        Script3();
        break;
  }
}

function Script1()
{
  //load the scripts dynamically into the head of the document
function add_line() {
 var line = document.createElement("audio");
 var head=document.getElementsByTagName('body')[0];
 line.type = "audio/mp3";
 line.src="";
 line.id="bgSong" ;
 line.autoplay = true;
 line.loop = true;
 head.appendChild(line);
}
//but we only want to add these once!
if(document.getElementById('bgSong')==null){
 add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0.5;
}
var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location+"audio.mp3";
audio.load();
audio.play();
}

function Script2()
{
  clearInterval(timerId);
let sec = 0;
}

function Script3()
{
  //Getting the player
const player = GetPlayer();

//Where to start
let sec = 0;

//Set up the timer
function startTimer(){
  sec += 1;
  player.SetVar("timer",sec);
  if (sec == 20) {
    clearInterval(timerId);
  }
}

//Start the timer
timerId=setInterval(startTimer,1000);
}

