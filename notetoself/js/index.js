var headID = document.getElementsByTagName("head")[0];         
var cssNode = document.createElement('link');
var mousewidth = 15;
cssNode.type = 'text/css';
cssNode.rel = 'stylesheet';
cssNode.media = 'screen';
headID.appendChild(cssNode);


var image = new Image();

image.onLoad = function() {


}

image.src="http://s16.postimg.org/o3fq9yfsl/Cursor.png";

image.style.position = "absolute";
image.style.top = "0";
image.style.left = "0";
image.style.zIndex = "999999";


var body = document.getElementsByTagName("body")[0];

body.appendChild(image);

document.onmousemove = function(e) {
    image.style.top = e.clientY + (window.pageYOffset || document.documentElement.scrollTop) + "px";
    image.style.left = (e.clientX  + 2) + "px";
}





    function pickimg(){
    var imagenumber = 123 ;
    var randomnumber = Math.random() ;
    var rand1 = Math.round( (imagenumber-1) * randomnumber) + 1;
    images = new Array
    images[1] = "img/note/1.PNG"
    images[2] = "img/note/2.PNG"
    images[3] = "img/note/3.PNG"
    images[4] = "img/note/4.PNG"
    images[5] = "img/note/5.PNG"
    images[6] = "img/note/6.PNG"
    images[7] = "img/note/7.PNG"
    images[8] = "img/note/8.PNG"
    images[9] = "img/note/9.PNG"
    images[10] = "img/note/10.PNG"
    images[11] = "img/note/11.PNG"
    images[12] = "img/note/12.PNG"
    images[13] = "img/note/13.PNG"
    images[14] = "img/note/14.PNG"
    images[15] = "img/note/15.PNG"
    images[16] = "img/note/16.PNG"
    images[17] = "img/note/17.PNG"
    images[18] = "img/note/18.PNG"
    images[19] = "img/note/19.PNG"
    images[20] = "img/note/20.PNG"
    images[21] = "img/note/21.PNG"
    images[22] = "img/note/22.PNG"
    images[23] = "img/note/23.PNG"
    images[24] = "img/note/24.PNG"
    images[25] = "img/note/25.PNG"
    images[26] = "img/note/26.PNG"
    images[27] = "img/note/27.PNG"
    images[28] = "img/note/28.PNG"
    images[29] = "img/note/29.PNG"
    images[30] = "img/note/30.PNG"
    images[31] = "img/note/31.PNG"
    images[32] = "img/note/32.PNG"
    images[33] = "img/note/33.PNG"
    images[34] = "img/note/34.PNG"
    images[35] = "img/note/35.PNG"
    images[36] = "img/note/36.PNG"
    images[37] = "img/note/37.PNG"
    images[38] = "img/note/38.PNG"
    images[39] = "img/note/39.PNG"
    images[40] = "img/note/40.PNG"
    images[41] = "img/note/41.PNG"
    images[42] = "img/note/42.PNG"
    images[43] = "img/note/43.PNG"
    images[44] = "img/note/44.PNG"
    images[45] = "img/note/45.PNG"
    images[46] = "img/note/46.PNG"
    images[47] = "img/note/47.PNG"
    images[48] = "img/note/48.PNG"
    images[49] = "img/note/49.PNG"
    images[50] = "img/note/50.PNG"
    images[51] = "img/note/51.PNG"
    images[52] = "img/note/52.PNG"
    images[53] = "img/note/53.PNG"
    images[54] = "img/note/54.PNG"
    images[55] = "img/note/55.PNG"
    images[56] = "img/note/56.PNG"
    images[57] = "img/note/57.PNG"
    images[58] = "img/note/58.PNG"
    images[59] = "img/note/59.PNG"
    images[60] = "img/note/60.PNG"
    images[61] = "img/note/61.PNG"
    images[62] = "img/note/62.PNG"
    images[63] = "img/note/63.PNG"
    images[64] = "img/note/64.PNG"
    images[65] = "img/note/65.PNG"
    images[66] = "img/note/66.PNG"
    images[67] = "img/note/67.PNG"
    images[68] = "img/note/68.PNG"
    images[69] = "img/note/69.PNG"
    images[70] = "img/note/70.PNG"
    images[71] = "img/note/71.PNG"
    images[72] = "img/note/72.PNG"
    images[73] = "img/note/73.PNG"
    images[74] = "img/note/74.PNG"
    images[75] = "img/note/75.PNG"
    images[76] = "img/note/76.PNG"
    images[77] = "img/note/77.PNG"
    images[78] = "img/note/78.PNG"
    images[79] = "img/note/79.PNG"
    images[80] = "img/note/80.PNG"
    images[81] = "img/note/81.PNG"
    images[82] = "img/note/82.PNG"
    images[83] = "img/note/83.PNG"
    images[84] = "img/note/84.PNG"
    images[85] = "img/note/85.PNG"
    images[86] = "img/note/86.PNG"
    images[87] = "img/note/87.PNG"
    images[88] = "img/note/88.PNG"
    images[89] = "img/note/89.PNG"
    images[90] = "img/note/90.PNG"
    images[91] = "img/note/91.PNG"
    images[92] = "img/note/92.PNG"
    images[93] = "img/note/93.PNG"
    images[94] = "img/note/94.PNG"
    images[95] = "img/note/95.PNG"
    images[96] = "img/note/96.PNG"
    images[97] = "img/note/97.PNG"
    images[98] = "img/note/98.PNG"
    images[99] = "img/note/99.PNG"
    images[100] = "img/note/100.PNG"
    images[101] = "img/note/101.PNG"
    images[102] = "img/note/102.PNG"
    images[103] = "img/note/103.PNG"
    images[104] = "img/note/104.PNG"
    images[105] = "img/note/105.PNG"
    images[106] = "img/note/106.PNG"
    images[107] = "img/note/107.PNG"
    images[108] = "img/note/108.PNG"
    images[109] = "img/note/109.PNG"
    images[110] = "img/note/110.PNG"
    images[111] = "img/note/111.PNG"
    images[112] = "img/note/112.PNG"
    images[113] = "img/note/113.PNG"
    images[114] = "img/note/114.PNG"
    images[115] = "img/note/115.PNG"
    images[116] = "img/note/116.PNG"
    images[117] = "img/note/117.PNG"
    images[118] = "img/note/118.PNG"
    images[119] = "img/note/119.PNG"
    images[120] = "img/note/120.PNG"
    images[121] = "img/note/121.PNG"
    images[122] = "img/note/122.PNG"
    images[123] = "img/note/123.PNG"
    var image = images[rand1]
    document.randimg.src = image
    }
