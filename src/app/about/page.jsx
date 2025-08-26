"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const AboutPage = () => {
  const router = useRouter();
  const isLoggedIn = true;
  const handleNavigate = () => {
    if (isLoggedIn) {
      router.push("/about/address");
    } else {
      router.push("/");
    }
  };
  return (
    <div>
      <p className="font-bold text-3xl"> About Pages</p>
      <p>
        <Link href="/about/address">Address Page</Link>
      </p>

      <button type="button" onClick={handleNavigate}>
        Address Page
      </button>
    </div>
  );
};

export default AboutPage;
