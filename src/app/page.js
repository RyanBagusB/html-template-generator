"use client";

import { useRouter } from "next/navigation";

export default function Index() {
  const router = useRouter();

  const handleLogout = async () => {
    const res = await fetch("/api/logout", { method: "POST" });

    if (res.ok) {
      router.push("/login");
    } else {
      alert("Logout gagal");
    }
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Selamat datang di HTML Template Generator</h1>
      <p className="mt-2">Gunakan fitur kami untuk membuat dan sesuaikan template HTML responsif.</p>
      
      <button
        onClick={handleLogout}
        className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </main>
  );
}
