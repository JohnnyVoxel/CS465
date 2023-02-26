# CS465-fullstack
CS-465 Full Stack Development with MEAN

## Architecture
-	Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).

This project was accomplished using a MEAN stack. One of the advantages of this stack is that JavaScript is used for all components, which streamlines development and simplifies troubleshooting. 
Express is a framework for Node.js used specifically for creating web applications. Using the templating engine Handlebars, the Express web application can create templates which content can be loaded into dynamically. This was used for the frontend web site.
The single page application (SPA) was built for the backend web page using Angular. This allows the web application to dynamically load content on the client side, which increases responsiveness and reduces server overhead.

-	Why did the backend use a NoSQL MongoDB database?

A NoSQL database is a good choice for an application such as this where varying types of data will be stored. Without strictly defined tables, the flexibility of a NoSQL database increases the speed and ease of development. MongoDB is a widely used NoSQL database which works well with JSON and JavaScript.

## Functionality
- How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?

JSON is JavaScript Object Notation, a formatting standard for transmitting data. JavaScript is a programming language which can easily parse JSON objects. In the case of a web application, JSON is passed via HTTP requests between the frontend client and the backend logic.

-	Provide instances in the full stack process when you refactored code to improve functionality and efficiencies and name the benefits that come from reusable user interface (UI) components.

While developing the frontend application, several static pages were set up for the various sections of the website. This resulted in a lot of redundant code, as portions of the HTML were identical across each page. Using Handlebars, templates were created for a common header and footer. These were dynamically inserted into each page, reducing the total number of lines and making future changes much more efficient.

## Testing
-	Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

Testing the API was a tedious but necessary process. Each API method needed to be tested individually. Troubleshooting was accomplished using the console log and the browser web developer tools. A layer of security was added to the web application which would restrict access to certain API calls without authentication. These methods needed to be tested with and without proper credentials to not only verify the API, but the security of the API as well.

## Reflection
-	How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This has been one of the most beneficial courses I have takes thus far. The firsthand experience developing a web application with the entire stack has been invaluable. Prior to this course, I was still operating under the old paradigm of individual static pages. Understanding the different techniques for creating dynamic SPAs and the complexity behind even a relatively simple web application has given me a much better understanding of what is entailed in being a full stack developer. While I might not necessarily go on to being a MEAN developer, the fundamentals and experience will translate to whatever my chosen tools will be.
