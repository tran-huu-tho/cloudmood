# 🚀 CloudMood - Hướng Dẫn Nhanh

## 📦 Cấu Trúc Dự Án

```
cloudmood/
├── src/              # Backend NestJS (API)
├── prisma/           # Database schema & seed
├── admin-web/        # Frontend Flutter Web
├── .env              # Biến môi trường
└── package.json      # Backend dependencies
```

---

## 🏃 Chạy Dự Án

### 1️⃣ Chạy Backend (NestJS)
```bash
# Từ thư mục cloudmood/
npm run start:dev
```
✅ Backend chạy tại: **http://localhost:3001**

### 2️⃣ Chạy Frontend (Flutter Web)  
```bash
# Từ thư mục cloudmood/admin-web/
flutter run -d chrome --web-port 3000
```
✅ Admin Dashboard chạy tại: **http://localhost:3000**

---

## 🔑 Đăng Nhập

Mở trình duyệt: **http://localhost:3000**

**Admin Account:**
- Email: `admin@cloudmood.com`
- Password: `admin123`

**User Accounts:**
- `nguyen.van.a@gmail.com` / `user123`
- `tran.thi.b@gmail.com` / `user123`
- `le.minh.c@gmail.com` / `user123`

---

## 📊 Database

### Chạy Migration
```bash
npx prisma migrate dev
```

### Seed Data (tạo user mẫu)
```bash
npx prisma db seed
```

### Xem Database (Prisma Studio)
```bash
npx prisma studio
```
Mở: **http://localhost:5555**

---

## 🛠️ Lệnh Hữu Ích

### Backend
```bash
npm run start:dev      # Development mode (hot reload)
npm run start          # Production mode
npm run build          # Build TypeScript
npm run lint           # Lint code
```

### Frontend (Flutter)
```bash
flutter run -d chrome --web-port 3000  # Chạy web
flutter build web                      # Build production
flutter pub get                        # Cài dependencies
flutter clean                          # Clean cache
```

### Database
```bash
npx prisma generate    # Tạo Prisma Client
npx prisma migrate dev # Chạy migration
npx prisma db seed     # Seed data
npx prisma studio      # GUI quản lý DB
```

---

## 🌐 API Endpoints

Base URL: `http://localhost:3001`

### Authentication
- `POST /auth/login` - Đăng nhập

### Users
- `GET /users` - Lấy danh sách users
- `GET /users/:id` - Lấy user theo ID
- `POST /users` - Tạo user mới
- `PATCH /users/:id` - Cập nhật user
- `DELETE /users/:id` - Xóa user

### Places
- `GET /places` - Lấy danh sách địa điểm
- `POST /places` - Tạo địa điểm
- `PATCH /places/:id` - Cập nhật
- `DELETE /places/:id` - Xóa

### Categories, Reviews, Itineraries
Tương tự như trên

---

## 🐛 Troubleshooting

### Backend không chạy được?
1. Kiểm tra `.env` có đầy đủ DATABASE_URL chưa
2. Chạy `npm install` để cài dependencies
3. Chạy `npx prisma generate` để tạo Prisma Client

### Flutter không chạy được?
1. Kiểm tra Flutter SDK đã cài chưa: `flutter --version`
2. Chạy `flutter pub get` để cài dependencies
3. Chạy `flutter doctor` để kiểm tra môi trường

### Không đăng nhập được?
1. Kiểm tra backend đã chạy chưa (port 3001)
2. Kiểm tra database đã seed chưa
3. Mở DevTools (F12) xem console có lỗi gì

### Port 3000 hoặc 3001 đã được sử dụng?
```bash
# Kill process trên Windows
$processId = (Get-NetTCPConnection -LocalPort 3001).OwningProcess
Stop-Process -Id $processId -Force
```

---

## 📱 Mở Rộng Sang Mobile

Flutter Web hiện tại có thể dễ dàng mở rộng sang Mobile:

```bash
# iOS (cần macOS + Xcode)
flutter run -d ios

# Android (cần Android Studio)
flutter run -d android
```

**80% code dùng chung!** Chỉ cần customize UI cho mobile.

---

## 🎯 Tính Năng Đã Có

✅ Authentication (JWT)
✅ Admin Dashboard với 6 modules
✅ User Management
✅ Place Management  
✅ Category Management
✅ Review Management
✅ Itinerary Management
✅ Beautiful UI với Material Design 3
✅ LocalStorage cho token
✅ CORS enabled
✅ Data validation

## 🚧 Đang Phát Triển

🔜 AI Integration (gợi ý địa điểm)
🔜 Weather API (thời tiết)
🔜 Image upload (Cloudinary)
🔜 Mobile App (iOS/Android)
🔜 Real-time notifications
🔜 Advanced analytics

---

## 📞 Support

Gặp vấn đề? Liên hệ team hoặc tạo issue trên GitHub.

**Happy Coding! 🚀**
