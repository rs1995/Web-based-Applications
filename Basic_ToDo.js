var todos=[];
var input=prompt("What you like to do?");

while(input!=="quit"){
	if(input==="add"){
		AddTodo();
	}
	else if(input==="list"){
		listTodo();
	}
	else if(input==="delete"){
		delTodo();
	}
	input=prompt("What you like to do?");
}


console.log("okay! We respect your decision of \"Quitting\"");

function AddTodo(){
	var newtodo= prompt("Enter New ToDo Element");
	todos.push(newtodo);
	console.log("New Todo Added!");
}

function listTodo(){
	console.log("*******************");
	todos.forEach(function(listItem,i){
		console.log(i+ ": " +listItem);
	});
	console.log("*******************");
}

function delTodo(){
	var deltodo= prompt("Enter the index of todo to be deleted");
	todos.splice(deltodo,1);
	console.log("Specific Todo Deleted");
}