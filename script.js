
const Inpt = document.querySelector(".inpt");

const Button = document.querySelector(".btn");

const tasksList = document.querySelector(".list-container");

// console.log(taskItem);

  let tasksArray = [];

   let mode = "add";

   let oldInput = null;

// console.log(Inpt);

// console.log(Button);

function showTask(){

    // console.log(Inpt.value);


    if(Inpt.value){

        if(mode === "edit"){

            mode = "add";

            // console.log(mode);

           Button.innerText = "add task";

           const index = tasksArray.indexOf(oldInput);

        //    console.log(index);

           tasksArray.splice(index , 1 , Inpt.value);

           tasksList.innerHTML = "";

           tasksArray.forEach((task , index) => {

                const newHeading = document.createElement("h3");

                const newSpan = document.createElement("span");

                newSpan.innerText = task;

                const newEditBtn = document.createElement("button");

                newEditBtn.innerText = "edit task";

                newEditBtn.classList.add(".edit-btn");

                newEditBtn.setAttribute("data-id" , index);

                const newDeleteBtn = document.createElement("button");

                newDeleteBtn.innerText = "delete task";

                newDeleteBtn.classList.add(".delete-btn");

                newDeleteBtn.setAttribute("data-id" , index)

                newHeading.append(newSpan)

                newHeading.append(newEditBtn)

                newHeading.append(newDeleteBtn)

                tasksList.append(newHeading);

                Inpt.value = "";

           })

            //  console.log(tasksArray);

        }

            else{

            tasksArray.push(Inpt.value);

            Inpt.value = "";

            tasksList.innerHTML = "";

            // console.log(tasksArray);

            tasksArray.forEach((task , index) => {
                
                // console.log(task);

                // console.log(index);

                const newHeading = document.createElement("h3");

                const newSpan = document.createElement("span");

                newSpan.innerText = task;

                const newEditBtn = document.createElement("button");

                newEditBtn.innerText = "edit task";

                newEditBtn.classList.add(".edit-btn");

                newEditBtn.setAttribute("data-id" , index);

                const newDeleteBtn = document.createElement("button");

                newDeleteBtn.innerText = "delete task";

                newDeleteBtn.classList.add(".delete-btn");

                newDeleteBtn.setAttribute("data-id" , index)

                newHeading.append(newSpan)

                newHeading.append(newEditBtn)

                newHeading.append(newDeleteBtn)

                tasksList.append(newHeading);

            });

        }

    }


}


function editTask(element){

    if(mode === "add"){

        mode = "edit";

        // console.log(mode);

        // console.log(element);

        const index = element.dataset.id;

        // console.log(index);

        // console.log(tasksArray[index]);

        Inpt.value = tasksArray[index];

        Button.innerText = "update task";

    }
}


function deleteTask(element){

    // console.log(element);

    const index = element.dataset.id;

    tasksArray.splice(index , 1);

    // console.log(tasksArray);

    element.parentElement.style.display = "none";

    if(Inpt.value){

        mode = "add";

        Button.innerText = "add task";

        Inpt.value = "";
    }

}


Inpt.addEventListener("focus" , () => {

    oldInput = Inpt.value;

    // console.log(oldInput);

})

Button.addEventListener("click" , showTask);

tasksList.addEventListener("click" , (event) => {

    if(event.target.classList.contains(".delete-btn")){

        deleteTask(event.target);

    }

    else if(event.target.classList.contains(".edit-btn")){

        editTask(event.target);

    }

});




