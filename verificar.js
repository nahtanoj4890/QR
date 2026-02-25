const API = "https://sheetdb.io/api/v1/wzyf1f00i31rd"

async function verificar(){

const params = new URLSearchParams(window.location.search)
const id = params.get("id")

if(!id){

document.getElementById("estado").innerText="QR inválido"
return

}

document.getElementById("registro").innerText = id

try{

const response = await fetch(API + "/search?id=" + id)

const data = await response.json()

if(data.length > 0){

document.getElementById("estado").innerText="CERTIFICADO VÁLIDO"

document.getElementById("paciente").innerText=data[0].paciente
document.getElementById("fecha").innerText=data[0].fecha
document.getElementById("dias").innerText=data[0].dias
document.getElementById("medico").innerText=data[0].medico

}else{

document.getElementById("estado").innerText="CERTIFICADO NO REGISTRADO"

}

}catch(error){

document.getElementById("estado").innerText="Error consultando registro"

}

}

verificar()
