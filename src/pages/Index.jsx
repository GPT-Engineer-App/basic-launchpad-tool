import { useState } from 'react';
import { Button } from "@/components/ui/button";

const Index = () => {
  const [count, setCount] = useState(0);

  const incrementWithError = () => {
    if (count === 5) {
      // This will cause a division by zero error
      const result = 1 / 0;
    }
    setCount(count + 1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="bg-primary text-primary-foreground p-4">
        <h1 className="text-2xl font-bold">My Pink Error-Prone App</h1>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-primary">Welcome to Your Pink React App</h2>
        <p className="mb-6 text-lg">This app now includes an error when you reach count 5. Be careful!</p>
        
        <div className="bg-card p-6 rounded-lg shadow-md mb-8 border border-primary">
          <h3 className="text-2xl font-semibold mb-4 text-primary">Error-Prone Counter</h3>
          <p className="mb-4 text-xl">Current Count: <span className="font-bold text-primary">{count}</span></p>
          <div className="flex space-x-4">
            <Button onClick={incrementWithError} variant="default" className="bg-primary hover:bg-primary/90">Increment (Error at 5)</Button>
            <Button onClick={() => setCount(count - 1)} variant="outline" className="border-primary text-primary hover:bg-primary/10">Decrement</Button>
            <Button onClick={() => setCount(0)} variant="secondary" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">Reset</Button>
          </div>
        </div>

        <div className="bg-muted p-6 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-semibold mb-4 text-primary">About This App</h3>
          <p className="mb-4">This React application now demonstrates how errors can occur in React apps. It will throw an error when the count reaches 5.</p>
          <Button variant="link" onClick={() => alert("Be careful with that increment button!")} className="text-primary hover:text-primary/90">Learn More</Button>
        </div>
      </main>

      <footer className="bg-secondary text-secondary-foreground p-4 text-center">
        <p>&copy; {new Date().getFullYear()} My Pink Error-Prone React App. Use at your own risk!</p>
      </footer>
    </div>
  );
};

export default Index;
