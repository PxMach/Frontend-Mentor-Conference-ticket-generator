"use client";
import React, { useEffect, useState } from "react";
import Congrat from "@/Components/newpage/Congrat";
import Cart from "@/Components/newpage/Cart";

export default function Ticket() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("ticketData");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  return (
    <main className="p-4 flex flex-col justify-center items-center">
      {data && <Congrat formData={data} />}
      {data && <Cart formData={data} />}
    </main>
  );
}
