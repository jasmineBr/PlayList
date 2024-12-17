//سومین بخشی هست که در دید مخاطب قرار میگیره و شامل تصاویری از بند موسیقی مورد نظر هست.

import Image1 from "../assets/photos/NBT-1.jpg"; // وارد کردن تصویر اول
import Image2 from "../assets/photos/NBT-2.jpg"; // وارد کردن تصویر دوم
import Image3 from "../assets/photos/NBT-3.jpg"; // وارد کردن تصویر سوم
import Image4 from "../assets/photos/NBT-4.jpg"; // وارد کردن تصویر چهارم
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

// لیست شامل تصاویر گالری
const photos = [Image1, Image2, Image3, Image4];

// کامپوننت اصلی گالری عکس
function PhotoAlbum() {
  return (
    // مشخص کردن محدوده کامپوننت
    <section id="photos" className="section">
      <div className="container mx-auto">
        {/* عنوان بخش گالری عکس همراه با انیمیشن */}
        <motion.h2
          variants={fadeIn("right", 0.3)} // تنظیم جهت و تاخیر انیمیشن
          initial="hidden" // حالت اولیه انیمیشن پیش از مشاهده
          whileInView={"show"} // اجرای انیمیشن هنگام مشاهده
          viewport={{ once: false, amount: 0.7 }} // تکرار انیمیشن در صورت ورود و خروج مجدد
          className="h2 mb-12" // استایل عنوان
        >
          Photos
        </motion.h2>

        {/* بخش گرید برای نمایش تصاویر گالری */}
        <motion.div
          variants={fadeIn("up", 0.5)} // افکت انیمیشن با جهت بالا
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="grid grid-cols-2 gap-y-[70px] px-10 gap-x-[70px] lg:px-0 lg:grid-cols-4" // تنظیم گرید برای اندازه‌های مختلف صفحه
        >
          {/* پیمایش روی لیست تصاویر و نمایش هر تصویر */}
          {photos.map((image, index) => {
            return (
              <div
                key={index}
                className="hover:scale-110 transition-all w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] overflow-hidden shadow-md"
              >
                {/* تصویر هر آیتم */}
                <img
                  src={image} // منبع تصویر
                  alt="nbt"
                  className="object-cover h-full w-full"
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default PhotoAlbum; // اکسپورت کامپوننت برای استفاده در پروژه
