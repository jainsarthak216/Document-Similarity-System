### **1. Root Folder Structure**
```
doc-similarity/
├── doc-similarity-frontend/          # React app
├── doc-similarity-backend/           # Node.js API
├── README.md          # Main documentation
└── .gitignore
```

---

### **2. Root README.md**  
*(General overview for the entire project)*

# Document Similarity System

A full-stack solution for comparing text document similarity with:
- React frontend
- Node.js backend
- Multiple comparison algorithms

## Quick Start

1. **Clone repository**:
```
git clone https://github.com/yourusername/doc-similarity.git
```

2. **Start both services**:
```
# Backend
cd backend && npm install && npm start

# Frontend (in new terminal)
cd frontend && npm install && npm start
```

---

### **3. Frontend/README.md**  
*(Detailed frontend-specific instructions)*

# Document Similarity Frontend

React-based UI for comparing text documents.

## Features
- Drag-and-drop file upload
- Real-time similarity scores
- Performance metrics

## Installation
```
cd frontend
npm install
```

## Configuration
Create `.env`:
```
REACT_APP_API_URL=http://localhost:3001
```

## Available Scripts
- `npm start`: Local development
- `npm build`: Production build

## Deployment
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

### **4. Backend/README.md**  
*(Detailed backend-specific instructions)*

# Document Similarity API

Node.js backend for document comparison.

## Features
- Cosine/Jaccard/Minhash algorithms
- File processing pipeline
- Rate limiting

## Installation
```
cd backend
npm install
```

## Configuration
Create `.env`:
```
PORT=3001
MAX_FILE_SIZE=5MB
```

## Endpoints
| Method | Endpoint | Description          |
|--------|----------|----------------------|
| POST   | /compare | Compare two documents|

