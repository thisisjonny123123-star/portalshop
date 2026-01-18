"use client";

import { useEffect, useState } from "react";

export default function ProductClient({ product }: any) {
  const images: string[] = product.images || [];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  const mainImage = images[index] || null;

  return (
    <main
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "60px 40px",
        display: "flex",
        gap: 40,
        alignItems: "flex-start",
      }}
    >
      <div style={{ position: "relative" }}>
        {mainImage && (
          <img
            src={mainImage}
            style={{
              width: 400,
              height: 400,
              objectFit: "contain",
              background: "#111",
              borderRadius: 12,
              display: "block",
            }}
          />
        )}

        <button
          onClick={prev}
          style={{
            position: "absolute",
            top: "50%",
            left: -50,
            transform: "translateY(-50%)",
            width: 40,
            height: 40,
            background: "#7e22ce",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
            color: "#000",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          ←
        </button>

        <button
          onClick={next}
          style={{
            position: "absolute",
            top: "50%",
            right: -50,
            transform: "translateY(-50%)",
            width: 40,
            height: 40,
            background: "#7e22ce",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
            color: "#000",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          →
        </button>
      </div>

      <div style={{ maxWidth: 500 }}>
        <h1
          style={{
            fontSize: 40,
            marginBottom: 10,
            background: "linear-gradient(90deg, #c084fc, #a855f7, #7e22ce)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontWeight: 700,
          }}
        >
          {product.name}
        </h1>

        <div
          style={{
            fontSize: 24,
            marginBottom: 20,
            opacity: 0.9,
          }}
        >
          ${(product.price / 100).toFixed(2)}
        </div>

        <p
          style={{
            opacity: 0.8,
            lineHeight: 1.6,
            marginBottom: 30,
          }}
        >
          {product.description}
        </p>
      </div>
    </main>
  );
}
