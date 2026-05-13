import Header from "../components/Header";
import MainRecord from "../components/MainRecord";
import AiInsightCard from "../components/AiInsight Card";
import RecordRecents from "../components/RecordRecents";

export default function HomeScreen() {
  return (
    <div className="px-6 pt-6">

      <Header />

      <MainRecord />

      <AiInsightCard />

      <RecordRecents />

    </div>
  );
}