# GG.WP
A mobile-responsive, social media app built for gamers with the MERN stack.

## Getting Started
#### 1. Clone or fork this repository and make sure you have the files locally
```
$ git clone https://github.com/ptran3/GG.WP.git
```

#### 2. Install dependencies in the main repository where you cloned the app
```
$ npm i
```

#### 3. Create a `.env` file in the main directory to store your Mongo URI. The file's contents should look like the following:
```
MONGO_URI="<Your Mongo URI>"
```
Notice that there are no spaces on either side of the equal sign.

#### 4. Install dependencies for the client
```
$ cd client
$ npm i
```

#### 5. Create a `.env` file in the client directory. The file's contents should look like the following:
```
REACT_APP_AUTH0_DOMAIN="<Your Auth0 domain>"
REACT_APP_AUTH0_CLIENT_ID="<Your Auth0 client id>"
```

## Usage
Inside the main directory where you cloned the app, use the following command:
```
$ npm run dev
```

## Built With
* MongoDB -- database
* Express.js -- back-end framework
* React.js -- front-end
* Node.js -- back-end
* Auth0 -- authentication
* Material-UI and reactstrap -- user interface
