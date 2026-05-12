import CalendarContent from "../components/CalendarContent";
import BottomNav from "../components/BottomNav";

export default function CalendarScreen() {
  return (
   <div className="min-h-screen bg-[#faf7f4] pb-28">
        <CalendarContent/>
        <BottomNav />
    </div>    
  );
}