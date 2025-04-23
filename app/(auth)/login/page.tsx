"use client";

import { login } from "./action";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Zap, Shield, Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import HyperspeedNext from "@/components/ui/hyperspeed-next";
import { useFormStatus } from "react-dom";
import { Suspense } from "react";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium py-6 rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(167,139,250,0.3)] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 group relative overflow-hidden border-0 disabled:opacity-70"
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Logging in...
        </>
      ) : (
        <>
          <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
          Log in
        </>
      )}
    </Button>
  );
}

function LoginForm() {
  const searchParams = useSearchParams();
  const redirectTo = searchParams?.get("redirect_to") || "";

  return (
    <form action={login} className="space-y-6 relative z-10">
      <input type="hidden" name="redirect_to" value={redirectTo} />

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-300">
          Email
        </label>
        <div className="relative group">
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="bg-gray-800/50 border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 backdrop-blur-sm text-white placeholder:text-gray-400"
            placeholder="Enter your email"
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="password" className="text-sm font-medium text-gray-300">
          Password
        </label>
        <div className="relative group">
          <Input
            id="password"
            name="password"
            type="password"
            required
            className="bg-gray-800/50 border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 backdrop-blur-sm text-white placeholder:text-gray-400"
            placeholder="Enter your password"
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
      </div>

      <div className="pt-4 space-y-4">
        <SubmitButton />
        <Link href="/signup" className="block w-full">
          <Button
            variant="outline"
            className="w-full bg-transparent border-2 border-gray-700 hover:border-purple-500/50 hover:bg-gray-800/50 text-gray-300 font-medium py-6 rounded-lg transition-all duration-300 hover:text-white"
          >
            Create account
          </Button>
        </Link>
      </div>
    </form>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full flex">
      {/* Left Column - Decorative */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-black">
        <div className="absolute inset-0">
          <HyperspeedNext templateNumber={0} />
        </div>
        <div className="absolute inset-0">
          {/* Animated background elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        <div className="relative z-20 p-12 flex flex-col h-full justify-between">
          <div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
              ZONE LEADER
            </h1>
            <p className="text-gray-300 mt-4 text-lg max-w-md">
              Enter the realm of power. Where hunters rise and legends are born.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center backdrop-blur-sm">
                <Zap className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Gain Power</h3>
                <p className="text-gray-400 text-sm">
                  Level up and become stronger
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center backdrop-blur-sm">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Join Elite Ranks</h3>
                <p className="text-gray-400 text-sm">
                  Access exclusive hunter content
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Form */}
      <div className="w-full lg:w-1/2 min-h-screen bg-gray-900 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8 relative">
          {/* Decorative Elements */}
          <div className="absolute -top-20 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />

          {/* Form Content */}
          <div className="relative">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">
                Welcome Back
              </h2>
              <p className="text-gray-400">
                Enter your credentials to continue
              </p>
            </div>

            <Suspense fallback={<div>Loading...</div>}>
              <LoginForm />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
