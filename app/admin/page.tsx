import React from "react";

import dynamic from "next/dynamic";
import { isAdmin } from "@/lib/admin";
import { redirect } from "next/navigation";

const App = dynamic(() => import("./app"), { ssr: false });

export default function AdminPage() {
  if (!isAdmin()) {
    redirect("/");
  }
  return <App />;
}
