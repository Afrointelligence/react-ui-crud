import React from "react";

export default function Usage() {
  return (
    <iframe
      src="https://codesandbox.io/embed/email-login-n1zyx9?autoresize=1&fontsize=14&hidenavigation=1&theme=dark"
      // style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
      style={{
        width: "100%",
        height: 500,
        border: 0,
        borderRadius: 4,
        overflow: "hidden",
      }}
      title="email-login"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  );
}
