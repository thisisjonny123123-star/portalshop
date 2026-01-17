import { supabase } from "@/lib/supabase";
import ProductCard from "@/components/ProductCard";

export default async function Home() {
  const { data: products } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <main
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "60px 40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Purple ambient glow behind everything */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          left: "-10%",
          width: "80vw",
          height: "80vw",
          background: "radial-gradient(circle, rgba(168,85,247,0.25), transparent 70%)",
          filter: "blur(120px)",
          zIndex: 0,
        }}
      />

      {/* Header with animated purple underline */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <h1
          style={{
            fontSize: 48,
            marginBottom: 10,
            background: "linear-gradient(90deg, #c084fc, #a855f7, #7e22ce)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontWeight: 700,
          }}
        >
          New Arrivals
        </h1>

        <div
          style={{
            height: 4,
            width: 140,
            background: "linear-gradient(90deg, #a855f7, #7e22ce)",
            borderRadius: 4,
            animation: "pulseGlow 2.5s infinite ease-in-out",
          }}
        />
      </div>

      {/* Product row with purple accent */}
      <div
        style={{
          marginTop: 40,
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            height: 2,
            width: "100%",
            background: "linear-gradient(90deg, transparent, #a855f7, transparent)",
            marginBottom: 20,
            opacity: 0.4,
          }}
        />

        <div
          style={{
            display: "flex",
            gap: 24,
            overflowX: "auto",
            paddingBottom: 20,
            scrollbarWidth: "thin",
            scrollbarColor: "#a855f7 #111",
          }}
        >
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes pulseGlow {
            0% { opacity: 0.4; }
            50% { opacity: 1; }
            100% { opacity: 0.4; }
          }
        `}
      </style>
    </main>
  );
}
