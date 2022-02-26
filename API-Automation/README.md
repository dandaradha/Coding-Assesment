# To Run API collection 

Please run following command to execute all tests through command line

# Pre-requisities 

Install below libraries to run postman collection 

npm install newman 

Library to generate html reports

npm install newman-html-extra


# Run command:

newman run "postman collection path" cli,htmlextra --reporter-htmlextra-logs --reporter-htmlextra-title "Petstore_Testresults" 

extra options: -d - to run iteration file 
-e - to run with environment file

