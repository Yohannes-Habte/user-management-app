# user-managemen-app
## Frontend
1. React with sass
2. State management will be Redux
3. Email - NodeMailer and Outlook email account
4. Google OAuth
7. Axios

## Backend
1. Node.js
2. Express.js
3. MongoDB
4. Insomnia for API testing

## Deploy MERN
1. Frontend will be deployed in Vercel
2. Backend will be deployed in Render

### General principles of how to handle forgot password
1. User clicks on a forgot password in the frontend
2. Create a reset token (string) and save in the database 
3. Send reset token to user email in the form of a link
4. When user clicks the link, compare the reset toen in the link with that saved in the database
5. If they match, change reset the user's password

### The steps you need to follow to address the forgot password in the backend are:
1. Create forgot password route
2. Create token model
3. Create Email Sender Function
4. Create Controller Function