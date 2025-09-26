import { useEffect } from "react";

const VoiceflowChat = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    script.type = "text/javascript";
    script.async = true;

    script.onload = () => {
      if (window.voiceflow && window.voiceflow.chat) {
        window.voiceflow.chat.load({
          verify: { projectID: "67a734f7d3bc90c09c8567e8" },
          url: "https://general-runtime.voiceflow.com",
          versionID: "production",
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; 
};

export default VoiceflowChat;
