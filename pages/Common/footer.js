import React from 'react';
import { makeStyles } from '@material-ui/core/styles'; 
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: { 
    alignItems: 'center' 
  } 
}));

export default function FooterBase() {
  const classes = useStyles();

  return ( 
    <footer className="footer">
    <Box className="container">
      <Box className="footer-inner">
        <Grid container spacing={3} className="d-flex">
          <Grid item xs={2}>
            <h2>ARVZAPP</h2>
            <ul>
              <li>
                <a href="#">HOME </a>
              </li>
              <li>
                <a href="#">ABOUT </a>
              </li>
              <li>
                <a href="#">LIVE </a>
              </li>
              <li>
                <a href="#">CAMS </a>
              </li>
              <li>
                <a href="#">BLOG </a>
              </li>
              <li>
                <a href="#">EXPLORE</a>
              </li>
            </ul>
          </Grid>

          <Grid item xs={2}>
            <h2>SUPPORT</h2>
            <ul>
              <li>
                <a href="#">FAQS </a>
              </li>
              <li>
                <a href="#">TERMS OF SERVICE </a>
              </li>
              <li>
                <a href="#">CONTACT </a>
              </li>
              <li>
                <a href="#">THE ARVZAPP STORY</a>
              </li>
            </ul>
          </Grid>

          <Grid item xs={2}>
            <h2>FOR BUSINESSES</h2>
            <ul>
              <li>
                <a href="#">PROMOTE WITH ARVZAPP</a>
              </li>
              <li>
                <a href="#">DO NOT SELL MY PERSONAL INFORMATION</a>
              </li>
            </ul>

            <ul className="social-footer">
              <li>
                <a href="#">
                  <img src="/images/facebook.svg" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/instagram.svg" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/twiiter.svg" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/youtube.svg" />
                </a>
              </li>
            </ul>
          </Grid>

          <Grid item xs={6} className="last-footer last-footer-col">
            <p>
              <a href="#">
                <img
                  className="signup-img"
                  src="/images/Footer_60Day_1.svg"
                />
              </a>
            </p>
          </Grid>
        </Grid>

        <Box className="copyright">
          <p>COPYRIGHT 2021 ARVZAPP ADMIN. ALL RIGHTS RESERVED.</p>
        </Box>
      </Box>
      <Box className="top-strip">
        <img src="/images/top-strip.jpg" />{" "}
      </Box>
    </Box>
  </footer>
  );
}
