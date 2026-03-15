import { DATA } from "@/data/resume";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#ffffff",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "56px",
              fontWeight: "700",
              color: "#0a0a0a",
              lineHeight: 1.1,
              letterSpacing: "-2px",
            }}
          >
            {DATA.name}
          </div>
          <div
            style={{
              fontSize: "26px",
              color: "#666666",
              lineHeight: 1.4,
              maxWidth: "800px",
            }}
          >
            {DATA.description}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #e5e5e5",
            paddingTop: "32px",
          }}
        >
          <div style={{ fontSize: "22px", color: "#999999" }}>{DATA.url.replace("https://", "")}</div>
          <div
            style={{
              fontSize: "18px",
              color: "#0a0a0a",
              backgroundColor: "#f5f5f5",
              padding: "10px 20px",
              borderRadius: "8px",
            }}
          >
            {DATA.location}
          </div>
        </div>
      </div>
    ),
    size
  );
}
