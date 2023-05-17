
const button = document.querySelector("button")

const UlElement = document.querySelector("ul");

button.addEventListener("click", function() {



for (let i = 1 ; i < 101 ; i++) {

    const liElement = document.createElement("li");
   
    liElement.append(i)

    UlElement.append(liElement);

    liElement.classList.add("normal")

    if ( i % 3 === 0) {
        liElement.classList.remove("normal")
        liElement.classList.add("red");
        liElement.innerHTML = "fizz"
    } ;

    if ( i % 5 === 0 ){
        liElement.classList.remove("normal")
        liElement.classList.add("lime")
        liElement.innerHTML = "buzz"
    } ; 

    if ( i % 5 === 0 && i % 3 === 0){
        liElement.classList.remove("normal")
        liElement.classList.add("yellow")
        liElement.innerHTML = "fizzbuzz"
    } ;
}

}
)









