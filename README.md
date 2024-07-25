# Bharat-Seva+ 
Welcome to the Express server of the Bharat-Seva+ (Plus) Project! This project is built using Node.js, Express.js, Firebase, MongoDB, and various third-party modules.

BharatSeva+ aims to provide services to end-users, and patients. The generated data will be logged and recorded for future reference.

## Features
- Built with Express.js for efficient and scalable server-side development.
- Provides various endpoints for medical reports and data retrieval.
- Implements JWT token authentication for secure access to endpoints.
- Utilizes Nodemailer for seamless email communication.
- Stores medical records in MongoDB for efficient storage and retrieval.
- Leverages Firebase for user data management.
- Implements various database schemas for optimized data storage.
- Designed to be scalable and handle high traffic loads.
- Includes middleware for request authentication.

## Project Structure
```
.
├── Bharat Seva.postman_collection.json
├── Controllers
│   ├── AppointmentController.js
│   ├── GET_Patient_BIoData.js
│   ├── Get_For_PatientProblem_Details.js
│   ├── HIP_Authorization.js
│   ├── HIP_Info.js
│   ├── HIP_Patient_Info.js
│   ├── HIP_Patient_Problem_Issuer.js
│   └── Patient_Authorization.js
├── Firebase
│   ├── Config.js
│   └── Service.js
├── LICENSE
├── MiddleWare
│   ├── HIP_Authentication.js
│   ├── Patient_Authentication.js
│   └── RateLimiter.js
├── MongoDB
│   └── Database.js
├── NodeMailer
│   ├── NodeMailer.js
│   └── NodeMessages.js
├── README.md
├── Router
│   ├── AppointsmentRouter.js
│   ├── HIP_Authorization_Router.js
│   ├── HIP_Info.js
│   ├── HIP_PatientDetails_Router.js
│   ├── HIP_Patient_Issues.js
│   ├── Patient.js
│   ├── Patient_Authorization_Router.js
│   ├── Patient_BioData.js
│   └── Patient_Details_Router.js
├── Schema
│   ├── Appointments.js
│   ├── HIP_Info_Schema.js
│   ├── Patient_CredentialSchema.js
│   ├── Patient_Info_Schema.js
│   └── Patient_problem_Schema.js
├── Server.js
├── package-lock.json
└── package.json

7 directories, 36 files
```

> [!NOTE]
> - This project follows the MERN + Firebase Stack and is developed and managed by [Vaibhav Yadav](https://www.linkedin.com/in/vaibhav-yadav-4397351b9/).
> - To learn more about this project, visit [My Org](https://github.com/BharatSeva) or watch [My demo](https://www.youtube.com/playlist?list=PLXRQ5AMta2AI_jZlGr0A5owICnGkDpElO).
> - The main purpose of this project is to test and enhance web development skills.

Feel free to explore the project and contribute to its development!

