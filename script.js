function carregar(){
    var turno = document.getElementById('turno')
    var mensagem = document.getElementById('hora')
    var img = document.getElementById('imagem')
   
    document.getElementById('imagem')
    var data = new Date()
    var horacliente = data.getHours()
    
    horacliente = 8

    mensagem.innerHTML=`Já são ${horacliente} horas`
    if(horacliente >=5 && horacliente <= 12){
       turno.innerHTML=`Iae, bom dia!`
       img.src = 'images/manha.png'
       document.body.style.background = '#8cd1f6ff'
    } else if(horacliente >=13 && horacliente <= 17){
        turno.innerHTML=`Iae, boa tarde!`
        img.src = 'images/tarde.png'
        document.body.style.background = `#bb8744df`
    } else if(horacliente >=18 && horacliente <= 24){
        turno.innerHTML=`Iae, boa noite!`
        img.src = 'images/noite.png'
        document.body.style.background = `#262f48d9`
        var header = document.getElementById('headerId')
        var footer = document.getElementById("footerId")
        header.style.color = "white"
        footer.style.color = "white"
    } else if(horacliente >=1 && horacliente <= 4){
        turno.innerHTML=`Iae, boa madrugada`
        img.src = 'images/madrugada.png'
        document.body.style.background = `#756d4ced`
        //document.body.style.color='#ffffff';
        var header = document.getElementById('headerId')
        var footer = document.getElementById("footerId")
        header.style.color = "white"
        footer.style.color = "white"
    }
          
}
