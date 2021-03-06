# Todo List

This is a Todo List application based on EJS,HTML, CSS and Javascript (Node JS and Express JS)

You will find that I have worked with fetch API  and used express extensively.  Also I have included the document database MongoDB using MongoDB atlas for processing(crud) the data. We are using the MVC(Model View Controller) Approach for designing this application.

I have hidden the mongodb connection string for security purposes. However you are free to subtitute the same with your corresponding mongodb URI.

There is an api endpoint available at 'localhost:3000/api/todolist' for getting all the details of the data. 

## Directory Structure
```sh
│   .gitignore
│   app.js
│   package-lock.json
│   package.json
│   README.md
│   serverless.yml
│
├───.serverless
│       cloudformation-template-create-stack.json
│       cloudformation-template-update-stack.json
│       serverless-state.json
│       Todo-app.zip
│
├───controllers
│       dbURI.js
│       todoController.js
│
├───models
│       todo.js
│
├───node_modules
│
├───public
│   └───assets
│           logo.png
│           ninjaLogo.png
│           styles.css
│           todo-list.js
```

### LINK  

https://7tr0vboc0e.execute-api.us-east-1.amazonaws.com/dev/todo

### References

The main resources I haved used is :
* Net ninja NodeJS Tutorials (have used additional updated resources)
* Stackoverflow
* GeeksforGeeks
* (And a couple of other references)


Corrections to be made:
* use process.env.PORT || 3000
* see how to add environment variables(in our case dbURI) to aws hosting environment

