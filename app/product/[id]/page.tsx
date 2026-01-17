import { supabase } from "@/lib/supabase";
import ProductClient from "./ProductClient";

export default async function ProductPage(props: any) {
  const { id } = await props.params;

  const { data: product } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (!product) {
    return (
      <main
        style={{
          background: "#000",
          color: "#fff",
          minHeight: "100vh",
          padding: "60px 40px",
        }}
      >
        <h1>Product not found.</h1>
      </main>
    );
  }

  return <ProductClient product={product} />;
}
