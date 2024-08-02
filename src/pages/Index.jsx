import { useState } from 'react';
import { Button } from "@/components/ui/button";

const Index = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="bg-primary text-primary-foreground p-4">
        <h1 className="text-2xl font-bold">My Bare-Bones App</h1>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Welcome to Your React App</h2>
        <p className="mb-6 text-lg">This is an improved structure with some interactive elements. Explore and enjoy!</p>
        
        <div className="bg-card p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-2xl font-semibold mb-4">Interactive Counter</h3>
          <p className="mb-4 text-xl">Current Count: <span className="font-bold text-primary">{count}</span></p>
          <div className="flex space-x-4">
            <Button onClick={() => setCount(count + 1)} variant="default">Increment</Button>
            <Button onClick={() => setCount(count - 1)} variant="outline">Decrement</Button>
            <Button onClick={() => setCount(0)} variant="secondary">Reset</Button>
          </div>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">About This App</h3>
          <p className="mb-4">This React application demonstrates basic state management and UI components. It's a starting point for building more complex applications.</p>
          <Button variant="link" onClick={() => alert("Thanks for your interest! More features coming soon.")}>Learn More</Button>
        </div>
      </main>

      <footer className="bg-secondary text-secondary-foreground p-4 text-center">
        <p>&copy; {new Date().getFullYear()} My React App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
