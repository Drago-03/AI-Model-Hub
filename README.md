# Neural Nexus - AI Model Hub
_Star the Repo⭐_

<div align="center">
  <img src="public/images/Logo.png" alt="Neural Nexus Logo" width="200" />
  <p style="font-size: 1.2em; color: #00BFFF; font-weight: bold;">The Ultimate Hub for AI Innovators</p>
  
  <a href="https://github.com/Drago-03/Neural-Nexus/stargazers"><img src="https://img.shields.io/github/stars/Drago-03/Neural-Nexus?style=for-the-badge&logo=github&color=f5c518&logoColor=white&labelColor=181717" alt="Stars" /></a>
  <a href="https://github.com/Drago-03/Neural-Nexus/network/members"><img src="https://img.shields.io/github/forks/Drago-03/Neural-Nexus?style=for-the-badge&logo=github&color=4f94ef&logoColor=white&labelColor=181717" alt="Forks" /></a>
  <a href="https://github.com/Drago-03/Neural-Nexus/issues"><img src="https://img.shields.io/github/issues/Drago-03/Neural-Nexus?style=for-the-badge&logo=github&color=4ab8a1&logoColor=white&labelColor=181717" alt="Issues" /></a>
  <a href="https://github.com/Drago-03/Neural-Nexus/blob/main/LICENSE"><img src="https://img.shields.io/github/license/Drago-03/Neural-Nexus?style=for-the-badge&logo=opensourceinitiative&color=c3336b&logoColor=white&labelColor=181717" alt="License" /></a>
  <a href="https://discord.gg/9bPsjgnJ5v"><img src="https://img.shields.io/discord/1234567890?style=for-the-badge&logo=discord&color=5865F2&logoColor=white&labelColor=181717&label=chat" alt="Discord" /></a>
  
  <a href="https://www.buymeacoffee.com/neuralnexus"><img src="https://img.shields.io/badge/Buy%20Me%20A%20Coffee-Support-FFDD00?style=for-the-badge&logo=buymeacoffee&logoColor=white&labelColor=555555" alt="Buy Me a Coffee"></a>
  <a href="https://www.producthunt.com/posts/neural-nexus"><img src="https://img.shields.io/badge/Product%20Hunt-Upvote-DA552F?style=for-the-badge&logo=producthunt&logoColor=white&labelColor=222222" alt="Product Hunt"></a>
  <a href="https://tech.dev/neural-nexus"><img src="https://img.shields.io/badge/tech.dev-Sponsor-9146FF?style=for-the-badge&logo=twitch&logoColor=white&labelColor=222222" alt="Sponsor"></a>
  
  <!-- Packages Button and Tracking Badges -->
  <a href="https://www.npmjs.com/package/neural-nexus"><img src="https://img.shields.io/badge/Packages-npm-orange?style=for-the-badge&logo=npm&logoColor=white" alt="NPM Package"></a>
  <a href="https://www.npmjs.com/package/neural-nexus"><img src="https://img.shields.io/npm/v/neural-nexus?style=for-the-badge&color=orange&logo=npm" alt="NPM Version"></a>
  <a href="https://www.npmjs.com/package/neural-nexus"><img src="https://img.shields.io/npm/dm/neural-nexus?style=for-the-badge&color=orange&logo=npm" alt="NPM Downloads"></a>
  <a href="https://github.com/Drago-03/neural-nexus-pkg/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/neural-nexus?style=for-the-badge&color=orange&logo=opensourceinitiative" alt="NPM License"></a>
</div>

## Welcome to Neural Nexus

Welcome to **Neural Nexus**, a comprehensive AI model hub where you can upload, sell, and transfer ownership of your AI creations using various payment methods including cryptocurrency, UPI, PayPal, and net banking. We focus on building a vibrant community of creators and innovators shaping the future of AI, emphasizing innovation and collaboration.

We're inspired by the 'Radio on the Internet' concept for AI—powered by strategic partnerships and a commitment to open access. Our mission is to democratize AI by providing free models and data, inspired by the Transformers library from Hugging Face, while also offering premium content for advanced users.

## Features

- **Upload AI Models**: Share your models with the world
- **Secure Payments**: Process payments via Stripe, Razorpay (UPI), or Cryptocurrency (MetaMask)
- **Modern Authentication**: Sign in with Google, GitHub, email, or cryptocurrency wallets
- **Ownership Transfer**: Transfer model ownership with blockchain security
- **Open Source Models**: Access a comprehensive library of free models inspired by Transformers
- **Premium Marketplace**: Buy and sell premium models and datasets for advanced projects
- **Modern UI**: Responsive design with smooth animations and contemporary aesthetics
- **Email Notifications**: Receive important updates via email using SendGrid integration

## Technology Stack

- **Next.js**: React framework for high-performance applications
- **Tailwind CSS**: Utility-first CSS framework for modern styling
- **Framer Motion**: Animation library for enhanced user experience
- **Supabase**: Open-source Firebase alternative for authentication and database management
- **Stripe & Razorpay**: Payment processing solutions
- **SendGrid**: Email delivery service for transactional emails
- **Edge Functions**: Lightweight serverless functions for optimal performance

