# SMM Hiring — Backend API

Express + MongoDB (Mongoose) authentication API. JWT access + refresh tokens,
email verification & password reset via Resend, rate limiting.

## Setup

```bash
cd backend
npm install
cp .env.example .env   # then fill in the values
```

Make sure MongoDB is running locally (data stored in ~/Desktop/mongodb-data):

```bash
mongod --dbpath /Users/ashishverma/Desktop/mongodb-data --port 27017 --fork --logpath /Users/ashishverma/Desktop/mongodb-data/mongod.log
```

## Run

```bash
npm run dev    # auto-restarts on file changes (node --watch)
npm start      # plain run
```

Server starts on `http://localhost:5001`.

## Environment (.env)

| Var | Purpose |
|-----|---------|
| `PORT` | API port (5001) |
| `NODE_ENV` | `development` / `production` (controls Secure cookie) |
| `MONGO_URI` | MongoDB connection string |
| `JWT_ACCESS_SECRET` | signs 15-min access tokens |
| `JWT_REFRESH_SECRET` | signs 7-day refresh tokens |
| `RESEND_API_KEY` | Resend key. **If left as the placeholder, emails are logged to the console** instead of sent (dev-friendly). |
| `EMAIL_FROM` | sender address |
| `CLIENT_URL` | frontend origin — used for CORS + email links |

## Endpoints

All under `/api/auth`. Rate limited to 10 req / 15 min / IP (resend: 3 / hour).

| Method | Route | Auth | Body |
|--------|-------|------|------|
| POST | `/signup` | — | `email, password (≥8), role` |
| POST | `/verify-email` | — | `token` |
| POST | `/resend-verification` | — | `email` |
| POST | `/login` | — | `email, password, role?` |
| POST | `/refresh` | cookie | — |
| POST | `/logout` | cookie | — |
| POST | `/forgot-password` | — | `email` |
| POST | `/reset-password` | — | `token, newPassword (≥8)` |
| GET | `/me` | Bearer | — |

- **Access token**: returned in the response body, sent as `Authorization: Bearer <token>`.
- **Refresh token**: HttpOnly + SameSite=Strict cookie (path `/api/auth`), never in the body. Rotated on every `/refresh`.

## Structure (MVC)

```
backend/src/
├── index.js                    # app entry: cors, cookie-parser, routes
├── config/db.js                # MongoDB connection
├── models/User.js              # email, password, role, isVerified, refreshTokenHash
├── models/Token.js             # one-time tokens + TTL index (auto-expire)
├── middleware/protect.js       # Bearer access-token guard
├── middleware/rateLimiters.js  # authLimiter + resendLimiter
├── controllers/authController.js
├── routes/auth.js
└── utils/
    ├── tokens.js               # JWT sign, random tokens, cookie helpers
    └── email.js                # Resend (with console fallback)
```

## Next steps

- Set a real `RESEND_API_KEY` to actually send emails.
- Add feature models (briefs, deliverables, payments) following the same
  model → controller → route pattern.
```
