import React, { Component } from 'react';
import {Link} from "react-router-dom"
class Header extends Component {
    render() {
        return (
            <div id="site-header-wrap">
                <div id="top-bar">
                    <div id="top-bar-inner" className="cbr-container">
                        <div className="top-bar-inner-wrap">
                            <div className="top-bar-content">
                            <span className="email content">SUPPORT@NINZIO.COM</span>
                            <span className="phone content">PHONE +7 (100) 450-460</span>
                            </div>{/* .top-bar-content */}
                            <div className="top-bar-socials">
                            <div className="inner">
                                <ul id="menu-top-menu" className="top-bar-menu">
                                    <li> <Link to="/about">About US</Link></li>
                                    <li> <a href="/">Services</a></li>
                                    <li> <a href="/">Contacts</a></li>
                                </ul>
                                
                            </div>
                            </div>{/* .top-bar-socials */}
                        </div>
                    </div>
                </div>

                <header id="site-header">
                    <div id="site-header-inner" className="cbr-container">
                        <div className="wrap-inner">   
                            <div id="site-logo" className="clearfix">
                            <div id="site-logo-inner">
                                <a href="index.html" title="TheCraft" rel="home" className="main-logo"><img src="vender/assets/imgs/logo.png" width={240} height={45} alt="TheCraft" data-retina="vender/assets/imgs/logo@2x.png" data-width={240} data-height={45} /></a>
                            </div>
                            </div>{/* #site-logo */}
                            <div className="mobile-button"><span /></div>{/* .mobile menu button */}
                            <div id="header-search">
                            <a className="header-search-icon" href="/"><span className="search-icon themecore-magnifier3" /></a>
                            <form role="search" method="get" className="header-search-form" action="#">
                                <label className="screen-reader-text">Search for:</label>
                                <input type="text" defaultValue name="s" className="header-search-field" placeholder="SEARCH..." />
                                <button type="submit" className="header-search-submit" title="Search">Search</button>
                                <input type="hidden" name="post_type" defaultValue="post" />
                            </form>
                            </div>{/* #header-search */}
                            <div className="nav-top-cart-wrapper">
                            <a className="nav-cart-trigger" href="/">
                                <span className="cart-icon themecore-shop5">
                                <span className="shopping-cart-items-count">0</span>
                                </span>
                            </a>
                            <div className="nav-shop-cart">
                                <div className="widget_shopping_cart_content">
                                <p className="woocommerce-mini-cart__empty-message">No products in the cart.</p>
                                </div>
                            </div>
                            </div>{/* .nav-top-cart-wrapper */}
                            <nav id="main-nav" className="main-nav">
                            <ul id="menu-primary-menu" className="menu">
                                <li id="menu-item" className="menu-item menu-item-has-children current-menu-item"><Link to="/"><span>HOME</span></Link> 
                                </li>
                                <li className="menu-item menu-item-has-children"> <a href="/"><span>HEADERS</span></a>
                                <ul className="sub-menu">
                                    <li className="menu-item"><a href="header-1.html"><span>Header 1</span></a></li>
                                    <li className="menu-item"><a href="header-2.html"><span>Header 2</span></a></li>
                                    <li className="menu-item"><a href="header-3.html"><span>Header 3</span></a></li>
                                    <li className="menu-item"><a href="header-4.html"><span>Header 4</span></a></li>
                                    <li className="menu-item"><a href="header-5.html"><span>Header 5</span></a></li>
                                    <li className="menu-item"><a href="header-6.html"><span>Header 6</span></a></li>
                                    <li className="menu-item"><a href="header-7.html"><span>Header 7</span></a></li>
                                </ul>
                                </li>
                                <li className="menu-item menu-item-has-children"> <a href="/"><span>PAGES</span></a>
                                <ul className="sub-menu">
                                    <li className="menu-item"><Link to="/about"><span>About Us</span></Link></li>
                                    <li className="menu-item"><a href="page_services.html"><span>Services</span></a></li>
                                    <li className="menu-item"><a href="page_contact.html"><span>Contact Us</span></a></li>
                                    <li className="menu-item"><a href="page_pricing.html"><span>Pricing</span></a></li>
                                </ul>
                                </li>
                                <li className="menu-item menu-item-has-children"> <a href="/"><span>PORTFOLIO</span></a>
                                <ul className="sub-menu">
                                    <li className="menu-item"><a href="page_portfolio-standard.html"><span>Portfolio Standard</span></a></li>
                                    <li className="menu-item"><a href="page_portfolio-simple.html"><span>Portfolio Simple</span></a></li>
                                    <li className="menu-item"><a href="page_portfolio-grid.html"><span>Portfolio Grid</span></a></li>
                                    <li className="menu-item"><a href="page_portfolio-project.html"><span>Single Project</span></a></li>
                                    <li className="menu-item"><a href="page_portfolio-alt.html"><span>Single Project Alt</span></a></li>
                                </ul>
                                </li>
                                <li className="menu-item menu-item-has-children"> <a href="/"><span>BLOG</span></a>
                                <ul className="sub-menu">
                                    <li className="menu-item"><a href="page_blog-standard.html"><span>Blog Standard</span></a></li>
                                    <li className="menu-item"><a href="page_blog-grid.html"><span>Blog Grid</span></a></li>
                                    <li className="menu-item"><a href="page_blog-list.html"><span>Blog List</span></a></li>
                                    <li className="menu-item"><a href="page_blog-single.html"><span>Single Post</span></a></li>
                                </ul>
                                </li>
                                <li className="menu-item menu-item-has-children"> <a href="/"><span>SHOP</span></a>
                                <ul className="sub-menu">
                                    <li className="menu-item"><a href="page_shop-grid.html"><span>Shop Grid</span></a></li>
                                    <li className="menu-item"><a href="page_shop-single.html"><span>Single Product</span></a></li>
                                </ul>
                                </li>
                                <li className="megamenu col-4 menu-item menu-item-has-children"> <a href="/"><span>ELEMENTS</span></a>
                                <ul className="sub-menu">
                                    <li className="menu-item menu-item-has-children"> <a href="/"><span>SIMPLE GROUP</span></a>
                                    <ul className="sub-menu">
                                        <li className="menu-item"><a href="element_buttons.html"><span>Buttons</span></a></li>
                                        <li className="menu-item"><a href="element_counter.html"><span>Counter</span></a></li>
                                        <li className="menu-item"><a href="element_list.html"><span>Lists</span></a></li>
                                        <li className="menu-item"><a href="element_line-divider.html"><span>Lines and Divider</span></a></li>
                                        <li className="menu-item"><a href="element_icons.html"><span>Icons</span></a></li>
                                    </ul>
                                    </li>
                                    <li className="menu-item menu-item-has-children"> <a href="/"><span>COMMON ELEMENTS</span></a>
                                    <ul className="sub-menu">
                                        <li className="menu-item"><a href="element_iconbox.html"><span>IconBox</span></a></li>
                                        <li className="menu-item"><a href="element_accordions.html"><span>Accordions</span></a></li>
                                        <li className="menu-item"><a href="element_progress-bar.html"><span>Progress Bar</span></a></li>
                                        <li className="menu-item"><a href="element_testimonials.html"><span>Testimonials</span></a></li>
                                        <li className="menu-item"><a href="element_tabs.html"><span>Tabs</span></a></li>
                                    </ul>
                                    </li>
                                    <li className="menu-item menu-item-has-children"> <a href="/"><span>IMAGE &amp; CAROUSEL</span></a>
                                    <ul className="sub-menu">
                                        <li className="menu-item"><a href="element_imagebox.html"><span>ImageBox</span></a></li>
                                        <li className="menu-item"><a href="element_blog-posts.html"><span>Blog Posts</span></a></li>
                                        <li className="menu-item"><a href="element_partner-post.html"><span>Partner Post</span></a></li>
                                        <li className="menu-item"><a href="element_member-post.html"><span>Member Post</span></a></li>
                                        <li className="menu-item"><a href="element_project-post.html"><span>Project Post</span></a></li>
                                    </ul>
                                    </li>
                                    <li className="menu-item menu-item-has-children"> <a href="/"><span>OTHER GROUP</span></a>
                                    <ul className="sub-menu">
                                        <li className="menu-item"><a href="element_pricing-table.html"><span>Pricing Table</span></a></li>
                                        <li className="menu-item"><a href="element_actionbox.html"><span>ActionBox</span></a></li>
                                        <li className="menu-item"><a href="element_google-map.html"><span>Google Map</span></a></li>
                                        <li className="menu-item"><a href="element_contact-form.html"><span>Contact Form</span></a></li>
                                        <li className="menu-item"><a href="element_count-down.html"><span>Countdown</span></a></li>
                                    </ul>
                                    </li>
                                </ul>
                                </li>
                            </ul>
                            </nav>{/* #main-nav */}
                            <ul className="nav-extend active">
                            <li className="ext">
                                <form role="search" method="get" action="#" className="search-form">
                                <input type="search" className="search-field" placeholder="Search..." defaultValue name="s" title="Search for:" />
                                <button type="submit" className="search-submit" title="Search">SEARCH</button>
                                </form>
                            </li>
                            <li className="ext">
                                <a className="cart-info" href="/" title="View your shopping cart">0 items <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>0.00</span></a>
                            </li>
                            </ul>{/* .nav-extend active */}
                        </div>{/* .wrap-inner */}
                    </div>{/* #site-header-inner */}
                </header>{/* #site-header */}
                
            </div>
        );
    }
}

export default Header;
