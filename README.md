# 🛒 GRABIT – Grocery Delivery App (MERN Stack)

GRABIT is a full-stack grocery delivery web application built using the MERN stack, offering a smooth shopping experience for users and powerful product & order management tools for sellers.
The app supports secure authentication, Cash on Delivery, Stripe online payments, and real-time stock control.

## 🌐 Live Links
- **Frontend (Client):**
  - 👉 https://grabit-frontend.vercel.app
- **Backend (Server):**
  - 👉 https://grabit-backend-ntnp.onrender.com

## 🚀 Features
### 👤 User Features:
- User registration & login
- JWT-based authentication
- Browse grocery products
- Add to cart & checkout
- 💳 **Payment Options:**
  - 💵 Cash on Delivery (COD)
  - 💳 Online Payment (Stripe)
- Toast notifications (React Toastify)
- Secure password encryption (bcrypt)

## 🏪 Seller Features
- Seller authentication
- Seller dashboard
- Add products
- Upload product images (Multer)
- Disable products when out of stock
- View and manage orders

## 🧰 Tech Stack
- Frontend
  - React.js
  - Tailwind CSS
  - Context API
  - React Toastify
  - Axios
- Backend
  - Node.js
  - Express.js
  - MongoDB
  - JWT Authentication
  - Bcrypt.js
  - Multer (Image Upload)
  - Stripe Payment Gateway

## 🔐 Authentication & Security
- JWT-based authentication
- Password hashing using bcrypt
- Protected routes for users & sellers
- Role-based access control

## 💳 Payment Integration
- Stripe for secure online payments
- Cash on Delivery (COD) option

## 🖼️ Image Upload
- Product images uploaded using Multer
- Images are stored on Cloudinary
- Secure image URLs are saved in MongoDB
- Supports multiple image uploads per product

## 📦 Product Stock Management
- Sellers can mark products as out of stock
- Out-of-stock products are automatically hidden from users
- Prevents invalid orders

## 📘 API Documentation
🔑 Auth Routes
| Method | Endpoint             | Description               | Auth Required |
| ------ | -------------------- | ------------------------- | ------------- |
| POST   | `/api/user/register` | Register new user         | ❌ No          |
| POST   | `/api/user/login`    | Login user                | ❌ No          |
| GET    | `/api/user/is-auth`  | Check user authentication | ✅ Yes (JWT)   |
| GET    | `/api/user/logout`   | Logout user               | ✅ Yes (JWT)   |

🧑‍💼 Seller Routes
| Method | Endpoint              | Description                 | Auth Required |
| ------ | --------------------- | --------------------------- | ------------- |
| POST   | `/api/seller/login`   | Login seller                | ❌ No          |
| GET    | `/api/seller/is-auth` | Check seller authentication | ✅ Yes (JWT)   |
| POST   | `/api/seller/logout`  | Logout seller               | ✅ Yes (JWT)   |

🛍️ Product Routes
| Method | Endpoint             | Description                          | Auth Required |
| ------ | -------------------- | ------------------------------------ | ------------- |
| POST   | `/api/product/add`   | Add new product (with images upload) | ✅ Seller JWT  |
| GET    | `/api/product/list`  | Get all available products           | ❌ No          |
| GET    | `/api/product/:id`   | Get product details by ID            | ❌ No          |
| POST   | `/api/product/stock` | Update product stock / availability  | ✅ Seller JWT  |

📦 Order & Payment Routes
| Method | Endpoint            | Description                              | Auth Required |
| ------ | ------------------- | ---------------------------------------- | ------------- |
| POST   | `/api/order/cod`    | Place order using Cash on Delivery (COD) | ✅ User JWT    |
| POST   | `/api/order/stripe` | Place order using Stripe online payment  | ✅ User JWT    |
| GET    | `/api/order/user`   | Get logged-in user orders                | ✅ User JWT    |
| GET    | `/api/order/seller` | Get all orders (Seller dashboard)        | ✅ Seller JWT  |

## 🛠️ Future Enhancements
- Order tracking
- Email notifications
- Product ratings & reviews

## ⭐ Support
- If you found GRABIT helpful, don’t forget to give it a ⭐ on GitHub!
