# React Chatbot (CI/CD practice project)

A simple rule-based chatbot built with React + Vite. No API key needed.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm test           # run tests
npm run build      # production build -> dist/
```

## Run with Docker
```bash
docker build -t react-chatbot .
docker run -d -p 8080:80 react-chatbot   # http://localhost:8080
```

## CI/CD
- `Jenkinsfile` — Checkout → Install → Test → Build → Docker Build → Deploy (port 8080)
- `.github/workflows/ci.yml` — same build/test on GitHub Actions
- `Dockerfile` — multi-stage: Node builds the app, Nginx serves it
