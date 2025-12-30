import React, { useState } from "react";
import { FileText, X, Download, Maximize, Minimize } from "lucide-react";

interface Props {
  position: "left" | "right";
  fileUrl: string;
}

export const DocumentIcon = ({
  position = "right",
  fileUrl = "/docs/Resume.pdf",
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const cornerStyle = position === "left" ? "left-4" : "right-4";

  const handleIconClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const handleDownload = () => {
    // For local files, we'll try to open in new tab first
    window.open(fileUrl, "_blank");

    // Alternative download method
    try {
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = "Resume.pdf";
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.log("Download fallback method");
    }
  };

  return (
    <>
      {/* Animated PDF Icon */}
      <button
        onClick={handleIconClick}
        className={`
          fixed bottom-4 ${cornerStyle} 
          text-red-600 hover:text-red-800 
          transition-all duration-300 ease-in-out
          transform hover:scale-110 hover:-translate-y-1
          animate-bounce-gentle
          drop-shadow-lg hover:drop-shadow-xl
          z-50
          group
          bg-white
          rounded-full
          p-2
          border-2
          border-red-200
          hover:border-red-400
        `}
        title="View CV"
      >
        <div className="relative">
          <FileText
            size={28}
            className="
              transition-all duration-300 
              group-hover:rotate-12
              filter group-hover:brightness-110
            "
          />

          {/* Pulse ring animation */}
          <div
            className="
            absolute inset-0 
            rounded-full 
            bg-red-600 
            opacity-20 
            animate-ping
            scale-150
          "
          />

          {/* Subtle glow effect */}
          <div
            className="
            absolute inset-0 
            rounded-full 
            bg-red-600 
            opacity-10 
            blur-sm
            scale-125
            group-hover:opacity-20
            transition-opacity duration-300
          "
          />
        </div>
      </button>

      {/* Document Viewer Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-[9999] flex items-center justify-center p-4">
          <div
            className={`
            bg-white rounded-lg shadow-2xl
            ${isFullscreen ? "w-full h-full" : "w-full max-w-4xl h-[80vh]"}
            flex flex-col
            animate-fade-in
          `}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">CV - Zaid</h3>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleDownload}
                  className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                  title="Download PDF"
                >
                  <Download size={16} />
                </button>
                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200"
                  title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                >
                  {isFullscreen ? (
                    <Minimize size={16} />
                  ) : (
                    <Maximize size={16} />
                  )}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                  title="Close"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 overflow-hidden bg-gray-100">
              <iframe
                src={fileUrl}
                title="CV Preview"
                className="w-full h-full"
              />
            </div>

            {/* Fallback message */}
            <div className="p-4 text-center text-gray-500 text-sm border-t border-gray-200">
              Can't see the document?
              <button
                onClick={handleDownload}
                className="ml-1 text-blue-600 hover:text-blue-800 underline"
              >
                Download PDF directly
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes bounce-gentle {
          0%,
          100% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
          50% {
            transform: translateY(-4px);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 2s infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </>
  );
};
