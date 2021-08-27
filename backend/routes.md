# Routes

## Food
|url|method|response|error|
|-----|----|----|----|
|`/api/foods`|`GET` |List of food|Any|
|`/api/food` |`POST`|Returned entry|Any,Missing Parameters|

**Example:** `/api/foods`
```json
{
  "foods": [
    {
      "_id": "61290aad4ddebc34ec21826d",
      "name": "Test Food 1",
      "images": [
        "path",
        "path"
      ],
      "description": "This is a description of the food",
      "reviews": [],
      "restrauntId": [
        "0"
      ],
      "__v": 0
    },
    {
      "_id": "61292766b67a27440389c7fb",
      "name": "Test Food 2",
      "images": [
        "path",
        "path"
      ],
      "description": "Another food item",
      "reviews": [],
      "restrauntId": [
        "0"
      ],
      "cost": "100",
      "__v": 0
    }
  ]
}
```

**Example** `/api/review`
### Body
```json
{
	"name": "Test Food 2",
	"images": [
			"path",
			"path"
	],
	"restrauntId": "0",
	"cost": "100",
	"description": "Another food item"
}
```

### Response
```json
{
  "name": "Test Food 2",
  "images": [
    "path",
    "path"
  ],
  "description": "Another food item",
  "reviews": [],
  "restrauntId": [
    "0"
  ],
  "cost": "100",
  "_id": "61292766b67a27440389c7fb",
  "__v": 0
}
```