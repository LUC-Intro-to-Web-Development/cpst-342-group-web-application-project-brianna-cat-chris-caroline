[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12717085&assignment_repo_type=AssignmentRepo)
# CPST 342 Group Project Repository 

You will complete three assignments that will culminate in developing a monolithic full-stack web application. 

For the first group assignment, you will propose what type of app you will build and use the README.md file to document your responses to the questions for Assignment 1 deliverable 1.  All documentation pertaining to your project should occur in the README.md. 

After this course, your application will consist of the following components listed below.

1. Routing Framework using Express.js
2. Demonstrate and utilize a REST API
3. Create, Retrieve, Update and Delete (CRUD) Functionality
4. Utilize SQLite Database for persistent data store
5. Functional and User-friendly front-end interface
6. Hosting that allows users to access the site via domain name

**Assignment 1 consist of deliverables 1,2 and 3** <br>
**Assignment 2 consist of deliverables  4 and 5** <br>
**Assignment 3 consist of deliverables 6 and 7** <br>


## Assignment 1  - Project proposal
### Deliverable 1 (10 Points)
For this deliverable, you will need to modify the readme file and add responses to the questions below. that you are currently reading and address the following items below using a variety of permissible markdown syntax.

- Provide your name or the team's name
   - Caroline, Cat, Chris, and Brianna
- Name of the application
   - Chicago Eats
- Description of application *Describe how someone will use your application
   - The user would download our application if they are looking for something to help navigate the Chicago food scene. The app would open on the Home page which features a different restaurant/review of a restaurant each day. If they are looking to dive further into the restaurant scene, they could puruse the map of restaurants or use the search page. 
- Describe the need and purpose of the application
   - This application gives Chicago-area foodies reviews of restaurants around the area. Additionally, this app allows for users to add notes to different restaurants. By storing the capability to both find reviews of local restaurants and maintain notes on these restaurants on a single app, this eliminates the need for users to have to search around for reviews in Chicago and the need to have a separate location to store notes about these restaurants. 
- Intended target audience
   - The target audience for this app would be for Chicago locals who are looking for Chicago restaurants that have other Chicago locals' stamp of approval. 
- Identify the various pages your application will have and describe what users will be able to accomplish
   - Page 1: Home Page - The app opens on the Home page. The home page features a new review of a restaurant/a different restaurant each day. That is the only thing on the home page.
   - Page 2: The Map - The map features the restaurants contained in the app. It also offers a customizable feature.
   - Page 3: Search - The search page serves a dual purpose. It allows the user to either browse by cuisine or search specific terms in a search bar.
- Identify three goals of the application
   - Goal 1: Feature and promote local Chicago restaurants all in one place, and only Chicago restaurants.
   - Goal 2: Provide reviews of each restaurant.
   - Goal 3: Allow for a customizable map: users can plot their own restaurant points on a map, add private notes about the restaurant, and be able to save the map.
- Identify tools/software you will use to complete the project.
   - We will be using Github Codespaces as a collaborative work environment. In terms of languages, we will be using JavaScript, Express.js, Node.js, and SQLite. To access these Chicago reviews, we will be using a Rest-based Web API. Finally, we will be hosting the app using Heroku. 
