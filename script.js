//Container div
const container_div = document.querySelector(".container");
//ul container
const container_ul = document.querySelector(".container-ul");

//Creating variable and store the value of elements.
const input = document.getElementById("input-item");
const btn = document.querySelector("#btn");
btn.addEventListener("click", addItem); 

//Function for button
function addItem(){

    //Creating this to create variable per click so it can store overtime
    const createLi = document.createElement("li");
    const delBtn = document.createElement("button");
    const createSpan = document.createElement("span");
    createSpan.textContent = input.value

    //If else to prevent blank input
    if(input.value != ""){
        
        //Setting the value on elements
        delBtn.textContent = "Delete";
        delBtn.addEventListener("click", createSpan);
    
        //Append createSpan and delBtn to createL
        createLi.appendChild(createSpan);
        createLi.appendChild(delBtn)
    
        //function for delete button
        delBtn.addEventListener("click",  () =>{
            createLi.remove();
        });
    
        //to finally append child whole
        container_ul.appendChild(createLi);
        
        
    } //Prevent fomr adding blank on lists
    else{
        alert("You can't input blank.");
    }
    //To focus i input element
    document.getElementById("input-item").focus();
    
}
