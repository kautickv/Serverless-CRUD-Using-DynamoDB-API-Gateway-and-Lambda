# Serverless CRUD: Using DynamoDB, API Gateway, and Lambda.

## Description
This project aims to demonstrate proficiency in building a miroservice using AWS services that can perform CRUD (create, read, update, and delete) operations on a non-SQL database. The front-end of the application is built using HTML, CSS, and JavaScript hosted on S3, while the back-end utilizes API Gateway, Lambda, and DynamoDB to handle data manipulation and storage. The project showcases the ability to design and implement a scalable and flexible system for managing data in a modern, cloud-based environment.

#### Use this [link](http://crud-operation-static-web.s3-website-us-east-1.amazonaws.com/) to access the live website


## Prerequisites
* A AWS account and access to the AWS Management Console
* Basic knowledge of HTML, CSS, JavaScript, and Python
* Basic knowledge of API Gateway, Lambda, and DynamoDB

![Microservice Architecture Diagram](./images/Simple%20CRUD%20Microservice%20Architecture.PNG "Architecture Diagram")


## Features
* Click "**List all Student**" to update the table with all the student in the database.
* To add an item, click "**Add Student**", fill in all the fields and click "**Add Student**" below the form.
* To update an item, click "**Update a Student**", insert student email in first textbox, then click "**Search**". The student information will be displayed in the form below. Update the required field and click "**Update Student**" to save information.
* To delete a student, click on "**Delete a Student**", input the student email in the textbox and click "**Delete Student**".

## Built With
* **_HTML_** - The front-end markup language
* **_CSS_** - The front-end stylesheet language
* **_Javascript_** - The front-end scripting language
* **_AWS API Gateway_** - The back-end API management service
* **_AWS Lambda_** - The back-end serverless computing platform
* **_Python_** - The back-end scripting language
* **_AWS DynamoDB_** - The back-end NoSQL database service
* **_AWS S3_** - Hosts the front-end and make it available on the internet

## General Guides:
#### Setting up a Lambda Function
* Navigate to the [Lambda console](https://us-east-1.console.aws.amazon.com/lambda/home?region=us-east-1#/functions) in your AWS Account
*Click the "Create function" button.
*Select the "Author from scratch" option and give your function a name.
*Select "Python 3.8" as the runtime.
*In the "Permissions" section, choose an the role we created in previous section.
*Click the "Create function" button to create your Lambda function.
*In the "Function code" section, write your Python code and use the "**boto3**" library to interact with DynamoDB.
*In the "Designer" section, click the "Add trigger" button.
*In the "Trigger configuration" panel, select "API Gateway" as the trigger type and choose the API Gateway that you want to use to trigger your Lambda function. (Note: In the next section, we will create an API Gateway. Once you complete the steps in the next section, re-do this step)

Your Lambda function should now be able to run Python code and interact with DynamoBD. (Note: The DynamoDB table has not been created yet. We will create it in the last section.)

#### Setting up API Gateway
* Navigate to the [API Gateway console](https://us-east-1.console.aws.amazon.com/apigateway/main/apis?region=us-east-1) in your AWS account.
*Click the "Create API" button.
*Choose the "REST" protocol and click the "Build" button.
*Give your API a name and choose the "New Resource" option.
*Create a new resource for each of the CRUD operations. Note: in this project, all CRUD operations are done using "POST" method
*In the Integration Type dropdown, select "Lambda Function" and then enter the name of the Lambda function (created in previous section) in the Lambda Function text field. 
*Click the "Actions" dropdown and select "Deploy API"
*Copy the "Invoke URL" that appears in the Deployment Information panel. This is the URL you will use to access your API endpoint.
*Test your API endpoint by sending an HTTP request to the "Invoke URL" using a tool such as cURL or Postman.

Your API Gateway should now be set up to trigger your lambda function when an HTTP request is sent to the specified endpoint.

#### Setting up a Lambda Function