export default function AiInsightCard() {
  return (
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
  );
}