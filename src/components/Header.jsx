// در این کامپوننت
//header
// مربوط به پروژه قرار گرفته که چون
//fix
//شده است، در تمام کامپوننت ها قابل دیدن است.

function Header() {
  return (
    <header className="py-8 fixed w-full bg-primary/90">
      <div className="container mx-auto ">
        <div className="flex justify-between items-center">
          {/* در تگ زیر
          logo
          مربوط به پروژه را قرار دادم که مارا به کامپوننت اول یعنی
          Banner
          برمیگرداند */}
          <a
            href="#"
            className="text-[30px] lg:text-[40px] font-primary text-accent font-bold"
          >
            Nothing But Thieves
          </a>
          {/*در تگ زیر
          button
          بالای صفحه، قرار داده شده است. */}
          <button className=" btn btn-sm lg:btn-lg">Listen On Spotify</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
