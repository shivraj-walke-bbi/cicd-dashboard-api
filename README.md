# 🚀 DEVELOPER  
SHIVRAJ WALKE

# 🚦 CI/CD Build Dashboard API

A modern REST API built with **NestJS** and **Firebase Cloud Firestore** to receive and serve CI/CD build metrics for your dashboard frontend.

---

## ✨ Features

- **NestJS + TypeScript:** Enterprise-grade Node.js backend
- **Firebase Cloud Firestore:** Persistent, scalable NoSQL storage
- **REST endpoints:** For CI/CD tools and dashboard
- **Easy deploy:** Ready for Render or any Node.js server

---

# 🚀 MAIN PART

## How to build and deploy on Render

1. **Push your code to GitHub**  
   (e.g., https://github.com/shivraj-walke-bbi/cicd-dashboard-api)
2. **Create a new Web Service on [Render](https://render.com/)**
3. **Set build/start commands:**
    - Build: `npm install && npm run build`
    - Start: `npm run start:prod`
4. **Add your Firebase service account JSON** as an environment variable:  
   - Key: `FIREBASE_SERVICE_ACCOUNT`  
   - Value: *Paste your Firebase JSON content*
5. **Deploy!**  
   Your API will be live at a URL like:  
   `https://cicd-dashboard-api.onrender.com`

---

## 🛠️ Endpoints

- **POST `/builds`** — Add a build record  
  Example payload:
  ```json
  {
    "project_id": "proj1",
    "package_name": "com.demo.myapp",
    "app_version": "1.2.3",
    "build": "100",
    "pull_request_id": "wf-123",
    "total_tests": 50,
    "success_tests": 48,
    "loc": 10000,
    "static_code_analysis": "OK",
    "cyclomatic_complexity": 4.2,
    "released": 0
  }

 GET /builds — Get all builds
 Returns a JSON array of build records.

## 📝 API URL
Production:
https://cicd-dashboard-api.onrender.com/builds

Local (dev):
http://localhost:3000/builds