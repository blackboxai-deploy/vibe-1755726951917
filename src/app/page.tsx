'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function HelloWorldPage() {
  const [clickCount, setClickCount] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleGreetingClick = () => {
    setClickCount(prev => prev + 1)
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const getGreetingMessage = () => {
    if (clickCount === 0) return "Hello, World!"
    if (clickCount === 1) return "Nice to meet you!"
    if (clickCount === 2) return "Welcome back!"
    if (clickCount === 3) return "You're persistent!"
    return `You've clicked ${clickCount} times! 🎉`
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md">
        <Card className="backdrop-blur-sm bg-white/80 shadow-xl border-0 ring-1 ring-gray-200/50">
          <CardHeader className="text-center pb-4">
            <CardTitle className={`text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent transition-all duration-500 ${isAnimating ? 'scale-110' : 'scale-100'}`}>
              {getGreetingMessage()}
            </CardTitle>
            <CardDescription className="text-gray-600 mt-2">
              A simple, interactive greeting built with Next.js 15
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="text-center space-y-4">
              <p className="text-gray-700">
                Welcome to your Hello World application! This is built with modern web technologies.
              </p>
              
              <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-600 mb-2">
                  ✨ Features included:
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Next.js 15 with App Router</li>
                  <li>• TypeScript for type safety</li>
                  <li>• Tailwind CSS styling</li>
                  <li>• shadcn/ui components</li>
                  <li>• Responsive design</li>
                </ul>
              </div>
              
              <Button 
                onClick={handleGreetingClick}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
                size="lg"
              >
                Click me for a new greeting! 
                {clickCount > 0 && (
                  <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                    {clickCount}
                  </span>
                )}
              </Button>
              
              <p className="text-xs text-gray-500 mt-4">
                Built with ❤️ using modern web technologies
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}