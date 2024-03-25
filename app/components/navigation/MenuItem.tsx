"use client";
import React from "react";
import Link from "next/link";

interface MenuItemProps {
  label: string;
  href: string;
}

const MenuItem = ({ label, href }: MenuItemProps) => {
  return (
    <div className="menuItem">
      <span className="heading">
        <Link href={href}>{label}</Link>
      </span>
    </div>
  );
};

export default MenuItem;
