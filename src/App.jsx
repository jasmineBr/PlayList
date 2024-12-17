//در این پروژه، یک بند موسیقی را معرفی میکنیم.
// در این کامپوننت، درواقع هرچیزی که میخواهیم نمایش داده شود را قرار میدهیم.

import Banner from "./components/Banner";
import Header from "./components/Header";
import Releases from "./components/Releases";
import Nav from "./components/Nav";
import News from "./components/News";
import PhotoAlbum from "./components/PhotoAlbum";
import About from "./components/About";

function App() {
  return (
    <div className="bg-primary overflow-hidden">
      {/*تمام کامپوننت هایی که میخواهیم نمایش داده شوند، در این قسمت وارد کرده ایم.*/}
      {/* Header, Nav
       در تمام پروژه فیکس شده اند. */}
      <Header />
      <Nav />
      <Banner />
      <About />
      <Releases />
      <PhotoAlbum />
      <News />
    </div>
  );
}

export default App;
