import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import BottomNav from "./components/BottomNav";
import HomeScreen from "./pages/HomeScreen";
import CalendarScreen from "./pages/CalendarScreen";
import RecordScreen from "./pages/RecordScreen";
import RecordDetailScreen from "./pages/RecordDetailScreen";

function PhoneLayout() {
  return (
    <div className="min-h-screen bg-[#f6f3ef] flex items-center justify-center p-6">
      
      {/* Phone Frame */}
      <div className="
        relative
        w-[390px]
        h-[844px]
        bg-white
        rounded-[40px]
        shadow-2xl
        overflow-hidden
        border
        border-gray-100
      ">

        {/* Status Bar */}
        <div className="
          h-[44px]
          flex
          justify-between
          items-center
          px-6
          text-sm
          text-gray-400
        ">
          <span>9:41</span>

          <div className="flex gap-1">
            <span>📶</span>
            <span>📡</span>
            <span>🔋</span>
          </div>
        </div>

        {/* Scroll Area */}
        <div
          className="
            h-[calc(100%-44px-90px)]
            overflow-y-auto
            scrollbar-hide
          "
        >
          <Outlet />
        </div>

        {/* Bottom Navigation */}
        <BottomNav />

      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<PhoneLayout />}>

          <Route
            path="/"
            element={<HomeScreen />}
          />

          <Route
            path="/calendar"
            element={<CalendarScreen />}
          />
          <Route
            path="/recordScreen"
            element={<RecordScreen />}
          />
             <Route
            path="/recordDetailScreen"
            element={<RecordDetailScreen />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}