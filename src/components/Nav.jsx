// در این کامپوننت،
// navigation bar// پایین صفحه قرار داده شده است

import { BiSolidPlaylist } from "react-icons/bi"; // آیکون پلی‌لیست از کتابخانه react-icons
import { PiMicrophoneStageFill } from "react-icons/pi"; // آیکون میکروفون از کتابخانه react-icons
import { FaNewspaper } from "react-icons/fa6"; // آیکون روزنامه از کتابخانه react-icons
import { IoMdPhotos } from "react-icons/io"; // آیکون عکس‌ها از کتابخانه react-icons
import { TiHome } from "react-icons/ti"; // آیکون خانه از کتابخانه react-icons

import { Link } from "react-scroll"; // ایمپورت کامپوننت Link از کتابخانه react-scroll برای اسکرول نرم

function Nav() {
  return (
    // navigation bar که در پایین صفحه ثابت شده است
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        {/* باکس خارجی برای استایل‌دهی و مرکز کردن navigation bar  */}
        <div className="w-full bg-accent/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-7 flex justify-between items-center text-2xl text-accent">
          {/* لینک به بخش "خانه" */}
          <Link
            to="home"
            activeClass="active" // کلاس فعال‌شده وقتی لینک فعال است
            smooth={true} // فعال کردن اسکرول نرم
            offset={-200} // تنظیم فاصله اسکرول
            spy={true} // نظارت بر موقعیت اسکرول برای تشخیص لینک فعال
            className="cursor-pointer h-[60px] w-[60px] flex items-center justify-center"
          >
            <TiHome /> {/* آیکون خانه */}
          </Link>

          {/* لینک به بخش "درباره " */}
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            offset={-50}
            spy={true}
            className="cursor-pointer h-[60px] w-[60px] flex items-center justify-center"
          >
            <PiMicrophoneStageFill /> {/* آیکون میکروفون */}
          </Link>

          {/* لینک به بخش "موسیقی‌ها" */}
          <Link
            to="musics"
            activeClass="active"
            smooth={true}
            offset={-50}
            spy={true}
            className="cursor-pointer h-[60px] w-[60px] flex items-center justify-center"
          >
            <BiSolidPlaylist /> {/* آیکون پلی‌لیست */}
          </Link>

          {/* لینک به بخش "عکس‌ها" */}
          <Link
            to="photos"
            activeClass="active"
            smooth={true}
            offset={-50}
            spy={true}
            className="cursor-pointer h-[60px] w-[60px] flex items-center justify-center"
          >
            <IoMdPhotos /> {/* آیکون عکس‌ها */}
          </Link>

          {/* لینک به بخش "اخبار" */}
          <Link
            to="news"
            activeClass="active"
            smooth={true}
            offset={-50}
            spy={true}
            className="cursor-pointer h-[60px] w-[60px] flex items-center justify-center"
          >
            <FaNewspaper /> {/* آیکون روزنامه */}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav; // خروجی گرفتن از کامپوننت Nav
