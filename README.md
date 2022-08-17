 # NodeJS Project Structure
 
Recently I have started working on a new project and the issue that I faced was spending a lot of time building the project structure based on the best practices, especially with JavaScript/NodeJS that has a lot of approaches. I couldn't find any place that wraps the best practices into a single project, so I decided to make it on my own.
 
In this repository, I don't aim to provide any optimal solution as each project have its own necessity but to help anyone that is starting with a NodeJS project and can't find any inspiration on how to start building the project to take this project as the starting point.
 
 Some of the good practices followed in this repository:
 - `async` & `await` support 
 - WinstonJS logger implementation
 - Error Handling
 - Sequelize Support 
 - Basic Joi Validation
 - Open API specification implemented through swagger-jsdocs and swagger-ui
 - JWT implementation 
 - Enviroment variables to hold configuration values .env file
 - OOP (Object-Oriented Programming)
 - I followed [airbnb](https://github.com/airbnb/javascript) coding standard with eslint, to help keep things into prespective.
 
 ### How to start the project:
 
 - First, you clone the project by using the following command:\
 `git clone https://github.com/AlaaMezian/NodeJs-backend-structure.git`
 - Install node version 8.11.0 or use nvm to downgrade your node version.
 - Delete the existing `package.lock.json` and run `npm install`
 - Then you create a postgres database named iLrn with the following credentials:
 ```bash
 username: postgres
 password: password
 ```
 - Run the migration using the following command:
 `npx sequelize-cli db:migrate`
 - Lastly, you run `npm start`

Future improvements utilize component based structure.\
Please feel free to :star: and happy programming :v: 
