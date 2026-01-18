"use client";

import Link from "next/link";

export default function ProductCard({ product }: any) {
  return (
    <Link
      href={`/product/${product.id}`}
      style={{ textDecoration: "none" }}
    >
      <div
        style={{
          border: "2px solid transparent",
          borderRadius: 12,
          transition: "0.3s",
          background: "#111",
          padding: 20,
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.border = "2px solid #a855f7";
          e.currentTarget.style.boxShadow = "0 0 12px #a855f7";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.border = "2px solid transparent";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        <img
          src={product.images?.[0]}
          style={{
            width: "100%",
            height: 200,
            objectFit: "cover",
            borderRadius: 8,
            marginBottom: 15,
          }}
        />

        <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 5 }}>
          {product.name}
        </div>

        <div style={{ opacity: 0.8 }}>
          ${(product.price / 100).toFixed(2)}
        </div>
      </div>
    </Link>
  );
}
