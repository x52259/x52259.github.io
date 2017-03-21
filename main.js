/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 function main() {
	//$('.navComparison').hide();
	//$('.navJava').hide();
	$('.navigationbar').load('navBar.html');
    //$('.navHome').onClick()
    //var navHome = document.getElementsByClassName('.navHome');
    //navHome.addClass('.navActive');
    $('h2').addClass('sectionButton');
    $('.sectionButton').click(function () {
    	$(this).next().toggle('displayToggle');
    });

}

$(document).ready(main);
