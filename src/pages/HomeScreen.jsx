import BottomNav from "../components/BottomNav";
import Header from "../components/Header";
import MainRecord from "../components/MainRecord";
import AiInsightCard from "../components/AiInsight Card";
import RecordRecents from "../components/RecordRecents";

export default function HomeScreen() {
  return (
    <div className="min-h-screen bg-[#f6f3ef] flex items-center justify-center p-6">
      <div className="relative w-[390px] min-h-[844px] bg-white rounded-[40px] shadow-2xl overflow-hidden border border-gray-100">

        {/* Status Bar */}
        <div className="flex justify-between items-center px-6 pt-4 text-sm text-gray-400">
          <span>9:41</span>

          <div className="flex gap-1">
            <span>📶</span>
            <span>📡</span>
            <span>🔋</span>
          </div>
        </div>

        {/* Scroll Content */}
        <div className="px-6 pt-6 pb-32 overflow-y-auto">
          <Header />

          <MainRecord />

          <AiInsightCard />

          <RecordRecents />
        </div>

        <BottomNav />
      </div>
    </div>
  );
}