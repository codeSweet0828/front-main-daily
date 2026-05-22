// src/pages/RecordDetailScreen.jsx

export default function RecordDetailScreen() {
  return (
    <div className="px-6 pb-10">

      {/* Header */}
      <div className="
        flex
        items-center
        justify-between
        mb-6
        pt-4
      ">

        <button className="
          w-11
          h-11
          rounded-full
          bg-[#f8f8f8]
          flex
          items-center
          justify-center
          text-lg
        ">
          ←
        </button>

        <button className="
          w-11
          h-11
          rounded-full
          bg-[#f8f8f8]
          flex
          items-center
          justify-center
        ">
          ⋯
        </button>

      </div>

      {/* Photo */}
      <div className="
        w-full
        h-[340px]
        rounded-[36px]
        bg-gradient-to-br
        from-[#ffe9dc]
        to-[#fff6f1]
        overflow-hidden
        shadow-sm
        mb-6
        flex
        items-center
        justify-center
      ">

        <div className="text-[92px]">
          ☕
        </div>

      </div>

      {/* Record Info */}
      <div className="mb-6">

        <div className="flex items-center gap-3 mb-3">

          <div className="
            px-4
            py-2
            rounded-full
            bg-[#fff3eb]
            text-orange-400
            text-sm
            font-medium
          ">
            ☕ 카페
          </div>

          <div className="
            px-4
            py-2
            rounded-full
            bg-[#f5f5f5]
            text-gray-500
            text-sm
          ">
            🌙 새벽
          </div>

        </div>

        <h1 className="
          text-[28px]
          font-bold
          text-gray-800
          leading-[1.35]
          mb-3
        ">
          카페에서
          <br />
          조용히 작업했던 하루
        </h1>

        <p className="
          text-sm
          text-gray-400
        ">
          2026년 5월 21일 · 오후 9:42
        </p>

      </div>

      {/* Memo */}
      <div className="
        bg-[#fafafa]
        rounded-[32px]
        p-6
        leading-relaxed
        text-[15px]
        text-gray-700
        mb-6
      ">

        오늘은 오랜만에 혼자 카페에 갔다.

        <br />
        <br />

        잔잔한 음악을 들으면서 작업을 하니까
        생각보다 집중도 잘 됐고,
        마음도 꽤 편안했다.

        <br />
        <br />

        요즘은 이렇게 조용한 시간이
        점점 더 좋아지는 것 같다 ☕✨

      </div>

      {/* Mini Insight */}
      <div className="
        bg-gradient-to-br
        from-[#FFF1EA]
        to-[#F2EEFF]
        rounded-[32px]
        p-5
        shadow-sm
      ">

        <div className="flex items-center gap-3 mb-4">

          <div className="
            w-11
            h-11
            rounded-2xl
            bg-white
            flex
            items-center
            justify-center
            shadow-sm
          ">
            🔮
          </div>

          <div>

            <p className="
              text-[15px]
              font-semibold
              text-gray-800
            ">
              AI 한줄 인사이트
            </p>

            <p className="
              text-xs
              text-gray-400
              mt-1
            ">
              Moment AI
            </p>

          </div>

        </div>

        <p className="
          text-[15px]
          leading-relaxed
          text-gray-700
        ">
          최근 기록에서 혼자만의 시간을
          편안하게 보내는 패턴이 자주 보여요 ☀️
        </p>

      </div>

    </div>
  );
}