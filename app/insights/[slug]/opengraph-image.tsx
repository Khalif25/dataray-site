import { ImageResponse } from "next/og";
import { articles } from "@/lib/articles";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    return new ImageResponse(
      (
        <div
          style={{
            background: "#020617",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: 60,
          }}
        >
          DataRay
        </div>
      ),
      size
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: "#020617",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          color: "white",
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.7 }}>DataRay Insights</div>

        <div
          style={{
            fontSize: 64,
            fontWeight: "bold",
            marginTop: 20,
            lineHeight: 1.2,
          }}
        >
          {article.title}
        </div>
      </div>
    ),
    size
  );
}