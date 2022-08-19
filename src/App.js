import Header from "./components/Header";
import CardList from "./components/List/CardList";
import SideBar from "./components/Sidebar";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="noteContainer">

        <div className="left">
          <SideBar />
        </div>
        <div className="right">
          <CardList />
        </div>
      </div>
    </div>

  );
}

export default App;
