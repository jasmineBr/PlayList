/*آخرین بخشی هست که به مخاطب نمایش داده میشه و اخبار مربوط به بند موسیقی رو بیان میکنه */

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

// لیستی از اطلاعات مربوط به اخبار شامل توضیحات و تاریخ انتشار
const data = [
  {
    description: "Dead Club City (Extended Deluxe) Out Now", // توضیح خبر
    date: "19th Jul 2024", // تاریخ خبر
  },
  {
    description: "Dead Club City (Deluxe) OUT NOW",
    date: "15th Mar 2024",
  },
  {
    description: "North America Tour",
    date: "11th Mar 2024",
  },
  {
    description: "Australia and New Zealand Tour",
    date: "5th Feb 2024",
  },
  {
    description: "DEAD CLUB CITY (DELUXE) ALBUM PRE-ORDER",
    date: "29th Jan 2024",
  },
  {
    description: "Dead Club City OUT NOW",
    date: "30th Jun 2023",
  },
  {
    description: "Acoustic Instore Tour",
    date: "28th Jun 2023",
  },
  {
    description: "Keeping You Around OUT NOW",
    date: "23rd Jun 2023",
  },
  {
    description: "EU Tour",
    date: "16th Jun 2023",
  },
  {
    description: "Dead Club City Tracklist",
    date: "22nd May 2023",
  },
];

function News() {
  return (
    // سکشن اصلی بخش اخبار شامل محدوده ی مشخص برای این کامپوننت
    <section className="mb-28 lg:mb-24 section" id="news">
      {/* استفاده از انیمیشن fade-in برای نمایش بخش اخبار */}
      <motion.div
        variants={fadeIn("right", 0.3)} // تنظیم جهت و تاخیر انیمیشن
        initial="hidden" // حالت اولیه پیش از نمایش
        whileInView={"show"} // اجرای انیمیشن هنگام ورود به محدوده دید
        viewport={{ once: false, amount: 0.7 }} // تکرار انیمیشن در صورت خروج و ورود مجدد
        className="container mx-auto"
      >
        {/* عنوان بخش اخبار */}
        <h2 className="h2">News</h2>

        {/* ایجاد ساختار مشخص برای نمایش لیست اخبار */}
        <div className="grid grid-cols-2">
          {/* پیمایش روی داده‌های اخبار و نمایش هر خبر */}
          {data.map((information, index) => {
            const { description, date } = information; // استخراج اطلاعات هر خبر
            return (
              // هر خبر شامل توضیح و تاریخ است
              <div
                key={index}
                className="font-primary flex flex-col gap-x-2 py-7 border-b mr-10 border-black/10 "
              >
                {/* عنوان خبر */}
                <h3 className="h3">{description}</h3>
                {/* تاریخ خبر */}
                <p className="text-black/50">{date}</p>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

export default News; // اکسپورت کامپوننت برای استفاده در پروژه
