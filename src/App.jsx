import "./App.css";
// import Title from "./Title.jsx";
import ProductTab from "./ProductTab.jsx";
import MsgBox from "./MsgBox.jsx";

function App() {
    return (
        <div>
         <h1>This is app test</h1>
            <MsgBox userName="Anjali" textColor="Red" />
            <MsgBox userName="ApnaCollege" textColor="blue" />
            <MsgBox userName="Shradha" textColor="yellow" />
            <ProductTab />
        </div>
    );
}

export default App;