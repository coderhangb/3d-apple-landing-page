import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";

function Showcase() {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const showcaseRef = useRef(null);

  useGSAP(() => {
    let tl;

    if (!isTablet) {
      const video = showcaseRef.current?.querySelector("video");

      const init = () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());

        tl = gsap.timeline({
          scrollTrigger: {
            trigger: showcaseRef.current,
            start: "top top",
            end: "+=" + window.innerHeight * 3,
            scrub: true,
            pin: true,
            invalidateOnRefresh: true,
          },
        });

        tl.to(".mask img", {
          scale: 1.1,
        }).to(".content", {
          y: 0,
          opacity: 1,
          ease: "power1.in",
        });

        ScrollTrigger.refresh();
      };

      if (video && video.readyState >= 2) {
        init();
      } else {
        video?.addEventListener("loadeddata", init);
      }

      return () => {
        video?.removeEventListener("loadeddata", init);
        if (tl) {
          tl.scrollTrigger?.kill();
          tl.kill();
        }
      };
    }
  }, [isTablet]);

  return (
    <section id="showcase" ref={showcaseRef}>
      <div className="media">
        <video src="/videos/game.mp4" autoPlay loop muted playsInline />
        <div className="mask">
          <img src="/mask-logo.svg" alt="" />
        </div>
      </div>

      <div className="content">
        <div className="wrapper">
          <div className="lg:max-w-md">
            <h2>Rocket Chip</h2>

            <div className="space-y-5 mt-7 pe-10">
              <p>
                Introducing{" "}
                <span className="text-white">
                  M4, the next generation of Apple silicon
                </span>
                .M4 powers
              </p>

              <p>
                It drives Apple Intelligence on iPad Pro, so you can write,
                create, and accomplish more with ease. All in a design that’s
                unbelievably thin, light, and powerful.
              </p>

              <p>
                A brand-new display engine delivers breathtaking precision,
                color accuracy, and brightness. And a next-gen GPU with
                hardware-accelerated ray tracing brings console-level graphics
                to your fingertips.
              </p>

              <p className="text-primary">
                Learn more about Apple Intelligence
              </p>
            </div>
          </div>

          <div className="max-w-3xs space-y-14">
            <div className="space-y-2">
              <p>Up to</p>
              <h3>4x faster</h3>
              <p>pro rendering performance than M2</p>
            </div>

            <div className="space-y-2">
              <p>Up to</p>
              <h3>1.5x faster</h3>
              <p>CPU performance than M2</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
