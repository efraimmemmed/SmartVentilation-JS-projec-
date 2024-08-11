const first = document.querySelector(".first");
const secondry = document.querySelector(".secondry");
const three = document.querySelector(".three");
const stop = document.querySelector(".stop");
const img = document.querySelector("img");


first.addEventListener("click", () => {
if(img.classList.contains("first-a")){
    img.classList.remove("first-a");
   
}else{
    img.classList.remove("secondry-a", "three-a");
    img.classList.add("first-a");
}

 
});


secondry.addEventListener("click", () => { 
    if(img.classList.contains("secondry-a")){
        img.classList.remove("secondry-a");
   
    }else{
        img.classList.remove("first-a", "three-a"); 
        img.classList.add("secondry-a");
    }

});

three.addEventListener("click",()=>{
     if(img.classList.contains("three-a")){
    img.classList.remove("three-a");
    }else{
    img.classList.remove("first-a","secondry-a");
    img.classList.add("three-a")
}
})

stop.addEventListener("click",()=>{
   img.classList.remove("first-a");
   img.classList.remove("secondry-a");
   img.classList.remove("three-a");
})