<details>
<summary><strong>Setup Guide (click to expand)</strong></summary>

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Drago-03/Neural-Nexus.git
   cd Neural-Nexus
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Environment Variables**:
   Create a `.env.local` file in the root directory using the `.env.local.example` as a template:
   ```bash
   cp .env.local.example .env.local
   ```
   Then edit the file to add your actual credentials.

<details>
<summary><strong>MongoDB Setup (click to expand)</strong></summary>

   a. Create a MongoDB Atlas account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (free tier available)
   
   b. Create a new cluster and database
   
   c. Get your connection string:
      - Go to Database > Connect > Connect your application
      - Select Node.js as your driver and copy the connection string
      - Replace `<password>` with your database user password
      - Add the connection string to your `.env.local` file as `MONGODB_URI`
      - Set `MONGODB_DB_NAME` to your database name (default: `neural_nexus`)
   
   d. For production deployments:
      - Ensure your MongoDB Atlas IP allow list includes your deployment server IPs
      - For Vercel, you need to add all Vercel deployment IPs or use 0.0.0.0/0 (allow all)
      - The app includes fallback in-memory storage if MongoDB connection fails
   
   e. Troubleshooting MongoDB connections:
      - If you encounter TLS/SSL errors, make sure you're using a clean connection string without extra parameters
      - Use this format: `mongodb+srv://username:password@cluster.mongodb.net/dbname?retryWrites=true&w=majority`
      - The app will automatically handle connection retries and fallbacks
</details>

