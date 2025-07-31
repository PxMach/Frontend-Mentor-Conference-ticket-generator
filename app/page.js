"use client";
import Form from "@/Components/Form";
import Header from "@/Components/Header";
import React from "react";
import Ticket from "./news/page.jsx";

export default function Home() {
  const [submittedData, setSubmittedData] = React.useState(null);

  return (
    <main className="p-4 flex flex-col justify-center items-center">
      <Header />
      <Form onSubmitSuccess={setSubmittedData} />
      <Ticket data={submittedData} />
    </main>
  );
}
  // pour quoi null
