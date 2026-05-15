export default function RecordScreenPreview() {
  return (
    <div className="px-6 pt-6">
        {/* Scroll Area */}
        <div className="h-[calc(100%-44px-86px)] overflow-y-auto px-6 pt-6 pb-10">

          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <button className="w-11 h-11 rounded-full bg-[#f8f8f8] flex items-center justify-center text-lg">
              ←
            </button>

            <h1 className="text-[20px] font-semibold text-gray-800">
              오늘 기록하기
            </h1>

            <button className="text-[15px] text-orange-400 font-semibold">
              저장
            </button>
          </div>

          {/* Photo Upload */}
          <div className="bg-[#fff8f3] rounded-[32px] p-5 border border-[#f7ede7] mb-6">
            <div className="h-[260px] bg-white rounded-[28px] flex flex-col items-center justify-center border-2 border-dashed border-[#ffd8c8]">

              <div className="text-[64px] mb-4">
                📸
              </div>

              <p className="text-gray-500 text-sm mb-2">
                사진 추가하기
              </p>

              <p className="text-[12px] text-gray-400">
                오늘의 순간을 남겨보세요
              </p>
            </div>
          </div>

          {/* Memo Card */}
          <div className="bg-white rounded-[32px] border border-gray-100 p-5 shadow-sm mb-6">

            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-2xl bg-[#fff3eb] flex items-center justify-center">
                ✍️
              </div>

              <div>
                <p className="text-[16px] font-semibold text-gray-800">
                  오늘의 기록
                </p>

                <p className="text-xs text-gray-400 mt-1">
                  짧게 남겨보세요
                </p>
              </div>
            </div>

            <textarea
              placeholder="오늘 어떤 하루였나요?"
              className="w-full h-[180px] resize-none outline-none text-[15px] text-gray-700 placeholder:text-gray-300 leading-relaxed"
            />
          </div>

          {/* Mood Tags */}
          <div className="mb-8">
            <p className="text-[17px] font-semibold text-gray-800 mb-4">
              오늘의 분위기
            </p>

            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 rounded-full bg-[#fff3eb] text-orange-400 text-sm font-medium">
                ☀️ 평온
              </button>

              <button className="px-4 py-2 rounded-full bg-[#f5f5f5] text-gray-500 text-sm">
                🎧 감성
              </button>

              <button className="px-4 py-2 rounded-full bg-[#f5f5f5] text-gray-500 text-sm">
                🌙 새벽
              </button>

              <button className="px-4 py-2 rounded-full bg-[#f5f5f5] text-gray-500 text-sm">
                ☕ 여유
              </button>

              <button className="px-4 py-2 rounded-full bg-[#f5f5f5] text-gray-500 text-sm">
                🚶 산책
              </button>
            </div>
          </div>

          {/* Save Button */}
          <button className="w-full h-[58px] rounded-2xl bg-gradient-to-br from-orange-300 to-orange-400 text-white font-semibold text-[16px] shadow-lg hover:scale-[1.01] transition">
            기록 저장하기
          </button>
        </div>

    </div>
  );
}
