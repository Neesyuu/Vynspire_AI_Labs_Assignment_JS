# 📝 Blog World - Modern Blog Platform

A full-featured, responsive blog platform built with Next.js 15, React 19, and Tailwind CSS within 2 days as assignment. Features rich text editing, user authentication, and a beautiful mobile-responsive design.

![Blog World](https://img.shields.io/badge/Next.js-15.4.5-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🎨 **Modern UI/UX**

- **Responsive Design**: Mobile-first approach with beautiful animations
- **Dark Theme**: Elegant dark theme with red accent colors
- **Smooth Transitions**: CSS animations and hover effects
- **Mobile Navigation**: Hamburger menu with slide-out navigation

### 📝 **Rich Content Management**

- **Rich Text Editor**: TipTap-powered editor with formatting tools
- **Image Support**: Featured images with preview functionality
- **Category System**: Organized content with category filtering
- **Tags System**: Flexible tagging for better content organization

### 🔐 **Authentication & Security**

- **JWT Authentication**: Secure token-based authentication
- **User Dashboard**: Protected dashboard for content creators
- **Role-based Access**: Different permissions for users
- **Secure Routes**: Protected routes with authentication checks

### 📱 **Responsive Features**

- **Mobile-First**: Optimized for all device sizes
- **Touch-Friendly**: Large touch targets and intuitive navigation
- **Adaptive Layout**: Grid system that adapts to screen size
- **Progressive Enhancement**: Works on all browsers

## 🚀 Tech Stack

### **Frontend**

- **Next.js 15.4.5** - React framework with App Router
- **React 19.1.0** - Latest React with concurrent features
- **Tailwind CSS 4** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript

### **Rich Text Editing**

- **TipTap** - Headless editor framework
- **TipTap Extensions** - Link, text-align, underline, highlight
- **Custom Toolbar** - Full-featured editing toolbar

### **Authentication & State**

- **Jose** - Browser-compatible JWT library
- **React Context** - Global state management
- **Custom Hooks** - Reusable authentication logic

### **UI Components**

- **Radix UI** - Accessible component primitives
- **React Icons** - Beautiful icon library
- **React Toastify** - Toast notifications
- **Lucide React** - Modern icon set

### **Development Tools**

- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Turbopack** - Fast bundler for development

## 📦 Installation

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Quick Start

1. **Clone the repository**

   ```bash
   git clone git@github.com:Neesyuu/Vynspire_AI_Labs_Assignment_JS.git

   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Add your configuration:

   ```env
   NEXT_PUBLIC_REACT_APP_API_URL = "https://688f6725f21ab1769f891264.mockapi.io/api/v1"
   NEXT_PUBLIC_REACT_APP_API_RAW_URL = "https://688f6725f21ab1769f891264.mockapi.io"
   NEXT_PUBLIC_REACT_APP_FRONTEND_URL = "http://localhost:3000"
   NEXT_PUBLIC_REACT_APP_SECRET_KEY = ********
   NEXT_PUBLIC_REACT_APP_EXPIRE_IN = "xd"
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
blog-frontend/
├── app/                          # Next.js App Router
│   ├── (public)/                 # Public routes
│   │   ├── page.jsx             # Home page
│   │   ├── login/               # Login page
│   │   ├── register/            # Registration page
│   │   └── blog/[category]/     # Category pages
│   ├── (protected)/             # Protected routes
│   │   └── dashboard/           # User dashboard
│   └── layout.js                # Root layout
├── components/                   # Reusable components
│   ├── cards/                   # Blog card components
│   ├── ui/                      # UI components
│   └── RichTextEditor/          # Rich text editor
├── hooks/                       # Custom React hooks
├── context/                     # React Context providers
├── utils/                       # Utility functions
├── config/                      # Configuration files
└── public/                      # Static assets
```

## 🎯 Key Features

### **Responsive Design**

- **Mobile**: Single column with horizontal navigation
- **Tablet**: 2-column grid layout
- **Desktop**: 3-column grid with sidebar

### **Rich Text Editor**

- **Formatting**: Bold, italic, underline, strikethrough
- **Headings**: H1, H2, H3 support
- **Lists**: Bullet and numbered lists
- **Links**: URL insertion and management
- **Alignment**: Text alignment options
- **Code**: Inline and block code support

### **Authentication System**

- **JWT Tokens**: Secure authentication
- **User Registration**: Complete signup process
- **Login/Logout**: Session management
- **Protected Routes**: Role-based access control

### **Content Management**

- **Create Posts**: Rich text editor with image support
- **Edit Posts**: Full editing capabilities
- **Category Filtering**: Organized content browsing
- **Status Management**: Draft and published states

## 🎨 Design System

### **Color Palette**

- **Primary**: Red (#EF4444) - Accent color
- **Background**: Dark gray (#111827) - Main background
- **Surface**: Gray (#1F2937) - Card backgrounds
- **Text**: White (#FFFFFF) - Primary text
- **Muted**: Gray (#6B7280) - Secondary text

### **Typography**

- **Headings**: Bold, large text for hierarchy
- **Body**: Clean, readable font
- **Code**: Monospace for code blocks

### **Spacing**

- **Consistent**: 4px base unit system
- **Responsive**: Adaptive spacing for different screens
- **Comfortable**: Generous whitespace for readability

## 📱 Mobile Responsiveness

### **Breakpoints**

- **Mobile**: < 640px - Single column layout
- **Tablet**: 640px - 1024px - 2-column grid
- **Desktop**: > 1024px - 3-column grid with sidebar

### **Mobile Features**

- **Hamburger Menu**: Slide-out navigation
- **Touch-Friendly**: Large touch targets
- **Optimized Images**: Responsive image loading
- **Smooth Scrolling**: Native-like experience

## 🔧 Development

### **Available Scripts**

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### **Code Quality**

- **ESLint**: Code linting and formatting
- **Prettier**: Code formatting
- **TypeScript**: Type safety (optional)

### **Performance**

- **Next.js Optimization**: Automatic code splitting
- **Image Optimization**: Next.js Image component
- **Bundle Analysis**: Built-in performance monitoring

## 🚀 Deployment

### **Vercel (Recommended)**

1. Connect your GitHub repository
2. Configure environment variables
3. Deploy automatically on push

### **Other Platforms**

- **Netlify**: Static site hosting
- **Railway**: Full-stack deployment
- **DigitalOcean**: VPS deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - Amazing React framework
- **Tailwind CSS** - Utility-first CSS framework
- **TipTap** - Rich text editor framework
- **React Icons** - Beautiful icon library

## 📞 Support

If you have any questions or need help, please:

- 📧 Email: neesyuu@gmail.com
- 🐛 Issues: [GitHub Issues](https://github.com/neesyuu/blog-world/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/neesyuu/blog-world/discussions)

---

<div align="center">

**Made with ❤️ by Nischal**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/yourusername)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/yourusername)

</div>
