# Clerk Authentication Setup

This guide explains how to set up Clerk authentication for your data visualization platform.

## Prerequisites

- A Clerk account (sign up at https://clerk.com/)
- Node.js and npm installed

## Setup Steps

### 1. Create a Clerk Application

1. Go to https://clerk.com/dashboard
2. Create a new application
3. Choose your preferred authentication methods (email, social logins, etc.)
4. Copy your Publishable Key from the dashboard

### 2. Configure Environment Variables

1. Open the `.env.local` file in the root of your project
2. Replace `YOUR_PUBLISHABLE_KEY` with your actual Clerk Publishable Key:

```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_actual_key_here
```

### 3. Development Server

Start your development server:

```bash
npm run dev
```

## Features Implemented

- **Authentication Flow**: Users must sign in to access the application
- **Protected Routes**: All dashboard routes are protected behind authentication
- **User Management**: UserButton component for user profile and sign out
- **Responsive Login**: Clean login interface with sign in/up options

## Customization

### Styling the Authentication Components

Clerk components inherit your application's theme. You can customize them further by:

1. Using Clerk's appearance prop in ClerkProvider
2. Adding custom CSS classes
3. Using Clerk's theming system

### Adding More Authentication Features

You can extend the authentication by:

- Adding role-based access control
- Implementing organization features
- Adding custom user profile fields
- Setting up webhooks for user events

## Documentation

For more information, visit:
- [Clerk React Quickstart](https://clerk.com/docs/quickstarts/react)
- [Clerk React Components](https://clerk.com/docs/components/overview)
- [Clerk Dashboard](https://clerk.com/dashboard)