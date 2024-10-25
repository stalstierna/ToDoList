let input = document.getElementById("toDo_input");
const button = document.getElementById("toDo_button");
const ul_list = document.getElementById("toDo_list");
let deletebtn;

const list = [];
let idNum = 0;

button.addEventListener("click", function addToList(){

    if (input.value === "") {
        alert("Du måste skriva något för att lägga till i listan")
    }
    else {

    idNum += 1;
    list.push({
        id: idNum,
        task: input.value,
        completed: false
    })

    let li = document.createElement("li");
    li.innerHTML = input.value;
    ul_list.appendChild(li);
    li.classList = "list_item"

    deletebtn = document.createElement("button");
    li.appendChild(deletebtn)
    deletebtn.textContent = "X";
    deletebtn.classList = "deletebtn";

    console.log(list)

    input.value ="";

    deletebtn.addEventListener("click", function(){
        ul_list.removeChild(li);

        // for (let i = 0; i < list.length; i++){
        //     if (idNum == [i]) {
        //         list.splice([i], 1);
            
        //     }
        //     console.log(list)

            
        // }
        // console.log(li);
        // console.log(list)
    })
}
})







// function addToList(){
//     let li = document.createElement("li");
//     li.innerHTML = input.value;
//     ul_list.appendChild(li);
// }