
function generarID(){
 const fecha=new Date().toISOString().slice(0,10).replace(/-/g,"");
 const random=Math.random().toString(36).substring(2,8).toUpperCase();
 return "INC-"+fecha+"-"+random;
}

async function generarHash(texto){
 const msgBuffer=new TextEncoder().encode(texto);
 const hashBuffer=await crypto.subtle.digest('SHA-256',msgBuffer);
 const hashArray=Array.from(new Uint8Array(hashBuffer));
 const hashHex=hashArray.map(b=>b.toString(16).padStart(2,'0')).join('');
 return hashHex;
}

async function generarQRSeguro(){
 const id=generarID();
 const paciente=document.querySelector("#paciente")?.value || "NA";
 const datos=id+paciente;
 const hash=await generarHash(datos);

 const url="https://nahtanoj4890.github.io/QR/verificar.html?id="+id;

 const canvas=document.getElementById("qr");
 if(window.QRCode && QRCode.toCanvas){
   QRCode.toCanvas(canvas,url);
 }else{
   canvas.outerHTML="<p>"+url+"</p>";
 }

 console.log("ID:",id);
 console.log("HASH:",hash);
}
