import { ReactNode } from "react";
import { Avatar, Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useLayoutContext } from "@src/states";

//images
import logo from "@src/assets/images/new-logo.png";
import logoDark from "@src/assets/images/new-logo.png";
import bgAuth from "@src/assets/images/imgBg2.jpg";
import { FiFacebook } from "react-icons/fi";
import { TbBrandGoogle } from "react-icons/tb";
import { LuGithub, LuQuote, LuTwitter } from "react-icons/lu";

import "swiper/css";

type AccountLayoutProps = {
  pageImage?: string;
  authTitle: string;
  helpText?: string;
  bottomLinks?: ReactNode;
  children?: ReactNode;
  hasThirdPartyLogin?: boolean;
};

const AuthLayout2 = ({
  pageImage,
  authTitle,
  helpText,
  bottomLinks,
  children,
  hasThirdPartyLogin,
}: AccountLayoutProps) => {
  const { themeMode } = useLayoutContext();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "stretch",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        backgroundRepeat: "no-repeat",
        backgroundImage: "url(" + bgAuth + ")",
      }}>
      <Card sx={{ zIndex: 10, width: "100%", maxWidth: { lg: "480px" }, height: "100vh" }}>
        <CardContent
          sx={{
            p: "48px",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            alignItems: "center",
            justifyContent: "space-around",
          }}>
          <Box
            sx={{
              marginBottom: "32px",
              textAlign: { lg: "start", xs: "center" },
              "& > a": {
                display: "flex",
                textAlign: {
                  lg: "start",
                  xs: "center",
                },
              },
            }}>
            <Link to="/">
              {themeMode == "dark" ? (
                <img src={logo} alt="logo" style={{ height: 50 }} />
              ) : (
                <img src={logoDark} alt="logo" style={{ height: 50 }} />
              )}
            </Link>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            {pageImage && (
              <Avatar
                src={pageImage}
                alt="avatar"
                variant="square"
                sx={{ height: "64px", width: "64px", mx: "auto", mb: "24px" }}
              />
            )}

            <Typography variant="h4" sx={{ mb: 1 }}>
              {authTitle}
            </Typography>
            <Typography variant="body2" sx={{ mb: "36px" }} color={"text.secondary"}>
              {helpText}
            </Typography>

            {children}
          </Box>

          <Box sx={{}}>{bottomLinks}</Box>
        </CardContent>
      </Card>

      {/* <Box
        sx={{
          bgcolor: "#0000004d",
          width: "100%",
          height: "100vh",
          position: "relative",
          display: { lg: "flex", xs: "hidden" },
          alignItems: "end",
        }}>
        <Box
          sx={{
            position: "absolute",
            insetInlineStart: 0,
            insetInlineEnd: 0,
            display: "flex",
            marginTop: "auto",
            justifyContent: "center",
            textAlign: "center",
          }}>
          <Box sx={{ width: { xl: "50%", xs: "100%" }, mx: "auto" }}>
            <Swiper spaceBetween={50} slidesPerView={1} modules={[Autoplay]} loop={true} autoplay={{ delay: 5000 }}>
              <SwiperSlide>
                <Typography variant="h2" sx={{ color: "white", mb: "24px" }}>
                  I love the color!
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "white", mb: "20px", display: "flex", gap: 0.5 }}>
                  <LuQuote size={16} style={{ transform: "scaleX(-1)" }} />
                  Everything you need is in this template. Love the overall look and feel. Not too flashy, and still
                  very professional and smart.
                  <LuQuote size={16} />
                </Typography>
                <Typography variant="caption" sx={{ color: "white", mx: "auto" }}>
                  - Admin User
                </Typography>
              </SwiperSlide>

              <SwiperSlide>
                <Typography variant="h2" sx={{ color: "white", mb: "24px" }}>
                  Flexibility !
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "white", mb: "20px", display: "flex", gap: 0.5 }}>
                  <LuQuote size={16} style={{ transform: "scaleX(-1)" }} />
                  Pretty nice theme, hoping you guys could add more features to this. Keep up the good work.
                  <LuQuote size={16} />
                </Typography>
                <Typography variant="caption" sx={{ color: "white", mx: "auto" }}>
                  - Admin User
                </Typography>
              </SwiperSlide>

              <SwiperSlide>
                <Typography variant="h2" sx={{ color: "white", mb: "24px" }}>
                  Feature Availability!
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "white", mb: "20px", display: "flex", gap: 0.5 }}>
                  <LuQuote size={16} style={{ transform: "scaleX(-1)" }} />
                  This is a great product, helped us a lot and very quick to work with and implement.
                  <LuQuote size={16} />
                </Typography>
                <Typography variant="caption" sx={{ color: "white", mx: "auto" }}>
                  - Admin User
                </Typography>
              </SwiperSlide>
            </Swiper>
          </Box>
        </Box>
      </Box> */}
    </Box>
  );
};

export default AuthLayout2;
