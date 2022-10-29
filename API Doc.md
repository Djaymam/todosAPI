# todosAPI
API todos PS10 chuva academy


Hello and welcome to this realy bad API.

This is realy bad documentation but its all you have now.

To work whith this API you need the following:

Install all the dependecies whith node,

This is a Rest API and the the methods alowed are GET, POST, PUT, DELETE.

After starting the server go to http://localhost:6996 (6996 is the defult port but you are free to change it)

The routes available are

http://localhost:6996/ => this route get all the todos available (GET)
http://localhost:6996/add  => to add new todos (POST)
http://localhost:6996/get/:id   => the id will the the index of the array of todos since we are not using database (GET)
http://localhost:6996/update/:id  => you can update a todo , again you must use the index of the todo in todos array as the id (PUT)
http://localhost:6996/delete/:id => to delete a todo from todos array, the id is the index in the todos array (DELETE)


The API will validate the todo that you added. The format must the a JSON format when using the POST request to the api.
The following is the JSON format to use:

{
  "title" : " exemple of title", (must have at least a lenght of 10, required )
  
  "description" : "description of the todo", (lenght required 20)
  
  "obs" : "any OBS you need" (not required)
}


Have FUN!!