* I suggest using an online coding environment that will allow your team to work collaboratively and practice git commands.  A few are listed below.
   - [CodeSandbox.io](https://codesandbox.io/)
   - [Replit.com](https://replit.com/)
   - [GitHub Codespaces](https://github.com/features/codespaces)
     - Click [here](https://docs.github.com/en/codespaces/developing-in-a-codespace/working-collaboratively-in-a-codespace) for information on using codespaces to collaborate with group members. 

### Deliverable 2 (10 Points)
For this deliverable, you will demonstrate your understanding of modules and JavaScript.  Listed below are tasks you will need to complete to satisfy the requirements for this deliverable.
- Initialize NPM into your project folder and go through the process of creating a package.json file (3 points)
- Create an index.js file and demonstrate your ability to declare and call functions *This file will be deleted prior to starting requirements for assignment 2. (4 points)
- Search through the NPM marketplace and demonstrate your ability to add and use an external module that you will potentially use in your final project. (3 points)

### Deliverable 3 (10 Points)
For this deliverable, you will implement version control into your project folder.
- Your remote repository will need to contain a minimum of 2 commits from each member for assignment 1 (6 points)
- You will need to add a .gitignore file that ignores the node_modules folder (4 points)


## Assignment 2 - Express Routing + CRUD Operations using SQLite Database.

### Deliverable 4 - Routing and Middleware configuration (15 Points)
For this deliverable, you will focus on implementing the necessary middleware needed to configure and route your application. Feel free to refer back to the [node.js](https://instructorc.github.io/site/slides/logic/nodejs.html) presentation for code samples and an explanation of concepts.
- Middleware is implemented for static files such as images, pdf's, etc (2 points)
- Middleware is implemented for view templating engine (2 points)
- Middleware configured to parse JSON data and interpret form data.  Implement the following code below to meet requirement. (2 points)
``` javascript
 // parse application/json
app.use(express.json());

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
```

- Application has a minimum of 5 routes implemented 
  1.  A minimum of three routes should accept data. Both the GET and POST methods will need to be represented in your routing functions (5 points)
     1. At a minimum one route should make a call to an external REST API
  2.  A minimum of three routes should render data back to the client/user interface. (4 points)
     1. At a minimum one route should return JSON data from external REST API to the interface
 
 

### Deliverable 5 - Database implementation (15 Points)
- Your application contains a file titled "database.js" and all of your SQL queries are listed and identified. (2 points)
- Your database.js file contains a minimum of 4 queries that represent the Create, Retrieve, Update and Delete (CRUD) functionality. (8 points)
- Database queries are represented within the routes and perform CRUD operations. (2 points)
- SQLite Database file is included within the project folder  (3 points)

## Assignment 3 - Finalizing User-Interface and Hosting Site

### Deliverable 6 - Functional and User-Friendly front-end interface (15 Points)

For this deliverable, you will need to make sure each of the pages of your site are properly functioning and renders in the browser.  Listed below are items that should be identified in your app. 

- Interface uses HTML form(s) to capture data that is related to CREATE and UPDATE functionality. (7 Points)
- Interface displays data that is queried from the database (5 Points)
- Interface includes a home page that is mapped to the root directory of your project folder.  For example, your web application should have a route that listens for the URL path of “/” and returns the homepage. (3 Points)

### Deliverable 7 - Hosting Site (15 Points)

For this deliverable, your group will deploy and host your site on Heroku.  The service cost $5 a month for an Eco dynos.  Information regarding cost can be found at this [link](https://www.heroku.com/pricing#containers) 
I recommend all group members pitch in a few dollars to host the site for 1 month.
Heroku - [https://www.heroku.com](https://www.heroku.com/)  

Only one member of your team will need to create an account. 
Heroku will need to be configured to host your site from the GitHub repository issued by the instructor. 

Update the repository Readme file to include the URL from Heroku


### Extra Credit – Implementing Authentication + Authorization using Passport.js or AuthO (7 Extra Credit Points)

Once requirements from deliverable 1 -7 are met and and your group would like an additional challenge then I would encourage you to consider implementing an authentication library called passport.js or implementing a hosted authentication service called AuthO. To successfully meet the requirements for extra credit, you will need to adhere to the following bullet points below. All the following requirements will need to be met to receive full credit. 

- Implementation of authentication should flow succinctly with the rest of your applicaiton and not be disjointed and unpurposeful.
- Once an account is successfully created, the end user will be directed to a welcome screen connects account to a dashboard or user profile page.
- Once a user logs out, the end user is redirected to the the home page
  
### Submission Guidelines
Your project folder will need to be submitted to the assigned GitHub repository provided to you by the instructor. In Sakai, you will need to submit the link to your repository by the due date and time listed in the write-up. Make sure you receive confirmation from Sakai that your assignment has been submitted.

## Resources
[Markdown Syntax CheatSheet](https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf)
