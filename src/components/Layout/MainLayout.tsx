import { Drawer, Layout } from "antd";
import { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layoutStateSelector, setIsSidebarClosed } from "store/layoutStateSlice";
import PageTitle from "utils/PageTitle";
import useWindowWidth from "utils/useWindowWidth";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./Layout.module.scss";
import SideMenu from "./SideMenu";

const { Sider, Content } = Layout;

interface ChildrenProps {
  title: string;
  extraHeading?: ReactNode;
  children: ReactNode;
}

function ElixirLayout({ title, extraHeading, children }: ChildrenProps) {
  const dispatch = useDispatch();
  const { isSidebarClosed } = useSelector(layoutStateSelector);

  const width = useWindowWidth();

  return (
    <Layout className={styles["main-layout"]}>
      <PageTitle title={title} />
      <Layout>
        {width! > 768 ? (
          <Sider
            theme="light"
            collapsible
            collapsed={isSidebarClosed}
            breakpoint="md"
            width={250}
            collapsedWidth={0}
            trigger={null}
            className={styles["sider"]}
          >
            <SideMenu />
          </Sider>
        ) : (
          <Drawer
            placement="left"
            closable={false}
            onClose={() => dispatch(setIsSidebarClosed(false))}
            visible={isSidebarClosed}
            className={styles["drawer"]}
          >
            <SideMenu />
          </Drawer>
        )}
        <Layout
          style={{
            backgroundImage: `url(/dashboard-bg/${sessionStorage.getItem("ornament")}.png)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Header title={title} extraHeading={extraHeading} />
          <Content
            style={{
              overflowX: "hidden",
              overflowY: "auto",
              height: "calc(100vh - 64px)",
            }}
          >
            {children}
          </Content>
          <Footer style={{ background: `rgba(225,225,225,0.3)` }} />
        </Layout>
      </Layout>
    </Layout>
  );
}

export default ElixirLayout;
