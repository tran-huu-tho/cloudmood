"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  ArrowRight, MapPin, Users, Star, Shield, 
  Calendar, Globe, Heart, CheckCircle, Database, Lock, Mail, Eye, EyeOff,
  Sparkles, TrendingUp, Cloud
} from "lucide-react";

export default function WelcomePage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Đăng nhập thất bại");
      }

      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("user", JSON.stringify(data.user));
      router.push("/dashboard");
    } catch (err: any) {
      if (err.message.includes("Failed to fetch") || err.message.includes("fetch")) {
        setError("Không thể kết nối đến máy chủ. Vui lòng kiểm tra lại.");
      } else {
        setError("Email hoặc mật khẩu không chính xác");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900">
      {/* Animated Background Patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-6xl mx-auto">
          
          {/* Main Content */}
          <div className="text-center space-y-12">
            
            {/* Logo Section - Center with Amazing Effects */}
            <div className="flex flex-col items-center space-y-6">
              <div className="relative group">
                {/* Outer Glow Ring */}
                <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-1000 animate-pulse"></div>
                
                {/* Middle Ring */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
                
                {/* Logo Container */}
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-500 animate-blob"></div>
                  <img 
                    src="/logo.png" 
                    alt="CloudMood" 
                    className="relative w-32 h-32 rounded-3xl shadow-2xl ring-4 ring-white/30 group-hover:ring-white/50 transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Floating Particles */}
                <div className="absolute -inset-12 pointer-events-none">
                  <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-ping"></div>
                  <div className="absolute top-0 right-0 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-ping animation-delay-1000"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-ping animation-delay-2000"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 bg-pink-400 rounded-full opacity-60 animate-ping animation-delay-3000"></div>
                </div>
              </div>

              {/* Brand Text */}
              <div className="space-y-3">
                <h1 className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent animate-in">
                  CloudMood
                </h1>
                <div className="flex items-center justify-center gap-2 text-cyan-300">
                  <Shield className="w-5 h-5" />
                  <p className="text-xl font-semibold">Nền Tảng Quản Trị Du Lịch</p>
                </div>
                <p className="text-lg text-slate-300 max-w-xl mx-auto">
                  Hệ thống quản lý thông minh với công nghệ tiên tiến, 
                  mang đến trải nghiệm quản trị chuyên nghiệp
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { icon: Users, label: "Người dùng", value: "2.5K+", color: "from-blue-500 to-cyan-500" },
                { icon: MapPin, label: "Địa điểm", value: "1.2K+", color: "from-purple-500 to-pink-500" },
                { icon: Star, label: "Đánh giá", value: "8.5K+", color: "from-orange-500 to-yellow-500" },
                { icon: Calendar, label: "Chuyến đi", value: "3.4K+", color: "from-green-500 to-emerald-500" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity blur-xl from-cyan-500/50 to-blue-500/50 rounded-2xl"></div>
                  <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3 mx-auto`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Login Card */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                {/* Card Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-30"></div>
                
                {/* Main Card */}
                <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl shadow-lg mb-4">
                      <Lock className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      Đăng Nhập
                    </h3>
                    <p className="text-gray-600">Truy cập hệ thống quản trị</p>
                  </div>

                  {/* Error Message */}
                  {error && (
                    <div className="mb-6 p-4 rounded-xl bg-red-50 border-l-4 border-red-500 animate-in">
                      <p className="text-red-700 font-medium flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        {error}
                      </p>
                    </div>
                  )}

                  {/* Login Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email */}
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Địa chỉ Email
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Mail className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your@email.com"
                          className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                          required
                        />
                      </div>
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Mật khẩu
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Lock className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                          type={showPassword ? "text" : "password"}
                          value={formData.password}
                          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                          placeholder="••••••••"
                          className="w-full pl-12 pr-14 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="relative w-full group"
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                      <div className="relative flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl transition-all">
                        {loading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Đang xác thực...</span>
                          </>
                        ) : (
                          <>
                            <Shield className="w-5 h-5" />
                            <span>Đăng nhập hệ thống</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </div>
                    </button>
                  </form>

                  {/* Footer */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Globe className="w-4 h-4 text-blue-500" />
                        <span>Next.js 16</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Database className="w-4 h-4 text-purple-500" />
                        <span>PostgreSQL</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Lock className="w-4 h-4 text-green-500" />
                        <span>JWT Secure</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto">
              {[
                { icon: TrendingUp, text: "Phân tích dữ liệu thời gian thực" },
                { icon: Users, text: "Quản lý người dùng nâng cao" },
                { icon: Shield, text: "Bảo mật JWT an toàn tuyệt đối" },
                { icon: Cloud, text: "Hạ tầng đám mây hiện đại" }
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 text-slate-300 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-base font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Bottom Footer */}
          <div className="mt-16 text-center">
            <p className="text-white/60 flex items-center justify-center gap-2">
              <Heart className="w-4 h-4 text-red-400" />
              <span>© 2026 CloudMood Travel Platform. Được phát triển với ❤️ tại Việt Nam</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
