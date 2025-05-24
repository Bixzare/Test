import Chat from "@/components/chat";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 bg-gray-50 border-b border-gray-200 px-4 py-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
          Flyvia
        </h1>
        <h3 className="text-center text-xl md:text-2xl font-bold text-gray-400">Travel Assistant Agent</h3>
      </header>
      <div className="flex-1 px-4 py-4">
        <Chat />
      </div>
    </main>
  );
}
