import Login from "./pages/Login";
import ChatRoom from "./pages/ChatRoom";

function App() {
  const user = false;

  return <div className="w-full h-full">{user ? <ChatRoom /> : <Login />}</div>;
}

export default App;
