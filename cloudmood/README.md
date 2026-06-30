# 🔥 CloudMood Backend - NestJS API

Backend API cho CloudMood Travel Management Platform

---

## 🚀 Quick Start

### Installation
```bash
npm install
```

### Environment Setup
Create `.env` file:
```env
# Database
DATABASE_URL="postgresql://user:password@host:5432/database"

# JWT
JWT_SECRET="your-secret-key-here-change-in-production"
JWT_EXPIRATION="7d"

# Server
PORT=3000

# Cloudinary (optional)
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

### Database Setup
```bash
# Generate Prisma Client
npx prisma generate

# Run migrations
npx prisma migrate dev

# Seed database with demo data
npx prisma db seed
```

### Run Development Server
```bash
npm run start:dev
```

Server runs at `http://localhost:3000`

---

## 📦 Available Scripts

```bash
npm run start:dev      # Start in development mode with watch
npm run start          # Start in production mode
npm run build          # Build for production
npm run lint           # Run ESLint
npm run format         # Format code with Prettier
```

---

## 🔧 Database Commands

```bash
# View database in browser
npx prisma studio

# Create new migration
npx prisma migrate dev --name migration_name

# Reset database (DANGER!)
npx prisma migrate reset

# Seed database
npx prisma db seed

# Generate Prisma Client after schema changes
npx prisma generate
```

---

## 🗂️ Project Structure

```
src/
├── main.ts                    # Application entry point
├── app.module.ts              # Root module
├── app.controller.ts          # Health check endpoint
├── app.service.ts             # App service
│
├── auth/                      # Authentication
│   ├── auth.controller.ts     # POST /auth/login
│   ├── auth.service.ts        # JWT logic
│   └── auth.module.ts
│
├── users/                     # User management
│   ├── users.controller.ts    # CRUD endpoints
│   ├── users.service.ts       # Business logic
│   ├── users.module.ts
│   ├── dto/
│   │   ├── create-user.dto.ts
│   │   └── update-user.dto.ts
│   └── entities/
│       └── user.entity.ts
│
├── categories/                # Category management
├── places/                    # Place management
├── reviews/                   # Review management
├── itineraries/               # Itinerary management
│
├── prisma/                    # Prisma service (global)
│   ├── prisma.service.ts
│   └── prisma.module.ts
│
├── cloudinary/                # Image upload service
├── ai/                        # AI integration (future)
├── weather/                   # Weather API (future)
└── rules/                     # Business rules (future)
```

---

## 🔐 Authentication

### Login
```http
POST /auth/login
Content-Type: application/json

{
  "email": "admin@cloudmood.com",
  "password": "admin123"
}
```

**Response:**
```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "email": "admin@cloudmood.com",
    "fullName": "Admin CloudMood",
    "role": true
  }
}
```

### Protected Routes
Add JWT token to Authorization header:
```http
Authorization: Bearer <your-access-token>
```

---

## 📚 API Documentation

### Users API

#### Get All Users
```http
GET /users
```

#### Get User by ID
```http
GET /users/:id
```

#### Create User
```http
POST /users
Content-Type: application/json

{
  "fullName": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": false,
  "avatar": "https://example.com/avatar.jpg"
}
```

#### Update User
```http
PATCH /users/:id
Content-Type: application/json

{
  "fullName": "John Updated"
}
```

#### Delete User
```http
DELETE /users/:id
```

---

### Categories API

#### Get All Categories
```http
GET /categories
```

#### Create Category
```http
POST /categories
Content-Type: application/json

{
  "name": "Beaches",
  "icon": "🏖️"
}
```

---

### Places API

#### Get All Places
```http
GET /places
```

#### Create Place
```http
POST /places
Content-Type: application/json

{
  "name": "Bãi Biển Nha Trang",
  "description": "Beautiful beach in Nha Trang",
  "lat": 12.2388,
  "long": 109.1967,
  "address": "Nha Trang, Khánh Hòa",
  "price": 0,
  "openTime": "00:00",
  "closeTime": "23:59",
  "categoryId": 1,
  "image": "https://example.com/image.jpg"
}
```

