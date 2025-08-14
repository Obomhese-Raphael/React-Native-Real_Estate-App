# React Native App - ReState🏠

A modern real estate mobile application built with React Native, featuring property listings, user authentication, and seamless user experience.

## ✨ Features

- 🔐 **Google OAuth Authentication** - Secure login with Google
- 🏘️ **Property Listings** - Browse featured and recommended properties
- 🔍 **Search & Filter** - Find properties by location, price, and type
- ⭐ **Property Details** - Detailed view with ratings, amenities, and agent info
- 👤 **User Profile** - Manage account settings and bookings
- 📱 **Responsive Design** - Optimized for all device sizes
- 🎨 **Modern UI** - Clean design with smooth animations

## 🛠️ Tech Stack

- **Framework**: [React Native](https://reactnative.dev/) with [Expo](https://expo.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Backend**: [Appwrite](https://appwrite.io/) - Backend-as-a-Service
- **Styling**: [NativeWind](https://www.nativewind.dev/) - Tailwind CSS for React Native
- **Authentication**: Google OAuth via Google Console
- **Navigation**: [Expo Router](https://docs.expo.dev/router/introduction/)
- **State Management**: React Context API
- **Icons & Images**: Custom icon set and optimized images

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator (for iOS development) or Android Studio (for Android)
- Appwrite instance (cloud or self-hosted)
- Google Cloud Console project with OAuth configured

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Obomhese-Raphael/React-Native-Real_Estate-App.git
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Setup

Create a `.env` file in the root directory:

```env
EXPO_PUBLIC_APPWRITE_ENDPOINT=https://your-appwrite-endpoint
EXPO_PUBLIC_APPWRITE_PROJECT_ID=your-project-id
EXPO_PUBLIC_APPWRITE_ENDPOINT=
EXPO_PUBLIC_APPWRITE_AGENTS_COLLECTION_ID=
EXPO_PUBLIC_APPWRITE_PROJECT_NAME=
EXPO_PUBLIC_APPWRITE_DATABASE_ID=
EXPO_PUBLIC_APPWRITE_GALLERIES_COLLECTION_ID=
EXPO_PUBLIC_APPWRITE_REVIEWS_COLLECTION_ID=
EXPO_PUBLIC_APPWRITE_PROPERTIES_COLLECTION_ID=
```

### 4. Appwrite Configuration

1. Create an Appwrite project
2. Set up the following collections in your Appwrite database:
   - **Properties** - Store property listings
   - **agents** - Store agents profiles
   - **Reviews** - Store property reviews
   - **galleries** - Store gallery information

3. Configure Google OAuth in Appwrite:
   - Go to Auth → Settings
   - Add Google as an OAuth provider
   - Add your Google Client ID and Secret

### 5. Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add your app's bundle identifier to authorized domains

### 6. Start the development server

```bash
npx expo start
```

### 7. Run on device/simulator

- **iOS**: Press `i` in terminal or scan QR code with Expo Go app
- **Android**: Press `a` in terminal or scan QR code with Expo Go app

## 📁 Project Structure

```
restate/
├── app/                    # App screens and routing
│   ├── (root)/            # Main app screens
│   └── _layout.tsx        # Root layout
├── assets/                # Images, icons, fonts
│   ├── images/
│   └── icons/
├── components/            # Reusable UI components
│   ├── Cards.tsx
│   ├── Comment.tsx
│   ├── NoResults.tsx
│   ├── Search.tsx
│   └── Filters.tsx
├── constants/             # App constants and data
│   ├── data.ts
│   ├── icons.ts
│   └── images.ts
├── lib/                   # Utilities and configurations
│   ├── appwrite.ts       # Appwrite configuration
│   ├── data.ts       # Appwrite configuration
│   ├── global-provider.tsx
│   └── useAppwrite.ts
└── types/                 # TypeScript type definitions (optional)
```

## 🎯 Key Components

### Authentication Flow
- Google OAuth integration with Appwrite
- Automatic session management
- Secure token handling

### Property Management
- Featured property carousel
- Grid-based property listings
- Advanced search and filtering
- Detailed property views with image galleries

### User Experience
- Smooth animations and transitions
- Responsive design across devices
- Offline-first approach where possible
- Loading states and error handling

## 📚 Learning Resources

This app was built following the excellent tutorial by **JavaScript Mastery** on YouTube. Check out their channel for more amazing React Native tutorials!

- 📺 [JavaScript Mastery YouTube Channel](https://www.youtube.com/@javascriptmastery)
- 🎥 Original Tutorial: [Watch the Videos here](https://www.youtube.com/watch?v=BTfcnxXevm0&list=PPSV&t=11559s)

## 🔧 Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm run web` - Run in web browser
- `npm run build` - Build the app for production

## 🌟 Features in Development

- [ ] Property booking system
- [ ] Real-time messaging with agents
- [ ] Favorites and wishlist
- [ ] Push notifications
- [ ] Dark mode support
- [ ] Property comparison tool

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **JavaScript Mastery** for the comprehensive tutorial
- **Appwrite** team for the excellent backend service
- **Expo** team for the amazing development platform
- **NativeWind** for bringing Tailwind CSS to React Native

## 📞 Contact

- GitHub: [Obomhsese Raphael](https://github.com/Obomhese-Raphael) || [Adrian Hajdin](https://github.com/adrianhajdin)
- Email: obomheser@gmail.com

---

⭐ If you found this project helpful, please give it a star!

**Happy Coding!** 🚀
