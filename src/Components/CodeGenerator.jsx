import React from "react";
import { QRCode } from "react-qr-code";
import placeHolder from '../assets/qr-placeholder.jpg'
const CodeGenerator = ({ link }) => {
  const isValid = link && link.trim() !== "" ;
  return (
    <div className="transition-all">
      { isValid? (<QRCode value={link} size={278} />) :( <img src={placeHolder} alt="" className="opacity-50 rounded-3xl hover:opacity-70 transition-all duration-300"/> )}
    </div>
  );
};

export default CodeGenerator;
