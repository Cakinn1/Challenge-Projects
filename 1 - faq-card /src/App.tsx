import Right from "./compeonts/Right";
import Left from "./compeonts/Left";

export default function App() {
  return (
    <section className="h-screen">
      <div className="flex-1 px-6 max-w-[1000px] flex mx-auto py-32">
        <div
  
          className="bg-white  flex-col md:flex-row bg-top-left object-cover   relative rounded-3xl shadow-md  flex w-full h-[600px]"
        >
        
          <Left />
          <Right />
        </div>
      </div>
    </section>
  );
}
