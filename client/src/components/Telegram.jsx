import { useEffect, useRef } from "react";

const Telegram = () => {
  const widgetRef = useRef(null);
  const botName = process.env.BOT_NAME;
  const authUrl = process.env.BASE_URL + "telegram";

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.async = true;
    script.setAttribute("data-telegram-login", botName);
    script.setAttribute("data-size", "large");
    script.setAttribute("data-radius", "10");
    script.setAttribute("data-auth-url", authUrl);
    script.setAttribute("data-request-access", "write");

    script.onload = () =>
      console.log("telegram widget script loaded successfully");
    script.onerror = () =>
      console.error("failed to load telegram widget script");

    widgetRef.current.appendChild(script);

    return () => {
      if (widgetRef.current && widgetRef.current.contains(script)) {
        widgetRef.current.removeChild(script);
      }
    };
  }, []);

  return (
    <div className=" bg-stone-900 flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="bg-cyan-700 font-mono text-4xl font-bold mb-4">
        telegram login using widget
      </h1>
      <div ref={widgetRef} />
    </div>
  );
};

export default Telegram;
