"use client"

import GalaxyBackground from "@/components/galaxy-background"

// Header Component
function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-purple-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">ISTE</span>
            </div>
            <span className="text-xl font-bold text-purple-400">Student Chapter</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-300 hover:text-purple-400 transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors">
              About
            </a>
            <a href="#events" className="text-gray-300 hover:text-purple-400 transition-colors">
              Events
            </a>
            <a href="#team" className="text-gray-300 hover:text-purple-400 transition-colors">
              Team
            </a>
            <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors">
              Contact
            </a>
          </nav>

          <button className="md:hidden text-gray-300 hover:text-purple-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

// Hero Section
function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div className="text-center px-4 max-w-4xl mx-auto relative z-10">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
          ISTE
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-white">Student Chapter</h2>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Empowering Future Engineers | Shaping Tomorrow's Technology
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
            Join Our Community
          </button>
          <button className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300">
            Explore Events
          </button>
        </div>
      </div>
    </section>
  )
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            About ISTE
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The Indian Society for Technical Education (ISTE) is a leading professional body that promotes technical
            education and fosters innovation among students and professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 text-center hover:border-purple-400/40 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">Mission</h3>
            <p className="text-gray-300">
              To promote technical education and bridge the gap between academic learning and industry requirements.
            </p>
          </div>

          <div className="bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 text-center hover:border-purple-400/40 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Vision</h3>
            <p className="text-gray-300">
              To create a community of technically competent professionals who contribute to technological advancement.
            </p>
          </div>

          <div className="bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 text-center hover:border-purple-400/40 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl">⭐</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-pink-400">Goals</h3>
            <p className="text-gray-300">
              Enhance technical skills, promote research culture, and provide industry exposure to students.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Events Section
function EventsSection() {
  const events = [
    {
      title: "Tech Symposium 2024",
      date: "March 15-17, 2024",
      description: "Annual technical symposium featuring workshops, competitions, and guest lectures.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
    },
    {
      title: "Hackathon Championship",
      date: "February 10-12, 2024",
      description: "48-hour coding marathon to build innovative solutions for real-world problems.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop",
    },
    {
      title: "Industry Connect",
      date: "January 20, 2024",
      description: "Networking event connecting students with industry professionals.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop",
    },
  ]

  return (
    <section id="events" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Upcoming Events
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-purple-400">{event.title}</h3>
                <p className="text-cyan-400 mb-3">{event.date}</p>
                <p className="text-gray-300">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Main App Component
export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <GalaxyBackground />
      <Header />
      <HeroSection />
      <AboutSection />
      <EventsSection />
    </div>
  )
}
