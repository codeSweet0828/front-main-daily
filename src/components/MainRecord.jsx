export default function MainRecord() {
  return (
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
  );
}