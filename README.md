## Phonebook Android App API

This API documentation provides information on the endpoints and functionality of the Contacts Android application. This API allows users to manage contact information, including creating, reading, updating, and deleting contacts. Authentication is implemented using JWT for user login and signup.

### Installation

Install the dependencies before running.

```bash
$npm install express nodemon mongoose
```

Start the API
```bash
$npm start
```

### Authentication

To access the API endpoints,  users need to be authenticated using JSON Web Tokens (JWT). To authenticate, follow these steps:

#### Sign Up `POST /signup`

```json
{
"email": "Sting",
"password": "String"
}
```


#### Log In `POST /login`

```json
{
"email": "Sting",
"password": "String"
}
```

### Endpoints
All the available routes in the API.

#### Read Contact
Retrieve a list of all contacts.

```
GET /api/friends/
```
Retrieve a specific contact by its unique ID.
```
GET /api/friends/:id
```

#### Create Contact
Create a new contact.
```
POST /api/friends/add
```
```json
{
"fname": "Sting",
"lname": "String",
"phone": ["String"]
}
```

#### Update Contact
Update an existing contact.
```
PATCH /update/:id
```

#### Delete Contact
Remove an existing contact.
```
DELETE /delete/:id
```
