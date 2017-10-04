/**
 * Created by daniramirezescudero on 04/05/2017.
 */

(function(){
    'use strict';

        var menuButton = document.querySelector('[data-btn-menu-mobile]');
        var closeMenu = document.querySelector('[data-btn-close-menu]');
        var header = document.querySelector('[data-header]');
        var menu = document.querySelector('[data-menu]');

        menuButton.addEventListener('click', function() {
            /* do stuff here*/
            menu.classList.toggle('fade-in');
        }, false);

        document.querySelector('[data-btn-close-menu]').addEventListener('click', function() {
            /* do stuff here*/
            menu.classList.remove('fade-in');
        }, false);





    // var homeHeaderLink = document.querySelector('[data-more-button-intro]');

    // $("a.button").hover(function() {
    //     $(this).siblings("h1").addClass("your_color_class");
    // }, function() {
    //     $(this).siblings("h1").removeClass("your_color_class");
    // });

}());