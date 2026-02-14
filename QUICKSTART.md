# Expense Tracker - Quick Start Guide

## Running with Docker

Your expense tracker application has been integrated with Docker. This guide will help you get started.

### Prerequisites

Ensure Docker and Docker Compose are installed:
```bash
docker --version
docker compose --version
```

### Quick Start (3 steps)

1. **Navigate to the project directory:**
   ```bash
   cd /home/dharun14/expense_tracker/expense_tracker
   ```

2. **Start all services:**
   ```bash
   docker compose up -d
   ```

3. **Access the application:**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000

### What's Running

- **Frontend** (React + Vite): Port 5173
- **Backend** (Express + Node.js): Port 3000
- **MongoDB**: Port 27017

### Common Commands

| Command | Purpose |
|---------|---------|
| `docker compose up -d` | Start all services in background |
| `docker compose logs -f` | View logs from all services |
| `docker compose logs -f backend` | View only backend logs |
| `docker compose logs -f frontend` | View only frontend logs |
| `docker compose down` | Stop all services |
| `docker compose down -v` | Stop services and remove database data |
| `docker compose build` | Rebuild images (if code changed) |

### Checking Service Status

```bash
docker compose ps
```

### Troubleshooting

**Port already in use?**
- Edit `docker-compose.yml` and change the port mappings

**MongoDB connection error?**
- Wait 10-15 seconds for MongoDB to start. Docker health checks ensure this.

**Need fresh data?**
```bash
docker compose down -v
docker compose up -d
```

**Check specific service logs:**
```bash
docker compose logs backend --tail=100
```

### API Endpoints

- `GET /expense` - Get all expenses
- `POST /expense` - Create an expense (requires `{ title, amount }`)

### Development Notes

- Backend code is in `backend/App.js`
- Frontend code is in `src/`
- MongoDB connection: `mongodb://mongodb:27017/expensepro`

For more detailed information, see [DOCKER.md](DOCKER.md)
