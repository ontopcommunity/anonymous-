"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("nickname");
    if (saved) {
      router.push("/chat");
    }
  }, [router]);

  function enterChat() {
    const name = nickname.trim();

    if (!name) {
      alert("Vui lòng nhập biệt danh");
      return;
    }

    localStorage.setItem("nickname", name);
    router.push("/chat");
  }

  return (
    <main className="login-page">
      <div className="login-box">
        <h1>Anonymous Chat</h1>

        <input
          type="text"
          placeholder="Nhập biệt danh..."
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          maxLength={20}
        />

        <button onClick={enterChat}>
          Vào phòng chat
        </button>
      </div>
    </main>
  );
}
