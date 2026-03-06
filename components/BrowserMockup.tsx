import React from 'react';
import { Zap, Database, CheckCircle, Bot } from 'lucide-react';

export const BrowserMockup: React.FC = () => {
  return (
    <div className="relative mx-auto w-full max-w-5xl rounded-2xl bg-white shadow-premium overflow-hidden border border-brand-gray/20 transform transition-transform duration-700 hover:scale-[1.01]">
      {/* Browser Toolbar */}
      <div className="bg-white border-b border-brand-gray/10 px-4 py-3 flex items-center space-x-4 relative justify-center md:justify-start">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
        </div>
        <div className="flex-1 flex justify-center md:static absolute left-1/2 -translate-x-1/2 md:transform-none">
          <div className="bg-brand-white px-4 py-1.5 rounded-md flex items-center space-x-2 text-xs text-brand-gray w-56 sm:w-64 justify-center font-medium transition-colors hover:bg-brand-gray/5">
            <span className="w-2 h-2 bg-brand-navy/60 rounded-full"></span>
            <span className="text-brand-navy/70">atascension.com</span>
          </div>
        </div>
        <div className="w-8 md:w-12"></div>
      </div>

      {/* Browser Content */}
      <div className="bg-brand-white p-5 sm:p-8 md:p-14 lg:p-16 relative overflow-hidden flex items-center justify-center">
        
        {/* Background Grid - Technical Foundation */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#b8b8b808_1px,transparent_1px),linear-gradient(to_bottom,#b8b8b808_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        {/* Container for the Split View */}
        <div className="relative w-full max-w-4xl md:min-h-[420px] flex flex-col md:flex-row items-center gap-6 md:gap-0">
            
            {/* SVG Connector Layer - The "Wiring" */}
            <svg className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-10" overflow="visible">
                {/* Line from Button to Logic */}
                <path 
                    d="M 320 200 C 380 200, 380 120, 480 120" 
                    fill="none" 
                    stroke="#e0b344" 
                    strokeWidth="1.5" 
                    strokeDasharray="4 4"
                    className="opacity-40"
                />
                 <path 
                    d="M 320 200 C 380 200, 380 280, 480 280" 
                    fill="none" 
                    stroke="#0b234b" 
                    strokeWidth="1.5" 
                    className="opacity-20"
                />
                {/* Moving Pulse Effect on the Gold Line */}
                <circle r="3" fill="#e0b344">
                    <animateMotion 
                        dur="3s" 
                        repeatCount="indefinite"
                        path="M 320 200 C 380 200, 380 120, 480 120"
                    />
                </circle>
            </svg>
            <svg className="md:hidden absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 400 520" preserveAspectRatio="none">
                <path
                    d="M 200 120 C 200 170, 200 190, 200 230"
                    fill="none"
                    stroke="#e0b344"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    className="opacity-50"
                />
                <path
                    d="M 200 230 C 200 270, 200 290, 200 330"
                    fill="none"
                    stroke="#0b234b"
                    strokeWidth="1.5"
                    className="opacity-25"
                />
                <path
                    d="M 200 330 C 200 360, 200 380, 200 410"
                    fill="none"
                    stroke="#e0b344"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    className="opacity-50"
                />
                <circle r="3" fill="#e0b344">
                    <animateMotion 
                        dur="3.2s" 
                        repeatCount="indefinite"
                        path="M 200 120 C 200 170, 200 190, 200 230"
                    />
                </circle>
                <circle r="3" fill="#0b234b">
                    <animateMotion 
                        dur="3.2s" 
                        repeatCount="indefinite"
                        path="M 200 230 C 200 270, 200 290, 200 330"
                    />
                </circle>
                <circle r="3" fill="#e0b344">
                    <animateMotion 
                        dur="3.2s" 
                        repeatCount="indefinite"
                        path="M 200 330 C 200 360, 200 380, 200 410"
                    />
                </circle>
            </svg>

            {/* FRONTEND LAYER: The User Experience */}
            <div className="relative z-20 w-full max-w-md md:max-w-none md:w-80 bg-white rounded-xl shadow-xl border border-brand-gray/10 p-6 flex flex-col justify-between h-auto md:h-[340px] min-h-[300px] transform transition-transform hover:-translate-y-1 duration-500">
                <div className="absolute -top-3 -left-3 bg-brand-navy text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider shadow-md">
                    Frontend Interface
                </div>
                
                <div>
                    <div className="w-8 h-8 rounded bg-brand-gray/10 mb-6 flex items-center justify-center">
                        <div className="w-4 h-4 bg-brand-navy rounded-sm"></div>
                    </div>
                    <div className="h-4 w-2/3 bg-brand-navy/10 rounded mb-3"></div>
                    <div className="h-2 w-full bg-brand-gray/10 rounded mb-2"></div>
                    <div className="h-2 w-5/6 bg-brand-gray/10 rounded mb-8"></div>
                    
                    <div className="space-y-3">
                        <div className="h-10 w-full border border-brand-gray/20 rounded flex items-center px-3">
                            <div className="h-2 w-24 bg-brand-gray/10 rounded"></div>
                        </div>
                        <div className="h-10 w-full bg-brand-navy text-white rounded flex items-center justify-center text-xs font-medium shadow-lg shadow-brand-navy/10">
                            Start Automation
                        </div>
                    </div>
                </div>

                <div className="border-t border-brand-gray/10 pt-4 flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center">
                        <CheckCircle size={12} className="text-green-500" />
                    </div>
                    <div className="h-2 w-20 bg-brand-gray/10 rounded"></div>
                </div>
            </div>

            {/* BACKEND LAYER: The Logic */}
            <div className="relative z-20 w-full md:w-auto md:absolute md:right-12 md:top-1/2 md:-translate-y-1/2 flex flex-col gap-4 md:gap-6">
                <div className="md:hidden text-[11px] font-semibold text-brand-gray uppercase tracking-wider">
                    Backend Logic
                </div>
                <div className="hidden md:block absolute -top-8 -right-3 text-brand-gray text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
                    Backend Logic
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-4 md:gap-6">
                    {/* Automation Node 1 */}
                    <div className="flex items-center gap-4 group">
                        <div className="w-full md:w-40 bg-white border border-brand-gray/20 p-3 rounded-lg shadow-sm flex items-center gap-3 relative">
                            <div className="w-8 h-8 rounded bg-blue-50 text-blue-600 flex items-center justify-center">
                                <Bot size={16} />
                            </div>
                            <div className="flex-1">
                                <div className="text-[10px] font-bold text-brand-navy uppercase tracking-wide">Analyze Input</div>
                                <div className="text-[9px] text-brand-gray">GPT-4 Processing</div>
                            </div>
                            {/* Connection Dot */}
                            <div className="hidden md:block absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-brand-gold rounded-full"></div>
                        </div>
                    </div>

                    {/* Automation Node 2 */}
                    <div className="flex items-center gap-4 group md:ml-8">
                        <div className="w-full md:w-40 bg-white border border-brand-gray/20 p-3 rounded-lg shadow-sm flex items-center gap-3 relative">
                            <div className="w-8 h-8 rounded bg-purple-50 text-purple-600 flex items-center justify-center">
                                <Database size={16} />
                            </div>
                            <div className="flex-1">
                                <div className="text-[10px] font-bold text-brand-navy uppercase tracking-wide">Enrich Lead</div>
                                <div className="text-[9px] text-brand-gray">Sync to CRM</div>
                            </div>
                             {/* Connection Dot */}
                             <div className="hidden md:block absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-brand-navy rounded-full"></div>
                        </div>
                    </div>

                    {/* Automation Node 3 */}
                    <div className="flex items-center gap-4 group">
                        <div className="w-full md:w-40 bg-white border border-brand-gray/20 p-3 rounded-lg shadow-sm flex items-center gap-3 relative">
                            <div className="w-8 h-8 rounded bg-amber-50 text-amber-600 flex items-center justify-center">
                                <Zap size={16} />
                            </div>
                            <div className="flex-1">
                                <div className="text-[10px] font-bold text-brand-navy uppercase tracking-wide">Trigger Flow</div>
                                <div className="text-[9px] text-brand-gray">Email Sequence</div>
                            </div>
                            {/* Connection Dot */}
                            <div className="hidden md:block absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-brand-gold rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};
