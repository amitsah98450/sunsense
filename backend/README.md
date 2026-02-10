# SunSense Backend

This is the backend of the SunSense application. It is a Node.js application built with Express.js.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- An API key from [OpenUV](https://www.openuv.io/).

### Installation

1.  **Install dependencies:**

    ```bash
    npm install
    ```

### Configuration

1.  Create a `.env` file in the `backend` directory.
2.  Add your OpenUV API key to the `.env` file:

    ```
    OPENUV_API_KEY=your_openuv_api_key
    ```

### Running the application

1.  **Start the server:**

    ```bash
    npm start
    ```

    The backend server will be running on `http://localhost:3000`.

## API Endpoint

The backend exposes the following API endpoint:

- `GET /api/uv`

  - **Query Parameters:**
    - `lat` (required): Latitude
    - `lng` (required): Longitude
  - **Success Response (200 OK):**
    - Returns a JSON object with the UV index data from the OpenUV API.
  - **Error Response (400 Bad Request):**
    - If `lat` or `lng` are not provided.
  - **Error Response (500 Internal Server Error):**
    - If there is an error fetching data from the OpenUV API.
