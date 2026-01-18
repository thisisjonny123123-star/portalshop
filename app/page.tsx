import ProductCard from "../components/ProductCard";
import { createClient } from "@supabase/supabase-js";

export default async function Home() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { data: products } = await supabase.from("products").select("*");

  return (
    <main
      style={{
        background: "#000",
        minHeight: "100vh",
        padding: "40px",
        color: "#fff",
      }}
    >
      <h1
        style={{
          fontSize: 50,
          marginBottom: 40,
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
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: 30,
        }}
      >
        {products?.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
