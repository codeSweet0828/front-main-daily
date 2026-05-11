import BottomNav from "./components/BottomNav";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f6f3ef] flex items-center justify-center p-6">
      {/* Phone Frame */}
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
          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <h1 className="text-[30px] leading-[1.3] font-bold text-gray-800">
                오늘,
                <br />
                어떤 순간이었나요? ✨
              </h1>

              <p className="text-gray-400 mt-3 text-sm">
                소중한 하루를 기록해보세요
              </p>
            </div>

            <button className="w-11 h-11 rounded-full bg-[#fff3eb] flex items-center justify-center shadow-sm">
              🔔
            </button>
          </div>

          {/* Main Record Card */}
          <div className="bg-[#fff8f3] rounded-[32px] p-5 shadow-sm mb-6 border border-[#f7ede7]">
            <div className="bg-white rounded-[28px] h-[260px] flex flex-col items-center justify-center mb-5 shadow-sm">
              <div className="text-[82px] mb-4">📸</div>

              <p className="text-gray-500 text-sm">
                오늘의 순간을 남겨보세요
              </p>
            </div>

            <button className="w-full h-[58px] rounded-2xl bg-[#ff9f7f] text-white font-semibold text-[16px] shadow-md hover:opacity-90 transition">
              오늘 기록하기
            </button>
          </div>

          {/* AI Insight Card */}
          <div className="bg-gradient-to-br from-[#fff1ea] to-[#f1ecff] rounded-[32px] p-5 shadow-sm border border-white mb-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">🔮</span>

              <h2 className="font-semibold text-gray-800 text-[16px]">
                AI 주간 인사이트
              </h2>
            </div>

            <p className="text-gray-700 leading-relaxed text-[15px] mb-5">
              이번 주는 카페와 산책 기록이 많았어요 ☀️
              <br />
              여유로운 시간을 보내고 있네요.
            </p>

            <div className="flex flex-wrap gap-2">
              <div className="px-4 py-2 bg-white rounded-full text-sm shadow-sm">
                ☕ 카페 4회
              </div>

              <div className="px-4 py-2 bg-white rounded-full text-sm shadow-sm">
                🚶 산책 3회
              </div>

              <div className="px-4 py-2 bg-white rounded-full text-sm shadow-sm">
                📸 기록 7일
              </div>
            </div>
          </div>

          {/* Recent Records */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[18px] font-semibold text-gray-800">
                최근 기록
              </h3>

              <button className="text-sm text-gray-400 hover:text-gray-600 transition">
                더보기
              </button>
            </div>

            <div className="space-y-3">
              {/* Record Item 1 */}
              <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-[#fff3eb] flex items-center justify-center text-2xl shrink-0">
                  ☕
                </div>

                <div className="flex-1">
                  <p className="font-medium text-gray-800">
                    카페에서 작업
                  </p>

                  <p className="text-sm text-gray-400 mt-1">
                    2026.05.11
                  </p>
                </div>
              </div>

              {/* Record Item 2 */}
              <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-[#eefbf3] flex items-center justify-center text-2xl shrink-0">
                  🚶
                </div>

                <div className="flex-1">
                  <p className="font-medium text-gray-800">
                    한강 산책
                  </p>

                  <p className="text-sm text-gray-400 mt-1">
                    2026.05.10
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      {/* 버튼 components */}
      <BottomNav />
      </div>
    </div>
  );
}
