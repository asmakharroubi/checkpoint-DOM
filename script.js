
var total = document.getElementById("total")
console.log(total)
// Les bouttons plus
var plus = document.getElementsByClassName("plusbutton")

for(let btn of plus) {
    btn.addEventListener("click",function(){
        let produit = btn.getAttribute("name");
        let price = document.getElementById(produit+"_prix").innerHTML;
        let qty = document.getElementById(produit+"_qty");
        qty.innerHTML++;
        total.innerHTML= parseInt(total.innerHTML)+parseInt(price)
  
        
    })
}
// Les bouttons moins
 let min = document.getElementsByClassName("removebutton")

 for(let btn of min) {
     btn.addEventListener("click",function(){
        let produit = btn.getAttribute("name") ;
         let price = document.getElementById(produit+"_prix").innerHTML;
         let qty = document.getElementById(produit+"_qty");
         if(qty.innerHTML>0) {
             qty.innerHTML-- ;
             total.innerHTML = parseInt(total.innerHTML) - parseInt(price)
         } else {
             alert("Quantity can not be negative")
         }
     })
 }

//  Heart button
 let heart = document.getElementsByClassName("heart")
 for(let hearts of heart) {
    hearts.addEventListener("click", function(){
        if (hearts.getAttribute("fill") == "grey") {
            hearts.setAttribute("fill" , "red")
        } else { hearts.setAttribute("fill" , "grey")}

    })
 }

//  Remove button
let remove = document.querySelectorAll(".remove") 
for(let supp of remove) {
    supp.addEventListener("click", function() {
        let parent = document.getElementsByClassName("box")
        // parent.remove("remove")
        parent.remove();
    })
}


