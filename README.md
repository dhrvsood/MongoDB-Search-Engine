# MongoDB-Search-Engine
A simple search engine made using MongoDB that reads through a database of JSON files and autocompletes user results. 

## Usage
The project is divided into a frontend and backend directory. To run the project, create a split terminal and type in the following commands:

**backend**
```bash
cd backend
node main.js
```

**frontend**
```
cd frontend
http-server -p 5000
```

The project will be available on localhost:5000, while the backend will be running on localhost:3000.

## Functionality
Current functionality:
- [x] Autocomplete based on user prompt
- [x] View 1 result on autocomplete click
- [x] View all results on autocomplete error
- [x] View when no results match

Planned functionality:
- [ ] Autocomplete based on different data columns
- [ ] Tokenise using entire string instead of for more accuracy

## Technologies & Frameworks
The back-end of this project was written in Node.js with Express being used for server functionality. The front-end was built using HTML and jQuery.
