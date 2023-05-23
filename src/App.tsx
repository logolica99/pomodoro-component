import ItemLayout from "./components/ItemLayout";
import PomodoroComponent from "./components/PomodoroComponent";

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-900">
      <ItemLayout title={"Timer"} resizable={false}>
        <PomodoroComponent />
      </ItemLayout>
      <div className="absolute bottom-0 left-0 right-0 text-zinc-400 text-center p-4">
        Made with 💖 by{" "}
        <a
          href="https://github.com/logolica99"
          className=" text-primary"
        >
          Jubaer Jami
        </a>
      </div>
    </div>
  );
}

export default App;
