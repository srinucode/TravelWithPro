import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import revealOnScroll from './modules/revealOnScroll';
import stickyHeader from './modules/stickyHeader';
import modal from './modules/modal';

var mobileMenu = new MobileMenu();
new revealOnScroll($(".feature-items"),"65%");
new revealOnScroll($(".testimonial"),"60%");

var stickyHeaderObj = new stickyHeader();
var modalObj = new modal();




