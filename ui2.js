function muda(){
    if(document.body.style.background != 'black'){
        document.body.style.background = 'black'
        document.body.style.color = 'white'
    }else{
        document.body.style.background = 'white'
        document.body.style.color = 'black'
    }
}
function muda(){
      document.body.classList.toggle('dark-theme');
  }