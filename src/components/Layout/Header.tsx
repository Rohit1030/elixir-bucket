import { Avatar, Button, Col, Layout, Popover, Row, Space, Typography } from "antd";
import { logoutUser } from "api/userService";
import { queryClient } from "AppRoutes";
import IconButton from "components/IconButton";
import { ReactNode } from "react";
import { FiMenu } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { layoutStateSelector, resetLayoutState, setIsSidebarClosed } from "store/layoutStateSlice";
import { resetUser, userSelector } from "store/userSlice";
import useWindowWidth from "utils/useWindowWidth";
import styles from "./Layout.module.scss";

interface HeaderProps {
  title: string | ReactNode;
  extraHeading: ReactNode;
}

export default function Header({ title, extraHeading }: HeaderProps) {
  const history = useHistory();
  const dispatch = useDispatch();
  const width = useWindowWidth();
  const { name, email, profile_pic } = useSelector(userSelector);
  const { isSidebarClosed } = useSelector(layoutStateSelector);

  function handleLogout() {
    logoutUser();
    queryClient.clear();
    localStorage.removeItem("token");
    dispatch(resetUser());
    dispatch(resetLayoutState());
    history.push("/");
  }

  return (
    <Layout.Header className={styles[`header${!isSidebarClosed && width! > 768 ? "-opened" : ""}`]}>
      <Row style={{ height: "inherit", width: "100%" }}>
        <Col span={12} className={styles["page-title"]}>
          <div className="flex align-center gap-10" style={{ height: "100%" }}>
            <IconButton icon={FiMenu} onClick={() => dispatch(setIsSidebarClosed(!isSidebarClosed))} />
            <Typography.Title level={width && width > 768 ? 3 : 4} style={{ marginBottom: 0 }}>
              {title}
            </Typography.Title>
          </div>
        </Col>
        <Col span={12} className={styles["header-others"]}>
          <div className="flex align-center justify-end gap-10" style={{ height: "100%" }}>
            {extraHeading}
            <Popover
              trigger={["click"]}
              placement="bottomRight"
              overlayClassName="profile-popover"
              content={
                <div className="flex align-center flex-col">
                  <Avatar
                    size={60}
                    src={<img src={profile_pic} alt="profile_pic" title="Profile Picture" />}
                    style={{ flexShrink: 0 }}
                  />
                  <span className="name">{name.length < 25 ? name : name.substring(0, 25) + "..."}</span>
                  <span className="email">{email}</span>
                  <Space direction="vertical">
                    <Button block type="primary" onClick={handleLogout}>
                      Logout
                    </Button>
                  </Space>
                </div>
              }
            >
              <Button
                type="ghost"
                shape="circle"
                style={{ width: 40, height: 40 }}
                icon={
                  <Avatar
                    size="large"
                    src={<img src={profile_pic} alt="User Profile" title="Profile Picture" />}
                    style={{ flexShrink: 0 }}
                  />
                }
              />
            </Popover>
          </div>
        </Col>
      </Row>
    </Layout.Header>
  );
}
