import { Icon } from "@iconify/react";
import image from "./assets/Photography.jpg";
import CountUp from "./CountUp";
import MasonryGallery from "./MasonryGallery";
import Footer from "./Footer"

function Home() {
  // 🖼️ Your gallery images - add all your image paths here
  const galleryImages = [
    // TOP ROW - Your 3 BEST images (most visible)
    "/assets/56.jpg", 
    "/assets/2.jpg", 
    "/assets/53.jpg", 
    "/assets/54.jpg", 
    "/assets/39.jpg", 
    "/assets/49.jpg", 
    "/assets/1.jpg", // Position 2 - MIDDLE column top
    "/assets/45.jpg", // Position 3 - RIGHT column top
    "/assets/8.jpg", // Position 4 - LEFT column
    "/assets/29.jpg", // Position 5 - MIDDLE column
    "/assets/18.jpg", // Position 6 - RIGHT column
    "/assets/12.jpg", // Position 7 - LEFT column
    "/assets/35.jpg", // Position 8 - MIDDLE column
    "/assets/24.jpg", // Position 9 - RIGHT column
    "/assets/46.jpg",
    "/assets/51.jpg",
    "/assets/37.jpg",
    "/assets/41.jpg",
    "/assets/26.jpg",
    "/assets/55.jpg",
    "/assets/4.jpg",
    "/assets/28.jpg",
    "/assets/43.jpg",
    "/assets/33.jpg",
    "/assets/31.jpg",
    "/assets/36.jpg",
    "/assets/48.jpg",
    "/assets/27.jpg",
    "/assets/40.jpg",
    "/assets/32.jpg",
    "/assets/47.jpg",
    "/assets/38.jpg",
    "/assets/30.jpg",
    "/assets/34.jpg",
    "/assets/25.jpg",
    "/assets/31.jpg",
    "/assets/52.jpg",
    "/assets/3.jpg",
    "/assets/50.jpg",
    "/assets/3.jpg",
    "/assets/7.jpg",
    "/assets/9.jpg",
    "/assets/10.jpg",
    "/assets/11.jpg",
    "/assets/13.jpg",
    "/assets/14.jpg",
    "/assets/15.jpg",
    "/assets/16.jpg",
    "/assets/17.jpg",
    "/assets/19.jpg",
    "/assets/20.jpg",
    "/assets/21.jpg",
    "/assets/22.jpg",
    "/assets/23.jpg",
    "/assets/42.jpg",
    "/assets/44.jpg",
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
                  to={2}
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
                  to={50}
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
                  to={100}
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

          <button
            className="flex items-center mb-2 border mt-2 rounded-xl px-3 border-black/20 shadow hover:shadow-md transition-shadow"
            onClick={() =>
              window.open(
                "https://wa.me/6285760207747?text=Halo%20kak,%20saya%20mau%20booking",
                "_blank"
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
                  "_blank"
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
                "_blank"
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
                  "_blank"
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
      <Footer/>
    </div>
  );
}

export default Home;
