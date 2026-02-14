# Expense Tracker - Docker Setup

This project is now containerized with Docker and Docker Compose for easy deployment.

## Services

- **Frontend**: React application with Vite (port 5173)
- **Backend**: Node.js/Express API (port 3000)
- **MongoDB**: Database (port 27017)

## Prerequisites

- Docker
- Docker Compose

## Quick Start

### Build and Run All Services

```bash
docker compose up -d
```

This command will:
1. Build the frontend Docker image
2. Build the backend Docker image
3. Pull the MongoDB image
4. Start all three services in the background

### Access the Application

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000
- **MongoDB**: localhost:27017

## Commands

### Start services
```bash
docker compose up
```

### Start in background
```bash
docker compose up -d
```

### Stop services
```bash
docker compose down
```

### Stop and remove volumes (clean database)
```bash
docker compose down -v
```

### View logs
```bash
docker compose logs -f
```

### View specific service logs
```bash
docker compose logs -f backend
docker compose logs -f frontend
docker compose logs -f mongodb
```

### Rebuild images
```bash
docker compose build
docker compose up -d
```

## Environment Variables

- `MONGO_URI`: MongoDB connection string (default: mongodb://mongodb:27017/expensepro)
- `NODE_ENV`: Node environment (default: production)
- `VITE_API_URL`: Frontend API endpoint (default: http://localhost:3000)

## Project Structure

```
expense_tracker/
├── docker-compose.yml       # Orchestrates all services
├── .dockerignore            # Files to exclude from frontend image
├── Dockerfile              # Frontend build configuration
├── backend/
│   ├── Dockerfile          # Backend build configuration
│   ├── .dockerignore       # Files to exclude from backend image
│   ├── App.js              # Express server
│   └── package.json        # Backend dependencies
└── src/                    # React source files
```

## Troubleshooting

### Port already in use
If ports are already in use, you can modify the port mappings in `docker-compose.yml`:
```yaml
ports:
  - "YOUR_PORT:3000"  # For backend
  - "YOUR_PORT:5173"  # For frontend
```

### MongoDB connection issues
Wait a few seconds after starting for MongoDB to be ready. The `docker-compose.yml` includes health checks to ensure MongoDB is ready before starting the backend.

### Clear data and start fresh
```bash
docker compose down -v
docker compose up -d
```

## Development vs Production

The current setup is configured for production. For development with hot reload:
- Modify the frontend Dockerfile to use `npm run dev` instead of `serve`
- Modify the docker-compose.yml to mount volumes for live code reloading
