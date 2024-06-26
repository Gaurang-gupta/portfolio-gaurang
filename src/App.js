import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";
import "./app.css"
function App({ main }) {
  return (
    <div className="text-[#250b0b]">
      <div className="xs:w-full lg:w-4/5 mx-auto bg-transparent flex xs:flex-col lg:flex-row">
        <Sidebar/>
        <div className="xs:mx-auto xs:w-[90%] lg:w-3/4 xs:mt-4 lg:mt-[2rem] lg:mx-3">
          <Navbar/>
          <div className="bg-slate-50 my-2 lg:h-[550px] xl:h-[540px] xs:h-[500px] overflow-y-scroll rounded-xl scrollbar-style">
            {main}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
