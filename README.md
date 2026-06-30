# 🌤️ CloudMood - Travel Management Platform

<div align="center">

![CloudMood Logo](cloudmood/admin-dashboard/public/logo.png)

**Nền tảng quản lý du lịch thông minh với công nghệ hiện đại**

[![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

</div>

---

## 📋 Mục Lục

- [Giới Thiệu](#-giới-thiệu)
- [Tính Năng](#-tính-năng)
- [Kiến Trúc Hệ Thống](#-kiến-trúc-hệ-thống)
- [Công Nghệ Sử Dụng](#-công-nghệ-sử-dụng)
- [Cài Đặt](#-cài-đặt)
- [Cấu Trúc Dự Án](#-cấu-trúc-dự-án)
- [API Endpoints](#-api-endpoints)
- [Database Schema](#-database-schema)
- [Hướng Phát Triển](#-hướng-phát-triển)
- [Contributors](#-contributors)

---

## 🎯 Giới Thiệu

**CloudMood** là nền tảng quản lý du lịch toàn diện, giúp quản trị viên điều hành mọi khía cạnh của hệ thống du lịch một cách chuyên nghiệp và hiện đại.

### ✨ Điểm Nổi Bật

- 🔐 **Bảo mật cao** với JWT Authentication
- 🎨 **Giao diện đẹp mắt** với Tailwind CSS & Modern UI/UX
- ⚡ **Hiệu suất cao** với Next.js 16 & NestJS 11
- 🗄️ **Database mạnh mẽ** với PostgreSQL & Prisma ORM
- ☁️ **Cloud Storage** với Cloudinary
- 🤖 **AI Integration** sẵn sàng mở rộng

---

## 🚀 Tính Năng

### 🛡️ Admin Dashboard
- ✅ Quản lý người dùng (Users)
- ✅ Quản lý địa điểm du lịch (Places)
- ✅ Quản lý danh mục (Categories)
- ✅ Quản lý đánh giá (Reviews)
- ✅ Quản lý lịch trình (Itineraries)
- ✅ Phân quyền Admin/User
- ✅ Dashboard thống kê

### 🔒 Authentication & Security
- JWT Token-based authentication
- Password hashing với Bcrypt
- Role-based access control (Admin/User)
- Protected routes & middleware

### 📊 Data Management
- CRUD operations cho tất cả entities
- Relational data với Prisma ORM
- Data validation với class-validator
- Cascade delete relationships

### 🌐 API Features
- RESTful API architecture
- CORS support
- Request validation
- Error handling
- File upload support

---

## 🏗️ Kiến Trúc Hệ Thống

```
┌─────────────────────────────────────────────────────────────┐
│                     CLIENT LAYER                            │
│  ┌─────────────────────────────────────────────────────┐   │
│  │   Next.js 16 Admin Dashboard (Port 3001)            │   │
│  │   - TypeScript                                       │   │
│  │   - Tailwind CSS v4                                  │   │
│  │   - Lucide Icons                                     │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                            ↓ HTTP/HTTPS
┌─────────────────────────────────────────────────────────────┐
│                     API LAYER                               │
│  ┌─────────────────────────────────────────────────────┐   │
│  │   NestJS Backend (Port 3000)                        │   │
│  │   ┌──────────┬──────────┬──────────┬──────────┐    │   │
│  │   │   Auth   │  Users   │  Places  │Categories│    │   │
│  │   ├──────────┼──────────┼──────────┼──────────┤    │   │
│  │   │ Reviews  │Itinera..│    AI    │  Rules   │    │   │
│  │   ├──────────┼──────────┼──────────┼──────────┤    │   │
│  │   │ Weather  │Cloudinary│  Prisma  │   JWT    │    │   │
│  │   └──────────┴──────────┴──────────┴──────────┘    │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                            ↓ ORM
┌─────────────────────────────────────────────────────────────┐
│                   DATABASE LAYER                            │
│  ┌─────────────────────────────────────────────────────┐   │
│  │   PostgreSQL (Supabase)                             │   │
│  │   - Users                                            │   │
│  │   - Categories                                       │   │
│  │   - Places                                           │   │
│  │   - Reviews                                          │   │
│  │   - Itineraries & ItineraryDetails                  │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                   EXTERNAL SERVICES                         │
│  - Cloudinary (Image Storage)                               │
│  - AI Service (Future Integration)                          │
│  - Weather API (Future Integration)                         │
└─────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Công Nghệ Sử Dụng

### Backend (NestJS)
| Technology | Version | Purpose |
|------------|---------|---------|
| **NestJS** | 11.0.1 | Backend Framework |
| **Prisma** | 5.22.0 | ORM & Database Toolkit |
| **PostgreSQL** | - | Relational Database |
| **JWT** | 11.0.2 | Authentication |
| **Bcrypt** | 6.0.0 | Password Hashing |
| **Cloudinary** | 2.10.0 | Image Storage |
| **Passport** | 0.7.0 | Authentication Middleware |
| **Class Validator** | 0.15.1 | Data Validation |
| **Multer** | 2.2.0 | File Upload |

### Frontend (Next.js)
| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 16.2.9 | React Framework |
| **React** | 19.x | UI Library |
| **TypeScript** | 5.x | Type Safety |
| **Tailwind CSS** | 4.x | Styling |
| **Lucide React** | Latest | Icons |

### Database
- **PostgreSQL** via **Supabase**
- **Prisma ORM** for type-safe database queries

---

## 📦 Cài Đặt

### Prerequisites
- Node.js >= 18.x
- npm >= 9.x
- PostgreSQL database (Supabase recommended)

### 1. Clone Repository
```bash
git clone <repository-url>
cd CloudMood
```

### 2. Backend Setup
```bash
cd cloudmood

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Edit .env with your database credentials

# Generate Prisma Client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# Seed database with demo data
npx prisma db seed

# Start backend server
npm run start:dev
```

Backend sẽ chạy tại: `http://localhost:3000`

### 3. Frontend Setup
```bash
cd cloudmood/admin-dashboard

# Install dependencies
npm install

# Setup environment variables (if needed)
# Create .env.local for API URL

# Start development server
npm run dev
```

Frontend sẽ chạy tại: `http://localhost:3001`

### 4. Access Admin Dashboard
- URL: `http://localhost:3001`
- Email: `admin@cloudmood.com`
- Password: `admin123`

---

## 📁 Cấu Trúc Dự Án

```
CloudMood/
├── cloudmood/                          # Backend NestJS
│   ├── prisma/
│   │   ├── schema.prisma              # Database schema
│   │   └── seed.ts                    # Seed data
│   ├── src/
│   │   ├── main.ts                    # Entry point
│   │   ├── app.module.ts              # Root module
│   │   ├── app.controller.ts          # Health check
│   │   ├── app.service.ts             # App service
│   │   │
│   │   ├── auth/                      # Authentication module
│   │   │   ├── auth.controller.ts     # Login endpoint
│   │   │   ├── auth.service.ts        # Auth logic
│   │   │   └── auth.module.ts
│   │   │
│   │   ├── users/                     # Users module
│   │   │   ├── users.controller.ts    # User CRUD endpoints
│   │   │   ├── users.service.ts       # User business logic
│   │   │   ├── users.module.ts
│   │   │   ├── dto/                   # Data Transfer Objects
│   │   │   └── entities/              # User entity
│   │   │
│   │   ├── categories/                # Categories module
│   │   ├── places/                    # Places module
│   │   ├── reviews/                   # Reviews module
│   │   ├── itineraries/               # Itineraries module
│   │   │
│   │   ├── prisma/                    # Prisma module (global)
│   │   │   ├── prisma.service.ts
│   │   │   └── prisma.module.ts
│   │   │
│   │   ├── cloudinary/                # Cloudinary module
│   │   ├── ai/                        # AI module (future)
│   │   ├── weather/                   # Weather module (future)
│   │   └── rules/                     # Business rules (future)
│   │
│   ├── .env                           # Environment variables
│   ├── package.json
│   └── tsconfig.json
│
├── cloudmood/admin-dashboard/          # Frontend Next.js
│   ├── app/
│   │   ├── page.tsx                   # Login/Welcome page
│   │   ├── layout.tsx                 # Root layout
│   │   ├── globals.css                # Global styles
│   │   │
│   │   └── dashboard/
│   │       └── page.tsx               # Admin dashboard
│   │
│   ├── public/
│   │   └── logo.png                   # CloudMood logo
│   │
│   ├── package.json
│   ├── tailwind.config.ts
│   └── tsconfig.json
│
└── README.md                           # This file
```

---

## 🔌 API Endpoints

### Authentication
```
POST   /auth/login              # Login with email/password
```

### Users
```
GET    /users                   # Get all users
GET    /users/:id               # Get user by ID
POST   /users                   # Create new user
PATCH  /users/:id               # Update user
DELETE /users/:id               # Delete user
```

### Categories
```
GET    /categories              # Get all categories
GET    /categories/:id          # Get category by ID
POST   /categories              # Create category
PATCH  /categories/:id          # Update category
DELETE /categories/:id          # Delete category
```

### Places
```
GET    /places                  # Get all places
GET    /places/:id              # Get place by ID
POST   /places                  # Create place
PATCH  /places/:id              # Update place
DELETE /places/:id              # Delete place
```

### Reviews
```
GET    /reviews                 # Get all reviews
GET    /reviews/:id             # Get review by ID
POST   /reviews                 # Create review
PATCH  /reviews/:id             # Update review
DELETE /reviews/:id             # Delete review
```

### Itineraries
```
GET    /itineraries             # Get all itineraries
GET    /itineraries/:id         # Get itinerary by ID
POST   /itineraries             # Create itinerary
PATCH  /itineraries/:id         # Update itinerary
DELETE /itineraries/:id         # Delete itinerary
```

---

## 🗄️ Database Schema

### Users
```prisma
model User {
  id          Int      @id @default(autoincrement())
  fullName    String
  email       String   @unique
  password    String
  avatar      String?
  role        Boolean  @default(false)  // true = admin
  createdAt   DateTime @default(now())
  reviews     Review[]
  itineraries Itinerary[]
}
```

### Categories
```prisma
model Category {
  id     Int      @id @default(autoincrement())
  name   String
  icon   String
  places Place[]
}
```

### Places
```prisma
model Place {
  id          Int      @id @default(autoincrement())
  name        String
  description String
  lat         Float
  long        Float
  address     String
  price       Float
  openTime    String
  closeTime   String
  categoryId  Int
  image       String
  category    Category @relation(fields: [categoryId], references: [id], onDelete: Cascade)
  reviews     Review[]
  itineraryDetails ItineraryDetail[]
}
```

### Reviews
```prisma
model Review {
  id      Int    @id @default(autoincrement())
  rating  Int
  comment String
  userId  Int
  placeId Int
  user    User   @relation(fields: [userId], references: [id], onDelete: Cascade)
  place   Place  @relation(fields: [placeId], references: [id], onDelete: Cascade)
}
```

### Itineraries
```prisma
model Itinerary {
  id        Int       @id @default(autoincrement())
  title     String
  startDate DateTime
  days      Int?
  budget    Float?
  userId    Int
  user      User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  details   ItineraryDetail[]
}

model ItineraryDetail {
  id          Int        @id @default(autoincrement())
  arrivalTime String
  leaveTime   String
  order       Int
  placeId     Int
  itineraryId Int
  place       Place      @relation(fields: [placeId], references: [id], onDelete: Cascade)
  itinerary   Itinerary  @relation(fields: [itineraryId], references: [id], onDelete: Cascade)
}
```

---

## 🚀 Hướng Phát Triển

### Phase 1: Core Features ✅ (Completed)
- [x] Backend API với NestJS
- [x] Database setup với PostgreSQL & Prisma
- [x] Authentication với JWT
- [x] Admin Dashboard với Next.js
- [x] CRUD operations cho tất cả entities
- [x] User management với role-based access

### Phase 2: Enhancement (In Progress)
- [ ] **Mobile App** (React Native / Flutter)
  - User-facing mobile application
  - Browse places, create itineraries
  - Write reviews, book trips
  
- [ ] **Advanced Search & Filters**
  - Search places by category, price, location
  - Filter reviews by rating
  - Sort itineraries by date, budget

- [ ] **Map Integration**
  - Display places on interactive map
  - Route planning for itineraries
  - Distance calculation

### Phase 3: AI & Automation
- [ ] **AI-Powered Recommendations**
  - Personalized place suggestions
  - Smart itinerary planning based on preferences
  - Weather-based recommendations

- [ ] **Weather Integration**
  - Real-time weather data for places
  - Weather forecasts for trip planning
  - Weather-based alerts

- [ ] **Chatbot Assistant**
  - AI chatbot for user queries
  - Trip planning assistance
  - Place recommendations

### Phase 4: Advanced Features
- [ ] **Payment Integration**
  - Online booking system
  - Payment gateway (VNPay, Momo, etc.)
  - Transaction management

- [ ] **Notification System**
  - Email notifications
  - Push notifications (mobile)
  - In-app notifications

- [ ] **Analytics & Reporting**
  - User behavior analytics
  - Place popularity metrics
  - Revenue reports
  - Booking statistics

- [ ] **Social Features**
  - User profiles
  - Follow system
  - Share itineraries
  - Social media integration

### Phase 5: Scalability & Performance
- [ ] **Caching Layer** (Redis)
- [ ] **CDN Integration** for images
- [ ] **Microservices Architecture**
- [ ] **Load Balancing**
- [ ] **Database Optimization & Indexing**
- [ ] **Real-time Features** (WebSocket)

### Phase 6: Enterprise Features
- [ ] **Multi-tenancy Support**
- [ ] **White-label Solution**
- [ ] **Advanced Admin Analytics**
- [ ] **Audit Logs**
- [ ] **Backup & Disaster Recovery**
- [ ] **Multi-language Support (i18n)**

---

## 🎨 Design System

### Colors
- **Primary**: Blue (#0ea5e9) to Cyan (#06b6d4)
- **Secondary**: Purple (#8b5cf6) to Pink (#ec4899)
- **Success**: Green (#10b981)
- **Warning**: Orange (#f59e0b)
- **Error**: Red (#ef4444)
- **Dark**: Slate (#1e293b) to Blue-900 (#1e3a8a)

### Typography
- **Font Family**: System Font Stack
- **Headings**: Bold, 2xl-5xl
- **Body**: Regular, base-lg
- **Mono**: Monospace for code

---

## 📸 Screenshots

### Login Page
Modern, professional login interface with gradient background and glass morphism effects.

### Admin Dashboard
Comprehensive dashboard with statistics, user management, and quick actions.

---

## 🤝 Contributors

- **Development Team** - CloudMood Travel Platform

---

## 📄 License

This project is private and proprietary.

---

## 📞 Contact & Support

For support and inquiries:
- Email: admin@cloudmood.com
- Website: Coming soon

---

<div align="center">

**Made with ❤️ by CloudMood Team**

⭐ Star this repo if you find it helpful!

</div>
