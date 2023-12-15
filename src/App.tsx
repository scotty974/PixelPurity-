import "./App.css";
import Header from "./components/Header/Header";
import SectionGrid from "./components/SectionGrid/SectionGrid";
function App() {
  return (
    <main className="bg-back h-screen">
       <section className="container m-auto ">
       <div className="w-full"><Header /></div>
       <SectionGrid />
        </section> 
     
    </main>
  );
}

export default App;
