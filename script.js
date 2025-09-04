let btns=document.querySelectorAll("button");
let back = document.querySelector("#outer");

btns.forEach(function(button){
    button.addEventListener("click",function(){
        let color=this.innerText.toLowerCase().trim();
        console.log(color);
        if(color === "default"){
            back.style.backgroundColor="white";
        }else{
            back.style.backgroundColor=color;
        }
    });
});