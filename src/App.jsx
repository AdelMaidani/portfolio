import LeftNavbar from "./component/LeftNavbar";
import MiddleContent from "./component/MiddleContent";
import RightNavbar from "./component/RightNavbar";
import "./css/App.css";

function App() {
  return (
    <div className="mainDiv h-full pb-5 flex flex-col">
      <div className="p-5 text-xl">About me</div>
      <div className="hr"></div>
      <div className="flex flex-col sm:flex-row sm:gap-5  p-10">
        <div className="">
          <LeftNavbar />
        </div>
        <br />
        <div>
          <MiddleContent />
        </div>
        <div className="w-72 hidden">
          <RightNavbar />
        </div>
      </div>
    </div>
  );
}

export default App;
