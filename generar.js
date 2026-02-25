const API = "https://sheetdb.io/api/v1/wzyf1f00i31rd"

function generarID(){

const fecha = new Date().toISOString().slice(0,10).replace(/-/g,"")
const random = Math.random().toString(36).substring(2,8).toUpperCase()

return "MED-" + fecha + "-" + random

}

async function generar(){

const paciente = document.getElementById("paciente").value
const dias = document.getElementById("dias").value

if(!paciente || !dias){

alert("Complete todos los campos")
return

}

const id = generarID()

document.getElementById("id").innerText = id

await fetch(API,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
data:{
id:id,
paciente:paciente,
dias:dias,
fecha:new Date().toISOString().slice(0,10),
medico:"Dr Jonathan Gomez"
}
})
})

const url = "https://nahtanoj4890.github.io/QR/verificar.html?id=" + id

document.getElementById("qrcode").innerHTML=""

new QRCode(document.getElementById("qrcode"),{
text:url,
width:220,
height:220
})

}
