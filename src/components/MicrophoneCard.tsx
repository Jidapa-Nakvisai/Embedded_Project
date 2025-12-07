import { useState, useEffect } from "react";
import { Mic } from 'lucide-react';

interface TextData {
  'message': string;
  'timestamp': string;
}

export default function MicrophoneCard() {

  const isListening = 0;
  const [microphoneText, setMicrophoneText] = useState<TextData>()

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://app.grouprproject.uk/api/data/text");
      const json = await res.json();
      setMicrophoneText(json);
    };

    fetchData();
  }, [])
  
  console.log(microphoneText)

  return (
    <div className="w-full group bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
      <div className="flex items-center gap-4 mb-4">
        <div className={`p-3 rounded-2xl transition-all ${isListening
            ? 'bg-gray-500/20 group-hover:bg-gray-500/30'
            : 'bg-purple-500/20 group-hover:bg-purple-500/30 animate-pulse'
          }`}>
          <Mic className={`w-8 h-8 ${isListening ? 'text-gray-400' : 'text-purple-400'}`} />
        </div>
        <div className="flex-1">
          <h3 className="text-gray-300 text-sm font-medium mb-1">Voice Detection</h3>
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${isListening ? 'bg-gray-400' : 'bg-purple-400 animate-pulse'
              }`}></span>
            <span className={`text-sm font-semibold ${isListening ? 'text-gray-400' : 'text-purple-400'
              }`}>
              {isListening ? 'Standby' : 'Active'}
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            <span className={`w-1 h-8 bg-purple-400 rounded-full transition-all duration-300 ${!isListening ? 'animate-pulse' : 'opacity-30'
              }`}></span>
            <span className={`w-1 h-6 bg-purple-400 rounded-full transition-all duration-300 ${!isListening ? 'animate-pulse' : 'opacity-30'
              }`} style={{ animationDelay: '0.1s' }}></span>
            <span className={`w-1 h-10 bg-purple-400 rounded-full transition-all duration-300 ${!isListening ? 'animate-pulse' : 'opacity-30'
              }`} style={{ animationDelay: '0.2s' }}></span>
            <span className={`w-1 h-7 bg-purple-400 rounded-full transition-all duration-300 ${!isListening ? 'animate-pulse' : 'opacity-30'
              }`} style={{ animationDelay: '0.3s' }}></span>
          </div>
          <p className={`text-2xl font-semibold flex-1 transition-all duration-300 ${isListening ? 'text-gray-400 italic' : 'text-white'
            }`}>
            "{microphoneText?.message || "No text"}"
          </p>
        </div>
      </div>
    </div>
  );
}