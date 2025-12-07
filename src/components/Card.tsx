
interface StatusProps {
  status: string;
  color: string;
}

interface CardProps {
  label: string;
  value: number;
  icon: React.ReactNode;
  color: string;
  status: StatusProps;
}

export default function Card({ label, value, icon, color, status }: CardProps) {
  const isFire = label == 'Fire' ? true : false;
  const progressWidth = isFire ? (value / 1) * 100 : (value / 100) * 100;

  return (
    <div className="min-w-80 group bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 m-3">
      <div className="flex items-center justify-between mb-4">
        <div className="bg-blue-500/20 p-3 rounded-2xl group-hover:bg-blue-500/30 transition-all">
          {icon}
        </div>
        <span className={`text-sm font-semibold ${status.color}`}>
          {status.status}
        </span>
      </div>
      <h3 className="text-gray-300 text-xl font-medium mb-2 text-left">{label}</h3>
      <div className="flex items-baseline gap-2">
        <span className="text-5xl font-bold text-white">
          {value}
        </span>
      </div>
      <div className="mt-4 bg-white/5 rounded-full h-2 overflow-hidden">
        <div
          className={`bg-gradient-to-r h-full rounded-full transition-all duration-500 ${color}`}
          style={{ width: `${progressWidth}%` }}
        />
      </div>
    </div>
  );
}