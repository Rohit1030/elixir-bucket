import { Avatar, Menu, Typography } from "antd";
import { HiOutlineTemplate } from "react-icons/hi";
import { UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { setIsSidebarClosed } from "store/layoutStateSlice";
import { userSelector } from "store/userSlice";
import useWindowWidth from "utils/useWindowWidth";
import styles from "./Layout.module.scss";

export default function SideMenu() {
  const location = useLocation().pathname;
  const width = useWindowWidth();
  
  const dispatch = useDispatch();
  const { institute_logo, institute_code } = useSelector(userSelector);

  return (
    <div className={styles["sidemenu-container"]}>
      <div className="p-24 flex-center">
        <Avatar src={institute_logo} size="large" style={{ flexShrink: 0, marginRight: "10px" }} />
        <Typography.Text className="bold">{institute_code}</Typography.Text>
      </div>
      <Menu
        // selectedKeys={[location]}
        // mode="inline"
        // theme="light"
        // onClick={() => {
        //   if (width && width <= 768) dispatch(setIsSidebarClosed(false));
        // }}
      >
        <Menu.Item key="/dashboard" icon={<HiOutlineTemplate />}>
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="/users" icon={<UserOutlined />}>
          <Link to="/users">Users</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}
