"use client";

import Link from "next/link";

export default function ProductCard({ product }: any) {
  const image = product.images?.split(",")[0] || "";

  return (
    <Link
      href={`/product/${product.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        style={{
          background: "#111",
          padding: 20,
          borderRadius: 12,
          minWidth: 200,
          maxWidth: 200,
          cursor: "pointer",
          transition: "transform 0.25s ease, box-shadow 0.25s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow =
            "0 0 25px rgba(168, 85, 247, 0.45)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        <img
          src={image}
          style={{
            width: "100%",
            height: 200,
            objectFit: "cover",
            borderRadius: 8,
            marginBottom: 10,
          }}
        />

        <div style={{ fontWeight: "bold", marginBottom: 4 }}>
          {product.name}
        </div>

        <div style={{ opacity: 0.7 }}>
          ${(product.price / 100).toFixed(2)}
        </div>
      </div>
    </Link>
  );
}
