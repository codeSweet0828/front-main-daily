export default function RecordRecents() {
  return (
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
  );
}