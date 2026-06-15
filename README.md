# 🎨 AI Image Generator

AI Image Generator is a full-stack web application that enables users to generate high-quality AI images from text prompts. Built using the MERN stack, the application integrates third-party AI APIs to convert user ideas into visually appealing images in real time.

The project focuses on secure authentication, seamless API integration, responsive UI/UX, and smooth user interactions to deliver an engaging user experience.

---

## 🚀 Live Demo

🔗 Live Website: https://ai-image-generate-frontend.onrender.com

🔗 GitHub Repository: [Add GitHub Link]

---

## ✨ Features

### 🔐 Authentication & Security

* User registration and login
* JWT-based authentication
* Protected routes for authorized access
* Secure password handling

### 🖼️ AI Image Generation

* Generate images from text prompts
* Real-time AI API integration
* Fast and efficient image rendering
* Download generated images

### 🎨 Modern UI/UX

* Responsive design for all devices
* Clean and intuitive interface
* Smooth animations using Framer Motion
* Interactive components for better user experience

### ⚡ Performance Optimization

* Efficient API handling
* Optimized React rendering
* Error handling and loading states
* Improved user feedback during image generation

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Framer Motion
* React Router DOM
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Authentication

* JWT Authentication
* Bcrypt.js

### AI Integration

* Third-party AI Image Generation API

### Deployment

* Vercel
* Render

---

## 🏗️ System Architecture

1. Users sign up and log in securely.
2. JWT tokens authenticate protected requests.
3. Users enter a text prompt describing the desired image.
4. The backend sends the prompt to the AI API.
5. The AI service generates an image.
6. The generated image is displayed instantly on the frontend.

---

## 📂 Project Structure

```bash
client/
 ├── src/
 ├── components/
 ├── pages/
 └── context/

server/
 ├── controllers/
 ├── routes/
 ├── middleware/
 ├── models/
 └── config/
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone <repository-url>
cd ai-image-generator
```

### Install Dependencies

```bash
npm install
```

### Setup Environment Variables

Create a `.env` file:

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
AI_API_KEY=your_api_key
```

### Run Application

```bash
# Backend
npm run server

# Frontend
npm run dev
```

---

## 👨‍💻 My Contribution

I independently designed and developed the complete application, including both frontend and backend development. I implemented secure JWT authentication, integrated AI APIs, built RESTful APIs, designed MongoDB schemas, and created a responsive user interface. I also used Framer Motion and React Bits to enhance the user experience with smooth animations and interactive components.

This project strengthened my skills in full-stack development, API integration, authentication, and modern frontend design.

---

## 🔮 Future Enhancements

* Image history and saved generations
* Multiple AI model support
* Advanced prompt suggestions
* Social sharing features
* Dark mode support
* Image editing capabilities

---

⭐ If you like this project, consider giving it a star on GitHub!
