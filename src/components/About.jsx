/* دومین بخشی هست که در پروژه نمایش داده میشه و اطلاعاتی درباره بند موسیقی به مخاطب نشون میده */

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { GiMusicalNotes } from "react-icons/gi";

function About() {
  // استفاده از هوک useInView برای تشخیص زمانی که این بخش در معرض دید قرار می‌گیرد
  const [ref, inView] = useInView({
    threshold: 0.5, // تنظیم حساسیت مشاهده (50% از بخش دیده شود)
  });

  return (
    // سکشن مربوط به بخش "About" با استفاده از ref برای ارتباط با useInView
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        {/* عنوان بخش "About" با انیمیشن fade-in */}
        <motion.h2
          variants={fadeIn("right", 0.3)} // تنظیم جهت و زمان انیمیشن
          initial="hidden" // حالت اولیه قبل از نمایش
          whileInView={"show"} // نمایش انیمیشن وقتی این بخش در دید قرار می‌گیرد
          viewport={{ once: false, amount: 0.7 }} // تکرار انیمیشن در صورت خروج و ورود دوباره به دید
          className="h2"
        >
          About
        </motion.h2>

        {/* بخش توضیحات متنی و آیکون همراه */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-y-4">
          {/* توضیحات متنی درباره گروه موسیقی */}
          <motion.p
            variants={fadeIn("right", 0.7)} // انیمیشن با تاخیر بیشتر
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="font-secondary text-black/80 lg:max-w-[800px] text-start leading-7"
          >
            <b>Nothing But Thieves</b> is a British rock band formed in 2012 in
            Southend-on-Sea, Essex. The band&apos;s lineup consists of Conor
            Mason (vocals), Joe Langridge-Brown (guitar), Dominic Craik
            (guitar/keyboard), Philip Blake (bass), and James Price (drums).
            Known for their dynamic sound, they blend rock, alternative, and
            electronic elements. Their self-titled debut album was released in
            2015, followed by successful albums like Broken Machine (2017) and
            Moral Panic (2020). The band has gained a strong following for their
            powerful performances and thought-provoking lyrics. Nothing But
            Thieves&apos; lineup consists of five talented members. Conor Mason,
            the lead vocalist, is known for his impressive vocal range and
            emotional delivery, which has become a defining feature of the
            band&apos;s sound. Joe Langridge-Brown, the guitarist, brings a
            creative and atmospheric approach to the band&apos;s music, often
            blending both heavy and melodic guitar riffs. Dominic Craik, who
            plays guitar and keyboard, contributes to the band&apos;s unique
            sound with his ability to seamlessly integrate electronic elements.
            Philip Blake, the bassist, adds depth to the band&apos;s music with
            his steady bass lines. James Price, the drummer, completes the
            rhythm section with his powerful and dynamic drumming style, which
            drives the band&apos;s energetic performances.
          </motion.p>

          {/* بخش آیکون و آمار */}
          <motion.div
            variants={fadeIn("left", 0.7)} // انیمیشن از سمت چپ با تاخیر
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-1 flex-col gap-y-5 items-center lg:justify-center mb-12 text-accent"
          >
            <div className="text-[120px] lg:text-[200px]">
              <GiMusicalNotes /> {/*آیکون موزیک */}
            </div>
            {/* نمایش تعداد شنوندگان ماهانه با انیمیشن CountUp */}
            <div className="">
              <div className="text-[40px] font-secondary mb-2 font-extrabold">
                {/* وقتی این بخش در دید قرار گیرد، انیمیشن شمارش فعال می‌شود */}
                {inView ? (
                  <CountUp start={0} end={3338564} duration={5} /> // انیمیشن شمارش از یک عدد مشخص تا عدد مشخص
                ) : null}
              </div>
              <div className="font-primary text-lg tracking-[2px]">
                Monthly Listeners{" "}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
