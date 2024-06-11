# Jewel_render

## Overview

Jewel_render is a web-based application for rendering and showcasing jewelry using Three.js for 3D visualization. 

This project provides a seamless experience for viewing and interacting with 3D models of jewelry directly in the browser.

## Features

- **3D Rendering**: Visualize jewelry in 3D using Three.js.
- **Interactive Viewer**: Rotate, zoom, and explore jewelry models interactively.
- **Cloud Storage**: Store and manage jewelry object files in AWS S3.
- **Responsive Design**: Accessible on both desktop and mobile browsers.

## Technologies Used

- **Frontend**: Three.js, HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Storage**: MongoDB, AWS S3
- **Other Tools**: Webpack, Babel

## Getting Started

### Prerequisites

- Node.js and npm installed
- AWS account with S3 configured
- Web browser (latest version recommended)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/jewelrender.git
   
2. Install dependencies:
   ```sh
   npm install
   
3. Create a MongoDB database
   
3. Configure AWS S3:

- Create an S3 bucket for storing jewelry objects.
- Set up AWS credentials with appropriate permissions.
- Set up environment variables:
  
- Create a .env file in the root directory and add the following:
  
  ```sh
  AWS_ACCESS_KEY_ID=your-access-key-id
  AWS_SECRET_ACCESS_KEY=your-secret-access-key
  S3_BUCKET_NAME=your-s3-bucket-name
  MONGO_

### Running the Application

1. Start the backend server:
  ```sh
  npm start
 ```

2. Open your web browser and navigate to:
   http://localhost:3000

### Usage
- Uploading Jewelry Models: Use the provided interface to upload jewelry object files to AWS S3.
- Viewing Jewelry Models: Select and view uploaded models in the interactive 3D viewer.

### Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

### License
This project is licensed under the MIT License - see the LICENSE file for details.

### Contact
For any inquiries or issues, please contact me on Linkedin or open an issue in the repository.


