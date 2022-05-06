import React, { CSSProperties } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userSelector } from "store/userSlice";

export default function Footer({
  style,
  className,
  mainPage,
}: {
  style?: CSSProperties;
  className?: string;
  mainPage?: boolean;
}) {
  const { footer } = useSelector(userSelector);

  return (
    <footer style={style} className={className}>
      {mainPage && <span>Version: 1.2.0</span>}
      {footer && !mainPage && <div dangerouslySetInnerHTML={{ __html: footer }} />}
      <span>Copyright © {new Date().getFullYear()}</span>
      <div className="flex gap-10">
        {footer && <Link to="/feedback">Feedback</Link>}
        <a href="mailto:hi@elixirapp.in">Contact Us</a>
      </div>
    </footer>
  );
}
