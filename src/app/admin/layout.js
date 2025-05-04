"use client";

import { useRouter } from "next/navigation";

export default function AdminLayout({ children }) {
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
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <span className="text-xl font-semibold">Admin Layout - HTML Template Generator</span>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}
