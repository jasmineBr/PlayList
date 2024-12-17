import amsterdam from "../assets/Songs/amsterdam.jpg"; // وارد کردن تصویر مربوط به آهنگ Amsterdam
import impossible from "../assets/Songs/impossible.jpg"; // وارد کردن تصویر مربوط به آهنگ Impossible
import tripswitch from "../assets/Songs/tripswitch.jpg"; // وارد کردن تصویر مربوط به آهنگ Trip Switch
import { FaSpotify } from "react-icons/fa"; // آیکون Spotify برای لینک‌های آهنگ
import { BiSolidAlbum } from "react-icons/bi"; // آیکون آلبوم برای نمایش اطلاعات آلبوم
import { TbCalendarStats } from "react-icons/tb"; // آیکون تقویم برای نمایش سال انتشار
import { FaExternalLinkSquareAlt } from "react-icons/fa"; // آیکون لینک خارجی برای نمایش لینک‌های بیشتر
import { motion } from "framer-motion"; // کتابخانه framer-motion برای افکت‌های انیمیشنی
import { fadeIn } from "../variants"; // متد سفارشی fadeIn برای تنظیم انیمیشن‌ها

// آرایه‌ای از آهنگ‌ها شامل اطلاعات نام، تصویر، سال، آلبوم، و لینک
const songs = [
  {
    name: "Amsterdam", // نام آهنگ
    photo: amsterdam, // تصویر آهنگ
    year: "2017", // سال انتشار
    album: "Broken Machine", // نام آلبوم
    link: "https://open.spotify.com/track/454I78HEySdcHE8fcVabTb", // لینک آهنگ در Spotify
  },
  {
    name: "Impossible",
    photo: impossible,
    year: "2020",
    album: "Moral Panic",
    link: "https://open.spotify.com/track/1jY5ybC7oObbHLd5shYKps",
  },
  {
    name: "Trip switch",
    photo: tripswitch,
    year: "2015",
    album: "Nothing But Thieves",
    link: "https://open.spotify.com/track/1uqU0nq6DCbJMktSlUvQV8",
  },
  {
    name: "amsterdam",
    photo: amsterdam,
    year: "2017",
    album: "Broken Machine",
    link: "https://open.spotify.com/track/454I78HEySdcHE8fcVabTb",
  },
  {
    name: "amsterdam",
    photo: amsterdam,
    year: "2017",
    album: "Broken Machine",
    link: "https://open.spotify.com/track/454I78HEySdcHE8fcVabTb",
  },
];

// کامپوننت اصلی برای نمایش لیست آهنگ‌ها
function Releases() {
  return (
    <section className="section" id="musics">
      {" "}
      {/* بخش اصلی شامل شناسه و محدوده کامپوننت*/}
      <div className="container mx-auto">
        <div>
          {/* عنوان این بخش با افکت انیمیشن */}
          <motion.h2
            variants={fadeIn("right", 0.3)} // تنظیم انیمیشن با جهت راست
            initial="hidden" // حالت اولیه پیش از ورود به دید
            whileInView={"show"} // نمایش انیمیشن هنگام ورود به محدوده دید
            viewport={{ once: false, amount: 0.7 }} // تنظیم محدوده اجرای انیمیشن
            className="h2 mb-16" // استایل عنوان
          >
            Popular releases
          </motion.h2>
          {/* grid برای نمایش اطلاعات آهنگ‌ها */}
          <motion.div
            variants={fadeIn("up", 0.7)} // انیمیشن با جهت بالا
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="grid grid-cols-2 grid-rows-3 justify-center font-primary gap-y-[50px] items-center gap-x-12"
          >
            {songs.map((song, index) => {
              // پیمایش لیست آهنگ‌ها
              const { name, photo, year, album, link } = song; // استخراج اطلاعات هر آهنگ
              return (
                <div
                  key={index}
                  className="flex gap-x-2 pb-7 border-b mr-10 border-black/10"
                >
                  {/* تصویر آهنگ */}
                  <img
                    src={photo}
                    alt={name}
                    className="w-[100px] h-[100px] lg:max-w-[130px] rounded-lg"
                  />
                  {/* اطلاعات آهنگ div*/}
                  <div className=" leading-none w-full flex flex-col gap-y-1">
                    <h3 className="h3">{name}</h3> {/* نام آهنگ */}
                    <p className="text-nowrap flex gap-x-1 text-black/80">
                      {" "}
                      {/* نام آلبوم */}
                      <BiSolidAlbum /> {/* آیکون آلبوم */}
                      <span>{album}</span>
                    </p>
                    <p className="text-black/80 flex items-center gap-x-1">
                      {" "}
                      {/* سال انتشار */}
                      <TbCalendarStats /> {/* آیکون تقویم */}
                      <span>{year}</span>
                    </p>
                    <a
                      className="text-accent font-bold cursor-pointer hover:text-accent/60 transition-all mt-4 lg:mt-2 flex items-center gap-x-2"
                      href={link} // لینک آهنگ
                      target="_blank"
                    >
                      Listen Now! {/* متن لینک */}
                      <span className="text-xl">
                        {/* آیکون اسپاتیفای */}
                        <FaSpotify />
                      </span>
                    </a>
                  </div>
                  <h2 className="h2 hidden lg:flex">{index + 1}</h2>{" "}
                  {/* شماره آهنگ */}
                </div>
              );
            })}
            {/* لینک برای مشاهده آهنگ‌های بیشتر */}
            <a
              target="_blank"
              href="https://open.spotify.com/artist/1kDGbuxWknIKx4FlgWxiSp" // لینک اسپاتیفای
              className="uppercase text-accent font-extrabold text-[30px] flex gap-x-2 hover:text-accent/60 transition-all"
            >
              more songs. . . {/* متن لینک */}
              <span>
                <FaExternalLinkSquareAlt /> {/* آیکون لینک */}
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Releases; // اکسپورت کامپوننت برای استفاده در برنامه
