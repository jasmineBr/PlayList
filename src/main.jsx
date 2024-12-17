// ایمپورت کامپوننت StrictMode از کتابخانه React
import { StrictMode } from "react";
// ایمپورت متد createRoot از react-dom/client
import { createRoot } from "react-dom/client";
// ایمپورت فایل استایل اصلی برنامه
import "./index.css";
// ایمپورت کامپوننت اصلی برنامه
import App from "./App.jsx";

// رندر کردن کامپوننت App در DOM با استفاده از createRoot
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
