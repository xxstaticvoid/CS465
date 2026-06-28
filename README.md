# CS465
CS465 - Full Stack Development I



### Architecture

Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
Why did the backend use a NoSQL MongoDB database?


The customer facing side used Express with HTML and Handlebars templates. This approach is more traditional because the server builds the page and sends the finished HTML to the browser. JavaScript was also used to support interaction and connect parts of the application. The admin side is a Angular single page application/SPA. The SPA is more dynamic because it loads once and updates the page through components and API calls instead of reloading a new page after every action. Express HTML worked well for simple browsing, while Angular was better for the admin interface because it allowed users to log in, view trips, add trips, and edit trip data in a smother way. The backend used MongoDB because the project needed to store trip data in a flexible format. Since MongoDB is a NoSQL database, it stores data as documents instead of rows and tables. This worked well with the travel data because each trip could be represented as an object with fields like code, name, resort, price, image, and description. MongoDB also works naturally with JavaScript and JSON data, which made it a good fit for a MEAN stack application.



### Functionality

How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface components.


JSON is different from JavaScript because JavaScript is a full programming language, while JSON is just a way to format data. JSON looks similar to JavaScript objects, but it is mainly used to send and receive structured data. In this project, JSON helped me connect the frontend and backend. The Angular SPA sent JSON data to the API when adding or updating trips, and the API returned JSON data from the database when the frontend requested trips. This made JSON the bridge between the Angular frontend, Express API, and MongoDB database.



### Testing

Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.


In a full stack application, methods, endpoints, and security are all important parts of API testing. Methods describe the type of request being made, such as GET for retrieving data, POST for creating data, and PUT for updat3ing data. Endpoints are the specific API urls that the frontend uses to communicate with the backend. In the travlr project I built endpoints such as /api/trips or /api/trips/tripCode which retrieve trip data from the database. I tested these endpoints with Postman to help confirm that the API is correctly sending and receiving data before relying on the frontend. Security adds another layer to testing because some requests should only work for authorized users. In my project, login returned a JWT token, and protected requests required that token in the authorization header. This means testing was not only about checking whether GET and PUT requests worked, but also whether the API correctly blocked unauthorized requests and allowed authorized ones.






