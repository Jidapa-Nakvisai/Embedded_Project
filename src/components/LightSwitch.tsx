import { Lightbulb } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function LightSwitch() {

  const [lightOn, setLightOn] = useState<number>(0);

  // อ่านสถานะไฟครั้งแรก
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://app.grouprproject.uk/api/data/light");

        if (!res.ok) {
          setLightOn(0);
          return;
        }

        const json = await res.json();

        // ถ้า API ส่ง { light: "on" } หรือ true
        setLightOn(json);
      } catch (error) {
        setLightOn(0);
      }
    };

    fetchData();
  }, [lightOn]);

  // Toggle light + update state
  const toggleLight = async () => {
    try {
      const res = await fetch("https://app.grouprproject.uk/api/light");

      if (!res.ok) throw new Error("Toggle failed");

      const json = await res.json();

      // ถ้า API ส่ง { light: "on" }
      setLightOn(json)
    } catch (error) {
      console.error("Error toggling light:", error);
    }
  };

  console.log("Light:", lightOn);

  return (
    <div className="w-full bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-yellow-400" />
          <h3 className="text-white text-xl font-bold">Light Control</h3>
        </div>
      </div>

      {/* Master Control */}
      <div>
        <div className="space-y-2">
          <button
            onClick={toggleLight}
            className={`w-full p-3 rounded-xl border transition-all duration-300 hover:scale-105 ${lightOn
                ? 'bg-yellow-500/20 border-yellow-500/50 hover:bg-yellow-500/30'
                : 'bg-white/5 border-white/20 hover:bg-white/10'
              }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Lightbulb
                  className={`w-5 h-5 transition-all duration-300 ${lightOn
                      ? 'text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]'
                      : 'text-gray-500'
                    }`}
                />
              </div>

              <div
                className={`w-12 h-6 rounded-full p-1 transition-all duration-300 ${lightOn ? 'bg-yellow-500' : 'bg-gray-600'
                  }`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full transition-all duration-300 ${lightOn ? 'ml-5' : 'ml-0'
                    }`}
                ></div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
