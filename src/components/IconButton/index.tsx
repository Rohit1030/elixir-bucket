import { Button, ButtonProps, Tooltip } from "antd";
import { IconType } from "react-icons/lib";
import styles from "./IconButton.module.scss";

type IconButtonProps = ButtonProps & {
  icon: IconType;
};

export default function IconButton(props: IconButtonProps) {
  const { icon: Icon, ...restProps } = props;
  const button = (
    <div className={styles["icon-button"]}>
      <Button type="ghost" shape={props.shape ?? "circle"} icon={<Icon className="vertical-middle" />} {...restProps} />
    </div>
  );
  return <>{props.title ? <Tooltip title={props.title}>{button}</Tooltip> : button}</>;
}
