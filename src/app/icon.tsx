import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 4,
        }}
      >
        <span
          style={{
            color: "#fff",
            fontSize: 18,
            fontWeight: 700,
            fontFamily: "serif",
            lineHeight: 1,
            letterSpacing: "-1px",
          }}
        >
          b
        </span>
      </div>
    ),
    { ...size }
  );
}
