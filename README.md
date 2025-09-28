# 🗳️ Nexus Voting System  

## 📌 Overview  
The **Nexus Voting System** is a simple yet powerful online voting platform. It allows users to:  
- Enter their name  
- Select a candidate  
- Cast a vote  
- See real-time results  

Built with **React + TypeScript + TailwindCSS (Frontend)** and **Django + Django REST Framework (Backend)**.  

---

## 🚀 Features  
- User-friendly voting interface 🖥️  
- Candidate management (backend) 🗂️  
- Secure vote casting ✅  
- Real-time vote tally 📊  
- REST API for frontend-backend communication 🔗  

---

## 🛠️ Tech Stack  
- **Frontend:** React, TypeScript, TailwindCSS, Vite  
- **Backend:** Django, Django REST Framework  
- **Database:** SQLite (default, can switch to PostgreSQL/MySQL)  

---

## ⚡ Quick Start  

### 1️⃣ Clone the repo
```bash
git clone https://github.com/ami798/project-nexus-voting-system.git
cd project-nexus-voting-system

## Backend setup
cd nexus-voting-backend
python -m venv venv
venv\Scripts\activate   # (Windows)
# source venv/bin/activate  # (Mac/Linux)

pip install -r requirements.txt

python manage.py migrate
python manage.py runserver

** API endpoints:

POST /vote/ → cast a vote

GET /results/ → fetch results

## Frontend setup(react,tailwind,vite)
cd nexus-voting-frontend
npm install
npm run dev

Frontend runs on:
👉 http://localhost:5173

project-nexus-voting-system/
│── nexus-voting-backend/   # Django backend
│   ├── voting_system/      # Main Django project
│   ├── votes/              # Voting app
│   └── manage.py
│
│── nexus-voting-frontend/  # React + Tailwind frontend
│
└── README.md

📌 Next Steps

✅ Finish MVP (voting + results)

⏳ Add authentication (user login before voting)

⏳ Deploy to Render / Railway (Backend) and Vercel / Netlify (Frontend)

⏳ Add charts for better visualization

👩‍💻 Contributors

Amira Abdurahman
 – Full Stack Developer