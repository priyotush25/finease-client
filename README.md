# FinEase 💰

**Live Site:** https://finease-priyo.netlify.app

FinEase is a **personal finance management web application** that helps users manage their income, expenses, and savings goals efficiently. Users can track their transactions, set budgets, and visualize their financial data through insightful charts and reports. This project demonstrates **CRUD operations, user authentication, backend integration, and data visualization**.

---

## Features

- **User Authentication:** Secure login and registration with email/password and Google login.
- **Add Transactions:** Users can add income or expense transactions with category, amount, date, and description.
- **My Transactions:** View, update, or delete personal transactions in a card-based layout.
- **Reports & Analytics:** Visual charts (Pie and Bar) to show income vs expenses and category-wise summaries.
- **Responsive Design:** Fully responsive for mobile, tablet, and desktop screens.
- **Dark/Light Mode:** Switch between dark and light themes for better user experience.
- **Profile Management:** Users can view and update their profile information.
- **Error & Success Notifications:** Using Toast/SweetAlert for user-friendly alerts.
- **404 Page:** A custom 404 Not Found page for invalid routes.

---

## Technologies Used

- **Frontend:** React, Tailwind CSS, React Router DOM, React Toastify
- **Backend:** Node.js, Express.js (if integrated)
- **Database:** MongoDB
- **Authentication:** Firebase Authentication
- **Charts:** Recharts for data visualization
- **Deployment:** Netlify / Vercel (client and server side)
- **Other Packages:** SweetAlert2, clsx

---

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/finease-client.git
   ```
   Install dependencies:

cd finease-client
npm install

Add .env file in the root with your Firebase credentials.

Run the development server:

npm run dev

Open http://localhost:5173 in your browser.
