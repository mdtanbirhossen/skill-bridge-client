# SkillBridge 🎓

**Connect with Expert Tutors, Learn Anything**

SkillBridge is a modern full-stack tutoring platform that connects students with expert tutors across various subjects. Learners can discover tutors, book sessions, and leave reviews, while tutors manage profiles, availability, and teaching sessions. Admins oversee users, bookings, and platform content.

---

## 🚀 Live Demo

> *Add your deployed URL here (Vercel / Netlify)*

---

## 📌 Project Overview

SkillBridge aims to simplify online learning by providing:

* Instant tutor discovery and booking
* Role-based dashboards (Student, Tutor, Admin)
* Secure authentication and authorization
* Clean, responsive, and scalable UI

This repository contains the **client-side (frontend)** of the SkillBridge project.

---

## 👥 Roles & Permissions

| Role        | Description | Permissions                                                     |
| ----------- | ----------- | --------------------------------------------------------------- |
| **Student** | Learners    | Browse tutors, book sessions, leave reviews, manage profile     |
| **Tutor**   | Educators   | Create profile, manage availability, view sessions, see reviews |
| **Admin**   | Moderators  | Manage users, bookings, and categories                          |

> ℹ️ Users choose their role during registration. Admin accounts are seeded manually.

---

## 🛠️ Tech Stack

### Frontend

* **Next.js 16 (App Router)**
* **React 19**
* **TypeScript**
* **Tailwind CSS v4**
* **ShadCN UI (Radix UI)**
* **Zod** – schema validation
* **JWT** – authentication handling
* **Next Themes** – dark/light mode
* **Lucide Icons**

### State & Utilities

* **@tanstack/react-form**
* **js-cookie**
* **sonner** – toast notifications
* **clsx & tailwind-merge**

---

## ✨ Features

### 🌐 Public Features

* Browse tutors by subject, rating, and price
* Filter tutors by category
* View detailed tutor profiles
* Landing page with featured tutors

### 👨‍🎓 Student Features

* Register & login
* Book tutoring sessions
* View booking history
* Leave reviews after completed sessions
* Manage profile

### 👨‍🏫 Tutor Features

* Register & login
* Create & update tutor profile
* Set availability slots
* View teaching sessions
* Track ratings and reviews

### 🛡️ Admin Features

* View all users
* Ban / unban users
* View all bookings
* Manage tutor categories

---

## 🧭 Pages & Routes

### Public Routes

| Route         | Description   |
| ------------- | ------------- |
| `/`           | Home page     |
| `/tutors`     | Browse tutors |
| `/tutors/:id` | Tutor profile |
| `/login`      | Login         |
| `/register`   | Registration  |

### Student Routes (Protected)

| Route                 | Description        |
| --------------------- | ------------------ |
| `/dashboard`          | Student dashboard  |
| `/dashboard/bookings` | My bookings        |
| `/dashboard/profile`  | Profile management |

### Tutor Routes (Protected)

| Route                 | Description         |
| --------------------- | ------------------- |
| `/tutor/dashboard`    | Tutor dashboard     |
| `/tutor/availability` | Manage availability |
| `/tutor/profile`      | Tutor profile       |

### Admin Routes (Protected)

| Route               | Description         |
| ------------------- | ------------------- |
| `/admin`            | Admin dashboard     |
| `/admin/users`      | User management     |
| `/admin/bookings`   | Booking management  |
| `/admin/categories` | Category management |

---

## 🗄️ Database Models (High-Level)

* **Users** – authentication & roles
* **TutorProfiles** – tutor-specific data
* **Categories** – tutoring subjects
* **Bookings** – sessions between students & tutors
* **Reviews** – tutor feedback from students

---

## 🔌 API Integration

The frontend consumes a REST API that supports:

* Authentication (JWT)
* Tutor browsing & filtering
* Booking management
* Reviews & ratings
* Admin moderation

> Backend is implemented separately.

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/skill-bridge-client.git

# Navigate to project
cd skill-bridge-client

# Install dependencies
npm install

# Run development server
npm run dev
```

Create a `.env.local` file and add required environment variables:

```env
NEXT_PUBLIC_API_URL=your_backend_api_url
JWT_SECRET=your_secret
```

---

## 📜 Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |

---

## 📦 Dependencies (Highlights)

* `next` – React framework
* `react` & `react-dom`
* `tailwindcss`
* `@radix-ui/*`
* `zod`
* `jsonwebtoken`
* `lucide-react`

---

## 📈 Future Improvements

* Real-time chat between student & tutor
* Online payment integration
* Tutor verification system
* Analytics dashboard for admin

---

## 🤝 Contributing

Contributions are welcome! Please fork the repo and submit a pull request.

---

## 📄 License

This project is for educational purposes.

---

## 🙌 Acknowledgements

* Programming Hero
* ShadCN UI
* Radix UI
* Next.js Team

---

### 👨‍💻 Author

**Md Tanbir Hossen**

Backend Developer | Full Stack Enthusiast 🚀
