import React from "react";
import { QRCode } from "react-qr-code";
const CodeGenerator = ({ link }) => {
  return (
    <div>
      {link && link.trim() !== "" && <QRCode value={link} size={200} />}
    </div>
  );
};

export default CodeGenerator;
