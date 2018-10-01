import React from 'react'
import ReactDOM from 'react-dom'


import Menu from './components/menu/Menu'
import Content from './components/content/Content'

ReactDOM.render(
  <div className="app">
    <Menu />
    <Content />
  </div>, 
  document.getElementById("root"))






var menu_selector = ".menu_items"; 

function onScroll(){
    var scroll_top = $(document).scrollTop();
    $(menu_selector + " a").each(function(){
        var hash = $(this).attr("href");
        var target = $(hash);
        if (target.position().top <= scroll_top && target.position().top + 
        target.outerHeight() > scroll_top) {
            $(menu_selector + " a.menu_item-active").removeClass("menu_item-active");
            $(this).addClass("menu_item-active");
        } else {
            $(this).removeClass("menu_item-active");
        }
    });
}

function onResize(){
  if ($(menu_selector).height() <= 380)
    $(menu_selector).css('overflow-y', 'scroll');
  else
    $(menu_selector).css('overflow-y', 'visible');
}

$(document).ready(function () {
    onResize();
    $(document).on("scroll", onScroll);
    $(window).on("resize", onResize);

    $(".menu_items a").click(function(e){
        e.preventDefault();
        var size = window.innerWidth  <= 850 ? true : false;
        $(document).off("scroll");
        $(menu_selector + " a.menu_item-active").removeClass("menu_item-active");
        $(this).addClass("menu_item-active");
        var hash = $(this).attr("href");
        var target = $(hash);
        var tempCoord = Number(target.offset().top);
        tempCoord -= (size) ? 52 : 0;
        //alert(target.offset().top + " : " + tempCoord + " : " + size + " : " +  window.innerWidth);
        $("html, body").animate({
            scrollTop: tempCoord
        }, 500, function(){
            $("html, body").scrollTop(tempCoord);
            window.location.hash = hash;
            $(document).on("scroll", onScroll);
        });
    });
});
  