import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AddTaskModal from "./components/TaskBoard/AddTaskModal";
import TaskBoard from "./components/TaskBoard/TaskBoard";

// codePush
// origin

export default function App() {
  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
      <AddTaskModal></AddTaskModal>
      <TaskBoard></TaskBoard>

      <Footer></Footer>
    </>
  );
}
