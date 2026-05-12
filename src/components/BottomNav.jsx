export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center pb-6">
      <div className="w-[340px] h-[74px] bg-white rounded-[28px] shadow-xl flex items-center justify-around px-8 border border-[#f1f1f1]">

        {/* Home */}
        <button className="flex flex-col items-center text-orange-400">
          <span className="text-xl">🏠</span>
          <span className="text-[11px] mt-1">홈</span>
        </button>

        {/* Floating Add */}
        <button className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-300 to-orange-400 text-white text-3xl shadow-lg flex items-center justify-center -mt-10 border-4 border-[#faf7f4]">
          +
        </button>

        {/* Archive */}
        <button className="flex flex-col items-center text-gray-400">
          <span className="text-xl">📚</span>
          <span className="text-[11px] mt-1">앨범</span>
        </button>
      </div>
    </div>
  );
}