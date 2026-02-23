const API = "https://sheetdb.io/api/v1/wzyf1f00i31rd"



function generarID(){

 const fecha = new Date().toISOString().slice(0,10).replace(/-/g,"")

 const rand = Math.random().toString(36).substring(2,8).toUpperCase()

 return "MED-"+fecha+"-"+rand

}



async function hash(text){

 const msg = new TextEncoder().encode(text)

 const hashBuffer = await crypto.subtle.digest("SHA-256", msg)

 const hashArray = Array.from(new Uint8Array(hashBuffer))

 const hashHex = hashArray.map(b => b.toString(16).padStart(2,"0")).join("")

 return hashHex

}



async function crear(){

 const paciente = document.getElementById("paciente").value

 const dias = document.getElementById("dias").value

 const medico = "Dr Jonathan Gomez"

 const registro = "RM12345"

 const id = generarID()

 const fecha = new Date().toISOString().slice(0,10)

 const h = await hash(id+paciente+fecha)



 await fetch(API,{
  method:"POST",
  headers:{ "Content-Type":"application/json" },
  body: JSON.stringify({
   data:{
    ID:id,
    PACIENTE:paciente,
    FECHA:fecha,
    DIAS:dias,
    MEDICO:medico,
    REGISTRO:registro,
    HASH:h
   }
  })
 })

 generarQR(id)

 document.getElementById("codigo").innerText = "Código: "+id

}



function generarQR(id){

 const url = "https://nahtanoj4890.github.io/QR/verificar.html?id="+id

 document.getElementById("qr").innerHTML=""

 new QRCode(document.getElementById("qr"),url)

}
