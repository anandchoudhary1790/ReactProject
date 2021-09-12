import Link from 'next/link'
import Head from 'next/head' 
import PrimarySearchAppBar from './Common/menu'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

function HomePage() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/css/all.css" rel="stylesheet" type="text/css" />
        <link href="/css/styles.css" rel="stylesheet" type="text/css" />
        <title>Arvzapp</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        <script src="/js/bootstrap.js"></script>
      </Head>
      <Container maxWidth="xl">
        <header className="header">
          <Box className="container">
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Box className="logo">
                  <Link href="/">
                    <a>
                      <img src="/images/Arv_Logo_Icon_Group.svg" alt="logo" />
                    </a>
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={6} className="header-right">
                <form className="form-inline my-2 my-lg-0">
                  <input
                    className="form-control"
                    type="search"
                    placeholder=""
                    aria-label="Search"
                  />
                  <button
                    className="btn btn-outline-success my-sm-0"
                    type="submit"
                  >
                    <i className="fas fa-search"></i>
                  </button>
                </form>
                <a className="signup_icon" href="#">
                  <img className="signup-icon" src="/images/sgnup-new.svg" />
                </a>
              </Grid>
            </Grid>
          </Box>
        </header>
        <PrimarySearchAppBar />

        <Box className="main-banner">
          <Link href="/offer">
            <a>
              <img src="/images/CTA_Asset_2mdpi.svg" />
            </a>
          </Link>
        </Box>

        <Box className="business-section">
          <Box className="main-heading-container small-container">
            <h2 className="main-heading">
              <span>ArvzApp for Business</span>
            </h2>
          </Box>

          <Box className="small-container">
            <p>
              <strong>ArvzApp</strong> is an interactive, intuitive mobile app &
              marketing tool intended to enable local residents and travelers to
              find your business. ArvzApp showcases all aspects of dining,
              shopping and entertainment, based on your customers’ specific
              individual interests.
            </p>

            <Box className="food-section">
              <Box className="food-section-header">
                <ul>
                  <li>
                    <span>
                      <img src="/images/food.jpg" />
                    </span>{" "}
                    <span>Food</span>
                  </li>
                  <li>
                    <span>
                      <img src="/images/night-mare.jpg" />
                    </span>{" "}
                    <span>Nightlife</span>
                  </li>
                  <li>
                    <span>
                      <img src="/images/travel.jpg" />
                    </span>{" "}
                    <span>Travel</span>
                  </li>
                  <li>
                    <span>
                      <img src="/images/evebts.jpg" />
                    </span>{" "}
                    <span>Events</span>
                  </li>
                  <li>
                    <span>
                      <img src="/images/live-cams.jpg" />
                    </span>{" "}
                    <span>Live Cams</span>
                  </li>
                  <li>
                    <span>
                      <img src="/images/cafes.jpg" />
                    </span>{" "}
                    <span>Cafes</span>
                  </li>
                </ul>
              </Box>

              <Box className="food-section-mid">
                <Box className="food-section-mid-left">
                  <img src="/images/food-left.jpg" />{" "}
                </Box>
                <Box className="food-section-mid-right">
                  <img src="/images/food-right.jpg" />{" "}
                </Box>
              </Box>

              <Box className="food-footer">
                <img src="/images/food-footer-img.jpg" />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className="section-icon-col for_video">
          <Box className="section-icon-col-inner">
            <span>
              <img src="/images/Movie_Icon.svg" />
            </span>{" "}
          </Box>{" "}
        </Box>

        <Box className="video-overview">
          <Box className="yellow-sec">
            <Box className="main-heading-container small-container">
              <h2 className="main-heading">
                <span>Video Oveview</span>
              </h2>
            </Box>
            <img src="/images/overview-mid.jpg" />
          </Box>
        </Box>

        <Box className="just-img">
          <img src="/images/just-img.png" />
        </Box>

        <Box className="free-trial-mid">
          <Box className="top-strip">
            <img src="/images/top-strip.jpg" />{" "}
          </Box>
          <Box className="black-box">
            <Box className="mid-trial-button">
              <a href="#">
                <img src="/images/CTA_Asset_2mdpi.svg" />
              </a>
            </Box>
          </Box>
          <Box className="bottom-strip">
            <img src="/images/bottom-strip.jpg" />{" "}
          </Box>
        </Box>

        <Box className="section-icon-col">
          <Box className="section-icon-col-inner">
            <span>
              <img src="/images/customize_icon.png" />
            </span>{" "}
          </Box>{" "}
        </Box>

        <Box className="customize-business-sec">
          <Box className="main-heading-container small-container">
            <h2 className="main-heading">
              <span>Customize Your Business</span>
            </h2>
            <p>
              <strong> Set Up and Manage </strong> your business profile page to
              your specific needs and preferences. You’re in control with
              ArvzApp’s easy to use{" "}
              <strong>
                <i> Business Control Center </i>{" "}
              </strong>
              . Social media links, QR codes, promos, menus and much more all at
              your finger tips.
            </p>
          </Box>

          <Box className="customize-items-sec">
            <Box className="container">
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <Box className="customize-items-img">
                    <img src="/images/customize-items-img01.jpg" />
                  </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Box className="customize-items-img">
                    <img src="/images/customize-items-img02.jpg" />
                  </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Box className="customize-items-img">
                    <img src="/images/customize-items-img03.jpg" />
                  </Box>
                </Grid>
              </Grid>
              <h3>Customize Business Profile Pages</h3>
            </Box>
          </Box>
        </Box>

        <Box className="social-media-sec">
          <Box className="big-container">
            <ul className="social-icon">
              <li>
                <a href="#">
                  {" "}
                  <img src="/images/call_icon.svg" />
                  <span>Call</span>
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <img src="/images/share_icon.svg" />
                  <span>SHARE</span>
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <img src="/images/favorite_icon.svg" />
                  <span>FAVORITE</span>
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <img src="/images/liveCam_icon.svg" />
                  <span>LIVE CAM</span>
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <img src="/images/website_icon.svg" />
                  <span>WEBSITE</span>
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <img src="/images/facebook_icon.svg" />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <img src="/images/twitter2.svg" />
                  <span>Twitter</span>
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <img src="/images/Instagram_icon.svg" />
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
            <h3>Social Media Connections</h3>
          </Box>
        </Box>

        <Box className="cust-promotion">
          <Box
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <Box className="carousel-inner">
              <Box className="carousel-item active">
                <img src="/images/custom-promition.jpg" />
              </Box>
              <Box className="carousel-item">
                <img src="/images/custom-promition.jpg" />
              </Box>
              <Box className="carousel-item">
                <img src="/images/custom-promition.jpg" />
              </Box>
            </Box>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </Box>

          <h3>Custom Business Promotions</h3>
        </Box>

        <Box className="section-icon-col">
          <Box className="section-icon-col-inner">
            <span>
              <img src="/images/Horn_Icon.svg" />
            </span>{" "}
          </Box>{" "}
        </Box>

        <Box className="you-get">
          <Box className="main-heading-container small-container">
            <h2 className="main-heading">
              <span>Here's What you get !</span>
            </h2>
            <p>
              A powerful Business Marketing tool at your command, all of <br />
              these dynamic features packed into one incredible app.
            </p>
          </Box>

          <Box className="you-get-inner">
            <Box className="container">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <img className="" src="/images/Def_Corm_1mdpi.svg" />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>

        <Box className="free-trial-mid no-border">
          <a>
            <img src="/images/CTA_Band_1mdpi-new.svg" />
          </a>
        </Box>

        <Box className="section-icon-col">
          <Box className="section-icon-col-inner">
            <span>
              <img src="/images/Horn_Icon.svg" />
            </span>{" "}
          </Box>{" "}
        </Box>
        <Box className="promo-section">
          <Box className="main-heading-container small-container">
            <h2 className="main-heading">
              <span>Create your own promos</span>
            </h2>
          </Box>

          <p>
            <strong>ArvzApp Provides </strong> each of the tools necessary to
            help you enhance all of your business advertising, sales promotions
            and increased awareness.
          </p>
          <Box className="promos-inner">
            <img src="/images/promo-inner.jpg" />
          </Box>
        </Box>

        <Box className="section-icon-col">
          <Box className="section-icon-col-inner">
            <span>
              <img src="/images/monitor.png" />
            </span>{" "}
          </Box>{" "}
        </Box>
        <Box className="monitor-section">
          <Box className="main-heading-container small-container">
            <h2 className="main-heading">
              <span>Monitor Performence</span>
            </h2>
            <p>
              Complete Metrics and Analytics - for tracking your business and
              marketing efforts in Real Time.
            </p>
          </Box>

          <Box className="monitor-inner">
            <img src="/images/Analytics_Chart.svg" />
          </Box>
        </Box>

        <Box className="section-icon-col">
          <Box className="section-icon-col-inner">
            <span>
              <img src="/images/web_cam_icon.png" />
            </span>{" "}
          </Box>{" "}
        </Box>

        <Box className="Beam-Your-Stream-sec">
          <Box className="main-heading-container small-container">
            <h2 className="main-heading">
              <span>Beam Your Stream</span>
            </h2>
            <p>
              <strong>Have a Live Cam?</strong> Let ArvzApp help you promote it.
              ArvzApp allows you to place your Live Cam feed on the app for
              everyone to see and participate in our Live Cam revenue share
              program.
            </p>
          </Box>

          <Box className="Stream-bg-sec">
            <Box className="big-container">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Box className="Stream-img-col">
                    <img src="/images/video_stream_img.png" />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>

        <Box className="feature-section">
          <Box className="section-icon-col">
            <Box className="section-icon-col-inner">
              <span>
                <img src="/images/hand-icon.svg" />
              </span>{" "}
            </Box>{" "}
          </Box>

          <Box className="main-heading-container small-container">
            <h2 className="main-heading">
              <span>ArvzApp Features List</span>
            </h2>
          </Box>

          <ul>
            <li>
              <span className="icon">
                <img src="/images/video-profile.svg" />
              </span>
              Video Profile
            </li>
            <li>
              <span className="icon">
                <img src="/images/real-time.svg" />
              </span>
              Real Time Ads
            </li>
            <li>
              <span className="icon">
                <img src="/images/business-control.svg" />
              </span>
              Business Control
            </li>
            <li>
              <span className="icon">
                <img src="/images/liv-cam.svg" />
              </span>
              Live Cam Hosting
            </li>
            <li>
              <span className="icon">
                <img src="/images/push-alerts.svg" />
              </span>
              Push Alerts
            </li>
            <li>
              <span className="icon">
                <img src="/images/daily-promotions.svg" />
              </span>
              Daily Promotions
            </li>
            <li>
              <span className="icon">
                <img src="/images/report.svg" />
              </span>
              Analytics Reports
            </li>
            <li>
              <span className="icon">
                <img src="/images/social-media.svg" />
              </span>
              Social Media Links
            </li>
          </ul>
        </Box>

        <Box className="section-icon-col">
          <Box className="section-icon-col-inner">
            <span>
              <img src="/images/engagement.png" />
            </span>{" "}
          </Box>{" "}
        </Box>

        <Box className="customer-engagement">
          <Box className="main-heading-container small-container">
            <h2 className="main-heading">
              <span>Customer Engagement</span>
            </h2>
            <p>
              Affordable and Flexible pricing models for low cost, Real Time,
              customer interaction and participation with your business.
            </p>
          </Box>

          <Box className="customer-engagement-inner">
            <ul>
              <li>
                <a href="#">
                  <img src="/images/Price_Free_1mdpi.svg" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/Price_29_1mdpi.svg" />
                </a>
              </li>
              <li className="last-child">
                <a href="#">
                  <img src="/images/Price_79_1mdpi.svg" />
                </a>
              </li>
            </ul>
          </Box>
        </Box>

        <Box className="free-trial-mid">
          <a href="#">
            <img src="/images/CTA_Band_1mdpi-new.svg" />
          </a>
        </Box>

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
      </Container>
    </>
  );
}

export default HomePage