import '../css/fontawesome-all.min.css';
import '../css/bootstrap.min.css';
import '../css/magnific-popup.css';
import '../slick/slick.css';
import '../slick/slick-theme.css';
import '../slick/slick.min.js';
import '../css/tooplate-style.css';
import Chart from 'chart.js/auto';

//first, we load jQuery and define at as a global
import './jqueryImport'
// the $ symbol should be also loaded in our current scope
import $ from "jquery"
//finally, we load all plugins for jQuery
import 'magnific-popup'
import 'jquery-backstretch'
import 'slick-carousel'



const { MyfxbookApi } = require('myfxbook-api-client');
const client = new MyfxbookApi({ email: 'asiscrus.muratyazici@gmail.com', password: '53575357My' });

client
    .getDailyGain(9315996, '2021-11-10', '2021-12-02')
    .then(data => {
        console.log(data.dailyGain);
    })
    .catch(error => {
        console.log('error', error);
    });

var data1 = [];
var data2 = [];
var n = console.log(data.dailyGain.length);

for (let x = 0; x < n; x++){
    data1.push([
        {
            date:data.dailyGain[x][0], //x-axis
            grow_rate:data.dailyGain[x][1] //y-axis
        }
    ]);
    data2.push([
        {
            date:data.dailyGain[x][0], //x-axis
            grow_rate:data.dailyGain[x][2] //y-axis
        }
    ])
}

document.addEventListener('DOMContentLoaded', setup())
function setup(){

    var sidebarVisible = false;
    var currentPageID = "#tm-section-1";

    // Setup Carousel
    function setupCarousel() {

        // If current page isn't Carousel page, don't do anything.
        if($('#tm-section-2').css('display') == "none") {
        }
        else {	// If current page is Carousel page, set up the Carousel.

            var slider = $('.tm-img-slider');
            var windowWidth = $(window).width();

            if (slider.hasClass('slick-initialized')) {
                slider.slick('destroy');
            }

            if(windowWidth < 640) {
                slider.slick({
                    dots: true,
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                });
            }
            else if(windowWidth < 992) {
                slider.slick({
                    dots: true,
                    infinite: false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                });
            }
            else {
                // Slick carousel
                slider.slick({
                    dots: true,
                    infinite: false,
                    slidesToShow: 3,
                    slidesToScroll: 2
                });
            }

            // Init Magnific Popup
            $('.tm-img-slider').magnificPopup({
                delegate: 'a', // child items selector, by clicking on it popup will open
                type: 'image',
                gallery: {enabled:true}
                // other options
            });
        }
    }

    // Setup Nav
    function setupNav() {
        // Add Event Listener to each Nav item
        $(".tm-main-nav a").click(function(e){
            e.preventDefault();

            var currentNavItem = $(this);
            changePage(currentNavItem);

            setupCarousel();
            setupFooter();

            // Hide the nav on mobile
            $("#tmSideBar").removeClass("show");
        });
    }

    function changePage(currentNavItem) {
        // Update Nav items
        $(".tm-main-nav a").removeClass("active");
        currentNavItem.addClass("active");

        $(currentPageID).hide();

        // Show current page
        currentPageID = currentNavItem.data("page");
        $(currentPageID).fadeIn(1000);

        // Change background image
        var bgImg = currentNavItem.data("bgImg");
        $.backstretch("img/" + bgImg);
    }

    // Setup Nav Toggle Button
    function setupNavToggle() {

        $("#tmMainNavToggle").on("click", function(){
            $(".sidebar").toggleClass("show");
        });
    }

    // If there is enough room, stick the footer at the bottom of page content.
    // If not, place it after the page content
    function setupFooter() {

        var padding = 100;
        var footerPadding = 40;
        var mainContent = $("section"+currentPageID);
        var mainContentHeight = mainContent.outerHeight(true);
        var footer = $(".footer-link");
        var footerHeight = footer.outerHeight(true);
        var totalPageHeight = mainContentHeight + footerHeight + footerPadding + padding;
        var windowHeight = $(window).height();

        if(totalPageHeight > windowHeight){
            $(".tm-content").css("margin-bottom", footerHeight + footerPadding + "px");
            footer.css("bottom", footerHeight + "px");
        }
        else {
            $(".tm-content").css("margin-bottom", "0");
            footer.css("bottom", "20px");
        }
    }

    // Everything is loaded including images.
    $(window).on("load", function(){

        // Remove loader
        $('body').addClass('loaded');

        // Page transition
        var allPages = $(".tm-section");

        // Handle click of "Continue", which changes to next page
        // The link contains data-nav-link attribute, which holds the nav item ID
        // Nav item ID is then used to access and trigger click on the corresponding nav item
        var linkToAnotherPage = $("a.tm-btn[data-nav-link]");

        if(linkToAnotherPage != null) {

            linkToAnotherPage.on("click", function(){
                var navItemToHighlight = linkToAnotherPage.data("navLink");
                $("a" + navItemToHighlight).click();
            });
        }

        // Hide all pages
        allPages.hide();

        $("#tm-section-1").fadeIn();

        // Set up background first page
        var bgImg = $("#tmNavLink1").data("bgImg");

        $.backstretch("img/" + bgImg, {fade: 500});

        // Setup Carousel, Nav, and Nav Toggle
        setupCarousel();
        setupNav();
        setupNavToggle();
        setupFooter();

        // Resize Carousel upon window resize
        $(window).resize(function() {
            setupCarousel();
            setupFooter();
        });

    });

}

document.getElementById("bar-chart", loadBarChart(data))
function loadBarChart(data2) {
    var barChart = new Chart(barChart, {
        type: "bar",
        data: {
            labels: data.map((d) => d.level), //x-axis data
            datasets: [
                {
                    label: "Daily Growth USD",
                    data: data.map((d) => d.experience), //y-axis data
                    backgroundColor: "rgba(255, 159, 64, 0.5)", //yellow
                    borderColor: "rgba(255, 159, 64, 1)",
                    borderWidth: 1,
                }
            ],
        }
    });
}

document.getElementById("growth-chart", loadLineChart(data))
function loadLineChart(data1) {
    var growthChart = new Chart(growthChart, {
        type: "line",
        data: {
            labels: data.map((d) => d.level), //x-axis data
            datasets: [
                {
                    label: "Growth Rate",
                    data: data.map((d) => d.experience), //y-axis data
                    backgroundColor: "rgba(153, 102, 255, 0.5)",
                    borderColor: "rgba(153, 102, 255, 1)",
                    borderWidth: 1,
                }
            ],
        }
    });
}
