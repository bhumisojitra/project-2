let season = 1;

switch(season){
    case 1:
    case 2:
    case 3:
    case 4:
        document.write("<p style='font-size: 25px;'>-WINTER-</p>");
        document.querySelector('.winter').innerHTML = '<img src="img/winter.jpg">';

        break;
    case 5:
    case 6:
    case 7:
    case 8: 
        document.write("<p style='font-size: 25px;'>-SUMMER-</p>");
        document.querySelector('.winter').innerHTML = '<img src="img/summer.webp">';
        break;  
    case 9:
    case 10:
    case 11:
    case 12: 
        document.write("<p style='font-size: 25px;'>-MONSOON-</p>");
        document.querySelector('.winter').innerHTML = '<img src="img/monsoon.webp">';
        break;

    default:
        document.write("<p style='font-size: 25px;'>Enter valid season-</p>"); 
}