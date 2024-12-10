# ICMR MeDiKiT-DAT

MeDiKiT is a project funded by the **Indian Council of Medical Research (ICMR)** under the Adhoc Research Grant - 2021.  
**Funding ID**: 2021-13255

This web-based Data Analysis Tool (DAT) is designed for managing hospital data efficiently, registering patients, and providing insights through interactive visualizations and analysis tools.

---

## Table of Contents

- [ICMR MeDiKiT-DAT](#icmr-medikit-dat)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
    - [Frontend](#frontend)
    - [Backend](#backend)
    - [State Management](#state-management)
    - [Form Handling](#form-handling)
  - [Installation](#installation)
  - [Development](#development)
    - [Scripts](#scripts)
  - [Build and Deployment](#build-and-deployment)
  - [Folder Structure](#folder-structure)
  - [Contributing](#contributing)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)

---

## Features

- **Authentication**: Login, Signup, and Google Authentication support.
- **Hospital Data Management**: Manage hospitals, departments, doctors, diseases, and medicines.
- **Patient Registration**: Register patients and their associated medical details.
- **Interactive Dashboards**: Gain insights using visualizations and charts.
- **Filters and Search**: Dynamic filtering and searching capabilities for better data accessibility.
- **Responsive Design**: Fully optimized for both desktop and mobile devices.
- **Theme Support**: Switch between light, dark, and system themes.

---

## Technologies Used

### Frontend

- **React**: UI development.
- **React Router DOM**: SPA routing.
- **Radix UI**: Accessible and customizable UI components.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **Recharts**: For data visualizations and charts.

### Backend

- Currently integrated with mock APIs (axios for HTTP requests).

### State Management

- Context API: For managing authentication, themes, and filtering contexts.

### Form Handling

- React Hook Form: For efficient and lightweight form management.
- Zod: For schema-based form validation.

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/bit-by-bits/ICMR-MeDiKiT-DAT
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```dotenv
     VITE_API_BASE_URL=<your-api-url>
     ```

---

## Development

Start the development server:

```bash
npm run dev
```

- The app will be available at [http://localhost:5173](http://localhost:5173).

### Scripts

- **Development**: `npm run dev`
- **Build**: `npm run build`
- **Lint**: `npm run lint`
- **Preview**: `npm run preview`
- **Format Code**: `npm run format`

---

## Build and Deployment

1. Build the project:

   ```bash
   npm run build
   ```

2. The production-ready files will be in the `dist` folder. Deploy these files to your server or hosting service (e.g., Netlify, Vercel, AWS).

---

## Folder Structure

```plaintext
.
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/              # Static assets (images, icons)
│   ├── components/          # Reusable UI components
│   ├── context/             # Context providers (Auth, Theme, Filters)
│   ├── layouts/             # Layout components (AppLayout, AuthLayout)
│   ├── pages/               # Individual pages
│   ├── routes/              # Route definitions and URLs
│   ├── styles/              # Tailwind configuration and custom styles
│   └── index.css            # Global CSS
│   └── main.tsx             # Application entry point
├── .eslintrc.cjs            # ESLint configuration
├── tailwind.config.js       # TailwindCSS configuration
├── vite.config.ts           # Vite configuration
└── README.md                # Documentation
```

---

## Contributing

We welcome contributions to enhance the project! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Submit a pull request.

---

## License

This project is licensed under the **MIT License**.  
See the [LICENSE](./LICENSE) file for more information.

---

## Acknowledgments

- Funded by **Indian Council of Medical Research (ICMR)**.
- Designed and developed by [Your Name/Organization].
