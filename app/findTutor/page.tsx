import { Suspense } from "react";
import FindTutorClient from "./client_page";

export default function FindTutorPage() {
  return <Suspense>
    <FindTutorClient />
  </Suspense>
}