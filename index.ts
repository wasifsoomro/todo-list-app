#!/usr/bin/env node
import inquirer from "inquirer";

let todo: string[] = []
async function todoList(todo: string[]){
  do{
    let selectTodo = await inquirer.prompt([{
      type: "list",
      name: "selectOption",
      message:"Select any one option",
      choices: ["add", "update", "view", "delete", "exit" ]
    }])
    if(selectTodo.selectOption == "add"){
      let addTodo = await inquirer.prompt({
      type: "input",
      name: "addOption",
      message: "Write anything you want to add in list"
     })
     todo.push(addTodo.addOption)
     todo.forEach(todo => console.log(todo))
    }
    if (selectTodo.selectOption == "update"){
    let updateTodo = await inquirer.prompt([{
      type: "list",
      name: "Updateitem",
      message: "Select any item you want to update",
      choices: todo
     },
     {
      type: "input",
      name: "writeUpdateOne",
      message: "write new item"
     }
     ])
     let indexNumber = todo.indexOf(updateTodo.Updateitem)
     let updateNewOne = updateTodo.writeUpdateOne;
     todo.splice(indexNumber, 1 , updateNewOne)
     todo.forEach(todo => console.log(todo))
    }  
    if (selectTodo.selectOption == "view"){
     console.log("★★★★★★★★★★★Todo List★★★★★★★★★★★★★")
     todo.forEach(todo => console.log(todo))
     console.log("★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★")
    }
    if (selectTodo.selectOption == "delete") {
     let deleteTodo = await inquirer.prompt({
        type: "list",
        name: "deleteitem",
        message: "Select any item you want to delete",
        choices: todo
      })
      let deleteIndex = todo.indexOf(deleteTodo.deleteitem)
      
     todo.splice(deleteIndex, 1)
     todo.forEach(todo => console.log(todo))
    }
    if(selectTodo.selectOption === "exit"){
     console.log("Closing the application...")
     process.exit(0)
    }
  }while(true)
}
todoList(todo)