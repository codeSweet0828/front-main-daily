export default function BottomNav() {
  return (
        <div className="absolute bottom-0 left-0 right-0 h-[90px] bg-white border-t border-gray-100 flex items-center justify-around px-6">
          <button className="flex flex-col items-center text-[#ff9f7f] text-sm font-medium">
            <span className="text-2xl mb-1">🏠</span>
            홈
          </button>

          <button className="w-16 h-16 rounded-full bg-[#ff9f7f] text-white text-3xl flex items-center justify-center shadow-xl -mt-10 border-4 border-white hover:scale-105 transition">
            +
          </button>

          <button className="flex flex-col items-center text-gray-400 text-sm font-medium">
            <span className="text-2xl mb-1">📚</span>
            앨범
          </button>
        </div>
  );
}