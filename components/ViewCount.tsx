"use client";
import React, { useEffect, useState } from "react";

const ComponentName = () => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const fetchVisits = async () => {
      const res = await fetch(
        "https://abacus.jasoncameron.dev/hit/johnpatricksalen.tech/visits",
      );
      const data = await res.json();
      setViews(data.value);
    };

    fetchVisits();
  }, []);
  return (
    <section className="mt-10">
      <h1
        id="visits"
        className="relative text-(--accent) font-bold text-4xl text-center"
      >
        {views ?? "-"}{" "}
        <span className="absolute bottom-0 ml-2 text-sm text-gray-400">
          views
        </span>
      </h1>
    </section>
  );
};

export default ComponentName;
