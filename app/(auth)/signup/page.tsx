"use client";

import { signup } from "../login/action";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Swords, Flame, Loader2 } from "lucide-react";
import HyperspeedNext from "@/components/ui/hyperspeed-next";
import { useFormStatus } from "react-dom";
import { Suspense } from "react";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-medium py-6 rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(167,139,250,0.3)] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 group relative overflow-hidden border-0 disabled:opacity-70"
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Creating account...
        </>
      ) : (
        <>
          <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
          Create Account
        </>
      )}
    </Button>
  );
}

function SignupForm() {
  return (
    <form action={signup} className="space-y-6 relative z-10">
      <div className="space-y-2">
        <label htmlFor="username" className="text-sm font-medium text-gray-300">
          Username
        </label>
        <div className="relative group">
          <Input
            id="username"
            name="username"
            type="text"
            required
            className="bg-gray-800/50 border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 backdrop-blur-sm text-white placeholder:text-gray-400"
            placeholder="Choose a username"
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
      </div>

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
          <div className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
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
            placeholder="Create a password"
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
      </div>

      <div className="pt-4 space-y-4">
        <SubmitButton />

        <Link href="/login" className="block text-center">
          <span className="text-sm text-gray-400">
            Already have an account?{" "}
            <span className="text-purple-400 hover:text-purple-300 transition-colors duration-200 hover:underline">
              Log in
            </span>
          </span>
        </Link>
      </div>
    </form>
  );
}

export default function SignupPage() {
  return (
    <div className="min-h-screen w-full flex flex-row-reverse">
      {/* Left Column - Form */}
      <div className="w-full lg:w-1/2 min-h-screen bg-gray-900 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8 relative">
          {/* Decorative Elements */}
          <div className="absolute -top-20 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />

          {/* Form Content */}
          <div className="relative">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">
                Join the Elite
              </h2>
              <p className="text-gray-400">Create your hunter account</p>
            </div>

            <Suspense fallback={<div>Loading...</div>}>
              <SignupForm />
            </Suspense>
          </div>
        </div>
      </div>

      {/* Right Column - Decorative */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-black">
        <div className="absolute inset-0">
          <HyperspeedNext templateNumber={5} />
        </div>

        <div className="relative z-20 p-12 flex flex-col h-full justify-between">
          <div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              BECOME A HUNTER
            </h1>
            <p className="text-gray-300 mt-4 text-lg max-w-md">
              Step into a world where power knows no bounds. Your journey to
              becoming a legendary hunter begins here.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center backdrop-blur-sm">
                <Swords className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Exclusive Access</h3>
                <p className="text-gray-400 text-sm">
                  Join elite hunting parties
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center backdrop-blur-sm">
                <Flame className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Unlock Powers</h3>
                <p className="text-gray-400 text-sm">
                  Develop unique abilities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
