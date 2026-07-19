"use client";

import { useEffect } from "react";

export default function ServiceWorkerRegister() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").then((registration) => {
        // Check for updates on page load
        registration.update();

        // Listen for new service worker waiting
        registration.addEventListener("updatefound", () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener("statechange", () => {
              // When the new worker is installed and waiting, reload so it takes control
              if (
                newWorker.state === "installed" &&
                navigator.serviceWorker.controller
              ) {
                // New version available — reload to activate
                window.location.reload();
              }
            });
          }
        });
      }).catch(() => {
        // Service worker registration failed silently
      });
    }
  }, []);

  return null;
}
