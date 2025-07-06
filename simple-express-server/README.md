# Simple Express Server

This project is a simple Express server that listens on port 8001. It is designed to be lightweight and serves as a starting point for building more complex applications.

## Getting Started

To get started with this project, follow the instructions below.

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- Yarn
- Docker (if you want to run the server in a container)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/microsoft/vscode-remote-try-node.git
   cd simple-express-server
   ```

2. Install the dependencies:

   ```
   yarn install
   ```

### Running the Server

To start the server, use the following command:

```
yarn start
```

This will start the server using nodemon, which will automatically restart the server whenever you make changes to the code.

### Running with Docker

To build and run the server using Docker, use the following commands:

1. Build the Docker image:

   ```
   docker build -t simple-express-server .
   ```

2. Run the Docker container:

   ```
   docker run -p 8001:8001 simple-express-server
   ```

The server will be accessible at `http://localhost:8001`.

### License

This project is licensed under the MIT License. See the LICENSE file for more details.