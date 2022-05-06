import { Empty, Result, Space, Spin } from "antd";
import { ReactNode } from "react";
import { RiLoader5Fill } from "react-icons/ri";

export default function Loader({
  state,
  size,
  statusCode,
  children,
}: {
  state: "loading" | "error" | "empty";
  size?: "small" | "medium";
  statusCode?: 403 | 404 | 500 | "error";
  children?: ReactNode | string;
}) {
  if (state === "loading" && size === "small") return <Spin indicator={<RiLoader5Fill className="c-white spin" />} />;
  if (state === "loading" && size === "medium")
    return (
      <Space size="middle" className="flex-center">
        <Spin size="default" />
      </Space>
    );
  if (state === "error" && size === "medium")
    return (
      <Space size="middle" className="flex-center">
        <Result status={statusCode ?? "500"} subTitle={children ?? "Some error occurred"} />
      </Space>
    );
  if (state === "empty")
    return (
      <Empty
        style={{
          height: size !== "medium" ? "70vh" : "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        description={children}
      />
    );
  return (
    <Space size="large" className="center">
      {state === "loading" ? (
        <Spin size="large" />
      ) : (
        <Result status={statusCode ?? "500"} title={children ?? "Some error occurred"} />
      )}
    </Space>
  );
}
