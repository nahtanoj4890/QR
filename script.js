function generar(){

const paciente=document.getElementById("paciente").value
const dias=document.getElementById("dias").value
const fecha=document.getElementById("fecha").value

const id="MED-"+Math.random().toString(36).substring(2,8).toUpperCase()

const url=`verificar.html?id=${id}&paciente=${encodeURIComponent(paciente)}&dias=${dias}&fecha=${fecha}`

document.getElementById("qr").innerHTML=""
new QRCode(document.getElementById("qr"),url)

document.getElementById("link").innerHTML=`<br><a href="${url}" target="_blank">${url}</a>`

}
