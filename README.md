# Beer API Helper

## Setup

First install dependencies
```shell
npm i
```

If you want to develop on it
```shell
npm run dev
```

If you want to use it in production
```shell
npm run prestart
npm run start
```

## Routes
### Add a beer
```http request
POST http://localhost:8000
Accept: application/json

Content-Type: application/json

{ "name": "Chouffe" }
```


<br/>

### View all beers
```http request
GET http://localhost:8000
Accept: application/json
```

<br/>

### View a beer
```http request
GET http://localhost:8000/1
Accept: application/json
```

<br/>

### Update a beer
```http request
PATCH http://localhost:8000/1
Accept: application/json
Content-Type: application/json

{ "name": "Leffe Ruby" }
```

<br/>

### Close the database
```http request
POST http://localhost:8000/close
Accept: application/json
```

