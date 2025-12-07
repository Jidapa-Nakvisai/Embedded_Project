import { Flame } from "lucide-react";

interface FireCardProps {
  isFire: number;
}

export default function FireCard({ isFire }: FireCardProps) {

  return (
    <>
      <div className={`w-full group backdrop-blur-lg rounded-3xl p-6 border transition-all duration-300 hover:scale-105  ${isFire
          ? 'bg-red-500/30 border-red-500 shadow-2xl shadow-red-500/50 animate-pulse'
          : 'bg-white/10 border-white/20 hover:bg-white/15 hover:shadow-2xl hover:shadow-green-500/20'
        }`}>
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-2xl transition-all ${isFire
              ? 'bg-red-500/40 animate-pulse'
              : 'bg-green-500/20 group-hover:bg-green-500/30'
            }`}>
            <Flame className={`w-8 h-8 ${isFire ? 'text-red-500' : 'text-green-400'}`} />
          </div>
          <span className={`text-sm font-semibold ${isFire ? 'text-red-500' : 'text-green-400'
            }`}>
            {isFire ? 'DANGER' : 'Safe'}
          </span>
        </div>
        <h3 className="text-gray-300 font-medium mb-2 text-xl text-left">Fire Detection</h3>
        <div className="flex items-baseline gap-2">
          <span className={`text-5xl font-bold ${isFire ? 'text-red-500' : 'text-white'}`}>
            {isFire ? 'FIRE' : 'OK'}
          </span>
        </div>
        <div className="mt-4 bg-white/5 rounded-full h-2 overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${isFire
                ? 'bg-gradient-to-r from-red-500 to-red-700 w-full'
                : 'bg-gradient-to-r from-green-400 to-green-600 w-full'
              }`}
          />
        </div>
      </div>
    </>
  )
}