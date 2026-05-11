export default function Header() {
  return (
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
  );
}