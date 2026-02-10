
# SunSense: Smart UV Protection Guide

SunSense is a web application that provides real-time UV index information and personalized sunscreen recommendations based on your geographical location.

## Features

- **Real-time UV Index**: Get the current and maximum UV index for your location.
- **Location-based Data**: Uses your browser's geolocation to provide accurate data.
- **Sunscreen Recommendations**: Get personalized sunscreen recommendations (SPF level) based on the current UV index.
- **Safe Exposure Time**: Know how long you can stay in the sun without protection.
- **Responsive Design**: Works on both desktop and mobile devices.

## Tech Stack

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web development.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Axios**: A promise-based HTTP client for the browser and Node.js.

### Backend

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js**: A minimal and flexible Node.js web application framework.
- **Axios**: To communicate with the OpenUV API.
- **dotenv**: To manage environment variables.
- **cors**: To enable Cross-Origin Resource Sharing.

## How it works

1.  The user grants permission to access their location.
2.  The frontend sends the user's latitude and longitude to the backend.
3.  The backend makes a request to the [OpenUV API](https://www.openuv.io/) with the location data and an API key.
4.  The backend receives the UV index data and sends it back to the frontend.
5.  The frontend displays the UV index, safe exposure time, and sunscreen recommendations.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- An API key from [OpenUV](https://www.openuv.io/).

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/sunsense.git
    cd sunsense
    ```

2.  **Install backend dependencies:**

    ```bash
    cd backend
    npm install
    ```

3.  **Install frontend dependencies:**

    ```bash
    cd ../frontend
    npm install
    ```

### Configuration

1.  Create a `.env` file in the `backend` directory.
2.  Add your OpenUV API key to the `.env` file:

    ```
    OPENUV_API_KEY=your_openuv_api_key
    ```

### Running the application

1.  **Start the backend server:**

    ```bash
    cd backend
    npm start
    ```

    The backend server will be running on `http://localhost:3000`.

2.  **Start the frontend development server:**

    ```bash
    cd ../frontend
    npm run dev
    ```

    The frontend will be running on `http://localhost:5173` (or another port if 5173 is in use).

3.  Open your browser and navigate to the frontend URL.

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
