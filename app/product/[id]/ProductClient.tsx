"use client";

export default function ProductClient({ product }: any) {
  const image = product.images?.split(",")[0] || "";

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
      <img
        src={image}
        style={{
          width: 400,
          height: 400,
          objectFit: "cover",
          borderRadius: 12,
          boxShadow: "0 0 40px rgba(168, 85, 247, 0.4)",
        }}
      />

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

        <button
          style={{
            padding: "14px 28px",
            background: "linear-gradient(90deg, #a855f7, #7e22ce)",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
            fontSize: 18,
            fontWeight: 600,
            color: "#fff",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow =
              "0 0 25px rgba(168, 85, 247, 0.6)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Add to Cart
        </button>
      </div>
    </main>
  );
}
