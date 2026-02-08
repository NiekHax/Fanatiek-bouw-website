"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

type ConsentState = "all" | "necessary" | null;

function getConsent(): ConsentState {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(/cookie_consent=(all|necessary)/);
  return match ? (match[1] as ConsentState) : null;
}

function setConsentCookie(value: "all" | "necessary") {
  const expires = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `cookie_consent=${value};expires=${expires};path=/;SameSite=Lax`;
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  const checkConsent = useCallback(() => {
    const consent = getConsent();
    if (!consent) {
      setVisible(true);
    } else if (consent === "all") {
      loadGA();
    }
  }, []);

  useEffect(() => {
    checkConsent();

    const handler = () => {
      setVisible(true);
      setShowSettings(true);
    };
    window.addEventListener("open-cookie-settings", handler);
    return () => window.removeEventListener("open-cookie-settings", handler);
  }, [checkConsent]);

  function loadGA() {
    // GA4 loads only after consent — replace G-XXXXXXXXXX with actual ID
    if (typeof window !== "undefined" && !document.getElementById("ga-script")) {
      const script = document.createElement("script");
      script.id = "ga-script";
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX";
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        const w = window as unknown as Record<string, unknown>;
        w.dataLayer = (w.dataLayer as unknown[]) || [];
        function gtag(...args: unknown[]) {
          (w.dataLayer as unknown[]).push(args);
        }
        gtag("js", new Date());
        gtag("config", "G-XXXXXXXXXX", { anonymize_ip: true });
      };
    }
  }

  function acceptAll() {
    setConsentCookie("all");
    loadGA();
    setVisible(false);
    setShowSettings(false);
  }

  function acceptNecessary() {
    setConsentCookie("necessary");
    setVisible(false);
    setShowSettings(false);
  }

  function saveSettings() {
    if (analyticsEnabled) {
      acceptAll();
    } else {
      acceptNecessary();
    }
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] bg-white p-6 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <div className="mx-auto max-w-[1200px]">
        {!showSettings ? (
          /* First layer */
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-dark">
              Wij gebruiken cookies om onze website te verbeteren en uw ervaring te
              optimaliseren. Lees meer in ons{" "}
              <Link href="/cookiebeleid" className="text-primary underline">
                cookiebeleid
              </Link>
              .
            </p>
            <div className="flex flex-col gap-2 sm:flex-row sm:shrink-0">
              <button
                onClick={acceptAll}
                className="rounded bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
              >
                Alles accepteren
              </button>
              <button
                onClick={acceptNecessary}
                className="rounded border border-gray-300 px-6 py-3 text-sm font-semibold text-dark transition-colors hover:bg-gray-100"
              >
                Alleen noodzakelijk
              </button>
              <button
                onClick={() => setShowSettings(true)}
                className="rounded border border-gray-300 px-6 py-3 text-sm font-semibold text-dark transition-colors hover:bg-gray-100"
              >
                Instellingen
              </button>
            </div>
          </div>
        ) : (
          /* Second layer: settings */
          <div>
            <h3 className="mb-4 font-heading text-lg font-bold text-dark">
              Cookie-instellingen
            </h3>
            <div className="mb-4 space-y-3">
              <div className="flex items-center justify-between rounded border p-4">
                <div>
                  <p className="text-sm font-semibold text-dark">
                    Noodzakelijke cookies
                  </p>
                  <p className="text-xs text-medium">
                    Deze cookies zijn nodig voor het functioneren van de website.
                  </p>
                </div>
                <span className="text-xs font-semibold text-medium">
                  Altijd actief
                </span>
              </div>
              <div className="flex items-center justify-between rounded border p-4">
                <div>
                  <p className="text-sm font-semibold text-dark">
                    Analytische cookies
                  </p>
                  <p className="text-xs text-medium">
                    Google Analytics. Helpen ons inzicht te krijgen in hoe de website wordt gebruikt.
                  </p>
                </div>
                <button
                  onClick={() => setAnalyticsEnabled(!analyticsEnabled)}
                  className={`relative h-6 w-11 rounded-full transition-colors ${
                    analyticsEnabled ? "bg-primary" : "bg-gray-300"
                  }`}
                  role="switch"
                  aria-checked={analyticsEnabled}
                  aria-label="Analytische cookies"
                >
                  <span
                    className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                      analyticsEnabled ? "translate-x-5" : ""
                    }`}
                  />
                </button>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={saveSettings}
                className="rounded bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
              >
                Opslaan
              </button>
              <button
                onClick={acceptAll}
                className="rounded border border-gray-300 px-6 py-3 text-sm font-semibold text-dark transition-colors hover:bg-gray-100"
              >
                Alles accepteren
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
