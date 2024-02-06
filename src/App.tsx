
import Header from "./components/Header";
import Timetable from "./components/Timetable";
import DetailsSection from "./components/DetailsSection";
import { GuestsProvider } from "./contexts/GuestsContext";
import RsvpForm from "./components/RsvpForm";
import Footer from "./components/Footer";
import './App.css'

function App() {

  return (
    <>
      <Header title="Светослав и Радостина RSVP покана" />
      <Timetable />
      <DetailsSection />
      <GuestsProvider>
        <RsvpForm />
      </GuestsProvider>
      <Footer />
    </>
  )
}

export default App
