# getir-backend

This app provides RESTful API for "getir backend" app.

### To run on localhost

* Install node js (v14.16.0+)
* Run: git clone https://github.com/JSASHU/getir-backend.git
* Run: npm install
* Run: npm run start

### To run eslint and fix error

* Run: npm run lint
* Run: npm run lint:fix

### To run test suite

* Run: npm run test:unit

### API Endpoint - /records POST
## API Endpoint
https://getir-backend-api.herokuapp.com/records
## Method
POST
## Request Body
| Input | Type | Required |
| --- | ----------- | ----------- |
| minCount | Number | Required |
| maxCount | Number | Required |
| startDate | Date String (YYYY-MM-DD) | Required |
| endDate | Date String (YYYY-MM-DD) | Required |

* “startDate” and “endDate” fields will filter the data by createdAt field.

* Sum of the “count” array in the documents will be between “minCount” and “maxCount”.

### Example Request Payload

```jsx
{
  "startDate": "2016-01-26",
  "endDate": "2018-02-02",
  "minCount": 2700,
  "maxCount": 3000
}
```
### Example Response Payload
```jsx
{
    "code": 0,
    "msg": "Success.",
    "records": [
        {
            "key": "ibfRLaFT",
            "createdAt": "2016-12-25T16:43:27.909Z",
            "totalCount": 2892
        },
        {
            "key": "pxClAvll",
            "createdAt": "2016-12-19T10:00:40.050Z",
            "totalCount": 2772
        },
        {
            "key": "XCiSazeS",
            "createdAt": "2016-12-13T18:58:33.864Z",
            "totalCount": 2906
        }
    ]
}
```

### Example Records in Database
```jsx
{ 
    "_id" : ObjectId("5ee1e209e07f053f990cea8c"), 
    "key" : "TAKwGc6Jr4i8Z487", 
    "createdAt" : ISODate("2017-01-28T01:22:14.398+0000"), 
    "counts" : [
        NumberInt(150), 
        NumberInt(160)
    ], 
    "value" : "Getir Task"
},
{ 
    "_id" : ObjectId("5ee1e8dee07f053f990ceaa1"), 
    "key" : "TAKwGc6Jr4i8Z487", 
    "createdAt" : ISODate("2017-01-28T01:22:14.398+0000"), 
    "counts" : [
        NumberInt(170)
    ], 
    "value" : "Getir Task"
}
```