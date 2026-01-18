<div align="center">
  
  # 🍽️ Mennu - Digital Menu Platform
  
  ### *Transform Your Restaurant Experience with Smart Digital Menus*
  
  > A modern, intuitive digital menu platform that revolutionizes how customers browse menus, order food, and interact with restaurants. Built with cutting-edge web technologies for a seamless dining experience.
  
  [![Live Demo](https://img.shields.io/badge/demo-live-success?style=flat-square)](https://cardapio-puc.vercel.app)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
  [![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)](https://react.dev/)
  [![Vite](https://img.shields.io/badge/Vite-6.1-646cff?style=flat-square&logo=vite)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
  [![Zustand](https://img.shields.io/badge/Zustand-5.0-orange?style=flat-square)](https://zustand-demo.pmnd.rs/)
  
  ---
  
  ### 📸 Application Preview
  
  <div align="center">
    <img src="public/app/menu.png" alt="Mennu Application Preview" width="250">
    <br>
    <em>Experience the modern interface - <a href="https://cardapio-puc.vercel.app" target="_blank">View Live Demo</a></em>
  </div>
  
</div>

<br>
<br>

> **⚠️ PROJECT STATUS: IN DEVELOPMENT**  
> This application is currently under active development and is available for **preview only**. You can explore the current state of the project at the live demo link above. Full functionality and public release will be available in the future.

## 🎯 About the Project

**Mennu** is a comprehensive digital menu platform designed to modernize and optimize the ordering experience for restaurants, cafes, and food establishments. With an intuitive interface and powerful features, Mennu bridges the gap between customers and restaurants, enabling seamless menu browsing, order management, and profile customization.

### The Story Behind This Project

This project was born from the need to digitize and improve the traditional restaurant menu experience. As part of an academic project at PUC University, Mennu was developed to apply modern web development concepts, software architecture patterns, and user experience best practices. The goal was to create a solution that not only looks beautiful but also solves real-world problems in the food service industry.

### Why Mennu?

- **🎯 User-Centric Design** - Intuitive navigation designed with customers in mind
- **⚡ Lightning Fast** - Built with Vite for instant page loads and smooth interactions
- **📱 Mobile-First** - Optimized for smartphones where most orders happen
- **🎨 Modern UI/UX** - Beautiful animations and transitions using Framer Motion
- **🔒 Smart State Management** - Persistent shopping cart with Zustand
- **♿ Accessible** - WCAG compliant interface for all users

## ✨ Key Features

### 🍔 Menu Browsing

- **Category Navigation** - Browse products organized by categories (appetizers, mains, desserts, drinks)
- **Product Details** - View detailed information including images, descriptions, and prices
- **Smart Search** - Advanced search system to quickly find specific items
- **Real-Time Availability** - See operating hours and restaurant status at a glance

### 🛒 Shopping Cart Management

- **Intelligent Cart** - Add, remove, and modify items with custom observations
- **Persistent Storage** - Cart data saved locally, survives page refreshes
- **Quantity Control** - Easy increment/decrement of item quantities
- **Price Calculation** - Real-time total price updates
- **Visual Feedback** - Cart status indicator showing item count

### 👤 User Profile System

- **Authentication** - Secure login and registration system
- **Profile Management** - Update personal information and preferences
- **Multiple Addresses** - Save and manage multiple delivery addresses
- **Order History** - Track all previous orders with detailed information
- **Status Tracking** - Monitor order progress from preparation to delivery

### 🏪 Restaurant Information

- **Operating Hours** - Complete schedule showing when the restaurant is open
- **Contact Details** - Phone, email, and WhatsApp integration
- **Delivery Info** - Fees, minimum order, and estimated delivery times
- **Payment Methods** - Clear display of accepted payment options (credit, debit, cash, PIX)
- **Ratings & Reviews** - Social proof with restaurant ratings

### 🎨 Modern User Experience

- **Responsive Design** - Seamlessly adapts from mobile to desktop
- **Page Transitions** - Smooth animations between routes using Framer Motion
- **Toast Notifications** - Non-intrusive feedback with Sonner
- **Loading States** - Clear indicators during data fetching
- **Error Handling** - Graceful error messages and fallbacks
- **Not Found Pages** - Custom 404 page for better navigation

---

## 🛠️ Technology Stack

### Core Technologies

| Technology                                    | Purpose           | Why We Use It                                      |
| --------------------------------------------- | ----------------- | -------------------------------------------------- |
| [React](https://react.dev/)                   | UI Framework      | Component-based architecture with latest features  |
| [TypeScript](https://www.typescriptlang.org/) | Type Safety       | Catch errors early, improve developer experience   |
| [Vite](https://vitejs.dev/)                   | Build Tool        | Lightning-fast HMR and optimized builds            |
| [Tailwind CSS](https://tailwindcss.com/)      | Styling Framework | Utility-first CSS for rapid UI development         |

### State Management & Routing

| Technology                               | Purpose             | Version |
| ---------------------------------------- | ------------------- | ------- |
| [Zustand](https://zustand-demo.pmnd.rs/) | State Management    | 5.0.9   |
| [React Router](https://reactrouter.com/) | Client-Side Routing | 7.10.1  |
| [Zod](https://zod.dev/)                  | Schema Validation   | 4.1.13  |

### UI & Animation Libraries

| Technology                                                  | Purpose                | Version  |
| ----------------------------------------------------------- | ---------------------- | -------- |
| [Framer Motion](https://www.framer.com/)                    | Animation Library      | 12.23.25 |
| [Lucide React](https://lucide.dev/)                         | Icon Library           | 0.556.0  |
| [Sonner](https://sonner.emilkowal.ski/)                     | Toast Notifications    | 2.0.7    |
| [clsx](https://github.com/lukeed/clsx)                      | Conditional Classnames | 2.1.1    |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge) | Merge Tailwind Classes | 3.4.0    |

### Development Tools

- **React Compiler** - Automatic optimization of React components
- **ESLint** - Code quality and consistency
- **TypeScript ESLint** - TypeScript-specific linting rules

---

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** >= 18.x ([Download](https://nodejs.org/))
- **npm** >= 9.x (comes with Node.js)

### Installation Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/brenocrepaldi/mennu-client-frontend.git
   cd mennu-client-frontend
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

   This will install all required packages defined in `package.json`.

3. **Start Development Server**

   ```bash
   npm run dev
   ```

   The application will start at [http://localhost:5173](http://localhost:5173)

4. **Open in Browser**
   - Navigate to `http://localhost:5173`
   - Start exploring the digital menu!

### Troubleshooting

**Build Errors?**

- Clear node_modules: `rm -rf node_modules && npm install`
- Check Node.js version: `node --version`
- Update npm: `npm install -g npm@latest`

**Port Already in Use?**

- Change port in `vite.config.ts` or kill the process using port 5173

---

## 📱 Mobile Access Guide

### Testing on Mobile Devices (Same Network)

To test your application on mobile devices while developing locally:

#### Step 1: Find Your Computer's IP Address

**macOS:**

```bash
ipconfig getifaddr en0
# Output example: 192.168.1.100
```

**Linux:**

```bash
hostname -I | awk '{print $1}'
# or
ifconfig | grep "inet " | grep -v 127.0.0.1
```

**Windows:**

```bash
ipconfig
# Look for IPv4 Address under your active network adapter
```

#### Step 2: Access from Mobile

The development server already runs with `--host` flag, so you can access it directly:

```
http://192.168.1.100:5173
```

### Requirements & Troubleshooting

✅ **Requirements:**

- Both devices connected to the same WiFi network
- Firewall allows local network connections

⚠️ **Common Issues:**

| Issue                     | Solution                                                            |
| ------------------------- | ------------------------------------------------------------------- |
| Cannot access from mobile | Check firewall settings and ensure both devices are on same network |
| Page loads slowly         | Verify network connection quality                                   |
| Styles not loading        | Clear browser cache on mobile device                                |

---

## 📂 Project Architecture

### Directory Structure

```
mennu-client-frontend/
├── 📁 public/                   # Static assets served as-is
├── 📁 src/                      # Source code
│   ├── 📁 app/                  # Feature modules (pages)
│   ├── 📁 components/          # Reusable components
│   ├── 📁 store/               # Zustand stores
│   ├── 📁 types/               # TypeScript definitions
│   ├── 📁 utils/               # Utility functions
│   ├── 📁 hooks/               # Custom React hooks
│   ├── 📁 mocks/               # Mock data
│   ├── 📁 routes/              # Route configuration
│   ├── app.tsx                 # Root component
│   ├── main.tsx                # Application entry point
│   ├── index.css               # Global styles
│   └── vite-env.d.ts           # Vite type definitions
├── 📄 index.html                # HTML entry point
├── 📄 package.json              # Dependencies & scripts
├── 📄 vite.config.ts            # Vite configuration
├── 📄 tsconfig.json             # TypeScript config (base)
├── 📄 tsconfig.app.json         # TypeScript config (app)
├── 📄 tsconfig.node.json        # TypeScript config (node)
├── 📄 eslint.config.js          # ESLint configuration
└── 📄 README.md                 # This file
```

---

## 🏗️ Architecture Patterns

### Model-View-Page (MVP) Architecture

Mennu follows a clean architectural pattern where each feature module is organized into three distinct layers:

#### Model (`*.model.ts`) - Business Logic Layer

**Purpose:** Manages state, business logic, and data operations

**Responsibilities:**

- ✅ State management using React hooks and Zustand stores
- ✅ Data fetching and transformation
- ✅ Business rules and validations
- ✅ Event handlers and user interactions
- ✅ Computed values and derived state

#### View (`*.view.tsx`) - Presentation Layer

**Purpose:** Pure UI components that receive props from the model

**Responsibilities:**

- ✅ Rendering UI elements
- ✅ Displaying data passed as props
- ✅ No business logic or state management
- ✅ Composing smaller components
- ✅ Styling and animations

#### Page (`page.tsx`) - Integration Layer

**Purpose:** Connects Model and View, acts as the entry point for the route

**Responsibilities:**

- ✅ Imports and executes the model hook
- ✅ Passes model data to the view component
- ✅ Acts as the route component in React Router
- ✅ Minimal code, mainly composition

### Benefits of This Architecture

- **🔄 Separation of Concerns** - Clear boundaries between logic, presentation, and integration
- **🧪 Testability** - Easy to unit test models and views independently
- **♻️ Reusability** - Views can be reused with different models
- **📖 Maintainability** - Easy to locate and modify specific functionality
- **👥 Team Collaboration** - Developers can work on different layers simultaneously

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🔗 Connect

### Project Links

| Resource          | Link                                                                                     |
| ----------------- | ---------------------------------------------------------------------------------------- |
| 📦 **Repository** | [GitHub - Mennu Client Frontend](https://github.com/brenocrepaldi/mennu-client-frontend) |

### Connect with the Author

**Breno Crepaldi**

[![GitHub](https://img.shields.io/badge/GitHub-brenocrepaldi-181717?style=flat-square&logo=github)](https://github.com/brenocrepaldi)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=flat-square&logo=linkedin)](https://linkedin.com/in/brenocrepaldi)
[![Email](https://img.shields.io/badge/Email-Contact-EA4335?style=flat-square&logo=gmail)](mailto:brenogaia2004@gmail.com)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-4285F4?style=flat-square&logo=google-chrome)](https://brenocrepaldi.vercel.app)

### Support the Project

If you find this project helpful:

- ⭐ **Star the repository** on GitHub
- 🐛 **Report bugs** you encounter
- 💡 **Suggest features** you'd like to see
- 📖 **Improve documentation**
- 🔀 **Submit pull requests**
- 📢 **Share with others** who might benefit

---

<div align="center">
  
  ### ⭐ Star this repository if you find it helpful!
  
  **Made by [Breno Crepaldi](https://github.com/brenocrepaldi)**
  
  *Mennu - Transforming the restaurant experience, one digital menu at a time*
  
  ---
  
  **© 2026 Breno Crepaldi. All rights reserved.**
  
  [🔝 Back to Top](#mennu---digital-menu-platform)
  
</div>
