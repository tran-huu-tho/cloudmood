# 🎨 CloudMood Admin Dashboard - Next.js

Admin Dashboard cho CloudMood Travel Management Platform

---

## 🚀 Quick Start

### Installation
```bash
npm install
```

### Environment Setup (Optional)
Create `.env.local` file if needed:
```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### Run Development Server
```bash
npm run dev
```

Dashboard runs at `http://localhost:3001`

---

## 📦 Available Scripts

```bash
npm run dev         # Start development server
npm run build       # Build for production
npm run start       # Start production server
npm run lint        # Run ESLint
```

---

## 🗂️ Project Structure

```
app/
├── page.tsx                   # Login/Welcome page
├── layout.tsx                 # Root layout
├── globals.css                # Global styles & animations
│
└── dashboard/
    └── page.tsx               # Admin dashboard

public/
├── logo.png                   # CloudMood logo
└── logo-cloudmood.png         # Original logo

tailwind.config.ts             # Tailwind CSS configuration
tsconfig.json                  # TypeScript configuration
next.config.ts                 # Next.js configuration
```

---

## 🔐 Login Credentials

### Admin Account
- **Email**: `admin@cloudmood.com`
- **Password**: `admin123`

---

## 🎨 Design System

### Color Palette
```css
Primary: Blue (#0ea5e9) to Cyan (#06b6d4)
Secondary: Purple (#8b5cf6) to Pink (#ec4899)
Dark: Slate (#1e293b) to Blue-900 (#1e3a8a)
Success: Green (#10b981)
Warning: Orange (#f59e0b)
Error: Red (#ef4444)
```

### Typography
- **Font**: System font stack
- **Headings**: text-3xl to text-5xl
- **Body**: text-base to text-xl
- **Mono**: font-mono for code/emails

### Components
- **Glass Morphism**: `bg-white/10 backdrop-blur-xl`
- **Cards**: Rounded-2xl with shadows
- **Buttons**: Gradient backgrounds with hover effects
- **Inputs**: Focus states with ring effects
- **Animations**: Smooth transitions, blob animations

---

## 📱 Pages

### Welcome/Login Page (`/`)
- Full-screen gradient background
- Animated blob patterns
- Split layout:
  - Left: Branding, features, stats
  - Right: Login card with glass effect
- Features showcase
- Statistics display
- Demo credentials info

### Dashboard Page (`/dashboard`)
- Fixed sidebar (320px)
- Stats grid (Users, Places, Categories, Reviews)
- Places Map section
- Itinerary History section
- Quick actions

---

## 🔌 API Integration

### Login API
```typescript
const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email, password }),
});

const data = await response.json();
localStorage.setItem("accessToken", data.accessToken);
localStorage.setItem("user", JSON.stringify(data.user));
```

### Protected API Calls
```typescript
const token = localStorage.getItem("accessToken");
const response = await fetch(`${API_URL}/endpoint`, {
  headers: {
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});
```

---

## 🎯 Features

### Implemented
- ✅ Modern login interface
- ✅ Admin dashboard layout
- ✅ Responsive design
- ✅ Glass morphism effects
- ✅ Gradient backgrounds
- ✅ Animated elements
- ✅ Form validation
- ✅ Error handling
- ✅ JWT authentication
- ✅ Local storage management

### To Implement
- [ ] User management UI
- [ ] Place management UI
- [ ] Category management UI
- [ ] Review management UI
- [ ] Itinerary management UI
- [ ] Real-time statistics
- [ ] Data tables with search/filter
- [ ] Image upload UI
- [ ] Map integration
- [ ] Analytics charts

---

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm run start
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify
```bash
# Build command
npm run build

# Publish directory
.next
```

---

## 🎨 Customization

### Update Logo
Replace files in `public/`:
- `logo.png` - Main logo (used in app)
- `logo-cloudmood.png` - Original logo

### Change Colors
Edit `globals.css` and Tailwind classes:
```css
/* Gradient backgrounds */
bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900

/* Primary buttons */
bg-gradient-to-r from-blue-600 to-cyan-500
```

### Modify Animations
Edit `globals.css`:
```css
@keyframes blob {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}
```

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3001
netstat -ano | findstr :3001
taskkill /PID <PID> /F

# Or change port
npm run dev -- -p 3002
```

### API Connection Issues
- Check backend is running on port 3000
- Verify NEXT_PUBLIC_API_URL in .env.local
- Check CORS settings in backend
- Verify credentials are correct

### Build Errors
```bash
# Clear Next.js cache
Remove-Item -Path ".next" -Recurse -Force

# Reinstall dependencies
Remove-Item -Path "node_modules" -Recurse -Force
npm install
```

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16.2.9
- **React**: 19.x
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

---

## 📞 Support

For issues or questions:
- Check browser console for errors
- Verify API endpoint connectivity
- Review authentication flow
- Contact: admin@cloudmood.com

---

**Made with ❤️ for CloudMood**
