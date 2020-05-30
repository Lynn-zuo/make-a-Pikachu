!function(){
  var duration = 50
  function writeCode(prefix, code, fn){
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let n = 0
    setTimeout(function run(){
        n+=1
        container.innerHTML = code.substring(0,n)
        styleTag.innerHTML = code.substring(0,n)
        container.scrollTop = container.scrollHeight
        if(n < code.length){
          setTimeout(run, duration)
        } else{
          fn && fn.call
        }
    }, duration)
  }
  let code = 
  `
/* 
* 让我给你画一只皮卡丘 
*/
/* 
* 首先需要准备皮卡丘的皮 
*/
.preview {
    display: flex;
    flex:1;
    justify-content: center;
    align-items: center;
    height:100%;
    background-color: #FFDC2A;
}

/* 接着画皮卡丘的鼻子 */
.nose {
    border-width: 26px;
    border: 12px solid black;
    border-radius: 11px;
    position: absolute;
    left: 50%;
    top: 28px;
    border-color: black transparent transparent;
    margin-left: -13px;
}

/* 然后画皮卡丘的眼睛 */
.eye {
    width: 49px;
    height: 49px;
    background: black;
    border-radius: 25px;
    border: 1px solid black;
    position: absolute;
}

.innereye {
    width: 22px;
    height: 22px;
    border: 1px solid black;
    background: white;
    border-radius: 50%;
    position: absolute;
    top: 1px;
    left: 9px;
}

/* 左眼睛在左边（废话） */
.left {
    left: 50%;
    margin-left: -125px;
}

/* 右眼睛在左边（废话） */
.right {
    left: 50%;
    margin-left: 75px;
}

/* 接着画皮卡丘的脸 */
.face {
    width: 70px;
    height: 70px;
    border: 2px solid black;
    border-radius: 50%;
    background: #ff2519;
    position: absolute;
    top: 70px;
}

/* 将脸放到正确的位置 */
.faceleft {
    left: 50%;
    margin-left: -165px;
}

.faceright {
    left: 50%;
    margin-left: 100px;
}

/* 接着画皮卡丘的上嘴唇 */
.uplip {
    width: 80px;
    height: 20px;
    border: 2px solid black;
    background: #FFDC2A;
    position: absolute;
    top: 30px;
}

.lipleft {
    right: 50%;
    border-bottom-left-radius: 50px 20px;
    border-top: none;
    border-right: none;
    transform: rotate(-20deg);
}

.lipright {
    left: 50%;
    border-bottom-right-radius: 50px 20px;
    border-top: none;
    border-left: none;
    transform: rotate(20deg);
}

.lowerlip-wrapper {
    position: absolute;
    width: 100%;
    height: 125px;
    bottom: 20px;
    overflow: hidden;
}

/* 接着画皮卡丘的下嘴唇 */
.lowlip {
    width: 200px;
    height: 1600px;
    position: absolute;
    bottom: 0;
    left: 50%;
    background: #A61511;
    margin-left: -100px;
    border: 2px solid black;
    border-radius: 150px/1200px;
    overflow: hidden;
}

/* 小舌头 */
.lowlip::after {
    width: 100px;
    height: 100px;
    background: #FA5B5F;
    content: "";
    border-radius: 50px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -50px;
}
  `
  writeCode('', code)
  $('.actions').on('click', 'button', function(e){
    let $button = $(e.currentTarget)
    let speed = $button.attr('data-speed')
    console.log(speed)
    $button.addClass('active')
    .siblings('.active').removeClass('active')
    switch(speed){
      case 'slow':
        duration = 100
        break
      case 'normal':
        duration = 50
        break
      case 'fast':
        duration = 10
        break
    }
  })
}.call()
