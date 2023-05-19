import ItemLayout from "./components/ItemLayout";
import PomodoroComponent from "./components/PomodoroComponent";

function App() {
  return (
    <div className="min-h-screen bg-zinc-900 flex justify-center items-center">
      <ItemLayout title={"Timer"}>
        <PomodoroComponent />
      </ItemLayout>
    </div>
  );
}

export default App;
