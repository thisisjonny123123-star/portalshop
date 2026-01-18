"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminPage() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    sizes: "",
    stock: "",
    images: ""
  });

  async function handleSubmit(e: any) {
    e.preventDefault();

    const { data, error } = await supabase.from("products").insert([
      {
        name: form.name,
        description: form.description,
        price: Number(form.price),
        category: form.category,
        sizes: form.sizes,
        stock: Number(form.stock),
        images: form.images,
      }
    ]);

    if (error) {
      alert("Error: " + error.message);
    } else {
      alert("Product added!");
      setForm({
        name: "",
        description: "",
        price: "",
        category: "",
        sizes: "",
        stock: "",
        images: ""
      });
    }
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Add Product</h1>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 400 }}>
        <input placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
        <input placeholder="Price (in cents)" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} />
        <input placeholder="Category" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} />
        <input placeholder="Sizes (comma separated)" value={form.sizes} onChange={e => setForm({ ...form, sizes: e.target.value })} />
        <input placeholder="Stock" value={form.stock} onChange={e => setForm({ ...form, stock: e.target.value })} />
        <input placeholder="Image URLs (comma separated)" value={form.images} onChange={e => setForm({ ...form, images: e.target.value })} />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
export default function Test() {
  return <div style={{ color: "white" }}>THIS IS THE REAL HOMEPAGE</div>;
}
