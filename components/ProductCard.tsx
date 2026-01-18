"use client";

export default function ProductCard({ product }: any) {
  const image = product.images?.[0] || null;

  return (
    <div
      style={{
        background: "#111",
        padding: 20,
        borderRadius: 12,
        minWidth: 200,
        maxWidth: 200,
        cursor: "pointer",
        transition: "transform 0.2s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {image && (
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
      )}

      <div style={{ fontWeight: "bold", marginBottom: 4 }}>
        {product.name}
      </div>

      <div style={{ opacity: 0.7 }}>
        ${(product.price / 100).toFixed(2)}
      </div>
    </div>
  );
}
