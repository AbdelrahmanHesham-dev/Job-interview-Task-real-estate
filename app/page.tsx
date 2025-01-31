import UnitsList from "./components/UnitsList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Madmon",
};

export default function Home() {
  return (
    <main className="flex flex-1 flex-col lg:flex-row lg:mt-5 w-full mx-auto max-w-7xl p-4 sm:px-6 lg:px-8 gap-4">
      <div className="container mx-auto">
        <UnitsList />
      </div>
    </main>
  );
}
