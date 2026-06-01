import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Productos Personalizados | Casa Alessia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FAF7F2",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Marco decorativo */}
        <div
          style={{
            position: "absolute",
            inset: "28px",
            border: "1px solid #A07850",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: "36px",
            border: "1px solid #EAE3D2",
            display: "flex",
          }}
        />

        {/* Contenido centrado */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            padding: "0 100px",
          }}
        >
          <p
            style={{
              color: "#A07850",
              fontSize: "13px",
              letterSpacing: "6px",
              textTransform: "uppercase",
              margin: 0,
              fontFamily: "Arial, sans-serif",
            }}
          >
            hecho a mano · méxico
          </p>

          <h1
            style={{
              color: "#6B4C35",
              fontSize: "86px",
              fontWeight: "300",
              margin: 0,
              textAlign: "center",
              lineHeight: 1.05,
              letterSpacing: "-1px",
            }}
          >
            Casa Alessia
          </h1>

          <div
            style={{
              width: "60px",
              height: "1px",
              background: "#A07850",
              display: "flex",
            }}
          />

          <p
            style={{
              color: "#9E9A93",
              fontSize: "22px",
              margin: 0,
              textAlign: "center",
              fontFamily: "Arial, sans-serif",
              letterSpacing: "1px",
            }}
          >
            Vasos · Playeras · Llaveros · Etiquetas
          </p>

          <p
            style={{
              color: "#A07850",
              fontSize: "16px",
              margin: 0,
              fontFamily: "Arial, sans-serif",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Enviamos a toda la república
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}