---

### Reviews API

#### Get All Reviews
```http
GET /reviews
```

#### Create Review
```http
POST /reviews
Content-Type: application/json

{
  "rating": 5,
  "comment": "Amazing place!",
  "userId": 1,
  "placeId": 1
}
```

---

### Itineraries API

#### Get All Itineraries
```http
GET /itineraries
```

#### Create Itinerary
```http
POST /itineraries
Content-Type: application/json

{
  "title": "3 Days in Nha Trang",
  "startDate": "2026-07-01T00:00:00.000Z",
  "days": 3,
  "budget": 5000000,
  "userId": 1
}
```

---

## 🗃️ Database Schema

### Prisma Schema Location
```
prisma/schema.prisma
```

### Main Models
- **User** - Users with admin/regular roles
- **Category** - Place categories
- **Place** - Tourist destinations
- **Review** - User reviews for places
- **Itinerary** - Trip itineraries
- **ItineraryDetail** - Individual stops in itinerary

### Relations
- User → Reviews (1:N)
- User → Itineraries (1:N)
- Category → Places (1:N)
- Place → Reviews (1:N)
- Place → ItineraryDetails (1:N)
- Itinerary → ItineraryDetails (1:N)

All relations use **Cascade Delete** for data integrity.

---

## 🔒 Security Features

- ✅ JWT Token Authentication
- ✅ Bcrypt Password Hashing (10 rounds)
- ✅ Request Validation with class-validator
- ✅ CORS enabled
- ✅ Helmet security headers (recommended for production)
- ✅ Rate limiting (recommended for production)

---

## 📊 Monitoring & Logging

### Health Check
```http
GET /
```
Returns: "Vãi Chưởng, CloudMood đã sẵn sàng để hoạt động!"

### Prisma Studio
View database in browser:
```bash
npx prisma studio
```
Opens at `http://localhost:5555`

---

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm run start:prod
```

### Environment Variables for Production
```env
NODE_ENV=production
DATABASE_URL=<production-database-url>
JWT_SECRET=<strong-random-secret>
JWT_EXPIRATION=7d
PORT=3000
```

### Recommended Production Setup
- Use PostgreSQL managed service (Supabase, AWS RDS, etc.)
- Enable SSL for database connection
- Use environment variables for all secrets
- Set up logging (Winston, Pino)
- Enable rate limiting
- Use Helmet for security headers
- Set up monitoring (New Relic, Datadog, etc.)

---

## 🐛 Troubleshooting

### Prisma Issues
```bash
# If Prisma Client is out of sync
npx prisma generate

# If migrations fail
npx prisma migrate reset
npx prisma migrate dev
```

### Port Already in Use
```bash
# Windows - Kill process on port 3000
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or change PORT in .env file
```

### Database Connection Issues
- Check DATABASE_URL in .env
- Ensure PostgreSQL is running
- Verify credentials and network access

---

## 📝 Notes

### Demo Users (after seeding)
- **Admin**: admin@cloudmood.com / admin123
- **Users**: 
  - nguyen.van.a@gmail.com / user123
  - tran.thi.b@gmail.com / user123
  - le.minh.c@gmail.com / user123
  - pham.thu.d@gmail.com / user123
  - hoang.van.e@gmail.com / user123

### Seed Script
Location: `prisma/seed.ts`

Run: `npx prisma db seed`

---

## 🛠️ Tech Stack

- **Framework**: NestJS 11.0.1
- **Language**: TypeScript 5.7.3
- **Database**: PostgreSQL (Supabase)
- **ORM**: Prisma 5.22.0
- **Authentication**: JWT + Passport
- **Validation**: class-validator + class-transformer
- **Password Hashing**: Bcrypt
- **File Upload**: Multer + Cloudinary
- **HTTP Client**: Axios

---

## 📞 Support

For issues or questions:
- Check logs in console
- Review Prisma schema
- Check API endpoint documentation above
- Contact: admin@cloudmood.com

---

**Happy Coding! 🚀**
