"use client";

import { useEffect, useState } from "react";

export default function Splash({
  children,
  duration = 3500,
}: {
  children: React.ReactNode;
  duration?: number;
}) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <>
      {show && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundImage: 'url("/splash/launch-1170x2532.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      )}
      {children}
    </>
  );
}
