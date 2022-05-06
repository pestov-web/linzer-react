import React from "react";

function Map() {
  return (
    <div className="map">
      <iframe
        title="map"
        className="map__frame"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1200.9205028945446!2d131.93542839538554!3d43.167510065278336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9975e6dec1c23b03!2sLINZER!5e0!3m2!1sru!2sru!4v1651819898769!5m2!1sru!2sru"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
