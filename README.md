# Blog Website

A modern blog website built with React.js, powered by Appwrite for backend services and TinyMCE for rich text editing. This project uses Redux for state management, React Router for navigation, and Tailwind CSS for styling.

## Features
- **User Authentication**: Secure login and registration using Appwrite.
- **Rich Text Editor**: Create and edit blog posts with TinyMCE.
- **State Management**: Redux Toolkit for efficient state handling.
- **Routing**: React Router for seamless navigation.
- **Responsive Design**: Tailwind CSS for a modern UI.
- **Database Integration**: Appwrite for storing blog posts.

## Tech Stack
- **Frontend**: React.js, React Router, Tailwind CSS
- **State Management**: Redux Toolkit
- **Backend**: Appwrite
- **Editor**: TinyMCE
- **Build Tool**: Vite

## Installation

### Prerequisites
- Node.js (v16+ recommended)
- Appwrite server set up
- TinyMCE API key

### Steps to Run the Project

1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-repo/blog-website.git
   cd blog-website
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and add the following:
   ```env
   VITE_APPWRITE_URL="your-appwrite-url"
   VITE_APPWRITE_PROJECT_ID="your-project-id"
   VITE_APPWRITE_DATABASE_ID="your-database-id"
   VITE_APPWRITE_COLLECTION_ID="your-collection-id"
   VITE_APPWRITE_BUCKET_ID="your-bucket-id"
   ```
   Also, add your TinyMCE API key in the appropriate place in the code.

4. **Start the Development Server**
   ```sh
   npm run dev
   ```
   The app will be available at `http://localhost:5173`.

5. **Install Dependencies Manually (If Needed)**
   If you need to install dependencies separately, run:
   ```sh
   npm install @reduxjs/toolkit @tinymce/tinymce-react appwrite html-react-parser react react-dom react-hook-form react-redux react-router-dom
   ```
   Install development dependencies:
   ```sh
   npm install -D @types/react @types/react-dom @vitejs/plugin-react autoprefixer eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh postcss tailwindcss vite
   ```

## Dependencies
```json
"dependencies": {
    "@reduxjs/toolkit": "^1.9.5",
    "@tinymce/tinymce-react": "^4.3.0",
    "appwrite": "^13.0.0",
    "html-react-parser": "^4.2.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-hook-form": "^7.46.1",
    "react-redux": "^8.1.2",
    "react-router-dom": "^6.16.0"
},
"devDependencies": {
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@vitejs/plugin-react": "^4.0.3",
    "autoprefixer": "^10.4.15",
    "eslint": "^8.45.0",
    "eslint-plugin-react": "^7.32.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.3",
    "postcss": "^8.4.30",
    "tailwindcss": "^3.3.3",
    "vite": "^4.4.5"
}
```

## Folder Structure
```
blog-website/
│── src/
│   ├── components/     # Reusable components
│   ├── pages/          # Different pages (Home, Blog, Login, etc.)
│   ├── redux/          # Redux store and slices
│   ├── services/       # API calls and Appwrite configuration
│   ├── App.js          # Main app component
│   ├── main.js         # Entry point
│── public/             # Static assets
│── .env                # Environment variables
│── package.json        # Dependencies and scripts
│── tailwind.config.js  # Tailwind CSS configuration
│── vite.config.js      # Vite configuration
```

## Contributing
Feel free to submit pull requests or report issues to improve the project.

