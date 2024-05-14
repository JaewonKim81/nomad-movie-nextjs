"use client";
import React from "react";
import UserItem from "./UserItem";

export default function Sidebar() {
  return (
    <div className="w-[300px] min-w-[300px] border-r min-h-screen p-4">
      <UserItem />
      <div className="">Menu part</div>
      <div className="">Settings</div>
    </div>
  );
}
