# ImpactHub

**ImpactHub** is a community and fundraising web application developed by **Team T04** for the **Introduction to Software Engineering** course at the University of Science, VNU-HCM.

The project brings together community stories, administrator-reviewed fundraising campaigns, and simulated donations through a demo wallet. Its core scope includes account and role management, forum interactions, campaign management, moderation, and donation tracking.

## Technology 

| Layer | Technology |
| --- | --- |
| Frontend | React, Vite |
| Backend | Node.js, Express |
| Database | PostgreSQL, using the `pg` driver |
| Frontend checks | Oxlint |
| Planned styling and integrations (PA3) | Tailwind CSS, JWT/RBAC, bcrypt, Cloudinary |

Tailwind CSS and the integrations listed above will be added during implementation. They are not part of the current starter setup.

## System Layout

The architecture defined in PA3 separates the browser application, REST API, and relational database:

```text
React + Vite (localhost:5173)
              |
              | HTTP / REST API
              v
Node.js + Express (localhost:3000)
              |
              | pg driver
              v
         PostgreSQL
      database: impacthub
```

The frontend currently runs independently and does not call the API. During implementation, the backend will follow the PA3 modular monolith design, with middleware, controllers, services, and shared repositories.

Each developer can use a local PostgreSQL database. Schema changes will be shared as versioned SQL migrations in Git; live database contents remain local.

## Repository Map

```text
ImpactHub/
├── client/                 # Default React + Vite frontend
│   ├── public/             # Static starter assets
│   ├── src/                # App.jsx, styles, and React entry point
│   ├── package.json
│   └── vite.config.js
├── server/                 # Express API starter
│   ├── scripts/            # Database connection check
│   ├── src/
│   │   ├── config/         # Environment settings and PostgreSQL pool
│   │   ├── app.js          # Express app and health endpoint
│   │   └── server.js       # HTTP server entry point
│   ├── .env.example
│   └── package.json
├── database/
│   └── migrations/         # Reserved for SQL migrations; currently empty
├── docs/                   # Weekly reports and AI usage logs
├── pa/                     # Project deliverables: PA0–PA3
└── README.md
```

The client and server have separate dependencies and lockfiles. Run their npm commands inside the corresponding directory.

## Local Installation

### 1. Prepare your tools

- Git
- Node.js **24.x** and npm **11.x**
- PostgreSQL, when you need to check database connectivity
- A PostgreSQL client such as psql or pgAdmin, if needed

You can run the starter frontend and API without creating a database first.

### 2. Download the source and install dependencies

```sh
git clone https://github.com/Trananhkhoa2929/ImpactHub.git
cd ImpactHub
```

If the setup is on a feature branch, check out that branch before installing. The setup files must be pushed to GitHub before another machine can clone them.

Install the frontend dependencies:

```sh
cd client
npm ci
```

Then install the backend dependencies:

```sh
cd ../server
npm ci
```

### 3. Configure the backend environment

From `server/`, copy `.env.example` to `.env`.

**Windows PowerShell:**

```powershell
Copy-Item .env.example .env
```

**macOS / Linux / Git Bash:**

```sh
cp .env.example .env
```

Update the local settings as needed:

```dotenv
NODE_ENV=development
PORT=3000
CLIENT_ORIGIN=http://localhost:5173
DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@localhost:5432/impacthub
```

Use your own PostgreSQL credentials and URL-encode special characters in the password. Copy the file only during initial setup to avoid overwriting existing settings. `.env` is ignored by Git; never commit actual credentials.

The default frontend does not require an environment file. Restart the backend after changing its environment settings.

### 4. Prepare PostgreSQL (optional at this stage)

Using psql or pgAdmin with an account allowed to create databases, run:

```sql
CREATE DATABASE impacthub;
```

After updating `DATABASE_URL`, check the connection from `server/`:

```sh
npm run db:check
```

Expected output:

```text
PostgreSQL connection OK. No schema or data was changed.
```

This command only executes `SELECT 1`. No tables, migrations, or seed data are available yet.

### 5. Run the starter applications

Open two terminals at the repository root.

**Terminal 1 — frontend:**

```sh
cd client
npm run dev
```

**Terminal 2 — backend:**

```sh
cd server
npm run dev
```

| Service | Local address |
| --- | --- |
| React frontend | <http://localhost:5173> |
| API health check | <http://localhost:3000/api/health> |

Vite prints the actual frontend address in the terminal and may choose another port if 5173 is occupied. The health endpoint returns `{"status":"ok"}` and confirms only that the API is running; it does not check PostgreSQL or external services. The backend root `/` has no page.

Stop either process with `Ctrl+C`. If PowerShell blocks `npm.ps1`, use `npm.cmd` instead of `npm`.

## Useful Commands

| Directory | Command | Purpose |
| --- | --- | --- |
| `client/` | `npm run dev` | Start the Vite development server |
| `client/` | `npm run lint` | Check frontend code with Oxlint |
| `client/` | `npm run build` | Build the frontend into `client/dist/` |
| `client/` | `npm run preview` | Preview the frontend build locally |
| `server/` | `npm run dev` | Start the API with automatic reload |
| `server/` | `npm start` | Start the API without automatic reload |
| `server/` | `npm run db:check` | Check PostgreSQL connectivity |

## Working Together

1. Pull the latest changes from `main`.
2. Create a feature branch for the assigned task.
3. Install updated dependencies with `npm ci` in the affected application.
4. Apply new database migrations locally when they become available.
5. Implement and check your changes against the project requirements and design.
6. Commit the relevant source files, SQL scripts, and documentation using Conventional Commits.
7. Open a pull request and obtain another team member's review before merging.

Git shares source code and SQL scripts, not installed dependencies, private environment settings, or live database data. Each member maintains their own local environment.

## References

- [Project idea and team contract](pa/PA0/T04-PA0.pdf)
- [Project proposal and plan](pa/PA1/T04-PA1.pdf)
- [Software requirements specification](pa/PA2/PA2.pdf)
- [Software design](pa/PA3/PA3.pdf)
- [Database migrations](database/migrations/)
- [Weekly status reports](docs/management/weekly/)
- [AI usage logs](docs/ai-usage/)
