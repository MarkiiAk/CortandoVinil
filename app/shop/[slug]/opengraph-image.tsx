import { ImageResponse } from "next/og";
import { getProductBySlug } from "@/lib/products";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

interface Props {
  params: { slug: string };
}

export const alt = "Producto Personalizado | Casa Alessia";

export default function Image({ params }: Props) {
  const product = getProductBySlug(params.slug);

  const productName = product ? product.name : "Producto Personalizado";
  const price = product ? `Desde $${product.basePrice} MXN` : "";
  const shortDesc = product ? product.shortDescription : "";

  return new ImageResponse(
    (
      <div
        style={{
          background: "#FAF7F2",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "stretch",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Franja lateral izquierda */}
        <div
          style={{
            width: "8px",
            background: "#A07850",
            display: "flex",
            flexShrink: 0,
          }}
        />

        {/* Contenido principal */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "70px 80px",
            gap: "24px",
          }}
        >
          <p
            style={{
              color: "#A07850",
              fontSize: "13px",
              letterSpacing: "5px",
              textTransform: "uppercase",
              margin: 0,
              fontFamily: "Arial, sans-serif",
            }}
          >
            Casa Alessia · Hecho a mano
          </p>

          <h1
            style={{
              color: "#6B4C35",
              fontSize: "72px",
              fontWeight: "300",
              margin: 0,
              lineHeight: 1.05,
              letterSpacing: "-1px",
            }}
          >
            {productName}
          </h1>

          {shortDesc ? (
            <p
              style={{
                color: "#9E9A93",
                fontSize: "26px",
                margin: 0,
                fontFamily: "Arial, sans-serif",
                lineHeight: 1.3,
              }}
            >
              {shortDesc}
            </p>
          ) : null}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginTop: "8px",
            }}
          >
            {price ? (
              <span
                style={{
                  background: "#6B4C35",
                  color: "#FAF7F2",
                  fontSize: "20px",
                  padding: "10px 28px",
                  fontFamily: "Arial, sans-serif",
                  letterSpacing: "1px",
                }}
              >
                {price}
              </span>
            ) : null}
            <span
              style={{
                color: "#A07850",
                fontSize: "16px",
                fontFamily: "Arial, sans-serif",
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              Personalizado con tu nombre
            </span>
          </div>
        </div>

        {/* Franja decorativa derecha */}
        <div
          style={{
            width: "200px",
            background: "#EAE3D2",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: "1px",
              height: "80px",
              background: "#A07850",
              display: "flex",
            }}
          />
          <p
            style={{
              color: "#A07850",
              fontSize: "11px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              textAlign: "center",
              margin: 0,
              fontFamily: "Arial, sans-serif",
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
            }}
          >
            mimarca.mx
          </p>
          <div
            style={{
              width: "1px",
              height: "80px",
              background: "#A07850",
              display: "flex",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
