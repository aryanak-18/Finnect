# Finnect: Online Banking Web Application

Welcome to **Finnect**, an advanced online banking web application that allows users to connect to their bank accounts, view details, manage transaction histories, and transfer funds securely. This project leverages modern technologies to ensure a seamless and secure user experience.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Project](#running-the-project)
- [Usage](#usage)
- [Security](#security)

## Features

- **User Management**: Users can create accounts, log in, and manage their profiles.
- **Bank Connection**: Connect to multiple bank accounts through Plaid.
- **Bank Details**: View connected bank account details and balances.
- **Transaction History**: Access and manage transaction history for connected accounts.
- **Fund Transfers**: Perform secure fund transfers between connected accounts using Dwolla.
- **Security**: Enhanced security features provided by Sentry for error tracking and monitoring.

## Technologies Used

- **Frontend**: [Next.js](https://nextjs.org/) , [TypeScript](https://www.typescriptlang.org/)
- **Backend**: [Appwrite](https://appwrite.io/)
- **Banking Integration**: [Plaid](https://plaid.com/)
- **Fund Transfers**: [Dwolla](https://www.dwolla.com/)
- **Security and Monitoring**: [Sentry](https://sentry.io/)

## Prerequisites

- Node.js v14 or above
- npm or yarn
- Appwrite server
- Plaid account and API keys
- Dwolla account and API keys
- Sentry account for monitoring and security

## Installation

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/aryanak-18/Finnect.git
    cd Finnect
    ```

2. **Install Dependencies**:

    ```bash
    npm install
    # or
    yarn install
    ```

3. **Set Up Appwrite**:

    Follow the instructions on the [Appwrite website](https://appwrite.io/docs) to set up your backend server and database.

4. **Configure Plaid and Dwolla**:

    Obtain your API keys from [Plaid](https://dashboard.plaid.com/signup) and [Dwolla](https://www.dwolla.com/).

5. **Configure Sentry**:

    Set up an account on [Sentry](https://sentry.io/) and obtain your DSN.

## Configuration

1. **Create a `.env` File**:


2. **Add the Following Variables**:

    ```env
    NEXT_PUBLIC_SITE_URL=http://localhost:3000/
    
    NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
    NEXT_PUBLIC_APPWRITE_PROJECT=
    APPWRITE_DATABASE_ID=
    APPWRITE_USER_COLLECTION_ID=
    APPWRITE_BANK_COLLECTION_ID=
    APPWRITE_TRANSACTION_COLLECTION_ID=
    NEXT_APPWRITE_KEY=
    
    PLAID_CLIENT_ID=
    PLAID_SECRET=
    PLAID_ENV=
    PLAID_PRODUCTS=
    PLAID_COUNTRY_CODES=
    
    DWOLLA_KEY=
    DWOLLA_SECRET=
    DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
    DWOLLA_ENV=sandbox

    ```

3. **Save the File**.

## Running the Project

1. **Start the Next.js Development Server**:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

2. **Access the Application**:

    Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Usage

- **Sign Up**: Create a new user account.
- **Log In**: Access your account using your credentials.
- **Connect Banks**: Use Plaid to connect your bank accounts securely.
- **View Bank Details**: Access details of connected bank accounts.
- **Transaction History**: View and manage your transaction history.
- **Fund Transfers**: Transfer funds securely between accounts using Dwolla.

## Security

- **Sentry Integration**: The application uses Sentry to monitor and track errors for enhanced security and reliability.
- **Data Encryption**: All sensitive data is encrypted both in transit and at rest.
- **Secure Authentication**: Utilizes secure authentication methods for user account access.    
<br/>
---

