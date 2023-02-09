# Social Network API
---
## Table of Content 

* [Description](#description)
* [Technlogies](#technologies)
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)

* [Questions](#questions)

<a name="description"></a>
## 📝 Description
This is a back end application for a Social Network created using a configured working Express API & mongoose ODM to interact with a mongoDB database. MongoDB is a popular choice for many social networks due to its speed with larger amounts of data and flexibility with unstructured data. Due to their prevalence, the aim of this application is to demonstrate my understanding of how to build and structure the API of these networks. 

<a name="technologies"></a>
## 🕹 Technologies used 
- JavaScript
- node.js
- Express.js
- MongoDB
- Mongoose



<a name="installation"></a>
## ⚙️ Installation 
1. Git clone this repository onto your local machine and navigate to the file on your terminal. *This can also be done by opening the file on Visual Studios and running it through the intergated terminal.*

2. In order for the app to function correctly, ensure you have the latest or most stable version of Node.js. 

3. Run `npm install` to download.

5. To start the application, run: `npm run start`

<a name="usage"></a>
## 🖥 Usage 
This application allows you to navigate different link routes that display data from the database. 

- USER ROUTES
get users
http://localhost:3001/api/users/<br>

get one user or delete one user
http://localhost:3001/api/users/:userId<br>

update user
http://localhost:3001/api/users/updateUser/:userId<br>

add friend/delete friend
http://localhost:3001/api/users/:userId/friends/:friendId<br>


- THOUGHT ROUTES


get thoughts
http://localhost:3001/api/thoughts`<br>

get single thought or delete single thought
http://localhost:3001/api/thoughts/:id`<br>

add reaction
http://localhost:3001/api/thoughts/addReaction/:thoughtId`<br>

delete thought
http://localhost:3001/api/thoughts/:userId/thoughts/:thoughtId`<br>

update thought
http://localhost:3001/api/thoughts/:id/thoughts`<br>
    



<a name="contributors"></a>
## 👥 Contributors

*[Jeff Yeh](https://github.com/YehOkiHub)* <br>

