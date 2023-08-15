"use strict"

let d2 = document.getElementById('d2')
// --------------- 엘리먼트, 텍스트 노드 생성 및 연결 ---------------
//생성
/* let ele_span = document.createElement('span'); //엘리먼트
let txt_span = document.createTextNode('span-data'); //텍스트노드 */

//생성한 것 부모에 연결시켜줘야함
/* ele_span.appendChild(txt_span);
d2.appendChild(ele_span);
d2.append(ele_span); */

// ------------ insertBefore, after -------------------
//tagBody 만들어놓고 insertBefore 써야함
/* let tagBody = document.getElementsByTagName('body')[0];
tagBody.insertBefore(ele_span, d2); //형제 노드 붙여줄 때 (d2앞에 ele_span넣어)

//after
d2.after(ele_span); //안으로 집어넣는 것 아님. 형제 노드 붙여주는 것 = */

