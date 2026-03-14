import { Icon } from "@iconify/react";
import image from "./assets/Photography.jpg";
import CountUp from "./CountUp";
import MasonryGallery from "./MasonryGallery";
import Footer from "./Footer";

function Home() {
  // 🖼️ Your gallery images - add all your image paths here
  const galleryImages = [
    // TOP ROW - Your 3 BEST images (most visible)
    "/assets/32.jpg",
    "/assets/26.jpg",
    "/assets/104.jpg",
    "/assets/92.jpg",
    "/assets/54.jpg",
    "/assets/53.jpg",
    "/assets/75.jpg",
    "/assets/81.jpg",
    "/assets/102.jpg",
    "/assets/29.jpg",
    "/assets/18.jpg",
    "/assets/98.jpg",
    "/assets/35.jpg",
    "/assets/40.jpg",
    "/assets/59.jpg",
    "/assets/37.jpg",
    "/assets/62.jpg",
    "/assets/55.jpg",
    "/assets/15.jpg",
    "/assets/43.jpg",
    "/assets/33.jpg",
    "/assets/31.jpg",
    "/assets/36.jpg",
    "/assets/48.jpg",
    "/assets/120.jpg",
    "/assets/24.jpg",
    "/assets/109.jpg",
    "/assets/38.jpg",
    "/assets/25.jpg",
    "/assets/31.jpg",
    "/assets/7.jpg",
    "/assets/42.jpg",
    "/assets/112.jpg",
    "/assets/52.jpg",
    "/assets/83.jpg",
    "/assets/82.jpg",
    "/assets/27.jpg",
    "/assets/106.jpg",
    "/assets/28.jpg",
    "/assets/71.jpg",
    "/assets/79.jpg",
    "/assets/101.jpg",
    "/assets/110.jpg",
    "/assets/87.jpg",
    "/assets/94.jpg",
    "/assets/99.jpg",
    "/assets/58.jpg",
    "/assets/84.jpg",
    "/assets/57.jpg",
    "/assets/72.jpg",
    "/assets/61.jpg",
    "/assets/121.jpg",
    "/assets/14.jpg",
    "/assets/67.jpg",
    "/assets/69.jpg",
    "/assets/16.jpg",
    "/assets/73.jpg",
    "/assets/19.jpg",
    "/assets/77.jpg",
    "/assets/17.jpg",
    "/assets/45.jpg",
    "/assets/9.jpg",
    "/assets/85.jpg",
    "/assets/21.jpg",
    "/assets/91.jpg",
    "/assets/93.jpg",
    "/assets/95.jpg",
    "/assets/97.jpg",
    "/assets/23.jpg",
    "/assets/1.jpg",
    "/assets/117.jpg",
    "/assets/39.jpg",
    "/assets/89.jpg",
    "/assets/118.jpg",
    "/assets/111.jpg",
    "/assets/113.jpg",
    "/assets/115.jpg",
    "/assets/103.jpg",
    "/assets/119.jpg",
    "/assets/122.jpg",
    "/assets/108.jpg",
    "/assets/86.jpg",
    "/assets/116.jpg",
    "/assets/114.jpg",
    "/assets/60.jpg",
    "/assets/90.jpg",
    "/assets/65.jpg",
    "/assets/3.jpg",
    "/assets/8.jpg",
    "/assets/100.jpg",
    "/assets/12.jpg",
    "/assets/96.jpg",
    "/assets/22.jpg",
    "/assets/3.jpg",
    "/assets/13.jpg",
    "/assets/88.jpg",
    "/assets/68.jpg",
    "/assets/44.jpg",
    "/assets/107.jpg",
    "/assets/80.jpg",
    "/assets/78.jpg",
    "/assets/76.jpg",
    "/assets/74.jpg",
    "/assets/46.jpg",
    "/assets/70.jpg",
    "/assets/56.jpg",
    "/assets/66.jpg",
    "/assets/64.jpg",
    "/assets/2.jpg",
    "/assets/20.jpg",
    "/assets/11.jpg",
  ];
  return (
    <div style={{ fontFamily: "Biryani, sans-serif" }} className="">
      <header
        className="h-64 bg-cover  bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="mr-auto mt-26 text-xs">
          <p className="text-xl text-yellow-500 text-shadow-2xs font-black  ml-4">
            Hello!
          </p>
          <p className="text-xl  ml-4 mb-2 text-yellow-500 font-black text-shadow-2xs">
            I'm Fandy
          </p>
          <p
            style={{ fontSize: "10px" }}
            className="text-yellow-50 ml-4  text-shadow-2xs"
          >
            "I believe every person has a unique story to tell. <br /> my
            mission is to capture those authentic moments <br />
            and craft them into powerful visual narratives."
          </p>

          <div
            style={{ fontSize: "7px" }}
            className="text-white/60 ml-4 mt-6 flex gap-4"
          >
            <div className="flex flex-col items-center text-center">
              <div>
                <CountUp
                  from={0}
                  to={3}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                +<p className="mb-0">Experience</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div>
                <CountUp
                  from={0}
                  to={150}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                +<p className="mb-0">Clients</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div>
                <CountUp
                  from={0}
                  to={200}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                +<p className="mb-0">Photoshoots</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="p-4">
        <div className="items-center justify-center flex-col flex m-auto">
          <div className="w-full flex items-center">
            <div className="flex-1 border-t border-yellow-500"></div>
            <p className="text-black px-8 text-sm text-shadow-2xs">
              Reservations:
            </p>
            <div className="flex-1 border-t border-yellow-500"></div>
          </div>
          <p>Chat Only</p>

          <button
            className="flex items-center mb-2 border mt-2 rounded-xl px-3 border-black/20 shadow hover:shadow-md transition-shadow"
            onClick={() =>
              window.open(
                "https://wa.me/6287786578308?text=Halo%20kak",
                "_blank",
              )
            }
          >
            <Icon icon="logos:whatsapp-icon" width="35" />
            <p className="text-shadow-2xs ml-2">WhatsApp</p>
          </button>

          <div className="flex">
            <button
              className="mr-4 flex items-center mt-2 rounded-xl p-1 shadow hover:shadow-md transition-shadow"
              onClick={() =>
                window.open(
                  "https://www.tiktok.com/@fandi_arsena?lang=en",
                  "_blank",
                )
              }
              title="Message on TikTok"
            >
              <Icon icon="logos:tiktok-icon" width="30" height="30" />
            </button>
            <button
              className="flex items-center mt-2 rounded-xl p-1 shadow hover:shadow-md transition-shadow"
              onClick={() =>
                window.open("https://www.instagram.com/fandi_arsena", "_blank")
              }
              title="Message on Instagram"
            >
              <Icon icon="skill-icons:instagram" width="30" height="30" />
            </button>
          </div>

          <div className="w-full mt-5 flex items-center">
            <div className="flex-1 border-t border-yellow-500"></div>
            <div className="flex-1 border-t border-yellow-500"></div>
          </div>
        </div>
      </div>{" "}
      {/* 🎯 IMPORTANT: Make sure to pass images={galleryImages} */}
      <div className="py-2 ">
        <MasonryGallery
          images={galleryImages}
          className="max-w-6xl p-1 mx-auto"
        />
      </div>
      <div className="p-4">
        <div className="items-center justify-center flex-col flex m-auto">
          <div className="w-full flex items-center">
            <div className="flex-1 border-t border-yellow-500"></div>
            <p className="text-black px-8 text-sm text-shadow-2xs">
              Reservations:
            </p>
            <div className="flex-1 border-t border-yellow-500"></div>
          </div>

          <button
            className="flex items-center mb-2 border mt-2 rounded-xl px-3 border-black/20 shadow hover:shadow-md transition-shadow"
            onClick={() =>
              window.open(
                "https://wa.me/6285760207747?text=Halo%20kak,%20saya%20mau%20booking",
                "_blank",
              )
            }
          >
            <Icon icon="logos:whatsapp-icon" width="35" />
            <p className="text-shadow-2xs ml-2">WhatsApp</p>
          </button>

          <div className="flex">
            <button
              className="mr-4 flex items-center mt-2 rounded-xl p-1 shadow hover:shadow-md transition-shadow"
              onClick={() =>
                window.open(
                  "https://www.tiktok.com/@fandikokain?lang=en",
                  "_blank",
                )
              }
              title="Message on TikTok"
            >
              <Icon icon="logos:tiktok-icon" width="30" height="30" />
            </button>
            <button
              className="flex items-center mt-2 rounded-xl p-1 shadow hover:shadow-md transition-shadow"
              onClick={() =>
                window.open("https://www.instagram.com/direct/inbox/", "_blank")
              }
              title="Message on Instagram"
            >
              <Icon icon="skill-icons:instagram" width="30" height="30" />
            </button>
          </div>

          <div className="w-full mt-5 flex items-center">
            <div className="flex-1 border-t border-yellow-500"></div>
            <div className="flex-1 border-t border-yellow-500"></div>
          </div>
        </div>
      </div>{" "}
      <Footer />
    </div>
  );
}

export default Home;
