import React, { useState } from "react";

const records = {
  3: "bg-orange-200",
  7: "bg-purple-200",
  15: "bg-red-200",
  21: "bg-green-200",
  28: "bg-violet-200",
};

const previewCards = [
  {
    emoji: "☕",
    title: "카페",
    count: "5회",
  },
  {
    emoji: "🚶",
    title: "산책",
    count: "3회",
  },
  {
    emoji: "🍜",
    title: "음식",
    count: "2회",
  },
  {
    emoji: "✈️",
    title: "여행",
    count: "1회",
  },
];

export default function CalendarContent() {
  const [selectedDay, setSelectedDay] = useState(15);

  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="px-5 pt-8 pb-32 max-w-sm mx-auto">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-[28px] font-semibold text-gray-800 tracking-tight">
            2024년 5월
          </h1>

          <p className="text-sm text-gray-400 mt-1">
            나의 순간 기록들
          </p>
        </div>

        <button className="w-11 h-11 rounded-full bg-white shadow-sm border border-[#f2f2f2] flex items-center justify-center">
          📅
        </button>
      </div>

      {/* Calendar */}
      <div className="bg-white rounded-[32px] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-[#f6f6f6]">
        
        {/* Week */}
        <div className="grid grid-cols-7 text-center text-[13px] text-gray-400 mb-6">
          {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>

        {/* Days */}
        <div className="grid grid-cols-7 gap-y-5">
          {days.map((day) => {
            const bg = records[day];

            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`
                  w-10 h-10 mx-auto rounded-full
                  text-[14px] transition-all duration-200
                  flex items-center justify-center
                  ${
                    selectedDay === day
                      ? "bg-black text-white scale-110 shadow-md"
                      : bg
                      ? `${bg} text-gray-700`
                      : "text-gray-700"
                  }
                `}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>

      {/* Monthly Insight */}
      <div className="mt-6 bg-[#fffaf7] rounded-[32px] p-5 border border-orange-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
        
        {/* Top */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <p className="text-[15px] font-semibold text-gray-800">
              이번 달 한눈에 보기
            </p>

            <p className="text-sm text-gray-400 mt-1">
              기록한 순간들을 모아봤어요
            </p>
          </div>

          <span className="text-sm font-medium text-orange-400">
            75%
          </span>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-500">기록한 날</span>

            <span className="font-semibold text-gray-700">
              12일
            </span>
          </div>

          <div className="w-full h-3 rounded-full bg-orange-100 overflow-hidden">
            <div className="w-[75%] h-full bg-orange-300 rounded-full" />
          </div>
        </div>

        {/* Tags */}
        <div className="grid grid-cols-2 gap-3">
          {previewCards.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-3 flex items-center gap-3"
            >
              <div className="w-11 h-11 rounded-2xl bg-[#faf7f4] flex items-center justify-center text-lg">
                {item.emoji}
              </div>

              <div>
                <p className="text-sm font-medium text-gray-700">
                  {item.title}
                </p>

                <p className="text-xs text-gray-400 mt-0.5">
                  {item.count}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* AI Card */}
        <div className="mt-5 bg-white rounded-3xl p-4">
          <div className="flex items-center mb-2">
            <span className="mr-2">✨</span>

            <p className="text-sm font-semibold text-gray-700">
              이번 달 AI 인사이트
            </p>
          </div>

          <p className="text-sm leading-6 text-gray-500">
            다양한 경험을 통해 새로운 영감을 얻고 있어요.
            이번 달은 밖에서 보낸 시간이 많았네요 ☀️
          </p>
        </div>
      </div>
    </div>
  );
}