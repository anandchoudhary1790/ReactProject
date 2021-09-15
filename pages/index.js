import Link from 'next/link'
import Head from 'next/head'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import PrimarySearchAppBar from './Common/menu'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase'; 
 
const useStyles = makeStyles((theme) => ({
  iframe: {
    width: '100%',
  },
}));

function OfferPage() {
  const classes = useStyles();
   return (
     <>
       <Head>
         <meta
           name="viewport"
           content="width=device-width, initial-scale=1.0"
         />
         <title>Arvzapp</title>
         <link rel="stylesheet" href="/css/app.css" />
       </Head> 
         <nav className="navbar navbar-expand-lg  navbar-light bg-white">
           <Box className="container-fluid">
             <Link href="/">
               <a className="navbar-brand">
                 <img src="images/New_Arvz_Logo.svg" alt="" height="43" />
               </a>
             </Link>
             <a href="" className="mr-2 ml-2">
               <img src="images/Apple_Icon.svg" alt="" height="43" />
             </a>
             <a href="">
               <img src="images/Android_Icon.svg" alt="" height="43" />
             </a>
             <Button
               className="navbar-toggler"
               type="button"
               data-toggle="collapse"
               data-target="#navbarNav"
               aria-controls="navbarNav"
               aria-expanded="false"
               aria-label="Toggle navigation"
             >
               <span className="navbar-toggler-icon"></span>
             </Button>
             <Box
               className="collapse navbar-collapse justify-content-end"
               id="navbarNav"
             >
               <ul className="navbar-nav m-0 ml-auto align-items-center">
                 <li className="nav-item position-relative mr-2">
                   <input type="text" />
                   <img
                     src="images/search-logo.svg"
                     className="input-img"
                     alt=""
                   />
                 </li>
                 <li className="nav-item">
                   <a className="nav-link" href="contact-us.html">
                     <img src="images/logout.svg" alt="" />
                   </a>
                 </li>
                 <li className="nav-item">
                   <a className="nav-link" href="https://arvzapp-dev.web.app/sign-in">
                     SIGN IN
                   </a>
                 </li>
               </ul>
             </Box>
           </Box>
         </nav>

         <PrimarySearchAppBar />
         <Box className="welcome">
           <Box className="container-fluid">
             <Grid container spacing={3}>
               <Grid item xs={12} md={2}></Grid>
               <Grid item xs={12} md={7} pb={4} className="offset-md-2">
                 <img
                   src="images/welcome.svg"
                   className="img-fluid py-4"
                   alt=""
                 />
               </Grid>
               <Grid item xs={12} md={2} className="pl-md-5 ml-md-5 ">
                 <Box className="welcome-wrapper ml-md-3 mx-auto">
                   <h3>BUSINESS OWNERS</h3>
                   <a href="/offer">START HERE</a>
                 </Box>
               </Grid>
             </Grid>
           </Box>
         </Box>

         <section className="banner">
           <Box className="container-fluid">
             <Grid container spacing={3} alignItems="center">
               <Grid item xs={12}></Grid>
               <Box className="video-bg">
                 <video src="images/landing-video.mp4" autoplay loop></video>
               </Box>
             </Grid>
           </Box>
         </section>

         <Box className="offer">
           <Box className="container-fluid">
             <Grid container spacing={3}>
               <Grid item xs={12} className="text-center">
                 <img
                   src="images/right.svg"
                   className="pr-5 img-fluid"
                   alt=""
                 />
                 <img
                   src="images/andriod-large.svg"
                   className="pl-3 img-fluid"
                   alt=""
                 />
                 <img src="images/qr.png" className="px-3 img-fluid" alt="" />
                 <img
                   src="images/apple-large.svg"
                   className="pr-3 img-fluid"
                   alt=""
                 />
                 <img src="images/left.svg" className="pl-5 img-fluid" alt="" />
               </Grid>
               <Grid item xs={12}>
                 <h3>SCAN NOW TO BEGIN!</h3>
               </Grid>
             </Grid>
           </Box>
         </Box>

         <Box className="begi">
           <Box className="container-fluid">
             <Grid container spacing={3}>
               <Grid item xs={12} md={2} className="mt-n5">
                 <img
                   src="images/roll.png"
                   className="img-fluid begi-roll mt-n5"
                   alt=""
                 />
               </Grid>
               <Grid item xs={12} md={8}>
                 <img
                   src="images/welcome-white.svg"
                   className="img-fluid pt-5"
                   alt=""
                 />
                 <p>
                   <b>An Exciting New Way</b> to experience travel, live cams,
                   and entertainment. ArvzApp is a unique mobile app using
                   video, live cams, and premium promotions relavant to your
                   specific preferneces and favorite places. Presenting you with
                   a thrilling mobile adventure, on the go, and in Real – Time.
                 </p>
               </Grid>
               <Grid
                 item
                 xs={12}
                 md={2}
                 className="d-flex align-items-lg-start"
               >
                 <img src="images/be.png" className="img-fluid  mt-n4" alt="" />
                  
               </Grid>
             </Grid>
             <Grid container spacing={3}>
               <Grid item xs={12} className="text-center">
                 <a href="https://arvzapp-dev.web.app/live-cams">
                   <span>VIEW CAMS NOW</span>
                 </a>
               </Grid>
               <Grid item xs={12} className="text-right">
                  
               </Grid>
             </Grid>
           </Box>
           <img src="images/Panorama.png" className="img-fluid" alt="" />
         </Box>

         <Box className="action green-bg">
           <Box className="container-fluid">
             <Grid container spacing={3}>
               <Grid item xs={12} md={2}>
                 <img
                   src="images/media.svg"
                   className="img-fluid w-80 mt-n5 left-icon"
                   alt=""
                 />
               </Grid>
               <Grid item xs={12} md={8}>
                 <img
                   src="images/welcome-white.svg"
                   className="img-fluid pt-5"
                   alt=""
                 />
               </Grid>
             </Grid>
             <Grid container spacing={3}>
               <Grid item xs={12} md={2}></Grid>
               <Grid item xs={12} md={8}>
                 <Box className="img-wrapper">
                 <iframe id="autoVideo" src="https://drive.google.com/file/d/1CJj1xVkCGQXISlHtjNPZqXMwhBoSWb_p/preview?start=1"  allow="accelerometer; autoplay; encrypted-media; gyroscope;picture-in-picture"  height="480" className={classes.iframe} allow="autoplay" ></iframe>
                 </Box>
               </Grid>
             </Grid>
           </Box>
           <Box className="black-bg">
             <Box className="container-fluid">
               <Grid container spacing={3} pt={5}>
                 <Grid item xs={12}>
                   <img
                     src="images/CTA_Action.svg"
                     className="pr-5 img-fluid"
                     alt=""
                   />
                 </Grid>
               </Grid>
             </Box>
           </Box>
         </Box>

         <Box className="begi">
           <Box className="container-fluid">
             <Grid container spacing={3}>
               <Grid item xs={12} md={2}>
                 <img
                   src="images/capture.svg"
                   className="img-fluid  mt-n5 left-icon"
                   alt=""
                 />
               </Grid>
               <Grid item xs={12} md={8}>
                 <img
                   src="images/welcome-white.svg"
                   className="img-fluid pt-5"
                   alt=""
                 />
                 <p>
                   <b>Fun Live Cams!</b> ArvzApp provides a vast collection of
                   live cams for your viewing pleasure and we are adding more
                   Live Cams every day!
                 </p>
               </Grid>
             </Grid>
           </Box>
         </Box>

         <Box className="video">
           <Box className="container-fluid">
             <Grid container spacing={3}>
               <Grid item xs={12} md={4} pb={5} className="pb-md-0">
                 <Box className="video-wrapper">
                   <img src="images/1vpPdI.png" className="img-fluid" alt="" />
                 </Box>
                 <Box className="content">
                   <Box className="">
                     <h3>TUSTIN SKY CAM</h3>
                     <h4>LEMON HEIGHTS, CA</h4>
                   </Box>
                   <Box className="">
                     <img src="images/scenic.svg" alt="" />
                   </Box>
                 </Box>
                 <h5>Current Viewers 125</h5>
               </Grid>
               <Grid item xs={12} md={4} pb={5} className="pb-md-0">
                 <Box className="video-wrapper">
                   <img src="images/1vpPdI.png" className="img-fluid" alt="" />
                 </Box>
                 <Box className="content">
                   <Box className="">
                     <h3>TUSTIN SKY CAM</h3>
                     <h4>LEMON HEIGHTS, CA</h4>
                   </Box>
                   <Box className="">
                     <img src="images/scenic.svg" alt="" />
                   </Box>
                 </Box>
                 <h5>Current Viewers 125</h5>
               </Grid>
               <Grid item xs={12} md={4} pb={5} className="pb-md-0">
                 <Box className="video-wrapper">
                   <img src="images/1vpPdI.png" className="img-fluid" alt="" />
                 </Box>
                 <Box className="content">
                   <Box className="">
                     <h3>TUSTIN SKY CAM</h3>
                     <h4>LEMON HEIGHTS, CA</h4>
                   </Box>
                   <Box className="">
                     <img src="images/scenic.svg" alt="" />
                   </Box>
                 </Box>
                 <h5>Current Viewers 125</h5>
               </Grid>
               <Grid item xs={12} className="text-center py-5 mt-5">
                 <img src="images/featured.svg" alt="" />
               </Grid>
               <Grid item xs={12}>
                 <Box className="video-wrapper">
                   <img src="images/fkDYlB.png" className="img-fluid" alt="" />
                 </Box>
                 <Box className="content">
                   <Box className="">
                     <h3>TUSTIN SKY CAM</h3>
                     <h4>LEMON HEIGHTS, CA</h4>
                   </Box>
                   <Box className="">
                     <img src="images/scenic.svg" alt="" />
                   </Box>
                 </Box>
                 <h5>Current Viewers 125</h5>
               </Grid>
               <Grid item xs={12} className="text-center mb-5">
                 <a href="https://arvzapp-dev.web.app/live-cams">
                   <span>VIEW CAMS NOW</span>
                 </a>
               </Grid>
             </Grid>
           </Box>
         </Box>

         <Box className="symbol">
           <Box className="container-fluid">
             <Box className="row">
               <Box className="col-3">
                 <img
                   src="images/Eye_Icon.svg"
                   className="eye-icon left-icon"
                   alt=""
                 />
               </Box>
               <Box className="col-12 text-center">
                 <img src="images/symbol.svg" className="img-fluid" alt="" />
               </Box>
               <Box className="col-8 offset-2">
                 <img
                   src="images/welcome-white.svg"
                   className="img-fluid pt-5"
                   alt=""
                 />
                 <p>
                   <b>View All Live Cams</b> on the ArvzApp website or On the Go
                   with
                   <br /> ArvzApp on your mobile device.
                 </p>
               </Box>
             </Box>
           </Box>
         </Box>

         <Box className="action pt-md-5 pt-0">
           <Box className="black-bg new">
             <Box className="container-fluid">
               <Grid container spacing={3} className="mt-5">
                 <Grid item xs={12}>
                   <img
                     src="images/CTA_Cams.svg"
                     className="pr-5 img-fluid"
                     alt=""
                   />
                 </Grid>
               </Grid>
             </Box>
           </Box>
         </Box>

         <Box className="alerts">
           <Box className="container-fluid">
             <Box className="row">
               <Box className="col-md-2 col-12">
                 <img
                   src="images/bell.svg"
                   className="bell-img left-icon"
                   alt=""
                 />
               </Box>
               <Box className="col-md-8 col-12 text-center py-5">
                 <img src="images/alert.svg" className="img-fluid" alt="" />
                 <p className="text-left pt-4">
                   <b>Favorite your Favorite</b> places by tapping on the star
                   on their <br />
                   profile page and you will receive special alerts, promos and
                   <br /> deals automatically, in Real Time.
                 </p>
               </Box>
             </Box>
           </Box>
         </Box>

         <Box className="cartoon">
           <Box className="container-fluid">
             <Grid container spacing={3}>
               <Grid item xs={12}>
                 <img
                   src="images/Capt_Star_Group_2.svg"
                   className="img-fluid"
                   alt=""
                 />
               </Grid>
             </Grid>
           </Box>
         </Box>

         <Box className="action pt-5">
           <Box className="black-bg no-after">
             <Box className="container-fluid">
               <Grid container spacing={3} className="pt-5">
                 <Grid item xs={12}>
                   <img
                     src="images/CTA_Adventure.svg"
                     className="pr-5 img-fluid"
                     alt=""
                   />
                 </Grid>
               </Grid>
             </Box>
           </Box>
         </Box>

         <footer>
           <Box className="container-fluid">
             <Grid container spacing={3} className="px-md-5">
               <Grid item xs={12} md={3}>
                 <ul>
                   <li>ARVZAPP</li>
                   <li>
                     <a href="">HOME</a>
                   </li>
                   <li>
                     <a href="">ABOUT</a>
                   </li>
                   <li>
                     <a href="">LIVE CAMS</a>
                   </li>
                   <li>
                     <a href="">BLOG</a>
                   </li>
                   <li>
                     <a href="">EXPLORE</a>
                   </li>
                 </ul>
               </Grid>
               <Grid item xs={12} md={3}>
                 <ul>
                   <li>SUPPORT</li>
                   <li>
                     <a href="">FAQS</a>
                   </li>
                   <li>
                     <a href="">TERMS OF SERVICE</a>
                   </li>
                   <li>
                     <a href="">CONTACT</a>
                   </li>
                   <li>
                     <a href="">THE ARVZAPP STORY</a>
                   </li>
                 </ul>
               </Grid>
               <Grid item xs={12} md={3}>
                 <ul>
                   <li>FOR BUSINESSES</li>
                   <li>
                     <a href="">PROMOTE WITH ARVZAPP</a>
                   </li>
                   <li>
                     <a href="">DO NOT SELL MY PERSONAL INFORMATION</a>
                   </li>
                 </ul>
                 <ul className="social">
                   <li>
                     <a href="">
                       <img src="images/social1.svg" alt="" />
                     </a>
                   </li>
                   <li>
                     <a href="">
                       <img src="images/social2.svg" alt="" />
                     </a>
                   </li>
                   <li>
                     <a href="">
                       <img src="images/social3.svg" alt="" />
                     </a>
                   </li>
                   <li>
                     <a href="">
                       <img src="images/social4.svg" alt="" />
                     </a>
                   </li>
                 </ul>
               </Grid>
               <Grid item xs={12} md={3} className="pt-md-0 pt-4">
                 <p>Looking to Promote with ArvzApp?</p>
                 <Box className="welcome-wrapper">
                   <h3>
                     <span>SIGN UP FOR A</span> 60 DAY
                   </h3>
                   <a href="https://arvzapp-dev.web.app/sign-up">FREE TRIAL</a>
                 </Box>
                 <Box className="d-flex pt-4">
                   <img
                     src="images/app-store.png"
                     className="img-fluid"
                     alt=""
                   />
                   <img
                     src="images/play-store.png"
                     className="img-fluid ml-3"
                     alt=""
                   />
                 </Box>
               </Grid>
               <Grid item xs={12} className="text-left pt-md-0 pt-4">
                 <p className="text-left">
                   COPYRIGHT 2021 ARVZAPP ADMIN. ALL RIGHTS RESERVED.
                 </p>
               </Grid>
             </Grid>
           </Box>
         </footer>

         <Box className="fancy">
           <img src="images/fancy.svg" className="img-fluid" alt="" />
         </Box> 
     </>
   );
}

export default OfferPage