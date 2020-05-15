import React from 'react'
import Styles from './styles'

<html lang="en">
render(){
  return(
    <Styles>
    <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
        <div class="app-header header-shadow">
            <div class="app-header__logo">
                <div class="logo-src"></div>
                <div class="header__pane ml-auto">
                    <div>
                        <button type="button" class="hamburger close-sidebar-btn hamburger--elastic"
                            data-class="closed-sidebar">
                            <span class="hamburger-box">
                                <span class="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="app-header__mobile-menu">
                <div>
                    <button type="button" class="hamburger hamburger--elastic mobile-toggle-nav">
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
            </div>
            <div class="app-header__menu">
                <span>
                    <button type="button"
                        class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                        <span class="btn-icon-wrapper">
                            <i class="fa fa-ellipsis-v fa-w-6"></i>
                        </span>
                    </button>
                </span>
            </div>
            <div class="app-header__content">
                <div class="app-header-left">
                    <div class="search-wrapper">
                        <div class="input-holder">
                            <input type="text" class="search-input" placeholder="Type to search">
                            <button class="search-icon"><span></span></button>
                        </div>
                        <button class="close"></button>
                    </div>
                </div>
                <div class="app-header-right">
                    <div class="header-btn-lg pr-0">
                        <div class="widget-content p-0">
                            <div class="widget-content-wrapper">
                                <div class="widget-content-left">
                                    <div class="btn-group">
                                        <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                            class="p-0 btn">
                                            <img width="42" class="rounded-circle" src="assets/images/csri-icon.png"
                                                alt="">
                                            <i class="fa fa-angle-down ml-2 opacity-8"></i>
                                        </a>
                                        <div tabindex="-1" role="menu" aria-hidden="true"
                                            class="dropdown-menu dropdown-menu-right">
                                            <button type="button" tabindex="0" class="dropdown-item">User
                                                Account</button>
                                            <button type="button" tabindex="0" class="dropdown-item">Settings</button>
                                            <h6 tabindex="-1" class="dropdown-header">Header</h6>
                                            <button type="button" tabindex="0" class="dropdown-item">Actions</button>
                                            <div tabindex="-1" class="dropdown-divider"></div>
                                            <a href="/users/logout"><button type="button" tabindex="0" class="dropdown-item">Signout</button></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="widget-content-left  ml-3 header-user-info">
                                    <div class="widget-heading">
                                        Luxing Squad
                                    </div>
                                    <div class="widget-subheading">
                                        Admin Account
                                    </div>
                                </div>
                                <div class="widget-content-right header-user-info ml-3">
                                    <button type="button"
                                        class="btn-shadow p-1 btn btn-primary btn-sm show-toastr-example">
                                        <i class="fa text-white fa-calendar pr-1 pl-1"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ui-theme-settings">

            <div class="theme-settings__inner">
                <div class="scrollbar-container">
                    <div class="theme-settings__options-wrapper">
                        <h3 class="themeoptions-heading">Layout Options
                        </h3>
                        <div class="p-3">
                            <ul class="list-group">
                                <li class="list-group-item">
                                    <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left mr-3">
                                                <div class="switch has-switch switch-container-class"
                                                    data-class="fixed-header">
                                                    <div class="switch-animate switch-on">
                                                        <input type="checkbox" checked data-toggle="toggle"
                                                            data-onstyle="success">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="widget-content-left">
                                                <div class="widget-heading">Fixed Header
                                                </div>
                                                <div class="widget-subheading">Makes the header top fixed, always
                                                    visible!
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left mr-3">
                                                <div class="switch has-switch switch-container-class"
                                                    data-class="fixed-sidebar">
                                                    <div class="switch-animate switch-on">
                                                        <input type="checkbox" checked data-toggle="toggle"
                                                            data-onstyle="success">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="widget-content-left">
                                                <div class="widget-heading">Fixed Sidebar
                                                </div>
                                                <div class="widget-subheading">Makes the sidebar left fixed, always
                                                    visible!
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left mr-3">
                                                <div class="switch has-switch switch-container-class"
                                                    data-class="fixed-footer">
                                                    <div class="switch-animate switch-off">
                                                        <input type="checkbox" data-toggle="toggle"
                                                            data-onstyle="success">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="widget-content-left">
                                                <div class="widget-heading">Fixed Footer
                                                </div>
                                                <div class="widget-subheading">Makes the app footer bottom fixed, always
                                                    visible!
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <h3 class="themeoptions-heading">
                            <div>
                                Header Options
                            </div>
                            <button type="button"
                                class="btn-pill btn-shadow btn-wide ml-auto btn btn-focus btn-sm switch-header-cs-class"
                                data-class="">
                                Restore Default
                            </button>
                        </h3>
                        <div class="p-3">
                            <ul class="list-group">
                                <li class="list-group-item">
                                    <h5 class="pb-2">Choose Color Scheme
                                    </h5>
                                    <div class="theme-settings-swatches">
                                        <div class="swatch-holder bg-primary switch-header-cs-class"
                                            data-class="bg-primary header-text-light">
                                        </div>
                                        <div class="swatch-holder bg-secondary switch-header-cs-class"
                                            data-class="bg-secondary header-text-light">
                                        </div>
                                        <div class="swatch-holder bg-success switch-header-cs-class"
                                            data-class="bg-success header-text-dark">
                                        </div>
                                        <div class="swatch-holder bg-info switch-header-cs-class"
                                            data-class="bg-info header-text-dark">
                                        </div>
                                        <div class="swatch-holder bg-warning switch-header-cs-class"
                                            data-class="bg-warning header-text-dark">
                                        </div>
                                        <div class="swatch-holder bg-danger switch-header-cs-class"
                                            data-class="bg-danger header-text-light">
                                        </div>
                                        <div class="swatch-holder bg-light switch-header-cs-class"
                                            data-class="bg-light header-text-dark">
                                        </div>
                                        <div class="swatch-holder bg-dark switch-header-cs-class"
                                            data-class="bg-dark header-text-light">
                                        </div>
                                        <div class="swatch-holder bg-focus switch-header-cs-class"
                                            data-class="bg-focus header-text-light">
                                        </div>
                                        <div class="swatch-holder bg-alternate switch-header-cs-class"
                                            data-class="bg-alternate header-text-light">
                                        </div>
                                        <div class="divider">
                                        </div>
                                        <div class="swatch-holder bg-vicious-stance switch-header-cs-class"
                                            data-class="bg-vicious-stance header-text-light">
                                        </div>
                                        <div class="swatch-holder bg-midnight-bloom switch-header-cs-class"
                                            data-class="bg-midnight-bloom header-text-light">
                                        </div>
                                        <div class="swatch-holder bg-night-sky switch-header-cs-class"
                                            data-class="bg-night-sky header-text-light">
                                        </div>
                                        <div class="swatch-holder bg-slick-carbon switch-header-cs-class"
                                            data-class="bg-slick-carbon header-text-light">
                                        </div>
                                        <div class="swatch-holder bg-asteroid switch-header-cs-class"
                                            data-class="bg-asteroid header-text-light">
                                        </div>
                                        <div class="swatch-holder bg-royal switch-header-cs-class"
                                            data-class="bg-royal header-text-light">
                                        </div>
                                        <div class="swatch-holder bg-warm-flame switch-header-cs-class"
                                            data-class="bg-warm-flame header-text-dark">
                                        </div>
                                        <div class="swatch-holder bg-night-fade switch-header-cs-class"
                                            data-class="bg-night-fade header-text-dark">
                                        </div>
                                        <div class="swatch-holder bg-sunny-morning switch-header-cs-class"
                                            data-class="bg-sunny-morning header-text-dark">
                                        </div>
                                        <div class="swatch-holder bg-tempting-azure switch-header-cs-class"
                                            data-class="bg-tempting-azure header-text-dark">
                                        </div>
                                        <div class="swatch-holder bg-amy-crisp switch-header-cs-class"
                                            data-class="bg-amy-crisp header-text-dark">
                                        </div>
                                        <div class="swatch-holder bg-heavy-rain switch-header-cs-class"
                                            data-class="bg-heavy-rain header-text-dark">
                                        </div>
                                        <div class="swatch-holder bg-mean-fruit switch-header-cs-class"
                                            data-class="bg-mean-fruit header-text-dark">
                                        </div>
                                        <div class="swatch-holder bg-malibu-beach switch-header-cs-class"
                                            data-class="bg-malibu-beach header-text-light">
                                        </div>
                                        <div class="swatch-holder bg-deep-blue switch-header-cs-class"
                                            data-class="bg-deep-blue header-text-dark">
                                        </div>
                                        <div class="swatch-holder bg-ripe-malin switch-header-cs-class"
                                            data-class="bg-ripe-malin header-text-light">
                                        </div>
                                        <div class="swatch-holder bg-arielle-smile switch-header-cs-class"
                                            data-class="bg-arielle-smile header-text-light">
                                        </div>
                                        <div class="swatch-holder bg-plum-plate switch-header-cs-class"
                                            data-class="bg-plum-plate header-text-light">
                                        </div>
                                        <div class="swatch-holder bg-happy-fisher switch-header-cs-class"
                                            data-class="bg-happy-fisher header-text-dark">
                                        </div>
                                        <div class="swatch-holder bg-happy-itmeo switch-header-cs-class"
                                            data-class="bg-happy-itmeo header-text-light">
                                        </div>
                                        <div class="swatch-holder bg-mixed-hopes switch-header-cs-class"
                                            data-class="bg-mixed-hopes header-text-light">
                                        </div>
                                        <div class="swatch-holder bg-strong-bliss switch-header-cs-class"
                                            data-class="bg-strong-bliss header-text-light">
                                        </div>
                                        <div class="swatch-holder bg-grow-early switch-header-cs-class"
                                            data-class="bg-grow-early header-text-light">
                                        </div>
                                        <div class="swatch-holder bg-love-kiss switch-header-cs-class"
                                            data-class="bg-love-kiss header-text-light">
                                        </div>
                                        <div class="swatch-holder bg-premium-dark switch-header-cs-class"
                                            data-class="bg-premium-dark header-text-light">
                                        </div>
                                        <div class="swatch-holder bg-happy-green switch-header-cs-class"
                                            data-class="bg-happy-green header-text-light">
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <h3 class="themeoptions-heading">
                            <div>Sidebar Options</div>
                            <button type="button"
                                class="btn-pill btn-shadow btn-wide ml-auto btn btn-focus btn-sm switch-sidebar-cs-class"
                                data-class="">
                                Restore Default
                            </button>
                        </h3>
                        <div class="p-3">
                            <ul class="list-group">
                                <li class="list-group-item">
                                    <h5 class="pb-2">Choose Color Scheme
                                    </h5>
                                    <div class="theme-settings-swatches">
                                        <div class="swatch-holder bg-primary switch-sidebar-cs-class"
                                            data-class="bg-primary sidebar-text-light">
                                        </div>
                                        <div class="swatch-holder bg-secondary switch-sidebar-cs-class"
                                            data-class="bg-secondary sidebar-text-light">
                                        </div>
                                        <div class="swatch-holder bg-success switch-sidebar-cs-class"
                                            data-class="bg-success sidebar-text-dark">
                                        </div>
                                        <div class="swatch-holder bg-info switch-sidebar-cs-class"
                                            data-class="bg-info sidebar-text-dark">
                                        </div>
                                        <div class="swatch-holder bg-warning switch-sidebar-cs-class"
                                            data-class="bg-warning sidebar-text-dark">
                                        </div>
                                        <div class="swatch-holder bg-danger switch-sidebar-cs-class"
                                            data-class="bg-danger sidebar-text-light">
                                        </div>
                                        <div class="swatch-holder bg-light switch-sidebar-cs-class"
                                            data-class="bg-light sidebar-text-dark">
                                        </div>
                                        <div class="swatch-holder bg-dark switch-sidebar-cs-class"
                                            data-class="bg-dark sidebar-text-light">
                                        </div>
                                        <div class="swatch-holder bg-focus switch-sidebar-cs-class"
                                            data-class="bg-focus sidebar-text-light">
                                        </div>
                                        <div class="swatch-holder bg-alternate switch-sidebar-cs-class"
                                            data-class="bg-alternate sidebar-text-light">
                                        </div>
                                        <div class="divider">
                                        </div>
                                        <div class="swatch-holder bg-vicious-stance switch-sidebar-cs-class"
                                            data-class="bg-vicious-stance sidebar-text-light">
                                        </div>
                                        <div class="swatch-holder bg-midnight-bloom switch-sidebar-cs-class"
                                            data-class="bg-midnight-bloom sidebar-text-light">
                                        </div>
                                        <div class="swatch-holder bg-night-sky switch-sidebar-cs-class"
                                            data-class="bg-night-sky sidebar-text-light">
                                        </div>
                                        <div class="swatch-holder bg-slick-carbon switch-sidebar-cs-class"
                                            data-class="bg-slick-carbon sidebar-text-light">
                                        </div>
                                        <div class="swatch-holder bg-asteroid switch-sidebar-cs-class"
                                            data-class="bg-asteroid sidebar-text-light">
                                        </div>
                                        <div class="swatch-holder bg-royal switch-sidebar-cs-class"
                                            data-class="bg-royal sidebar-text-light">
                                        </div>
                                        <div class="swatch-holder bg-warm-flame switch-sidebar-cs-class"
                                            data-class="bg-warm-flame sidebar-text-dark">
                                        </div>
                                        <div class="swatch-holder bg-night-fade switch-sidebar-cs-class"
                                            data-class="bg-night-fade sidebar-text-dark">
                                        </div>
                                        <div class="swatch-holder bg-sunny-morning switch-sidebar-cs-class"
                                            data-class="bg-sunny-morning sidebar-text-dark">
                                        </div>
                                        <div class="swatch-holder bg-tempting-azure switch-sidebar-cs-class"
                                            data-class="bg-tempting-azure sidebar-text-dark">
                                        </div>
                                        <div class="swatch-holder bg-amy-crisp switch-sidebar-cs-class"
                                            data-class="bg-amy-crisp sidebar-text-dark">
                                        </div>
                                        <div class="swatch-holder bg-heavy-rain switch-sidebar-cs-class"
                                            data-class="bg-heavy-rain sidebar-text-dark">
                                        </div>
                                        <div class="swatch-holder bg-mean-fruit switch-sidebar-cs-class"
                                            data-class="bg-mean-fruit sidebar-text-dark">
                                        </div>
                                        <div class="swatch-holder bg-malibu-beach switch-sidebar-cs-class"
                                            data-class="bg-malibu-beach sidebar-text-light">
                                        </div>
                                        <div class="swatch-holder bg-deep-blue switch-sidebar-cs-class"
                                            data-class="bg-deep-blue sidebar-text-dark">
                                        </div>
                                        <div class="swatch-holder bg-ripe-malin switch-sidebar-cs-class"
                                            data-class="bg-ripe-malin sidebar-text-light">
                                        </div>
                                        <div class="swatch-holder bg-arielle-smile switch-sidebar-cs-class"
                                            data-class="bg-arielle-smile sidebar-text-light">
                                        </div>
                                        <div class="swatch-holder bg-plum-plate switch-sidebar-cs-class"
                                            data-class="bg-plum-plate sidebar-text-light">
                                        </div>
                                        <div class="swatch-holder bg-happy-fisher switch-sidebar-cs-class"
                                            data-class="bg-happy-fisher sidebar-text-dark">
                                        </div>
                                        <div class="swatch-holder bg-happy-itmeo switch-sidebar-cs-class"
                                            data-class="bg-happy-itmeo sidebar-text-light">
                                        </div>
                                        <div class="swatch-holder bg-mixed-hopes switch-sidebar-cs-class"
                                            data-class="bg-mixed-hopes sidebar-text-light">
                                        </div>
                                        <div class="swatch-holder bg-strong-bliss switch-sidebar-cs-class"
                                            data-class="bg-strong-bliss sidebar-text-light">
                                        </div>
                                        <div class="swatch-holder bg-grow-early switch-sidebar-cs-class"
                                            data-class="bg-grow-early sidebar-text-light">
                                        </div>
                                        <div class="swatch-holder bg-love-kiss switch-sidebar-cs-class"
                                            data-class="bg-love-kiss sidebar-text-light">
                                        </div>
                                        <div class="swatch-holder bg-premium-dark switch-sidebar-cs-class"
                                            data-class="bg-premium-dark sidebar-text-light">
                                        </div>
                                        <div class="swatch-holder bg-happy-green switch-sidebar-cs-class"
                                            data-class="bg-happy-green sidebar-text-light">
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <h3 class="themeoptions-heading">
                            <div>Main Content Options</div>
                            <button type="button"
                                class="btn-pill btn-shadow btn-wide ml-auto active btn btn-focus btn-sm">Restore Default
                            </button>
                        </h3>
                        <div class="p-3">
                            <ul class="list-group">
                                <li class="list-group-item">
                                    <h5 class="pb-2">Page Section Tabs
                                    </h5>
                                    <div class="theme-settings-swatches">
                                        <div role="group" class="mt-2 btn-group">
                                            <button type="button"
                                                class="btn-wide btn-shadow btn-primary btn btn-secondary switch-theme-class"
                                                data-class="body-tabs-line">
                                                Line
                                            </button>
                                            <button type="button"
                                                class="btn-wide btn-shadow btn-primary active btn btn-secondary switch-theme-class"
                                                data-class="body-tabs-shadow">
                                                Shadow
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="app-main">
            <div class="app-sidebar sidebar-shadow">
                <div class="app-header__logo">
                    <div class="logo-src"></div>
                    <div class="header__pane ml-auto">
                        <div>
                            <button type="button" class="hamburger close-sidebar-btn hamburger--elastic"
                                data-class="closed-sidebar">
                                <span class="hamburger-box">
                                    <span class="hamburger-inner"></span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="app-header__mobile-menu">
                    <div>
                        <button type="button" class="hamburger hamburger--elastic mobile-toggle-nav">
                            <span class="hamburger-box">
                                <span class="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                </div>
                <div class="app-header__menu">
                    <span>
                        <button type="button"
                            class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                            <span class="btn-icon-wrapper">
                                <i class="fa fa-ellipsis-v fa-w-6"></i>
                            </span>
                        </button>
                    </span>
                </div>
                <div class="scrollbar-sidebar">
                    <div class="app-sidebar__inner">
                        <ul class="vertical-nav-menu">
                            <li class="app-sidebar__heading">Dashboards</li>
                            <li>
                                <a href="index" class="mm-active">

                                    CSRI
                                </a>
                            </li>
                            <li class="app-sidebar__heading">Assessments Details</li>
                            <li>


                            <li>
                                <a href="identify">
                                    <i class="metismenu-icon"></i>
                                    Identify
                                </a>
                            </li>
                            <li>
                                <a href="protect">
                                    <i class="metismenu-icon">
                                    </i>Protect
                                </a>
                            </li>
                            <li>
                                <a href="detect">
                                    <i class="">
                                    </i>Detect
                                </a>
                            </li>
                            <li>
                                <a href="respond">
                                    <i class="metismenu-icon">
                                    </i>Respond
                                </a>
                            </li>
                            <li>
                                <a href="recovery">
                                    <i class="metismenu-icon">
                                    </i>Recovery
                                </a>
                            </li>

                    </div>
                </div>
            </div>
            <div class="app-main__outer">
                <div class="app-main__inner">
                    <div class="app-page-title">
                        <div class="page-title-wrapper">
                            <div class="page-title-heading">
                                <div>CSRI Dashboard
                                  <div class="text-center">
                                  <h1 class="bg-success">RECOMMENDATIONS</h1>
                                  </div>
                                  <div class="row">
                                    <div class="col text-center">
                                      <div class="card">
                                        <div class="card-body" style="display:none" id="idiv1">
                                          <p class="card-text" id="i1"></p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col text-center">
                                      <div class="card">
                                        <div class="card-body" style="display:none" id="idiv2">
                                          <p class="card-text" id="i2"></p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col text-center">
                                      <div class="card">
                                        <div class="card-body" style="display:none" id="idiv3">
                                          <p class="card-text" id="i3"></p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col text-center">
                                      <div class="card">
                                        <div class="card-body" style="display:none" id="idiv4">
                                          <p class="card-text" id="i4"></p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col text-center">
                                      <div class="card">
                                        <div class="card-body" style="display:none" id="idiv5">
                                          <p class="card-text" id="i5"></p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
									                <div class="row">
                                    <div class="col text-center">
                                      <div class="card">
                                        <div class="card-body" style="display:none" id="idiv6">
                                          <p class="card-text" id="i6"></p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col text-center">
                                      <div class="card">
                                        <div class="card-body" style="display:none" id="idiv7">
                                          <p class="card-text" id="i7"></p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col text-center">
                                      <div class="card">
                                        <div class="card-body" style="display:none" id="idiv8">
                                          <p class="card-text" id="i8"></p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col text-center">
                                      <div class="card">
                                        <div class="card-body" style="display:none" id="idiv9">
                                          <p class="card-text" id="i9"></p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col text-center">
                                      <div class="card">
                                        <div class="card-body" style="display:none" id="idiv10">
                                          <p class="card-text" id="i10"></p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col text-center">
                                      <div class="card">
                                        <div class="card-body" style="display:none" id="idiv11">
                                          <p class="card-text" id="i11"></p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col text-center">
                                      <div class="card">
                                        <div class="card-body" style="display:none" id="idiv12">
                                          <p class="card-text" id="i12"></p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col text-center">
                                      <div class="card">
                                        <div class="card-body" style="display:none" id="idiv13">
                                          <p class="card-text" id="i13"></p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col text-center">
                                      <div class="card">
                                        <div class="card-body" style="display:none" id="idiv14">
                                          <p class="card-text" id="i14"></p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col text-center">
                                      <div class="card">
                                        <div class="card-body" style="display:none" id="idiv15">
                                          <p class="card-text" id="i15"></p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col text-center">
                                      <div class="card">
                                        <div class="card-body" style="display:none" id="idiv16">
                                          <p class="card-text" id="i16"></p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col text-center">
                                      <div class="card">
                                        <div class="card-body" style="display:none" id="idiv17">
                                          <p class="card-text" id="i17"></p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col text-center">
                                      <div class="card">
                                        <div class="card-body" style="display:none" id="idiv18">
                                          <p class="card-text" id="i18"></p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col text-center">
                                      <div class="card">
                                        <div class="card-body" style="display:none" id="idiv19">
                                          <p class="card-text" id="i19"></p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col text-center">
                                      <div class="card">
                                        <div class="card-body" style="display:none" id="idiv20">
                                          <p class="card-text" id="i20"></p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                      </div>
                            <div class="page-title-actions">
                                <div tabindex="-1" role="menu" aria-hidden="true"
                                    class="dropdown-menu dropdown-menu-right">
                                    <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a href="javascript:void(0);" class="nav-link">
                                                <i class="nav-link-icon lnr-inbox"></i>
                                                <span>
                                                    Inbox
                                                </span>
                                                <div class="ml-auto badge badge-pill badge-secondary">86</div>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="javascript:void(0);" class="nav-link">
                                                <i class="nav-link-icon lnr-book"></i>
                                                <span>
                                                    Book
                                                </span>
                                                <div class="ml-auto badge badge-pill badge-danger">5</div>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="javascript:void(0);" class="nav-link">
                                                <i class="nav-link-icon lnr-picture"></i>
                                                <span>
                                                    Picture
                                                </span>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a disabled href="javascript:void(0);" class="nav-link disabled">
                                                <i class="nav-link-icon lnr-file-empty"></i>
                                                <span>
                                                    File Disabled
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
        <script src="http://maps.google.com/maps/api/js?sensor=true"></script>
    </div>
    </div>
    <script type="text/javascript" src="./assets/scripts/main.js"></script>
    <script src="js/jquery.min.js"></script>
    <script>
    $.post("http://localhost:7000/recommendations", null, function(response) {
	if(response.rec!=undefined){
	document.getElementById('i1').innerHTML=response.rec;
	document.getElementById('idiv1').style="display:block";
	}
	else if(response.error == undefined) {
	if(response.rec1._id!=undefined && response.rec1.rec!=undefined && response.rec4._id!=undefined && response.rec4.rec!=undefined && response.rec7._id!=undefined && response.rec7.rec!=undefined && response.rec10._id!=undefined && response.rec10.rec!=undefined && response.rec13._id!=undefined && response.rec13.rec!=undefined){
	  document.getElementById('i1').innerHTML="<b>" + response.rec1._id + "</b>";
		document.getElementById('idiv1').style="display:block";
    document.getElementById('i2').innerHTML="<b>SHORT TERM: </b>" + response.rec1.rec;
		document.getElementById('idiv2').style="display:block";
    document.getElementById('i3').innerHTML="<b>MEDIUM TERM: </b>" + response.rec2.rec;
		document.getElementById('idiv3').style="display:block";
		document.getElementById('i4').innerHTML="<b>LONG TERM: </b>" + response.rec3.rec;
		document.getElementById('idiv4').style="display:block";
		document.getElementById('i5').innerHTML="<b>" + response.rec4._id + "</b>";
		document.getElementById('idiv5').style="display:block";
    document.getElementById('i6').innerHTML="<b>SHORT TERM: </b>" + response.rec4.rec;
		document.getElementById('idiv6').style="display:block";
    document.getElementById('i7').innerHTML="<b>MEDIUM TERM: </b>" + response.rec5.rec;
		document.getElementById('idiv7').style="display:block";
    document.getElementById('i8').innerHTML="<b>LONG TERM: </b>" + response.rec6.rec;
		document.getElementById('idiv8').style="display:block";
		document.getElementById('i9').innerHTML="<b>" + response.rec7._id + "</b>";
		document.getElementById('idiv9').style="display:block";
    document.getElementById('i10').innerHTML="<b>SHORT TERM: </b>" + response.rec7.rec;
		document.getElementById('idiv10').style="display:block";
		document.getElementById('i11').innerHTML="<b>MEDIUM TERM: </b>" + response.rec8.rec;
		document.getElementById('idiv11').style="display:block";
    document.getElementById('i12').innerHTML="<b>LONG TERM: </b>" + response.rec9.rec;
		document.getElementById('idiv12').style="display:block";
		document.getElementById('i13').innerHTML="<b>" + response.rec10._id + "</b>";
		document.getElementById('idiv13').style="display:block";
    document.getElementById('i14').innerHTML="<b>SHORT TERM: </b>" + response.rec10.rec;
		document.getElementById('idiv14').style="display:block";
    document.getElementById('i15').innerHTML="<b>MEDIUM TERM: </b>" + response.rec11.rec;
		document.getElementById('idiv15').style="display:block";
    document.getElementById('i16').innerHTML="<b>LONG TERM: </b>" + response.rec12.rec;
		document.getElementById('idiv16').style="display:block";
		document.getElementById('i17').innerHTML="<b>" + response.rec13._id + "</b>";
		document.getElementById('idiv17').style="display:block";
		document.getElementById('i18').innerHTML="<b>SHORT TERM: </b>" + response.rec13.rec;
		document.getElementById('idiv18').style="display:block";
    document.getElementById('i19').innerHTML="<b>MEDIUM TERM: </b>" + response.rec14.rec;
		document.getElementById('idiv19').style="display:block";
    document.getElementById('i20').innerHTML="<b>LONG TERM: </b>" + response.rec15.rec;
		document.getElementById('idiv20').style="display:block";
	}else if(response.rec1._id==undefined && response.rec1.rec==undefined && response.rec4._id!=undefined && response.rec4.rec!=undefined && response.rec7._id!=undefined && response.rec7.rec!=undefined && response.rec10._id!=undefined && response.rec10.rec!=undefined && response.rec13._id!=undefined && response.rec13.rec!=undefined){
    document.getElementById('i1').innerHTML="<b>" + response.rec4._id + "</b>";
		document.getElementById('idiv1').style="display:block";
    document.getElementById('i2').innerHTML="<b>SHORT TERM: </b>" + response.rec4.rec;
		document.getElementById('idiv2').style="display:block";
    document.getElementById('i3').innerHTML="<b>MEDIUM TERM: </b>" + response.rec5.rec;
		document.getElementById('idiv3').style="display:block";
    document.getElementById('i4').innerHTML="<b>LONG TERM: </b>" + response.rec6.rec;
		document.getElementById('idiv4').style="display:block";
		document.getElementById('i5').innerHTML="<b>" + response.rec7._id + "</b>";
		document.getElementById('idiv5').style="display:block";
    document.getElementById('i6').innerHTML="<b>SHORT TERM: </b>" + response.rec7.rec;
		document.getElementById('idiv6').style="display:block";
		document.getElementById('i7').innerHTML="<b>MEDIUM TERM: </b>" + response.rec8.rec;
		document.getElementById('idiv7').style="display:block";
    document.getElementById('i8').innerHTML="<b>LONG TERM: </b>" + response.rec9.rec;
		document.getElementById('idiv8').style="display:block";
		document.getElementById('i9').innerHTML="<b>" + response.rec10._id + "</b>";
		document.getElementById('idiv9').style="display:block";
    document.getElementById('i10').innerHTML="<b>SHORT TERM: </b>" + response.rec10.rec;
		document.getElementById('idiv10').style="display:block";
    document.getElementById('i11').innerHTML="<b>MEDIUM TERM: </b>" + response.rec11.rec;
		document.getElementById('idiv11').style="display:block";
    document.getElementById('i12').innerHTML="<b>LONG TERM: </b>" + response.rec12.rec;
		document.getElementById('idiv12').style="display:block";
		document.getElementById('i13').innerHTML="<b>" + response.rec13._id + "</b>";
		document.getElementById('idiv13').style="display:block";
		document.getElementById('i14').innerHTML="<b>SHORT TERM: </b>" + response.rec13.rec;
		document.getElementById('idiv14').style="display:block";
    document.getElementById('i15').innerHTML="<b>MEDIUM TERM: </b>" + response.rec14.rec;
		document.getElementById('idiv15').style="display:block";
    document.getElementById('i16').innerHTML="<b>LONG TERM: </b>" + response.rec15.rec;
		document.getElementById('idiv16').style="display:block";
	} else if(response.rec1._id==undefined && response.rec1.rec==undefined && response.rec4._id==undefined && response.rec4.rec==undefined && response.rec7._id!=undefined && response.rec7.rec!=undefined && response.rec10._id!=undefined && response.rec10.rec!=undefined && response.rec13._id!=undefined && response.rec13.rec!=undefined){
    document.getElementById('i1').innerHTML="<b>" + response.rec7._id + "</b>";
		document.getElementById('idiv1').style="display:block";
    document.getElementById('i2').innerHTML="<b>SHORT TERM: </b>" + response.rec7.rec;
		document.getElementById('idiv2').style="display:block";
		document.getElementById('i3').innerHTML="<b>MEDIUM TERM: </b>" + response.rec8.rec;
		document.getElementById('idiv3').style="display:block";
    document.getElementById('i4').innerHTML="<b>LONG TERM: </b>" + response.rec9.rec;
		document.getElementById('idiv4').style="display:block";
		document.getElementById('i5').innerHTML="<b>" + response.rec10._id + "</b>";
		document.getElementById('idiv5').style="display:block";
    document.getElementById('i6').innerHTML="<b>SHORT TERM: </b>" + response.rec10.rec;
		document.getElementById('idiv6').style="display:block";
    document.getElementById('i7').innerHTML="<b>MEDIUM TERM: </b>" + response.rec11.rec;
		document.getElementById('idiv7').style="display:block";
    document.getElementById('i8').innerHTML="<b>LONG TERM: </b>" + response.rec12.rec;
		document.getElementById('idiv8').style="display:block";
		document.getElementById('i9').innerHTML="<b>" + response.rec13._id + "</b>";
		document.getElementById('idiv9').style="display:block";
		document.getElementById('i10').innerHTML="<b>SHORT TERM: </b>" + response.rec13.rec;
		document.getElementById('idiv10').style="display:block";
    document.getElementById('i11').innerHTML="<b>MEDIUM TERM: </b>" + response.rec14.rec;
		document.getElementById('idiv11').style="display:block";
    document.getElementById('i12').innerHTML="<b>LONG TERM: </b>" + response.rec15.rec;
		document.getElementById('idiv12').style="display:block";
	} else if(response.rec1._id==undefined && response.rec1.rec==undefined && response.rec4._id==undefined && response.rec4.rec==undefined && response.rec7._id==undefined && response.rec7.rec==undefined && response.rec10._id!=undefined && response.rec10.rec!=undefined && response.rec13._id!=undefined && response.rec13.rec!=undefined){
    document.getElementById('i1').innerHTML="<b>" + response.rec10._id + "</b>";
		document.getElementById('idiv1').style="display:block";
    document.getElementById('i2').innerHTML="<b>SHORT TERM: </b>" + response.rec10.rec;
		document.getElementById('idiv2').style="display:block";
    document.getElementById('i3').innerHTML="<b>MEDIUM TERM: </b>" + response.rec11.rec;
		document.getElementById('idiv3').style="display:block";
    document.getElementById('i4').innerHTML="<b>LONG TERM: </b>" + response.rec12.rec;
		document.getElementById('idiv4').style="display:block";
		document.getElementById('i5').innerHTML="<b>" + response.rec13._id + "</b>";
		document.getElementById('idiv5').style="display:block";
		document.getElementById('i6').innerHTML="<b>SHORT TERM: </b>" + response.rec13.rec;
		document.getElementById('idiv6').style="display:block";
    document.getElementById('i7').innerHTML="<b>MEDIUM TERM: </b>" + response.rec14.rec;
		document.getElementById('idiv7').style="display:block";
    document.getElementById('i8').innerHTML="<b>LONG TERM: </b>" + response.rec15.rec;
		document.getElementById('idiv8').style="display:block";
	} else if(response.rec1._id==undefined && response.rec1.rec==undefined && response.rec4._id==undefined && response.rec4.rec==undefined && response.rec7._id==undefined && response.rec7.rec==undefined && response.rec10._id==undefined && response.rec10.rec==undefined && response.rec13._id!=undefined && response.rec13.rec!=undefined ){
    document.getElementById('i1').innerHTML="<b>" + response.rec13._id + "</b>";
		document.getElementById('idiv1').style="display:block";
		document.getElementById('i2').innerHTML="<b>SHORT TERM: </b>" + response.rec13.rec;
		document.getElementById('idiv2').style="display:block";
    document.getElementById('i3').innerHTML="<b>MEDIUM TERM: </b>" + response.rec14.rec;
		document.getElementById('idiv3').style="display:block";
    document.getElementById('i4').innerHTML="<b>LONG TERM: </b>" + response.rec15.rec;
		document.getElementById('idiv4').style="display:block";
	}
    } else {
  			showError(response.error)
  		}
  	});
  </script>

</html>
