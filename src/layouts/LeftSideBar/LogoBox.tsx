import { Link } from "react-router-dom";

import logo from "@src/assets/images/new-logo.png";
import logoDark from "@src/assets/images/new-logo.png";
import { useLayoutContext } from "@src/states";
import { styled } from "@mui/system";
import { WithSetting } from "@src/types";

const LogoBox = ({ defaultTheme, backgroundColor }: { defaultTheme?: "light" | "dark"; backgroundColor?: boolean }) => {
  const { settings } = useLayoutContext();

  const {
    sidenav: { theme },
  } = settings;

  const LogoBoxWrapper = styled("div")<WithSetting>(({ settings }) => {
    return {
      backgroundColor: backgroundColor ? (settings.sidenav.theme == "light" ? "#fff " : "#212428") : "transparent",
      height: "70px",
      position: "sticky",
      top: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 2,
      boxShadow: "0px 0px 4px  #959595",
    };
  });

  return (
    <LogoBoxWrapper settings={settings}>
      <Link
        to="/"
        style={{
          justifyContent: "center",
          display: "flex",
        }}>
        <img src={(defaultTheme ?? theme) == "light" ? logoDark : logo} height={50} width={147} />
      </Link>
    </LogoBoxWrapper>
  );
};

export default LogoBox;
