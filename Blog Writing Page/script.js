//variables to get input by user and to add them into list container
const blog = document.getElementById("blog");
const listContainer = document.getElementById("list-container");
//function to add the text to list them
function addBlog(){
    if(blog.value === ''){
        alert ("OOPS! You haven't written anything! ");
    }
    else{
        let li = document.createElement("li"); //when user adds something it will get created
        li.innerHTML = blog.value; //the created task will be saved
        listContainer.appendChild(li); //to show the task in screen, which the user has entered
        
        let span = document.createElement("span");//to create 'x' symbol to delete the task added by user
        span.innerHTML = "\u00d7"; // symbol to add the cross 'x' sign
        li.appendChild(span); // to show it in screen
    }
    blog.value="";
    saveData(); // to store each and every changes made in list container to be stored in browser
}
// to perform click operation
listContainer.addEventListener("click",function(e){
    /*if(e.target.tagName == "LI"){ // if user clicks on task name
        e.target.classList.toggle("checked"); // it will become checked
        saveData(); //when list is added it will be updated
    }*/
    if(e.target.tagName == "SPAN"){ // if user clicks on cross button
        e.target.parentElement.remove(); // task will get deleted
        saveData(); // when list is deleted it will be updated
    }
} , false);
// to save the tasks list
function saveData(){
    //whatever is there in list container it will be stored in our browser with the name of "data"
    localStorage.setItem("data", listContainer.innerHTML);
}
// to show all lists 
function showBlog(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showBlog(); // to display all the tasks