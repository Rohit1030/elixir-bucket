import { Space, Spin } from "antd";
import { useSetupWorkspace } from "api/userService";

export default function Setup({ path }: { path?: string }) {
  useSetupWorkspace(path);

  return (
    <Space size="large" className="center" style={{ flexDirection: "column", width: "100vw" }}>
      <Spin size="large" tip="Your workspace is setting up ..." />
    </Space>
  );
}