<details>
<summary><strong>Supabase Setup (click to expand)</strong></summary>

   a. Create a Supabase project at [Supabase](https://supabase.com/) (free tier available)
   
   b. Get your API credentials:
      - Go to Project Settings > API
      - Copy the URL, public anon key, and service role key
      - Add them to your `.env.local` file
   
   c. Initialize the database:
      - After setting up your project and environment variables, run:
      ```bash
      # Start your Next.js dev server
      npm run dev
      
      # In a new terminal, initialize the database (one-time setup)
      curl "http://localhost:3000/api/supabase-setup?setup_key=YOUR_SETUP_KEY_FROM_ENV"
      ```
      
   d. Enable authentication providers:
      - Go to Authentication > Providers
      - Enable Email, Google, GitHub, etc. as needed
      - Configure OAuth credentials for third-party providers
      - **For GitHub OAuth**: 
        - Go to your GitHub account > Settings > Developer settings > OAuth Apps > New OAuth App
        - Set the callback URL to exactly: `https://[YOUR-PROJECT-REF].supabase.co/auth/v1/callback`
        - Copy the Client ID and Client Secret to Supabase GitHub provider settings
        - It's critical that the callback URL matches exactly what Supabase expects
      - **For Google OAuth**:
        - Set the callback URL to exactly: `https://[YOUR-PROJECT-REF].supabase.co/auth/v1/callback`
        - Make sure to add the same domain to your authorized redirect URIs
      
   e. Enable anonymous authentication:
      - Go to Authentication > Providers
      - Scroll down to "Anonymous Sign-in" and toggle it on
      - This allows users to try the platform without creating an account
   
   f. Set up storage buckets:
      - Go to Storage
      - Create buckets for: `models`, `avatars`, `thumbnails`
      - Set RLS policies for each bucket
</details>

<details>
<summary><strong>SendGrid Setup (click to expand)</strong></summary>

   a. Create a SendGrid account at [SendGrid](https://sendgrid.com/) (free tier available)
   
   b. Get your API key:
      - Go to Settings > API Keys > Create API Key
      - Create a new API key with full access or restricted access to "Mail Send" only
      - Copy the API key to your `.env.local` file as `SENDGRID_API_KEY`
   
   c. Verify your sender identity:
      - Go to Settings > Sender Authentication
      - Verify a Single Sender or set up Domain Authentication
      - Add the verified email address to your `.env.local` file as `EMAIL_FROM`
   
   d. Test your email configuration:
      ```bash
      node test-sendgrid.js your.email@example.com
      ```
   
   e. For more details, see the [Email Service Documentation](docs/email-service.md)
</details>

<details>
<summary><strong>Firebase Setup (Legacy/Optional) (click to expand)</strong></summary>

   The app is transitioning from Firebase to Supabase, but can still use Firebase for some features.
   
   a. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   
   b. Enable Authentication services:
      - Go to Authentication > Sign-in method
      - Enable Email/Password and Google sign-in methods
   
   c. Create a Firestore database:
      - Go to Firestore Database > Create database
      - Start in production mode
      - Choose a location close to your users
   
   d. Set up Storage:
      - Go to Storage > Get started
      - Set up security rules for production
   
   e. Get your Firebase config:
      - Go to Project settings > General
      - Scroll down to "Your apps" and select your web app
      - Copy the Firebase config values to your `.env.local` file
</details>

<details>
<summary><strong>Run Locally (click to expand)</strong></summary>

```bash
npm run dev
```
Open `http://localhost:3000` to view the application.

</details>

</details>

---

## Neural Nexus NPM Package

A modern, TypeScript-first toolkit for connecting with AI models on the Neural Nexus platform. Effortlessly deploy, manage, and share models, integrate with a marketplace, and handle authentication and payments—all with a single, powerful npm package.

**Official NPM:** [neural-nexus](https://www.npmjs.com/package/neural-nexus)

<details>
<summary><strong>Installation (click to expand)</strong></summary>

**Stable:**
```bash
npm install neural-nexus
```
<button onclick="navigator.clipboard.writeText('npm install neural-nexus')">Copy</button>

**Alpha (v1) Version:**
```bash
npm install neural-nexus@v1
```
<button onclick="navigator.clipboard.writeText('npm install neural-nexus@v1')">Copy</button>

</details>

---

## API Key Management & Usage

All API requests require authentication using an API key. You can generate and manage your API keys from your Neural Nexus dashboard.

<details>
<summary><strong>Step-by-Step Onboarding (click to expand)</strong></summary>

1. **Sign up or log in** at Neural Nexus Dashboard
2. **Navigate to API Keys** in your account settings
3. **Click Generate New Key** and select the key type (test, development, production, etc.)
4. **Copy your key** (it will only be shown once!)
5. **Store your key securely** (use environment variables, never commit to code)

</details>

<details>
<summary><strong>Authenticating Requests (click to expand)</strong></summary>

Include your API key in the `Authorization` header:

```bash
Authorization: Bearer YOUR_API_KEY
```
<button onclick="navigator.clipboard.writeText('Authorization: Bearer YOUR_API_KEY')">Copy</button>

</details>

<details>
<summary><strong>Example: JavaScript (fetch) (click to expand)</strong></summary>

```js
const response = await fetch('https://api.neuralnexus.biz/v1/models', {
  headers: {
    'Authorization': `Bearer ${process.env.NEURAL_NEXUS_API_KEY}`
  }
});
const data = await response.json();
```
<button onclick="navigator.clipboard.writeText(`const response = await fetch('https://api.neuralnexus.biz/v1/models', {\n  headers: {\n    'Authorization': \`Bearer \\${process.env.NEURAL_NEXUS_API_KEY}\`\n  }\n});\nconst data = await response.json();`) ">Copy</button>

</details>

<details>
<summary><strong>Example: Using the SDK (click to expand)</strong></summary>

```js
import { NeuralNexus } from 'neural-nexus';
const nexus = new NeuralNexus({
  apiKey: process.env.NEURAL_NEXUS_API_KEY,
  environment: 'production'
});
```
<button onclick="navigator.clipboard.writeText(`import { NeuralNexus } from 'neural-nexus';\nconst nexus = new NeuralNexus({\n  apiKey: process.env.NEURAL_NEXUS_API_KEY,\n  environment: 'production'\n});`) ">Copy</button>

</details>

<details>
<summary><strong>Example: Managing API Keys in JavaScript (click to expand)</strong></summary>

```js
async function createApiKey() {
  const API_KEY = process.env.NEURAL_NEXUS_API_KEY;
  const response = await fetch('https://api.neuralnexus.biz/v1/api-keys', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'My Development Key',
      type: 'development'
    })
  });
  const data = await response.json();
  console.log('New API key created:', data);
  console.log('IMPORTANT: Save this key now as it won\'t be shown again!');
  return data;
}
```
<button onclick="navigator.clipboard.writeText(`async function createApiKey() {\n  const API_KEY = process.env.NEURAL_NEXUS_API_KEY;\n  const response = await fetch('https://api.neuralnexus.biz/v1/api-keys', {\n    method: 'POST',\n    headers: {\n      'Authorization': \`Bearer \\${API_KEY}\`,\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({\n      name: 'My Development Key',\n      type: 'development'\n    })\n  });\n  const data = await response.json();\n  console.log('New API key created:', data);\n  console.log('IMPORTANT: Save this key now as it won\\'t be shown again!');\n  return data;\n}`) ">Copy</button>

</details>

For more details, see the [official npm package page](https://www.npmjs.com/package/neural-nexus).

---

## Supabase Data Model

<details>
<summary><strong>Supabase Table: user_profiles (click to expand)</strong></summary>

```sql
CREATE TABLE user_profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  first_name TEXT,
  last_name TEXT,
  display_name TEXT,
  email TEXT,
  bio TEXT,
  avatar_url TEXT,
  website TEXT,
  social_links JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

</details>

<details>
<summary><strong>Supabase Table: models (click to expand)</strong></summary>

```sql
CREATE TABLE models (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) DEFAULT 0,
  category TEXT,
  tags TEXT[],
  file_url TEXT,
  file_path TEXT,
  file_size BIGINT,
  file_type TEXT,
  thumbnail_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  downloads INTEGER DEFAULT 0,
  rating DECIMAL(3, 2) DEFAULT 0,
  is_public BOOLEAN DEFAULT true,
  status TEXT DEFAULT 'active'
);
```

</details>

<details>
<summary><strong>Setting Up Environment Variables on Vercel (click to expand)</strong></summary>

- Go to your project settings in Vercel
- Navigate to Environment Variables
- Add all the variables from your `.env.local` file
- Make sure to set `NEXT_PUBLIC_APP_ENV=production`
- Redeploy your application to apply the changes

</details>

<details>
<summary><strong>MongoDB Configuration for Production (click to expand)</strong></summary>

- In your Vercel deployment, ensure MongoDB connection string is correctly set
- Add `MONGODB_URI` and `MONGODB_DB_NAME` to your environment variables
- If users report profile update errors, check the following:
  - MongoDB connection string should be clean without unnecessary parameters
  - The IP allowlist in MongoDB Atlas should include Vercel's deployment IPs
  - The application includes fallback in-memory storage if the database connection fails
  - User profiles will be stored temporarily and sync when the database connection is restored
- For persistent database issues, consider using MongoDB Realm/Atlas App Services for better connectivity

</details>

<details>
<summary><strong>Monitoring and Analytics (click to expand)</strong></summary>

1. **Supabase Dashboard**: Track database usage, API calls, and authentication
2. **Firebase Analytics** (if using): Track user engagement and app usage
3. **Vercel Analytics**: Monitor page performance and user metrics

</details>

<details>
<summary><strong>Edge Functions vs. Serverless Functions (click to expand)</strong></summary>

This app uses both Edge Functions (for lightweight operations) and standard serverless functions (for heavier processing):

- **Edge Functions**: Fast, lightweight API routes that run globally close to users
- **Serverless Functions**: More powerful Node.js environments for database operations and complex processing

</details>

<details>
<summary><strong>Web3 Wallet Integration (click to expand)</strong></summary>

Neural Nexus includes a lightweight wallet connection system through the `SimpleCryptoProvider`. This replaces the previous TonConnect implementation.

<details>
<summary><strong>Enabling the Wallet Connection (click to expand)</strong></summary>

To enable wallet connection in your application:

1. Set the feature flag in your `.env.local` file:
```bash
NEXT_PUBLIC_ENABLE_SIMPLE_CRYPTO=true
```

2. The wallet connect button will automatically appear in the navbar when the feature flag is enabled.

3. For custom integration, you can use the `SimpleCryptoButton` component:
```tsx
import dynamic from 'next/dynamic';

// Import with dynamic to avoid SSR issues
const SimpleCryptoButton = dynamic(
  () => import('@/components/SimpleCryptoButton'),
  { ssr: false }
);

// Then use it in your component
function MyComponent() {
  return <SimpleCryptoButton />;
}
```

4. For direct access to wallet state, use the `useSimpleCrypto` hook:
```tsx
import { useSimpleCrypto } from '@/providers/SimpleCryptoProvider';

function MyComponent() {
  const { activeWallet, connectWallet, disconnectWallet } = useSimpleCrypto();
  
  return (
    <div>
      {activeWallet ? (
        <div>Connected to: {activeWallet}</div>
      ) : (
        <button onClick={() => connectWallet('MetaMask')}>Connect</button>
      )}
    </div>
  );
}
```

</details>

</details>

<details>
<summary><strong>Policies & Documentation (click to expand)</strong></summary>

We maintain comprehensive documentation on how we handle data, models, and content. Please review our policies for complete transparency:

- **Privacy Policy**: Learn how we protect your data and maintain information security. [Read More](docs/PRIVACY_POLICY.md)
- **Content Policy**: Keep the vibes positive! Understand what content is cool to share on Neural Nexus. [Read More](docs/CONTENT_POLICY.md)
- **Model Policies**: Rules for uploading and sharing AI models. Let's keep the AI game fair and innovative. [Read More](docs/MODEL_POLICIES.md)
- **Cookie Policy**: We use cookies to make your experience smoother than butter. Find out how. [Read More](docs/COOKIE_POLICY.md)
- **Updates & Changelog**: Stay updated with the latest changes and features. We're always leveling up! [Read More](docs/UPDATES.md)

These docs are here to ensure we're all on the same page, building a safe and creative space for AI innovation. Got questions? Hit us up! 💬

</details>

<details>
<summary><strong>Build Instructions (click to expand)</strong></summary>

When building the project for production, you might encounter "document is not defined" errors for authentication pages. This is a common issue with Next.js when client-side features are used during static site generation.

To solve this issue, use our custom build and start scripts:

```bash
# Step 1: Use our custom build script that patches the auth pages
npm run custom-build

# Step 2: Start the application using our custom server
npm run custom-start
```

Our custom build script (`build-with-cleanup.sh`) handles the following:
1. Cleans up previous build artifacts
2. Runs the Next.js build process
3. If auth page errors occur, it patches the build by:
   - Creating fallback static HTML files for problematic routes
   - Copying these files to the appropriate output directories

The custom server (`dev-server.js`) then:
1. Serves the static HTML fallbacks for auth routes
2. Handles all other requests normally through Next.js

This approach ensures that authentication pages work correctly in production without the "document is not defined" errors.

</details>

<details>
<summary><strong>Build Instructions for Auth Pages (click to expand)</strong></summary>

Next.js has challenges with client-side authentication pages during static site generation, often resulting in "document is not defined" errors. This project includes special handling to resolve these issues:

<details>
<summary><strong>Using the Custom Build Process (click to expand)</strong></summary>

```bash
# Run the custom build script that handles auth page issues
npm run custom-build
```

This script:
1. Cleans previous build artifacts
2. Creates static HTML fallbacks for auth pages if needed
3. Runs the build with proper environment variables
4. Patches the generated files to ensure auth pages work correctly

</details>

<details>
<summary><strong>Using the Custom Server (click to expand)</strong></summary>

After building the project, start it with:

```bash
# Start the custom server that handles auth pages
npm run custom-start
```

This custom server serves static HTML fallbacks for authentication pages, preventing issues with client-side code during the initial page load.

</details>

<details>
<summary><strong>How It Works (click to expand)</strong></summary>

The solution uses multiple techniques:
- Middleware detection for build vs. runtime environments
- Static HTML fallbacks for auth pages
- Custom server for serving static content
- Next.js configuration to properly handle client-only pages

If you modify auth-related pages, ensure the build process is aware of these pages by updating the configuration in:
- `middleware.ts`
- `next.config.js`
- `build-with-cleanup.sh`

</details>

</details>

</details>

## Community & Support

Join our active community to get help, share ideas, and connect with other developers!

<div align="center">
  <a href="https://discord.gg/9bPsjgnJ5v"><img src="https://img.shields.io/badge/Discord-Join%20Our%20Community-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord"></a>
  <a href="https://twitter.com/NeuralNexusAI"><img src="https://img.shields.io/badge/Twitter-Follow%20Us-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter"></a>
  <a href="https://github.com/Drago-03/Neural-Nexus/discussions"><img src="https://img.shields.io/badge/GitHub-Discussions-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Discussions"></a>
</div>

## Supabase Data Model

The application uses the following Supabase tables:

### **user_profiles**
```sql
CREATE TABLE user_profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  first_name TEXT,
  last_name TEXT,
  display_name TEXT,
  email TEXT,
  bio TEXT,
  avatar_url TEXT,
  website TEXT,
  social_links JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

### **models**
```sql
CREATE TABLE models (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) DEFAULT 0,
  category TEXT,
  tags TEXT[],
  file_url TEXT,
  file_path TEXT,
  file_size BIGINT,
  file_type TEXT,
  thumbnail_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  downloads INTEGER DEFAULT 0,
  rating DECIMAL(3, 2) DEFAULT 0,
  is_public BOOLEAN DEFAULT true,
  status TEXT DEFAULT 'active'
);
```

## Deployment on Vercel

1. Push your code to a GitHub repository
2. Go to [Vercel](https://vercel.com) and create a new project
3. Connect your GitHub repository
4. Set all the environment variables from your `.env.local` file in the Vercel dashboard
5. Deploy your application

### **Setting Up Environment Variables on Vercel**
- Go to your project settings in Vercel
- Navigate to Environment Variables
- Add all the variables from your `.env.local` file
- Make sure to set `NEXT_PUBLIC_APP_ENV=production`
- Redeploy your application to apply the changes

### **MongoDB Configuration for Production**
- In your Vercel deployment, ensure MongoDB connection string is correctly set
- Add `MONGODB_URI` and `MONGODB_DB_NAME` to your environment variables
- If users report profile update errors, check the following:
  - MongoDB connection string should be clean without unnecessary parameters
  - The IP allowlist in MongoDB Atlas should include Vercel's deployment IPs
  - The application includes fallback in-memory storage if the database connection fails
  - User profiles will be stored temporarily and sync when the database connection is restored
- For persistent database issues, consider using MongoDB Realm/Atlas App Services for better connectivity

## Monitoring and Analytics

Both Supabase and Firebase provide tools to monitor your application:

1. **Supabase Dashboard**: Track database usage, API calls, and authentication
2. **Firebase Analytics** (if using): Track user engagement and app usage
3. **Vercel Analytics**: Monitor page performance and user metrics

## Edge Functions vs. Serverless Functions

This app uses both Edge Functions (for lightweight operations) and standard serverless functions (for heavier processing):

- **Edge Functions**: Fast, lightweight API routes that run globally close to users
- **Serverless Functions**: More powerful Node.js environments for database operations and complex processing

## Web3 Wallet Integration

Neural Nexus includes a lightweight wallet connection system through the `SimpleCryptoProvider`. This replaces the previous TonConnect implementation.

### **Enabling the Wallet Connection**

To enable wallet connection in your application:

1. Set the feature flag in your `.env.local` file:
```
NEXT_PUBLIC_ENABLE_SIMPLE_CRYPTO=true
```

2. The wallet connect button will automatically appear in the navbar when the feature flag is enabled.

3. For custom integration, you can use the `SimpleCryptoButton` component:
```tsx
import dynamic from 'next/dynamic';

// Import with dynamic to avoid SSR issues
const SimpleCryptoButton = dynamic(
  () => import('@/components/SimpleCryptoButton'),
  { ssr: false }
);

// Then use it in your component
function MyComponent() {
  return <SimpleCryptoButton />;
}
```

4. For direct access to wallet state, use the `useSimpleCrypto` hook:
```tsx
import { useSimpleCrypto } from '@/providers/SimpleCryptoProvider';

function MyComponent() {
  const { activeWallet, connectWallet, disconnectWallet } = useSimpleCrypto();
  
  return (
    <div>
      {activeWallet ? (
        <div>Connected to: {activeWallet}</div>
      ) : (
        <button onClick={() => connectWallet('MetaMask')}>Connect</button>
      )}
    </div>
  );
}
```

## Policies & Documentation

We maintain comprehensive documentation on how we handle data, models, and content. Please review our policies for complete transparency:

- **Privacy Policy**: Learn how we protect your data and maintain information security. [Read More](docs/PRIVACY_POLICY.md)
- **Content Policy**: Keep the vibes positive! Understand what content is cool to share on Neural Nexus. [Read More](docs/CONTENT_POLICY.md)
- **Model Policies**: Rules for uploading and sharing AI models. Let's keep the AI game fair and innovative. [Read More](docs/MODEL_POLICIES.md)
- **Cookie Policy**: We use cookies to make your experience smoother than butter. Find out how. [Read More](docs/COOKIE_POLICY.md)
- **Updates & Changelog**: Stay updated with the latest changes and features. We're always leveling up! [Read More](docs/UPDATES.md)

These docs are here to ensure we're all on the same page, building a safe and creative space for AI innovation. Got questions? Hit us up! 💬

## Build Instructions

When building the project for production, you might encounter "document is not defined" errors for authentication pages. This is a common issue with Next.js when client-side features are used during static site generation.

To solve this issue, use our custom build and start scripts:

```bash
# Step 1: Use our custom build script that patches the auth pages
npm run custom-build

# Step 2: Start the application using our custom server
npm run custom-start
```

Our custom build script (`build-with-cleanup.sh`) handles the following:
1. Cleans up previous build artifacts
2. Runs the Next.js build process
3. If auth page errors occur, it patches the build by:
   - Creating fallback static HTML files for problematic routes
   - Copying these files to the appropriate output directories

The custom server (`dev-server.js`) then:
1. Serves the static HTML fallbacks for auth routes
2. Handles all other requests normally through Next.js

This approach ensures that authentication pages work correctly in production without the "document is not defined" errors.

## Build Instructions for Auth Pages

Next.js has challenges with client-side authentication pages during static site generation, often resulting in "document is not defined" errors. This project includes special handling to resolve these issues:

### Using the Custom Build Process

```bash
# Run the custom build script that handles auth page issues
npm run custom-build
```

This script:
1. Cleans previous build artifacts
2. Creates static HTML fallbacks for auth pages if needed
3. Runs the build with proper environment variables
4. Patches the generated files to ensure auth pages work correctly

### Using the Custom Server

After building the project, start it with:

```bash
# Start the custom server that handles auth pages
npm run custom-start
```

This custom server serves static HTML fallbacks for authentication pages, preventing issues with client-side code during the initial page load.

### How It Works

The solution uses multiple techniques:
- Middleware detection for build vs. runtime environments
- Static HTML fallbacks for auth pages
- Custom server for serving static content
- Next.js configuration to properly handle client-only pages

If you modify auth-related pages, ensure the build process is aware of these pages by updating the configuration in:
- `middleware.ts`
- `next.config.js`
- `build-with-cleanup.sh`

## Overview
Neural Nexus is a powerful platform for AI model deployment, collaboration, and marketplace. It integrates modern web technologies with AI capabilities to provide a seamless experience for researchers, developers, and users.

## Key Features
- 🧠 AI model marketplace and deployment
- 🔒 Secure authentication with multiple providers
- 💰 Payment processing with Stripe and Web3
- 📊 Advanced analytics dashboard
- 🚀 Fast, modern UI built with Next.js and Tailwind CSS

## Tech Stack
- **Frontend**: Next.js, React, Tailwind CSS
- **Authentication**: Supabase Auth, NextAuth.js
- **Database**: Supabase PostgreSQL
- **Payment**: Stripe, Coinbase SDK
- **Deployment**: Vercel/Netlify compatible

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/Drago-03/neural-nexus.git
cd neural-nexus

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your credentials

# Start development server
npm run dev
```

### Build Instructions

When building the project for production, you might encounter "document is not defined" errors for authentication pages. This is a common issue with Next.js when client-side features are used during static site generation.

For the best production build experience, use our custom build scripts:

```bash
# Standard build with patching
npm run build

# OR for a more thorough approach with cleanup
npm run custom-build
```

The build process includes:
1. Pre-build preparation of static HTML fallbacks
2. The main Next.js build
3. Post-build patching to ensure all files are present

### Running in Production

```bash
# Standard Next.js server
npm run start

# Custom server with enhanced handling of auth pages
npm run custom-start
```

## Troubleshooting Common Issues

### "document is not defined" Errors
These errors occur during server-side rendering of pages that use client-side browser objects. Our build process automatically handles this by:
1. Using static HTML fallbacks for auth pages
2. Patching build artifacts post-build
3. Setting proper runtime configurations

### Edge Runtime Configuration
We use the experimental edge runtime for authentication pages. If you encounter issues:
```bash
# Check that your next.config.js has the correct settings
# Ensure each auth page exports the runtime configuration
export const runtime = "experimental-edge";
```

### Missing Build Artifacts
If your deployment is missing critical files:
```bash
# Run the patch script manually
node ./scripts/patch-build.js
```

## Contributing
Contributions are welcome! Please check out our [Contributing Guide](CONTRIBUTING.md) for details.

<a href="https://github.com/Drago-03/Neural-Nexus/blob/main/CONTRIBUTING.md">
  <img src="https://img.shields.io/badge/Contributing-Guidelines-21262d?style=for-the-badge&logo=github&logoColor=white" alt="Contributing Guidelines">
</a>

### Open Bounties

<a href="https://github.com/Drago-03/Neural-Nexus/labels/bounty">
  <img src="https://img.shields.io/github/issues/Drago-03/Neural-Nexus/bounty?style=for-the-badge&logo=opensourceinitiative&label=Open%20Bounties&color=0E8A16" alt="Open Bounties">
</a>

Get paid to contribute! Check out our open bounties and earn rewards for your contributions.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## GitHub Workflows and Automation

This repository uses several GitHub Actions workflows to automate processes and improve collaboration:

### Automatic PR Labeling

Pull requests are automatically labeled based on the files changed:

- **frontend**: Changes to app, src, components, or public directories
- **backend**: Changes to lib, api, server, or providers directories
- **documentation**: Changes to markdown files or docs directory
- **config**: Changes to configuration files
- **dependencies**: Changes to package.json or lock files
- **testing**: Changes to test files
- **ui**: Changes to CSS, styles, or UI components
- **auth**: Changes to authentication-related code
- **feature**: Changes to feature-specific directories

PRs are also labeled by size:
- **XS**: < 10 lines
- **S**: 10-99 lines
- **M**: 100-299 lines
- **L**: 300-499 lines
- **XL**: 500-999 lines
- **XXL**: 1000+ lines

### Issue Labeling

Issues are automatically labeled based on their title and content:

- **bug**: Issues reporting bugs or problems
- **enhancement**: Feature requests and improvements
- **documentation**: Documentation-related issues
- **question**: Questions and help requests
- **performance**: Performance-related issues
- **security**: Security-related issues
- **ui**: UI/UX-related issues
- **auth**: Authentication-related issues
- **good first issue**: Issues suitable for newcomers

### Dependency Management

Dependabot automatically creates PRs for dependency updates:

- NPM dependencies are checked weekly
- GitHub Actions are checked weekly
- All updates require manual review and approval

### Stale Issue Management

Issues and PRs with no activity for 30 days are marked as stale and closed after 7 more days of inactivity. Issues labeled as bug, security, enhancement, documentation, or good first issue are exempt.

### Code Ownership

The CODEOWNERS file automatically assigns reviewers to PRs based on the files changed.

## Sponsors

We're grateful to our sponsors who make this project possible.

<div align="center">
  <a href="https://tech.dev"><img src="https://img.shields.io/badge/Tech.dev-Sponsor-9146FF?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEBElEQVR4nO2aS2xWRRTHf6UUkEctUVEhUVAWJaBxhRE1LFAbE6Mx0Q1RFwSiRncajS5c6cKFJrpQF5pIYqJGReMrBgMaUAgpRHxEFBpUhBYKQimUx+CZr5k7c+d+t/PdL4XeP/lS0rlzznfm3HNmzpwz0IQ7UQbWAO8BR4AeYG8O+XuALmA38DZwP3DNTcJG4ChQU3If8GQO+bcBZ7XsReAt4FQAi25gjXz8/wInQEdOIHUNmpVYTgHrgMsFsLgEbANuUr8QbwCwOX5KNZBPGChrGgmMcY1NgWA5gZwCWoBT6mMP8FzO9fcDR1UfvcAbQDPwO/AT8AcwxDW4BuEb+R/4FZgGLFRiDQXerBPI48BZYJ8CaE8GkOFAJ/CLHPfXvP5TcnKAZuAT4BlJ1iKBdBiQOvkD+EwqnQk8BQx2jWiLNAGPAB8mKDyvCsYBNwCjgB3ALcAS4IgB2Y0fLbcD06XvrYLdDPJSyJmTOc0CXgbuUVBvR4AcMiB1sg14EbgXmC0lbgCGGZDVxCMywTW2GZBaFhA1WQvM1BxcrwrGZ4BYDTxrxr0PuBN4TFGqVbMTaJgD+1QoNgMIvPpHZ4BIksnAuwbkDfUNyQIyyoBUECZFdJm9OQaQJIAbkUtawZ3ALOCLAshkrZDrCnqrgB9VYasB6dMsxQKZmKD8cQxIUt/TGYD8HYjaCtkVMO0H7gP+1N+WkP0cIEMygHQl9N0ZYPdNgOlX6OBw5K1lQX4IlG8JlNeLAemNBCmajKk1zWpngtFvGSBJ2saBHAiAnAiA9EWCDFQwgzdlGC2XsXn1WJDvC4KMVXhOsrosdQ3jQDYEQE4GQJoiQQYq92oXSrVAnvLqsSCfFgSZBsw10bVVRTHqxk30RL/OWHl9WT9aBEinKndlAPlEPycNyHpgE/B5AcObmRxfVr4VKZS2JUwjJyg1y10DXgJYmqB8NXC9Ot+jz2v0+U0OSGf0cKA8I1Lj9XUFytvV2a3Ps/pcY/o3RUYka/4kTdwY43y7vDrT5IvXaIVUNOdWaG7MUIB4SytkZI6V8olWiF3ObUy2RoL8oxXSkwPkZcUYe5DpUi6VtXIeyHGVrJQ3fyPXR2UNqZOSNruCIJZGZQGxNBpoUXSrk3uUmXUpAjuQrNKBYVugfJc+twLn5YhOyvFtT9iUHRPxaFGPkdbyQMrEhHyHHKGO6NE4Yx8yTMb0qDhtNwG/AVu0AlZoY1ahfFXFKc2JLQnoP3TM6FS+UuZdjm6X2xrPZNg0F5SpknTf0F9WZqm8vtGK/yMZ2p7hVpLtjuExQNskGZpXcUPkgvx/W+GGyHb/A/GN32OYSuE+AAAAAElFTkSuQmCC" alt="Tech.dev" height="50" /></a>
  <a href="https://www.sitepoint.com"><img src="https://www.vectorlogo.zone/logos/sitepoint/sitepoint-ar21.svg" alt="SitePoint" height="50" /></a>
  <a href="https://www.digitalocean.com"><img src="https://opensource.nyc3.cdn.digitaloceanspaces.com/attribution/assets/SVG/DO_Logo_horizontal_blue.svg" alt="DigitalOcean" height="50" /></a>
</div>

<div align="center">
  <a href="https://github.com/sponsors/Drago-03"><img src="https://img.shields.io/badge/GitHub-Become%20a%20Sponsor-EA4AAA?style=for-the-badge&logo=githubsponsors&logoColor=white" alt="GitHub Sponsor"></a>
</div>

## Storage Service

The Neural Nexus application includes a flexible storage service that can operate in two modes:

1. **Google Cloud Storage (Production)**: When properly configured with Google Cloud credentials, the application will use Google Cloud Storage for file uploads and data storage.

2. **Local Fallback (Development)**: If Google Cloud credentials are missing or invalid, the application will automatically fall back to local file system storage, which is ideal for development and testing.

### Configuration

To use Google Cloud Storage, set the following environment variables:

```
GOOGLE_CLOUD_PROJECT_ID=your-project-id
GOOGLE_CLOUD_STORAGE_BUCKET=your-bucket-name
GOOGLE_CLOUD_ACCESS_KEY=your-access-key
GOOGLE_CLOUD_SECRET_KEY=your-secret-key
```

If these variables are not set, the system will automatically use the local storage fallback.

### Testing Storage

You can test the storage implementation using the provided test scripts:

```bash
# Test local storage fallback
node test-storage-fallback.js
```

The storage service is used for:
- Storing model files
- Uploading model thumbnails
- Storing user assets
- Managing application data

## User Profiles with Google Cloud Storage

Neural Nexus now supports storing user profiles and avatars on Google Cloud Storage. This includes:

- **Profile Data Storage**: User profiles are stored in Google Cloud Storage with automatic fallback to in-memory storage for development.
- **Avatar Upload**: Users can upload, update, and delete their profile pictures, which are stored in Google Cloud Storage.
- **Email Notifications**: Users receive email notifications when their profiles are updated (if enabled in preferences).

### Setting Up Google Cloud Storage

1. Create a Google Cloud Storage bucket for your user profiles and avatars
2. Add the following environment variables to your `.env.local` file:
   ```
   GOOGLE_CLOUD_PROJECT_ID=your_project_id
   GOOGLE_CLOUD_STORAGE_BUCKET=your_bucket_name
   GOOGLE_CLOUD_ACCESS_KEY=your_access_key
   GOOGLE_CLOUD_SECRET_KEY=your_secret_key
   GOOGLE_CLOUD_CLIENT_EMAIL=your_client_email
   ```
3. Ensure your storage bucket has proper CORS configuration to allow uploads from your domain

### User Profile Features

- **Profile Editing**: Edit your profile at `/profile/edit`
- **Profile Viewing**: View your profile at `/profile`
- **Avatar Management**: Upload, update, and delete your avatar
- **Social Links**: Add links to your social media profiles
- **Customizable Settings**: Manage email notification preferences

For more details, see the [User Profiles Documentation](docs/user-profiles.md).

## Contributing

Got ideas to make this even more lit? Drop a PR or issue. Let's build this together! 💡

### **Contributors**
Thanks to all our awesome contributors who are helping build Neural Nexus! 🔥

<a href="https://github.com/Drago-03/Neural-Nexus/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Drago-03/Neural-Nexus" alt="Contributors" />
</a>

---

<div align="center">
  <img src="https://img.shields.io/badge/-%E2%9C%A8%20Thank%20you%20for%20visiting!%20%E2%9C%A8-C77DFF?style=for-the-badge&fontWeight=bold" alt="Thank you for visiting" />
  <img src="https://img.shields.io/badge/-%F0%9F%94%A5%20We%20appreciate%20your%20support!%20%F0%9F%94%A5-9146FF?style=for-the-badge&fontWeight=bold" alt="We appreciate your support" />
  <img src="https://img.shields.io/badge/-%F0%9F%9A%80%20Join%20our%20community%20today!%20%F0%9F%9A%80-6441A4?style=for-the-badge&fontWeight=bold" alt="Join our community today" />
  <img src="https://img.shields.io/badge/-%F0%9F%A7%A0%20Let's%20build%20the%20future%20of%20AI!%20%F0%9F%A7%A0-C77DFF?style=for-the-badge&fontWeight=bold" alt="Let's build the future of AI" />
  
  <blockquote>
    <p><em>"The future belongs to those who believe in the beauty of their code."</em></p>
    <p>— Neural-Nexus Team</p>
  </blockquote>
</div>

<p align="center">
  <a href="#top">
    <img src="https://img.shields.io/badge/⬆%20Back%20to%20top-gray?style=for-the-badge" alt="Back to top"/>
  </a>
</p>

## License

© 2025 Indie Hub. All rights reserved. Keep it real, fam! ✌️

## GitAds Sponsored
[![Sponsored by GitAds](https://gitads.dev/v1/ad-serve?source=drago-03/neural-nexus@github)](https://gitads.dev/v1/ad-track?source=drago-03/neural-nexus@github)


<!-- GitAds-Verify: J3D1BXL9MMCM6IIKK6SJTPTK8BUOARZA -->
