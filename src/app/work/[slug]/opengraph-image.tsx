import { getWork } from "@/data/work";
import { DATA } from "@/data/resume";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const post = await getWork(params.slug);

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
        <div
          style={{
            fontSize: "18px",
            color: "#999999",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          Work
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "60px",
              fontWeight: "700",
              color: "#0a0a0a",
              lineHeight: 1.1,
              letterSpacing: "-2px",
              maxWidth: "900px",
            }}
          >
            {post.metadata.title}
          </div>
          {post.metadata.summary && (
            <div
              style={{
                fontSize: "24px",
                color: "#666666",
                lineHeight: 1.5,
                maxWidth: "850px",
              }}
            >
              {post.metadata.summary}
            </div>
          )}
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
          <div style={{ fontSize: "22px", color: "#0a0a0a", fontWeight: "600" }}>
            {DATA.name}
          </div>
          <div style={{ fontSize: "20px", color: "#999999" }}>
            {DATA.url.replace("https://", "")}
          </div>
        </div>
      </div>
    ),
    size
  );
}
