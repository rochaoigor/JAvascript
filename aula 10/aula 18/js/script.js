function carregar (){
let res = document.querySelector('#resposta')
let img = document.querySelector('#imagem')
let data = new Date()
let hora = data.getHours();
res.innerHTML = `Agora são ${hora} horas`
 if (hora >= 0  && hora < 12) {
    res.innerHTML = `<h2 class="dia">Bom dia!<h2>`
    img.src = `img/dia.png`
    document.body.style.background = `#6e9dbb`
 } else if (hora >=12 && hora < 18) {
    res.innerHTML = `<h2 class="tarde">Boa tarde!<h2>`
    img.src = `img/tarde.png`
    document.body.style.background = `#fc9400` 
 }else {
    hora >= 19 && hora <00 
    res.innerHTML = '<h2 class="noite">Boa noite!</h2>'
    img.src = `img/noite.png`
    document.body.style.background = `#191d30`
 }
}
