import { BrowserRouter as Router, Link } from "react-router-dom";
import "./App.css";
import { Menu } from "antd";
const menus = [
  {
    key: "Home",
    label: <Link to="/">主⻚</Link>,
  },
  {
    key: "app-vue1",
    label: <Link to="/app-vue1">vue微应⽤1</Link>,
  },
  {
    key: "app-vue2",
    label: <Link to="/app-vue2">vue微应⽤2</Link>,
  },
];
function App() {
  let style = {
    width: "100vw",
    height: "100vh",
  };
  return (
    <Router>
      <div className="App">
        <Menu
          style={{
            width: 256,
          }}
          theme="dark"
          mode="inline"
          items={menus}
        ></Menu>
        <h1>主应⽤启动成功</h1>
        <div id="micro-container" style={style}></div>
      </div>
    </Router>
  );
}

export default App;
