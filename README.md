# Hackathon432
Vibe Coding Hackathon 3.0 
' https://tiny-terms-hope.lindy.site/ ' used Lindy AI to plan structure of Ai Study Buddy, it also helped with suggesting missing elements to make the application more interesting for user.

Deployed with lovable:
' https://study-buddy-ai-47.lovable.app/' 

Will deploy again with Bolt.new

Used Claude Ai to generate PRD + ReadMe file

# 🧠 AI Study Buddy - Smart Flashcard Generator

> Transform your study materials into interactive flashcards and tests using artificial intelligence

## 📖 Overview

AI Study Buddy is an intelligent learning platform that transforms your study materials into interactive flashcards and comprehensive tests using cutting-edge AI technology. Built for students, educators, and lifelong learners, it makes studying more efficient and engaging through personalized, AI-generated content.

## ✨ Features

### 🔐 **Authentication & User Management**
- **Multiple Sign-up Options**: Email/password, Google OAuth, Facebook OAuth
- **Secure User Management**: Password encryption, session management
- **Account Recovery**: Password reset functionality
- **User Profiles**: Customizable profiles with institution and study level

### 📚 **Core Learning Features**

#### 1. Subject Organization
- Create and manage different academic subjects
- Organize flashcards by topics and categories
- Track progress across multiple subjects
- Visual subject overview dashboard

#### 2. AI-Powered Flashcard Generation
- Upload study notes or paste text content
- AI automatically analyzes content using Hugging Face models
- Smart question-answer pairs based on key concepts
- Automatic difficulty adjustment
- Support for multiple subjects (Biology, Chemistry, Physics, and more)

#### 3. Interactive Study Sessions
- **Flip-card Interface**: Engaging card-flipping animations for active recall
- **Progress Tracking**: Monitor your study session progress
- **Spaced Repetition**: Algorithm-based optimal learning intervals
- **Mobile-Responsive**: Study anywhere, anytime

#### 4. Advanced Testing System
- **Multiple Choice Questions**: AI generates challenging almost-correct answers
- **Fill-in-the-blank**: Test specific knowledge gaps
- **True/False Questions**: Quick concept verification
- **Performance Analytics**: Track scores and improvement over time

### 💎 **Monetization - Freemium Model**

#### Free Plan
- ✅ Unlimited flashcard creation
- ✅ Up to 3 subjects
- ✅ Basic AI generation
- ✅ Core study features

#### Premium Plan (R50/month or R550/year)
- 🚀 **Unlimited subjects**
- 🚀 **Enhanced AI generation** with advanced models
- 🚀 **Advanced analytics** and progress reports
- 🚀 **Priority support**
- 🚀 **Export options** (PDF, CSV)
- 🚀 **Collaborative features**
- 🚀 **Custom study schedules**

### 🔧 **Technical Features**
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Real-time Sync**: Progress saved across all devices
- **Secure Database**: PostgreSQL backend with encrypted data
- **Modern UI**: Clean, intuitive interface with smooth animations
- **PWA Ready**: Installable as a mobile app

## 🛠️ Tech Stack

### Frontend
- **HTML5**: Semantic structure and accessibility
- **CSS3**: Modern styling with animations and responsive design
- **JavaScript (ES6+)**: Interactive functionality and state management

### Backend
- **Python Flask**: Lightweight and scalable web framework
- **MySQL**: Reliable database for flashcard storage
- **RESTful API**: Clean API design for frontend-backend communication

### AI Integration
- **Hugging Face API**: Advanced question-answering models
- **Natural Language Processing**: Content analysis and question generation
- **Machine Learning**: Adaptive difficulty and spaced repetition

### Payment Integration
- **IntaSend**: African-focused payment gateway
- **Subscription Management**: Automated billing and plan management

## 🚀 Getting Started

### Prerequisites
- Python 3.8+
- MySQL 8.0+
- Node.js 14+ (for development tools)
- Hugging Face API key

## 📁 Project Structure

```
ai-study-buddy/
├── app/
│   ├── __init__.py
│   ├── models/
│   │   ├── user.py
│   │   ├── flashcard.py
│   │   └── subject.py
│   ├── routes/
│   │   ├── auth.py
│   │   ├── flashcards.py
│   │   └── payments.py
│   ├── services/
│   │   ├── ai_service.py
│   │   ├── payment_service.py
│   │   └── email_service.py
│   └── static/
│       ├── css/
│       ├── js/
│       └── images/
├── templates/
│   ├── index.html
│   ├── dashboard.html
│   └── auth/
├── tests/
├── requirements.txt
├── config.py
├── run.py
└── README.md
```

## 🤖 AI Integration Details

### Recommended Hugging Face Models
- **Primary**: `deepset/roberta-base-squad2` - Excellent for educational Q&A
- **Alternative**: `distilbert-base-cased-distilled-squad` - Faster, lighter model
- **Advanced**: `microsoft/DialoGPT-medium` - For conversational study assistance

## 💳 Payment Integration

### IntaSend Implementation
- **Mobile Money**: IntaSend
- **Card Payments**: Visa, Mastercard integration
- **Bank Transfers**: Direct bank account payments
- **Subscription Management**: Automated recurring billing


## 🌍 SDG 4 (Education) Impact

AI Study Buddy directly addresses **Sustainable Development Goal 4** by:

- **Ensuring Inclusive Education**: Accessible design for diverse learning needs
- **Promoting Lifelong Learning**: Tools for continuous skill development
- **Quality Education**: AI-enhanced learning that adapts to individual needs
- **Digital Literacy**: Integrating technology into the learning process
- **Affordable Access**: Freemium model ensures basic features remain accessible

### Revenue Streams
1. **Premium Subscriptions**: R50/month core revenue
2. **Institutional Licenses**: Schools and universities
3. **API Access**: Third-party integrations
4. **Content Partnerships**: Educational content providers

### Growth Metrics
- Monthly Active Users (MAU)
- Premium conversion rate
- Content generation volume
- User engagement scores

## 🙏 Acknowledgments

- **Hugging Face** for providing excellent NLP models
- **IntaSend** for seamless African payment integration
- **SDG 4** initiative for inspiring educational innovation
- **Open Source Community** for tools and libraries

## 🎯 Roadmap

### Phase 1 (Current)
- ✅ Core flashcard generation
- ✅ User authentication
- ✅ Freemium model
- ✅ Basic subjects support

### Phase 2 (Q1 2025)
- 🔄 Advanced AI models integration
- 🔄 Collaborative study groups
- 🔄 Mobile app development
- 🔄 Offline mode support

### Phase 3 (Q2 2025)
- 🔄 Institutional partnerships
- 🔄 Advanced analytics dashboard
- 🔄 Multi-language support
- 🔄 API marketplace

---

**Made with ❤️ for students worldwide**

*Empowering education through AI - one flashcard at a time*
