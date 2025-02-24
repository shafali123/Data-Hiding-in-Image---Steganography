# Data-Hiding-in-Image---Steganography

## Overview

The Steganography Tool Frontend is a single-page React application that allows users to upload an image, hide text data within the image, and extract text data from an image. The application is built using React, TypeScript, Tailwind CSS, Lucide React for icons, and Shadcn UI for components. The actual steganography logic is handled by a backend service, which you can implement in Python.

## Features

1. **Upload an Image**: Users can upload an image file.
2. **Hide Text Data**: Users can input text data they want to hide within the uploaded image.
3. **Extract Text Data**: Users can extract hidden text data from an image.

## Setup Instructions

### Prerequisites

- Node.js (v16 or later)
- npm (v8 or later)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/shafali123/Data-Hiding-in-Image---Steganography.git
   cd Data-Hiding-in-Image---Steganography
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Application**

   ```bash
   npm run dev
   ```

   This will start the development server and open the application in your default web browser.

## Usage

### Uploading an Image

1. Click on the "Upload an Image" button.
2. Select an image file (PNG, JPG, GIF up to 10MB).
3. The uploaded image will be displayed below the button.

### Hiding Text Data

1. Enter the text data you want to hide in the provided text input.
2. Click on the "Hide Text" button.
3. The modified image will be displayed below the button.

### Extracting Text Data

1. Click on the "Extract Text" button.
2. The extracted text data will be displayed below the button.

## Design and User Experience

- **Clean and Simple Design**: The application uses Tailwind CSS for a clean and responsive design.
- **Intuitive Interface**: The interface is intuitive, with clear instructions and feedback for each step.
- **Icons**: Lucide React icons are used to enhance the user interface.

