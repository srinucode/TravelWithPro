import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import revealOnScroll from './modules/revealOnScroll';

var mobileMenu = new MobileMenu();
new revealOnScroll($(".feature-items"),"85%");
new revealOnScroll($(".testimonial"),"60%");