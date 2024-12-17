// در این کامپوننت، من اولین بخشی ای که با عنوان
// home
//نمایش داده میشود را پیاده سازی کردم.

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Image from "../assets/NBT-4.png";

function Banner() {
  return (
    <section
      className="mt-20 lg:mt-[150px] min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        {/* در خیلی از کامپوننت ها، خطوط 12 تا 16 با تغییرات جزیی دیده میشوند. در وواقع در هرکدام از این تگ ها ما یک محدوده ی مشخص به کامپوننت مربوطه دادیم و همچنین با استفاده از
          id , Nav (پایین صفحه)
          میتوانیم به بخش مورد نظر برویم. */}
        <div className="flex items-center justify-between">
          {/*در تگ 
      زیر تمام تکست های بخش مربوطه، استایل شده و قرار گرفته اند.*/}
          <div className="font-primary">
            {/*motion
            در هر قسمتی از کد، برای نحوه در دید قرار گرفتن تگ مربوطه، استفاده شده. */}
            {/*برای نمایش تدریجی متن از fadeIn استفاده شده */}
            <motion.h1
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[70px] lg:text-[75px] leading-none text-nowrap  text-accent font-extrabold"
            >
              Nothing but <br />
              <span className="text-[95px] lg:text-[110px]">thieves</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              {/*در این قسمت از این کامپوننت استفاده کردم که تکست مربوطه،
              type animation
              دارد. */}
              <TypeAnimation
                sequence={[
                  "Alternative Rock",
                  2000,
                  "Indie Rock",
                  2000,
                  "Hard Rock",
                  2000,
                ]}
                speed={50}
                className="text-accent/60 font-extrabold text-[25px] lg:text-[30px]"
                wrapper="span"
                repeat={Infinity}
              />
              <p className="text-accent text-[15px] leading-5 max-w-[450px] lg:max-w-[600px]">
                English rock band, formed in 2012 in Southend-on-Sea, Essex
                consisting of lead vocalist and guitarist
                <br />
                <b>Conor Mason</b>, guitarist <b>Joe Langridge-Brown</b>,
                guitarist and keyboardist <b>Dominic Craik</b>, bassist{" "}
                <b>Philip Blake</b>, and drummer <b>James Price</b>.
              </p>
            </motion.div>
          </div>
          {/*این تگ مربوط به تصویر این کامپوننت است. */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="bg-accent w-[550px] h-[30px] rounded-l-full"></div>
            <img src={Image} className="max-h-[560px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
