import DetailsSection from "../../components/DetailsSection";
import Header from "../../components/Header";
import RsvpForm from "../../components/RsvpForm";
import Timetable from "../../components/Timetable";
import { GuestsProvider } from "../../contexts/GuestsContext";

export default function Home() {
    return (
        <>
            <Header title="Светослав и Радостина RSVP покана" />
            <Timetable />
            <DetailsSection />
            <GuestsProvider>
                <RsvpForm />
            </GuestsProvider>
        </>
    )
}
