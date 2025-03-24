let sprite1, sprite2, sprite3; // 儲存圖片精靈
let currentSprite = null; // 當前顯示的精靈
let frameIndex = 0; // 當前動畫的幀索引
let frameCountPerSprite = 5; // 每個精靈的幀數

function preload() {
  // 載入圖片精靈
  sprite1 = loadImage('1_all.png'); // 5 張照片，高 61，寬 38
  sprite2 = loadImage('2_all.png'); // 5 張照片，高 77，寬 68
  sprite3 = loadImage('3_all.png'); // 6 張照片，高 94，寬 111
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(5); // 設定動畫速度為每秒 5 幀

  // 第一個按鈕
  let button1 = createButton('自介紹');
  button1.position(150, 50);
  button1.size(100, 50);
  button1.style('font-size', '20px');
  button1.mouseOver(() => {
    currentSprite = sprite1;
    frameIndex = 0; // 重置動畫幀
    frameCountPerSprite = 5; // 設定幀數
  });

  // 第二個按鈕
  let button2 = createButton('筆記說明');
  button2.position(450, 50); // 設定在「作品簡介」左邊
  button2.size(100, 50);
  button2.style('font-size', '20px');
  button2.mouseOver(() => {
    currentSprite = sprite3;
    frameIndex = 0; // 重置動畫幀
    frameCountPerSprite = 6; // 設定幀數
  });

  // 第三個按鈕
  let button3 = createButton('作品簡介');
  button3.position(300, 50);
  button3.size(100, 50);
  button3.style('font-size', '20px');
  button3.mouseOver(() => {
    currentSprite = sprite2;
    frameIndex = 0; // 重置動畫幀
    frameCountPerSprite = 5; // 設定幀數
  });

  
}

function draw() {
  background(220);

  // 如果有當前精靈，顯示動畫
  if (currentSprite) {
    let spriteWidth, spriteHeight;

    // 根據當前精靈設定單幀的寬度和高度
    if (currentSprite === sprite1) {
      spriteWidth = 38; // 單幀寬度
      spriteHeight = 61; // 單幀高度
    } else if (currentSprite === sprite2) {
      spriteWidth = 68; // 單幀寬度
      spriteHeight = 77; // 單幀高度
    } else if (currentSprite === sprite3) {
      spriteWidth = 111; // 單幀寬度
      spriteHeight = 94; // 單幀高度
    }

    let sx = frameIndex * spriteWidth; // 計算當前幀的 x 起點

    // 繪製當前幀，位置改為 (50, 50)
    image(
      currentSprite,
      50, // 固定 x 位置為 50
      50, // 固定 y 位置為 50
      spriteWidth,
      spriteHeight,
      sx,
      0,
      spriteWidth,
      spriteHeight
    );

    // 更新幀索引
    frameIndex = (frameIndex + 1) % frameCountPerSprite;
  }
}
