/*
// ENV AND APPWRITE IN REACT PROJECT

● It is best to keep the environment variables in the root directory of the project.

● We never ship the .env file for security purpose. But, for convenience we make a .env.sample file and put all the environment variables as they are without any value.

● In most of the cases, whenever value of environment variables are updated, the project needs to be restarted.

● In create-react-app project, we access environment variables by:

process.env.environment_var

● Environment variables are defined in 'process'

● If we make project by 'create-react-app', we need to start the environment variables with 'REACT_APP_' and then write name as wish.

● If we make project by 'vite', if we preceed the variables' name with VITE_, they will be accessible, but if we don't, they won't be accessible.

● In vite project we can access environment varibles by:

import.meta.env.environment_var

● "import.meta.env" is technically a JSON.

● Values of environment variables must be in string format. But, in many cases due to some mishandling, the variables' data type might change on the go so it is best to make an object with the environment variables compulsorily converted into string.

● We can avoid vendor locking. Vendor locking means locking of dependencies in such a way that the project won't run without it. This is production grade concept.

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

*/

