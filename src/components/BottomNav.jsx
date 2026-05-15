// BottomNav.jsx

export default function BottomNav() {
  return (
    <div className="absolute bottom-0 left-0 right-0">
      
      {/* Navigation Container */}
      <div className="
        h-[86px]
        bg-white
        border-t
        border-[#f3f3f3]
        flex
        items-center
        justify-around
        px-8
      ">

        {/* Home */}
        <button className="
          flex
          flex-col
          items-center
          text-orange-400
        ">
          <span className="text-[22px]">
            🏠
          </span>

          <span className="text-[11px] mt-1 font-medium">
            홈
          </span>
        </button>

        {/* Add Button */}
        <button className="
          w-14
          h-14
          rounded-full
          bg-gradient-to-br
          from-orange-300
          to-orange-400
          text-white
          text-3xl
          shadow-lg
          flex
          items-center
          justify-center
          -mt-5
          border-4
          border-white
          transition
          hover:scale-105
        ">
          +
        </button>

        {/* Album */}
        <button className="
          flex
          flex-col
          items-center
          text-gray-400
        ">
          <span className="text-[22px]">
            📚
          </span>

          <span className="text-[11px] mt-1 font-medium">
            앨범
          </span>
        </button>

      </div>
    </div>
  );
}