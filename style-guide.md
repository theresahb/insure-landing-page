# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Dark Violet: hsl(256, 26%, 20%)
- Grayish Blue: hsl(216, 30%, 68%)

### Neutral

- Very Dark Violet: hsl(270, 9%, 17%)
- Dark Grayish Violet: hsl(273, 4%, 51%)
- Very Light Gray: hsl(0, 0%, 98%)

## Typography

### Body Copy

- Font size: 16px

### Headings

- Family: [DM Serif Display](https://fonts.google.com/specimen/DM+Serif+Display)
- Weights: 400

### Body

- Family: [Karla](https://fonts.google.com/specimen/Karla)
- Weights: 400, 700

## Icons

You can use either use the social icons provided or load in a font icon library. Some library suggestions can be found below:

- [Font Awesome](https://fontawesome.com)
- [IcoMoon](https://icomoon.io)
- [Ionicons](https://ionicons.com)




<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- displays site properly based on user's device -->

  <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png">
  
  <title>Frontend Mentor | Insure landing page</title>

  <!-- Feel free to remove these styles or customise in your own stylesheet 👍 -->
  <style>
    .attribution { font-size: 11px; text-align: center; }
    .attribution a { color: hsl(228, 45%, 44%); }
  </style>
</head>
<body>

  How we work
  Blog
  Account
  View plans

  Humanizing your insurance.

  Get your life insurance coverage easier and faster. We blend our expertise 
  and technology to help you find the plan that’s right for you. Ensure you 
  and your loved ones are protected.

  View plans

  We’re different

  Snappy Process

  Our application process can be completed in minutes, not hours. Don’t get 
  stuck filling in tedious forms.

  Affordable Prices

  We don’t want you worrying about high monthly costs. Our prices may be low, 
  but we still offer the best coverage possible.

  People First

  Our plans aren’t full of conditions and clauses to prevent payouts. We make 
  sure you’re covered when you need it.

  Find out more about how we work

  How we work

  Our company

  How we work
  Why Insure?
  View plans
  Reviews

  Help me

  FAQ
  Terms of use
  Privacy policy
  Cookies

  Contact

  Sales
  Support
  Live chat

  Others

  Careers
  Press
  Licenses

  
  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div>
</body>
</html>


<header>
        <!-- desktop navbar -->
        <nav class="desktop-navbar">
            <div class="logo">
                <img src="images/logo.svg" alt="">
            </div>
            <ul class="desktop-links flex">
                <li><a href="#">HOW WE WORK</a></li>
                <li><a href="#">BLOG</a></li>
                <li><a href="#">ACCOUNT</a></li>
                <li><a href="#"><button class="view-btn">VIEW PLANS</button></a></li>
            </ul>
        </nav>
        <!-- mobile navbar -->
        <nav class="mobile-navbar">
            <div class="logo">
                <img src="images/logo.svg" alt="logo">
            </div>
            <div class="hamburger">
                <img src="images/icon-hamburger.svg" alt="open" class="open">
                <img src="images/icon-close.svg" alt="close" class="close">
            </div>
        </nav>
        <div class="mobile-menu">
            <ul class="menu">
                <li><a href="#">HOW WE WORK</a></li>
                <li><a href="#">BLOG</a></li>
                <li><a href="#">ACCOUNT</a></li>
                <li><a href="#"><button class="plans-btn">VIEW PLANS</button></a></li>
            </ul>
        </div>
    </header>




<header>
        <div class="logo">
            <img src="images/logo.svg" alt="logo">
        </div>
        <div class="toggle">
            <img class="menu" src="images/icon-hamburger.svg" alt="menu" width="25">
            <img class="close"src="images/icon-close.svg" alt="close">
        </div>
        <div class="mobile-nav">
            <ul class="nav-card">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
            </ul>
        </div>
        <div class="desktop-nav">
            <ul class="desk-nav-card">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
            </ul>
        </div>
    </header>
        
    <div class="hero-container">
            <div class="hero-img">
                <img class="hero-image" src="images/bg-intro-mobile.svg" alt="" width="300" >
                <img class="hero-image3" src="images/bg-intro-desktop.svg" alt="">
                <img class="hero-image2" src="images/image-mockups.png" alt="" >
            </div>
            <div class="hero-text">
                <h1 class="hero-heading">
                    Next generation digital banking
                </h1>
                <p class="hero-subtext">
                    Take your financial life online. Your Easybank account will be a one-stop-shop 
                    for spending, saving, budgeting, investing, and much more.
                </p>
                <button class="reg-btn">Request Invite</button>
            </div>
        </div>    
        <div class="services-container">
            <div class="choose">
                <h1 class="choose-heading" >
                    Why choose Easybank?
                </h1>
                <p class="choose-subtext">
                    We leverage Open Banking to turn your bank account into your financial hub. Control 
                    your finances like never before.  
                </p>
            </div>
            <div class="services">
                <div class="banking">
                    <img src="images/icon-online.svg" alt="" width="60">
                    <div class="banking-text">
                        <h3 class="service-heading">
                            Online Banking
                        </h3>
                        <p class="service-text">
                            Our modern web and mobile applications allow you to keep track of your finances 
                            wherever you are in the world.
                        </p>
                    </div>
                </div>
                <div class="budgeting">
                    <img src="images/icon-budgeting.svg" alt="" width="60">
                    <div class="budgeting-text">
                        <h3 class="service-heading">
                            Simple Budgeting
                        </h3>
                        <p class="service-text">
                            See exactly where your money goes each month. Receive notifications when you’re 
                            close to hitting your limits.
                        </p>
                    </div>
                </div>
                <div class="onboarding">
                    <img src="images/icon-onboarding.svg" alt="" width="60">
                    <div class="onboarding-text">
                        <h3 class="service-heading">
                            Fast Onboarding
                        </h3>
                        <p class="service-text">
                            We don’t do branches. Open your account in minutes online and start taking control 
                            of your finances right away.
                        </p>
                    </div>
                </div>
                <div class="api">
                    <img src="images/icon-api.svg" alt="" width="60">
                    <div class="api-text">
                        <h3 class="service-heading">
                            Open API
                        </h3>
                        <p class="service-text">
                            Manage your savings, investments, pension, and much more from one account. Tracking 
                            your money has never been easier.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="article-container">
            <div class="latest">
                <h1 class="latest-heading">
                    Latest Articles
                </h1>
            </div>
            <div class="article-boxes">
                <div class="box box1">
                    <div class="image-box">
                        <img src="images/image-currency.jpg" alt="" width="280" height="180">
                    </div>
                    <div class="box-texts">
                        <p class="small">
                            By Claire Robinson
                        </p>
                        <h3 class="box-head">
                            Receive money in any currency with no fees
                        </h3>
                        <p class="big">
                            The world is getting smaller and we’re becoming more mobile. So why should you be 
                            forced to only receive money in a single …
                        </p>
                    </div>
                </div>
                <div class="box box2">
                    <img src="images/image-restaurant.jpg" alt="" width="280" height="180">
                    <div class="box-texts">
                        <p class="small">
                            By Wilson Hutton
                        </p>
                        <h3 class="box-head">
                            Treat yourself without worrying about money
                        </h3>
                        <p class="big">
                            Our simple budgeting feature allows you to separate out your spending and set 
                            realistic limits each month. That means you …
                        </p>
                    </div>
                </div>
                <div class="box box3">
                    <img src="images/image-plane.jpg" alt="" width="280" height="180">
                    <div class="box-texts">
                        <p class="small">
                            By Wilson Hutton
                        </p>
                        <h3 class="box-head">
                            Take your Easybank card wherever you go
                        </h3>
                        <p class="big">
                            We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
                            while you’re abroad. We’ll even show you …
                        </p>
                    </div>
                </div>
                <div class="box box4">
                    <img src="images/image-confetti.jpg" alt="" width="280" height="180">
                    <div class="box-texts">
                        <p class="small">
                            By Claire Robinson
                        </p>
                        <h3 class="box-head">
                            Our invite-only Beta accounts are now live!
                        </h3>
                        <p class="big">
                            After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
                            It’s easy to request an invite through the site ...
                        </p>
                    </div>
                </div>
            </div>
        </div> -->
    </div>    

    
    <footer></footer>






    header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    /* margin: 1rem .5rem; */
    padding: 1rem 1.2rem;
    background-color: #fff;
    position: fixed;
    z-index: 20;
    width: 100%;
}

.mobile-nav {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    /* padding: 1.9rem 1.65rem; */
    /* position: fixed; */
    /* height: 100vh; */
    width: 65%;
    top: 0;
    left: 0;
    z-index: 20;
    /* transform: translateX(-100%);
    transition: .7s ease-in-out; */
}

@media (min-width: 370px) {
    .mobile-nav {
        width: 100%;
    }
}

.desktop-nav, .mobile-nav {
    display: none;
}

.close {
    display: none;
}

.hero-container {
    /* background-image: url("../images/bg-intro-mobile.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover; */
    /* position: relative; */
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* height: 20rem; */
    width: 100%;
}

.hero-image {
    position: relative;
    left: 0;
    right: 0;
    top: -.5rem;
    /* width: 100%;
    height: 60vh; */
    width: 100%;
    object-fit: contain;
}

.hero-image3 {
    display: none;
}

.hero-image2 {
    position: absolute;
    /* width: 100%;
    height: 60vh; */
    /* right: 3rem; */
    left: 0;
    right: 0;
    top: -5rem;
    /* bottom: 30rem; */
    margin: auto;
    width: 100%;
}

@media (min-width: 1440px) {
    .hero-image3 {
        display: block;
    }

    .hero-image {
        display: none;
    }
}

.hero-text {
    margin-top: -2.5rem;
    text-align: center;
}

.hero-heading {
    color: var(--dark-blue);
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 1rem;
}

.hero-subtext {
    font-size: .75rem;
    font-weight: 500;
    padding: 0 1rem 0 1rem;
    color: var(--dark-blue);
    opacity: .8;
    line-height: 1.5;
    margin-bottom: 1.6rem;
}

.reg-btn {
    background: linear-gradient(to left, hsl(192, 70%, 51%), hsl(136, 65%, 51%));
    outline: 0;
    border: 0;
    padding: .7rem 1.4rem;
    border-radius: 20px;
    font-size: .6875rem;
    color: var(--white);
    margin-bottom: 3.5rem;
}

.services-container {
    display: flex;
    flex: 1 1 60vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 10px;
    padding: 0 1rem 0 1rem;
    background-color: var(--light-grayish-blue);
}

.choose {
    margin-top: 3rem;
}

.choose-heading {
    color: var(--dark-blue);
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 1rem;
}

.choose-subtext {
    font-size: .75rem;
    font-weight: 500;
    /* padding: 0 1rem 0 1rem; */
    color: var(--dark-blue);
    opacity: .8;
    line-height: 1.5;
    margin-bottom: 3rem;
}

.services {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}

.service-heading {
    color: var(--dark-blue);
    font-weight: 500;
    margin-top: 1rem;
}

.service-text {
    font-size: .75rem;
    font-weight: 500;
    /* padding: 0 1rem 0 1rem; */
    color: var(--dark-blue);
    opacity: .8;
    line-height: 1.5;
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.api {
    margin-bottom: 3rem;
}

/* .latest {
    margin-top: 3rem;
} */

.latest-heading {
    color: var(--dark-blue);
    font-weight: 500;
    margin-top: 3rem;
}

.box img {
    object-fit: contain;
}

.article-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: var(--very-light-gray); */
    /* width: 100%; */
    background-color: aquamarine;
}

.article-boxes {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    /* margin: auto 1.5rem; */
    
}

@media (min-width: 1440px) {
    .services {
        flex-direction: row;
    }
    .services-container {
        text-align: left;
    }
    .article-boxes {
        flex-direction: row;
    }
    

    /* .box {
        flex-direction: row;
    
    } */
    p {
        font-size: 1rem;
    }
    h3 {
        font-size: 2rem;
    }
    /* .hero-container {
        flex-direction: row;
    } */
}

/* .articles {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
} */

/* .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    background-color: tomato;
    border: 1px solid blue;
} */

.box-texts {
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background-color: darkkhaki; */
    /* align-items: center; */
    /* padding: 2rem; */
    /* margin: 1rem 2rem; */
    /* border: 1px solid blueviolet; */
}

.small {
    /* font-size: .68rem;
    font-weight: 500; */
    /* padding: 0 1rem 0 1rem; */
    /* color: var(--dark-blue);
    opacity: .8;
    line-height: 1.5; */
}

/* .box-head {
    color: var(--dark-blue);
    font-weight: 500;
} */

.big {
    /* font-size: .875rem;
    font-weight: 500; */
    /* padding: 0 1rem 0 1rem; */
    /* color: var(--dark-blue);
    opacity: .8;
    line-height: 1.5; */
}