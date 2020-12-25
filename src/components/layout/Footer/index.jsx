import React from "react";

import { Grid, Typography } from "@material-ui/core";
import {
  WhatsApp,
  Facebook,
  Pinterest,
  ChatBubble,
  Phone,
  Telegram,
} from "@material-ui/icons";
import wyvnLogo from "./../../../assets/wyvn-logo_70x23.png";
import oilcoLogo from "./../../../assets/127773583_3545756545510434_7339054125011523214_o.png";

export default function () {
  return (
    <div>
      <SubscribeNow />
      <div style={{ backgroundColor: "#1a523b", padding: "10px" }}>
        <Grid container spacing={0} xs={12}>
          <Grid item xs={12} sm={6} lg={3}>
            <h3>Need help?</h3>
            <div>
              <Grid container style={{ color: "white", margin: "10px" }}>
                <Grid xs={2}>
                  <WhatsApp style={{ fontSize: "30px" }} />
                </Grid>
                <Grid xs={10}>
                  <Typography variant="h6">Whats app</Typography>
                  <Typography varient="p">123456789010</Typography>
                </Grid>
              </Grid>

              <Grid container style={{ color: "white", margin: "10px" }}>
                <Grid xs={2}>
                  <ChatBubble style={{ fontSize: "30px" }} />
                </Grid>
                <Grid xs={10}>
                  <Typography variant="h6">Live Chat</Typography>
                  <Typography varient="p">Messanger</Typography>
                </Grid>
              </Grid>

              <Grid container style={{ color: "white", margin: "10px" }}>
                <Grid xs={2}>
                  <Phone style={{ fontSize: "30px" }} />
                </Grid>
                <Grid xs={10}>
                  <Typography variant="h6">+8801936276182</Typography>
                  <Typography varient="p">Talk to a human</Typography>
                </Grid>
              </Grid>

              <Grid container style={{ color: "white", margin: "10px" }}>
                <Grid xs={2}>
                  <Telegram style={{ fontSize: "30px" }} />
                </Grid>
                <Grid xs={10}>
                  <Typography variant="h6">Mail us!</Typography>
                  <Typography varient="p">
                    oilco.bangladesh@gmail.com
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <SocialConnect />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Lists />
          </Grid>
        </Grid>
      </div>
      <Copyright />
    </div>
  );
}

const SubscribeNow = () => {
  return (
    <Grid
      container
      spacing={0}
      style={{ color: "white", backgroundColor: "#28674d" }}
    >
      <Grid
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px 20px",
        }}
        xs={12}
        md={6}
      >
        <p style={{ marginRight: "50px" }}>Follow Us:</p>
        <Facebook style={{ fontSize: "40px" }} />
        <Pinterest style={{ fontSize: "40px" }} />
      </Grid>
      <Grid
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px",
          flexWrap: "wrap",
        }}
        xs={12}
        md={6}
      >
        <p>Subscribe Now:</p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            style={{
              backgroundColor: "rgba(244,244,244,.05)",
              borderColor: "rgba(6,6,6,.03)",
              height: "40px",
              color: "white",
              padding: "5px 20px",
              borderRadius: "5px",
            }}
          />
          <div
            style={{
              height: "40px",
              width: "60px",
              backgroundColor: "white",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Telegram style={{ fontSize: "25px", color: "rgba(0,0,0,.6)" }} />
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

const SocialConnect = () => {
  return (
    <div>
      <h3>Social Connect</h3>
      <div
        style={{
          height: "130px",
          maxWidth: "320px",
          minWidth: "200px",
          backgroundColor: "white",
        }}
      >
        <div style={{ padding: "10px" }}>
          <img
            src={oilcoLogo}
            alt=""
            style={{
              width: "60",
              height: "auto",
              marginRight: "10px",
            }}
          />

          <div style={{ display: "inline-block" }}>
            <Typography variant="h6" style={{ color: "#365899" }}>
              OilCo Banglasesh
            </Typography>
            <Typography varient="p">523,154 likes</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

const Lists = () => {
  return (
    <Grid container md={12}>
      {/* Shopping online */}
      <Grid xs={6} md={6}>
        <h3>Shopping online</h3>
        <ul>
          <li>
            <a>Delivery & Returns</a>
          </li>
          <li>
            <a>Size Guides</a>
          </li>
          <li>
            <a>Cookie Policy</a>
          </li>
        </ul>
      </Grid>
      {/* Customer Services */}
      <Grid xs={6} md={6}>
        <h3>Customer Services</h3>
        <ul>
          <li>
            <a>Contact Us</a>
          </li>
          <li>
            <a>Track Your Order</a>
          </li>
          <li>
            <a>FAQs</a>
          </li>
        </ul>
      </Grid>
      {/* Join with Us */}
      <Grid xs={6} md={6}>
        <h3>Join with Us</h3>
        <ul>
          <li>
            <a>About-Us</a>
          </li>
          <li>
            <a>Careers</a>
          </li>
          <li>
            <a>Become An Affiliate</a>
          </li>
          <li>
            <a>Corporate Inquiry</a>
          </li>
          <li>
            <a>Supplier</a>
          </li>
        </ul>
      </Grid>
      {/* Opening Hours */}
      <Grid xs={6} md={6}>
        <h3>Opening Hours</h3>
        <p style={{ marginLeft: "10px" }}>Sunday - Friday: 10am - 9am</p>
      </Grid>
    </Grid>
  );
};

const Copyright = () => {
  return (
    <Grid
      container
      spacing={0}
      style={{ color: "white", backgroundColor: "#214737" }}
    >
      <Grid
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          padding: "10px 20px",
          textAlign: "center",
        }}
        sm={12}
        md={12}
        lg={6}
      >
        <a href="#">Sitemap</a>
        <a href="#">Cookie Policy</a>
        <a href="#">Terms and Conditions</a>
        <a href="#">Security and Privacy Policy</a>
      </Grid>
      <Grid
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px 20px",
        }}
        sm={12}
        md={12}
        lg={6}
      >
        <p>&copy; 2019 OilCo. All Right Reserved || Design and Developed by </p>
        <img
          src={wyvnLogo}
          alt="wyvn"
          style={{
            height: "30px",
            width: "auto",
            margin: "10px",
            cursor: "pointer",
          }}
        />
      </Grid>
    </Grid>
  );
};
