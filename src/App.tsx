import "./App.css";
import Header from "./components/Header/Header";
import SectionMail from "./layout/SectionMail/SectionMail";

function App() {
  return (
    
       <section className="container m-auto h-full flex flex-col md:flex-row p-4 gap-16 justify-start">
        <Header />
        <SectionMail />
        </section> 

  );
}

export default App;
