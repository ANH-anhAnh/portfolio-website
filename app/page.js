import Image from "next/image";

export default function Home() {
  return (
    // basic layout with no styling or functionality applied yet
    <main className="min-h-screen bg-white text-gray-900 p-8">
      <h1 className="text-4xl font-bold mb-4">Hello, I'm Anh Truong</h1>
      <p className="text-lg mb-6">Welcome to my portfolio website</p>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        <p>Coming soon...</p>
      </section>
    </main>
  );
}
