import { Droplets } from "lucide-react";

interface PumpProps {
  isActive: boolean;
}

export default function WaterPumpCard({ isActive }: PumpProps) {
  return (
    <div className={`backdrop-blur-lg rounded-3xl p-6 border transition-all duration-300 mt-8 flex flex-col items-center justify-center ${isActive
        ? 'bg-blue-500/20 border-blue-500 shadow-2xl shadow-blue-500/30'
        : 'bg-white/10 border-white/20'
      }`}>
      <div className="flex items-center gap-2 mb-4">
        <Droplets className={`w-6 h-6 ${isActive ? 'text-blue-400 animate-pulse' : 'text-gray-400'}`} />
        <h3 className="text-white text-xl font-bold">Fire Suppression</h3>
      </div>

      <div className="text-center mb-4">
        <div className={`text-6xl font-bold mb-2 ${isActive ? 'text-blue-400' : 'text-gray-400'}`}>
          {isActive ? 'ON' : 'OFF'}
        </div>
        <div className="text-gray-400">Water Pump Status</div>
      </div>

      {isActive && (
        <div className="mb-4 space-y-2">
          <div className="bg-blue-500/20 rounded-xl p-3 border border-blue-400/50">
            <div className="flex justify-between items-center mb-1">
              <span className="text-blue-300 text-sm">Activation Mode</span>
              <span className="text-white font-semibold text-sm uppercase">
                {isActive}
              </span>
            </div>
          </div>
          <div className="bg-blue-500/20 rounded-xl p-3 border border-blue-400/50">
            <div className="flex justify-between items-center">
              <span className="text-blue-300 text-sm">Running Time</span>
              {/* <span className="text-white font-semibold text-sm">
                {Math.floor((new Date() - waterPump.activationTime) / 1000)}s
              </span> */}
            </div>
          </div>
        </div>
      )}

      <div className="mt-4 p-3 bg-white/5 rounded-xl">
        <p className="text-xs text-gray-400 text-center">
          {isActive
            ? '⚠️ Pump will auto-stop when fire is cleared'
            : '🔥 Auto-activates when fire is detected'
          }
        </p>
      </div>
    </div>
  );
}