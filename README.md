# Grams to Gains: B2B Cannabis Marketplace

Grams to Gains is an all-in-one B2B platform designed to connect cannabis manufacturers, dispensaries, and growers. It streamlines operations, provides market insights, and helps businesses grow using data-driven tools and a seamless marketplace experience.

## Key Features

- **METRC Integration**: Securely connect your METRC account to sync inventory, lab results, and other compliance data automatically. This serves as the authoritative source for your inventory on the platform.
- **Inventory Management**: A centralized dashboard to view and manage all METRC-synced packages. Track key details like Package ID, strain, product type, quantity, UOM, lab results, and status.
- **B2B Marketplace**: Manufacturers can easily post products from their inventory to a dedicated marketplace. Dispensaries can browse, filter, and create orders for these products.
- **Demand Forecasting**: (For Manufacturers) Leverage historical sales data and market trends to predict future product demand, helping optimize production schedules.
- **Smart Inventory Recommendations**: (For Dispensaries) Get data-driven recommendations on which products to stock, ensuring your shelves are filled with top-sellers based on sales data, customer preferences, and compliance rules.
- **Document Hub**: A central repository for managing and sharing important documents like licenses, Certificates of Analysis (COAs), and lab results.
- **Invoicing & Procurement**: Streamlined tools for managing invoices and creating procurement requests to connect growers with manufacturers and dispensaries.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Backend & Database**: [Firebase](https://firebase.google.com/) (Authentication, Firestore)
- **Generative AI**: [Genkit](https://firebase.google.com/docs/genkit) (for AI-powered features)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v18 or newer recommended)
- npm, yarn, or pnpm

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [your-repository-url]
    cd [your-repository-name]
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a new file named `.env.local` in the root of your project and add your Firebase project credentials. You can get these from your Firebase project settings.

    ```env
    NEXT_PUBLIC_FIREBASE_API_KEY=
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
    NEXT_PUBLIC_FIREBASE_APP_ID=
    ```

4.  **Firebase Setup:**
    - Go to your [Firebase Console](https://console.firebase.google.com/).
    - In the **Authentication** section, enable the "Email/Password" sign-in provider.
    - In the **Firestore Database** section, create a database and ensure it's ready to accept data.

5.  **Run the development server:**
    ```bash
    npm run dev
    ```

    Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in development mode.
- `npm run build`: Builds the app for production.
- `npm run start`: Starts a production server.
- `npm run lint`: Lints the code using Next.js's built-in ESLint configuration.
