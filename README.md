# 💬 Realtime Chat Application

A modern full-stack realtime chat application built with the **MERN Stack** and **Socket.IO**. It provides secure authentication, realtime messaging, online presence tracking, image sharing, and a responsive user interface.

## 🚀 Features

* 🔐 Secure Authentication & Authorization using JWT
* 💬 Realtime one-to-one messaging with Socket.IO
* 🟢 Live online/offline user status
* 🖼️ Image sharing with Cloudinary
* 🎨 Modern responsive UI built with Tailwind CSS & DaisyUI
* ⚡ Global state management using Zustand
* 🛡️ Robust client-side and server-side error handling
* 📱 Mobile-friendly design
* 🚀 Production-ready deployment configuration

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Tailwind CSS
* DaisyUI
* Zustand
* Axios
* Socket.IO Client

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Socket.IO
* JWT Authentication
* Cloudinary

---

## 📂 Project Structure

```
chat-app/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── lib/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── hooks/
│   │   └── App.jsx
│
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the **backend** directory.

```env
MONGODB_URI=your_mongodb_connection_string

PORT=5001

JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

NODE_ENV=development
```

---

## 📦 Installation

### Clone the repository

```bash
git clone https://github.com/your-username/chat-app.git

cd chat-app
```

### Install dependencies

Backend

```bash
cd backend
npm install
```

Frontend

```bash
cd ../frontend
npm install
```

---

## ▶️ Running the Application

### Start Backend

```bash
cd backend
npm run dev
```

### Start Frontend

```bash
cd frontend
npm run dev
```

The application will now be available locally.

---

## 🏗️ Production Build

Build the frontend

```bash
npm run build
```

Start the production server

```bash
npm start
```

---

## 📸 Screenshots

Add your application screenshots here.

```
Home Page
Login
Signup
Chat Window
Profile Page
```

---

## ✨ Future Improvements

* 👥 Group Chats
* 📞 Voice & Video Calling
* 😊 Emoji Picker
* 📎 File Sharing
* 🔔 Push Notifications
* 🌙 Dark/Light Theme Toggle
* 📌 Message Reactions
* ✏️ Edit & Delete Messages

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Push the branch.
5. Open a Pull Request.

---

## 📄 License

This project is licensed under the MIT License.

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub. It helps others discover the project and motivates further development.
