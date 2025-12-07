import Card from "./Card"
import MicrophoneCard from "./MicrophoneCard";
import LightSwitch from "./LightSwitch";
import { useState, useEffect } from "react"
import { Droplets, Sun, Thermometer} from 'lucide-react';
import FireCard from "./FireCard";
import WaterPumpCard from "./WaterPumpCard";

interface SensorData {
  have_fire: number;
  humidity: number;
  light_level: number;
  temperature: number;
  temperature2: number;
}

export default function CardPanel() {
  const [data, setData] = useState<SensorData>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://app.grouprproject.uk/api/data/latest");

        if (!res.ok) {
          setData({
            have_fire: 1,
            humidity: 58.2,
            light_level: 1.65,
            temperature: 25,
            temperature2: 25,
          });
          return;
        }

        const json = await res.json();
        setData(json);
      } catch (error) {
        setData({
          have_fire: 1,
          humidity: 58.2,
          light_level: 1.65,
          temperature: 25,
          temperature2: 25,
        });
      }
    };

    // 👉 เรียกครั้งแรก
    fetchData();

    // 👉 ตั้ง interval ให้ดึงข้อมูลทุกๆ 2 วินาที
    const interval = setInterval(fetchData, 2000);

    // cleanup interval เวลา component ถูก unmount
    return () => clearInterval(interval);

  }, []);



  console.log(data)
  const getHumidityStatus = (value: number) => {
    if (value < 40) return { status: 'Low', color: 'text-orange-400' };
    if (value > 70) return { status: 'High', color: 'text-blue-400' };
    return { status: 'Optimal', color: 'text-green-400' };
  };

  const getLightStatus = (value: number) => {
    if (value < 1200) return { status: 'Dark', color: 'text-gray-400' };
    if (value > 2000) return { status: 'Bright', color: 'text-yellow-400' };
    return { status: 'Normal', color: 'text-green-400' };
  };

  const getTempStatus = (value: number) => {
    if (value < 18) return { status: 'Cold', color: 'text-blue-400' };
    if (value > 28) return { status: 'Hot', color: 'text-red-400' };
    return { status: 'Comfortable', color: 'text-green-400' };
  };


  const humidityStatus = getHumidityStatus(data?.humidity || 58.2);
  const lightStatus = getLightStatus(data?.light_level || 1.65);
  const tempStatus = getTempStatus(data?.temperature || 25);


  const isFire = data?.have_fire ? true : false;
  return (
    <div
      className="
        m-5 
        flex 
        flex-col 
        items-center 
        gap-2

        md:flex-row md:flex-wrap md:justify-center md:gap-4

        lg:flex-nowrap lg:justify-center
      "
    >
      {/* Column 1 */}
      <div className="flex flex-col gap-2 w-full md:w-auto">
        <Card 
          label="Humidity" 
          value={data?.humidity || 58.2} 
          icon={<Droplets className="w-8 h-8 text-blue-400" />} 
          color="from-blue-400 to-blue-600" 
          status={humidityStatus} 
        />
        <Card 
          label="Light" 
          value={data?.light_level || 1.65} 
          icon={<Sun className="w-8 h-8 text-yellow-400" />} 
          color="from-yellow-400 to-yellow-600" 
          status={lightStatus} 
        />
      </div>

      {/* Column 2 */}
      <div className="flex flex-col gap-2 w-full md:w-auto">
        <Card 
          label="Temperature" 
          value={data?.temperature || 25} 
          icon={<Thermometer className="w-8 h-8 text-orange-400" />} 
          color="from-orange-400 to-orange-600" 
          status={tempStatus} 
        />
        <FireCard isFire={data?.have_fire || 0} />
      </div>

      {/* Column 3 */}
      <div className="flex flex-col gap-2 w-full md:w-auto">
        <LightSwitch />
        <MicrophoneCard />
      </div>
        <WaterPumpCard isActive={isFire || false} />
    </div>
  );
}