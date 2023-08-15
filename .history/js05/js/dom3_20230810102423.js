"use strict"

let d2 = document.getElementById('d2')
//생성
let ele_span = document.createElement('span'); //엘리먼트
let txt_span = document.createTextNode('span-data'); //텍스트노드

ele_span.appendChild(txt_span);

d2.appendChild(ele_span);