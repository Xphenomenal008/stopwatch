let hour=document.getElementById("hour")
let min=document.getElementById("min")
let sec=document.getElementById("sec")
let hours=0
let minutes=0
let seconds=0
let random=null
function watch(){
    seconds++
    if(seconds===60){
seconds=0
minutes++
    }
    if(minutes===60){
        minutes=0
        hours++
    }
    let s=seconds>9?seconds:"0"+seconds
    let m=minutes>9?minutes:"0"+minutes
    let h=hours>9?hours:"0"+hours
   sec.querySelector("h1").innerHTML=":"+s
   min.querySelector("h1").innerHTML=":"+m
   hour.querySelector("h1").innerHTML=h


}
function start(){
 random=setInterval(watch,1000)
}

function stop(){
    clearInterval(random)
    random=null
}

function reset(){
    hours=0
 minutes=0
seconds=0
watch()
sec.querySelector("h1").innerHTML=":"+"00"
   min.querySelector("h1").innerHTML=":"+"00"
   hour.querySelector("h1").innerHTML="00"

}
