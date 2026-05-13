import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import BottomNav from "./components/BottomNav";

import HomeScreen from "./pages/HomeScreen";
import CalendarScreen from "./pages/CalendarScreen";

function PhoneLayout() {
  return (
    <div className="min-h-screen bg-[#f6f3ef] flex items-center justify-center p-6">

      {/* Phone */}
      <div className="relative w-[390px] h-[844px] bg-white rounded-[40px] shadow-2xl overflow-hidden border border-gray-100">

        {/* Status */}
        <div className="flex justify-between items-center px-6 pt-4 text-sm text-gray-400">
          <span>9:41</span>

          <div className="flex gap-1">
            <span>📶</span>
            <span>📡</span>
            <span>🔋</span>
          </div>
        </div>

        {/* Outlet */}
        <div className="h-[calc(844px-40px)] overflow-y-auto pb-32">
          <Outlet />
        </div>

        {/* Bottom Nav */}
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

          <Route path="/" element={<HomeScreen />} />

          <Route
            path="/calendar"
            element={<CalendarScreen />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}