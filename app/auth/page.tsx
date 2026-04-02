'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import authServices from '@/services/AuthServices';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '', general: '' });
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = { email: '', password: '', general: '' };
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email tidak valid';
    }
    if (!password) {
      newErrors.password = 'Password wajib diisi';
    }
    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const handleLogin = async () => {
    if (!validate()) return;

    setLoading(true);
    setErrors({ email: '', password: '', general: '' });

    try {
      console.log('Attempting login with:', { email, password });
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      console.log('SignIn result:', result);

      if (result?.error) {
        setErrors(prev => ({ ...prev, general: 'Email atau password salah' }));
        return;
      }

      router.push('/');
      router.refresh();
    } catch (error) {
      setErrors(prev => ({ ...prev, general: 'Terjadi kesalahan, coba lagi' }));
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleLogin();
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-stone-50 px-4">
      <div className="bg-white border border-gray-100 shadow-xl rounded-2xl p-10 w-full max-w-sm">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Akses Download</h1>
          <p className="text-sm text-gray-500 leading-relaxed">
            Silakan masuk untuk mengunduh <br />
            <span className="font-semibold text-[#800000]">App POS Panglima</span>
          </p>
        </div>

        {/* General Error */}
        {errors.general && (
          <div className="mb-4 px-3 py-2 bg-red-50 border-l-4 border-red-500 rounded text-xs text-red-700">
            {errors.general}
          </div>
        )}

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5" htmlFor="email">
            Email Pengguna
          </label>
          <input
            id="email"
            type="email"
            placeholder="nama@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            onKeyDown={handleKeyDown}
            className={`w-full h-11 px-4 text-sm border rounded-xl outline-none transition-all
              focus:ring-2 focus:ring-[#800000]/10 focus:border-[#800000]
              ${errors.email ? 'border-red-400' : 'border-gray-200'}`}
          />
          {errors.email && (
            <p className="text-[11px] text-red-500 mt-1 ml-1">{errors.email}</p>
          )}
        </div>

        {/* Password Input */}
        <div className="mb-8">
          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
              className={`w-full h-11 px-4 pr-24 text-sm border rounded-xl outline-none transition-all
                focus:ring-2 focus:ring-[#800000]/10 focus:border-[#800000]
                ${errors.password ? 'border-red-400' : 'border-gray-200'}`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(prev => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] font-bold uppercase text-[#800000] hover:text-orange-600 transition-colors"
            >
              {showPassword ? 'Sembunyikan' : 'Lihat'}
            </button>
          </div>
          {errors.password && (
            <p className="text-[11px] text-red-500 mt-1 ml-1">{errors.password}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="button"
          onClick={handleLogin}
          disabled={loading}
          className="w-full h-12 bg-gradient-to-r from-[#800000] to-[#b30000] text-white text-sm font-bold rounded-xl
            flex items-center justify-center gap-3 shadow-lg shadow-maroon-900/30
            hover:from-[#b30000] hover:to-[#cc8400] active:scale-[0.97] 
            disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
        >
          {loading ? (
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          )}
          {loading ? 'Memverifikasi...' : 'Masuk & Download App'}
        </button>

        <p className="mt-8 text-center text-[11px] text-gray-400">
          &copy; 2026 Panglima Roqiiqu Group. All rights reserved.
        </p>

      </div>
    </main>
  );
}