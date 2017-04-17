/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 function main() {
	$('.navigationbar').load('../navBar.html');
    $('h2').addClass('sectionButton');
    $('.sectionButton').click(function () {
        $(this).next().toggle('displayToggle');
    });  

    //var navPython = document.getElementsByClassName('.navPython');
    //$('li.navPython').css({"border":"2px solid red"});
}

$(document).ready(main);

