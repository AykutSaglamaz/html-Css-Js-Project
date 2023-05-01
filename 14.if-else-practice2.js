
let mode = "light"
const bodyE1 = document.querySelector("body");

function setMode(){
   if (mode == "light") {
    bodyE1.classList.remove("light");
    bodyE1.classList.add("dark");// islemi tekrar tekrar kullanmak istiyorsak mode deger atanmali
    mode ="dark";

   }else{
    bodyE1.classList.remove("dark");
    bodyE1.classList.add("light"); // islemi tekrar tekrar kullanmak istiyorsak mode deger atanmali
    mode ="light";

   }

}