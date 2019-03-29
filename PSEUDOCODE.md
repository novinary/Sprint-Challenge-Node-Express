** Step 1: Project setup  **
yarn - done
yarn add express - done
yarn add nodemon --dev  - done

** Step 2 **
In index.js create and get the server to listen to port 4444 - done

** Step 3 **
Create a new file called server.js - done
Use require to use express in server.js (express is a function that returns server) - done

** Step 4 ** 
Create a new file called projectsRouter.js - done
Use require to use projectsRouter in server.js - done
Use built in middleware express.json in server.js - done
Set up Express routers to organise api code - done

** Step 5 **
Start working on endpoints for projects
Get all projects - done
Get a project by id - done
Get a list of all the actions for a specific project using method getProjectActions()- done
Post a new project - done
Delete a new project - done
Put/update a project - done

** Step 6 **
Create a new file called actionsRouter.js - Done
Use require to use actionsRouter in js - Done
Create routers for action - Done
Use require to import actionsRouter in server.js - Done

** Step 7 **
Start working on endpoints for actions
Get all actions - done
Get an action by id - done
Post a new action - done
Delete an action - done
Put/update an action - done

Stretch Goal
- Use create-react-app to create an application in a separate folder (outside the API project folder). Name it anything you want. - Done

- From the React application show a list of all projects using the API you built.
        - create a new components folder under src folder - Done
        - create a functional component called Project that takes description as props - Done
        - In App.js use axios to do a get request to projects inside of componentDidMount - Done
        - install and use cors middleware 
        - use cors middleware to allow request from my api - Done
- Add functionality to show the details of a project, including its actions, when clicking a project name in the list. Use React Router to navigate to a separate route to show the project details. - to do 

- Add styling! Perhaps with styled-components. - to do 
