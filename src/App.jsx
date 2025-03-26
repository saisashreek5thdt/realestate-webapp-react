import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import Home from "./Home";
import RootLayout from "./RootLayout";

export default function App() {
  useEffect(() => {
    // List of scripts to include
    const scripts = [
      "js/bootstrap.min.js",
      "js/jquery.min.js",
      "js/lazysize.min.js",
      "js/wow.min.js",
      "js/jquery.nice-select.min.js",
      "js/odometer.min.js",
      "js/counter.js",
      "js/swiper-bundle.min.js",
      "js/swiper.js",
      "js/simpleParallaxVanilla.umd.js",
      "js/gsap.min.js",
      "js/rangle-slider.js",
      "js/Splitetext.js",
      "js/ScrollTrigger.min.js",
      "js/mainApp.js",
      "js/mainForm.js",
    ];

    // Function to dynamically load a script
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () =>
          reject(new Error(`Failed to load script: ${src}`));
        document.body.appendChild(script);
      });
    };

    // Load all scripts sequentially
    const loadScripts = async () => {
      try {
        for (const src of scripts) {
          await loadScript(src);
        }
      } catch (error) {
        console.error(error);
      }
    };

    loadScripts();

    // Cleanup function
    return () => {
      scripts.forEach((src) => {
        const script = document.querySelector(`script[src="${src}"]`);
        if (script) {
          document.body.removeChild(script);
        }
      });
    };
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <RootLayout>
          <Home />
        </RootLayout>
      ),
    },
  ]);

  return (
    <RouterProvider
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
      router={router}
    />
  );
}
