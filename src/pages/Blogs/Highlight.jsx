import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Users, Calendar, Trophy, MessageCircle, Search, User, ShoppingBag, Star, Zap, Award } from 'lucide-react';

export default function PremierLeagueHighlight() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const slides = [
    {
      id: 1,
      title: "Premium Experience",
      subtitle: "Professional Training & Championship Events",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1993&q=80",
      buttonText: "BOOK NOW",
      accent: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Elite Training",
      subtitle: "Professional Coaching & Advanced Techniques",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      buttonText: "JOIN NOW",
      accent: "from-emerald-500 to-teal-600"
    },
    {
      id: 3,
      title: "Championship",
      subtitle: "Compete at the Highest Level",
      image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      buttonText: "EXPLORE",
      accent: "from-orange-500 to-red-600"
    }
  ];

  const highlights = [
    {
      id: 1,
      title: "Manchester United vs Liverpool",
      duration: "2:45",
      views: "2.1M",
      thumbnail: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      trending: true
    },
    {
      id: 2,
      title: "Chelsea vs Arsenal",
      duration: "3:12",
      views: "1.8M",
      thumbnail: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      trending: false
    },
    {
      id: 3,
      title: "Manchester City vs Tottenham",
      duration: "2:58",
      views: "2.3M",
      thumbnail: "https://images.unsplash.com/photo-1577223625816-7546f24d705b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      trending: true
    },
    {
      id: 4,
      title: "Newcastle vs Brighton",
      duration: "2:22",
      views: "890K",
      thumbnail: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      trending: false
    }
  ];

  const features = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Championship Events",
      description: "Compete in premier tournaments",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Elite Training",
      description: "World-class coaching programs",
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Live Streaming",
      description: "Watch matches in real-time",
      color: "from-emerald-400 to-teal-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Premium Access",
      description: "Exclusive member benefits",
      color: "from-pink-400 to-rose-500"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      <header className="relative z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Trophy className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-gray-800 text-2xl font-bold">Premier</span>
                <span className="text-blue-600 text-2xl font-bold ml-1">League</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group">
                My Team
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group">
                Challenge
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group">
                Blog
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group">
                Shop
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-300 cursor-pointer">
                  <MessageCircle className="w-5 h-5 text-gray-600" />
                </div>
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg">9</span>
              </div>
              <div className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-300 cursor-pointer">
                <Search className="w-5 h-5 text-gray-600" />
              </div>
              <div className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-300 cursor-pointer">
                <User className="w-5 h-5 text-gray-600" />
              </div>
              <div className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-300 cursor-pointer">
                <ShoppingBag className="w-5 h-5 text-gray-600" />
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Slider */}
      <section className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/60"></div>
              <div className={`absolute inset-0 bg-gradient-to-br ${slide.accent} opacity-10`}></div>
            </div>
            
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-6">
                <div className="max-w-4xl">
                  <div className="mb-6">
                    <span className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full text-sm font-semibold shadow-lg">
                      ✨ Premium Football Experience
                    </span>
                  </div>
                  <h1 className="text-6xl md:text-8xl font-black text-gray-800 mb-6 leading-tight">
                    <span className={`bg-gradient-to-r ${slide.accent} bg-clip-text text-transparent`}>
                      {slide.title}
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className={`group relative overflow-hidden bg-gradient-to-r ${slide.accent} text-white px-8 py-4 text-lg font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl`}>
                      <span className="relative z-10">{slide.buttonText}</span>
                      <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                    </button>
                    <button className="px-8 py-4 text-lg font-semibold text-gray-700 bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 p-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 p-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-gray-800 w-8' : 'bg-gray-400 w-2 hover:bg-gray-600'
              }`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute bottom-12 right-12 z-20 bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-xl font-bold shadow-lg">
          {String(currentSlide + 1).padStart(2, '0')}/{String(slides.length).padStart(2, '0')}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Premier League</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the ultimate football journey with our premium services and world-class facilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-6 shadow-lg`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
              Latest <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Highlights</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Catch up on the most exciting moments from recent matches
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight) => (
              <div key={highlight.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-3xl bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2">
                  <div className="relative">
                    <img 
                      src={highlight.thumbnail} 
                      alt={highlight.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 group-hover:bg-blue-500 group-hover:scale-125 transition-all duration-300 shadow-lg">
                        <Play className="w-8 h-8 text-gray-800 group-hover:text-white fill-current" />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      {highlight.trending && (
                        <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                          🔥 TRENDING
                        </span>
                      )}
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {highlight.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-gray-800 font-bold mb-3 group-hover:text-blue-600 transition-colors">
                      {highlight.title}
                    </h3>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="font-semibold">{highlight.views} views</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-5xl md:text-6xl font-black mb-4">20</div>
              <div className="text-lg font-semibold opacity-90">Teams</div>
            </div>
            <div className="text-white">
              <div className="text-5xl md:text-6xl font-black mb-4">380</div>
              <div className="text-lg font-semibold opacity-90">Matches</div>
            </div>
            <div className="text-white">
              <div className="text-5xl md:text-6xl font-black mb-4">1.2B</div>
              <div className="text-lg font-semibold opacity-90">Fans</div>
            </div>
            <div className="text-white">
              <div className="text-5xl md:text-6xl font-black mb-4">32</div>
              <div className="text-lg font-semibold opacity-90">Years</div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Buttons */}
      <div className="fixed right-8 bottom-8 z-50 flex flex-col space-y-4">
        <button className="group bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white p-4 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-110">
          <MessageCircle className="w-6 h-6" />
          <span className="absolute right-full mr-4 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Chat with us
          </span>
        </button>
        <button className="group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white p-4 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-110">
          <User className="w-6 h-6" />
          <span className="absolute right-full mr-4 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            My Profile
          </span>
        </button>
        <button className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white p-4 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-110">
          <Calendar className="w-6 h-6" />
          <span className="absolute right-full mr-4 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Schedule
          </span>
        </button>
      </div>

      {/* Chat Button */}
      <button className="fixed bottom-8 left-8 z-50 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 px-6 py-4 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200">
        <div className="flex items-center space-x-3">
          <MessageCircle className="w-6 h-6" />
          <span className="font-semibold hidden sm:inline">Chat</span>
        </div>
      </button>
    </div>
  );
}