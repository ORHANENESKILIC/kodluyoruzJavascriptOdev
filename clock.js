let username = prompt("Lütfen isminizi giriniz")
let usernameDOM=document.querySelector("#myName")
usernameDOM.innerHTML=username

let date=document.querySelector("#myClock")
let time;
time=new Date();
let gün=time.getDay()
if(gün==0){
    gün="Pazar"
}
if(gün==1){
    gün="Pazartesi"
}
if(gün==2){
    gün="Salı"
}
if(gün==3){
    gün="Çarşamba"
}
if(gün==4){
    gün="Perşembe"
}
if(gün==5){
    gün="Cuma"
}
if(gün==6){
    gün="Cumartesi"
}
date.innerHTML =` ${ gün} günü , ${time.toLocaleDateString("tr-TR")}` 

function Clock(){
    let zaman=new Date();
    let saat =zaman.getHours();
    let dakika=zaman.getMinutes();
    let saniye=zaman.getSeconds();
    let session="AM";

if (saat==0){
    saat=12;
}
if(saat>12){
    saat=saat-12;
    session="PM";
}

saat=saat<10? "0"+saat:saat
dakika=dakika<10?"0"+dakika:dakika
saniye=saniye<10?"0"+saniye:saniye


  text=`${saat} : ${dakika} :  ${saniye}   ${session}`
    document.querySelector("#myClock").innerHTML=text;     
    let t=setTimeout(Clock,1000)
}
Clock();