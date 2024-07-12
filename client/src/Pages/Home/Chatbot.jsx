// import React, { useEffect } from "react";

// const ChatBot = () => {
//   useEffect(() => {
//     const loadScript = (src, id, async = true) => {
//       const script = document.createElement("script");
//       script.src = src;
//       script.id = id;
//       script.async = async;
//       document.body.appendChild(script);
//     };

//     // Load Botpress webchat script
//     loadScript(
//       "https://cdn.botpress.cloud/webchat/v1/inject.js",
//       "botpress-webchat"
//     );

//     loadScript(
//       "https://mediafiles.botpress.cloud/163e3452-a150-4ecd-b5a8-6544fa6f8518/webchat/config.js",
//       "botpress-config",
//       false
//     );

//     // Cleanup function to remove the scripts when the component unmounts
//     return () => {
//       const webchatScript = document.getElementById("botpress-webchat");
//       const configScript = document.getElementById("botpress-config");
//       if (webchatScript) document.body.removeChild(webchatScript);
//       if (configScript) document.body.removeChild(configScript);
//     };
//   }, []);

//   return (
//     <>
//       {/* <div id="bp-web-widget-container" className='bg-gray'>
               
//         </div> */}
//     </>
//   );
// };

// export default ChatBot;



//?

// import React, { useEffect } from 'react';

// const ChatBot = () => {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.type = 'text/javascript';
//     script.onload = () => {
//       window.voiceflow.chat.load({
//         verify: { projectID: '6654ab46a692780647948d9d' },
//         url: 'https://general-runtime.voiceflow.com',
//         versionID: 'production'
//       });
//     };
//     script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';
//     document.body.appendChild(script);

//     // Clean up the script when the component is unmounted
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div>
//       {/* The chatbot UI will be rendered here by the loaded script */}
//     </div>
//   );
// };

// export default ChatBot;
import React from 'react'

const Chatbot = () => {
  return (
    <div>
      
    </div>
  )
}

export default Chatbot
