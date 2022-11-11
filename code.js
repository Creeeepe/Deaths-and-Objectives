var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","26b80e63-bc0f-408d-b288-be2282aebd4e","dfc53be7-786c-4305-b8eb-81fa595e9903","47fade86-5bd1-4789-87af-896fb1433a7b","043deebf-64b8-4795-be8d-db5055414f2f","c26b6449-0b6c-4483-8486-107c0091c26e","3221caad-ae37-4eec-92a8-56bae4769e66","c4e310e0-8174-4127-a46e-0cbcc94b488b","07cb4f76-f42b-40c0-a74f-a1a503231762","ddba1c33-c9f4-43b5-ae00-ffa8e861e5b5","ecc16d3b-ec77-4ca4-80cc-67c61cbac7c8"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"hero","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"4kpiSFV0jQV0n0hAFRDSZehen4o.Aji0","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"UFhRI2t0RpDnjBQZsEuOTvKxjsdXIa7v","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"dfc53be7-786c-4305-b8eb-81fa595e9903":{"name":"enemy","sourceUrl":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png","frameSize":{"x":320,"y":254},"frameCount":1,"looping":true,"frameDelay":2,"version":"xasculQGiYxBV79ltD_0E79ZRIexdPdZ","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":254},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png"},"47fade86-5bd1-4789-87af-896fb1433a7b":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png","frameSize":{"x":355,"y":241},"frameCount":1,"looping":true,"frameDelay":2,"version":"dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":355,"y":241},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png"},"043deebf-64b8-4795-be8d-db5055414f2f":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png","frameSize":{"x":388,"y":388},"frameCount":1,"looping":true,"frameDelay":2,"version":"YSis4_lex43su6FLaL__bhoag4eHAl8D","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":388},"rootRelativePath":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png"},"c26b6449-0b6c-4483-8486-107c0091c26e":{"name":"hero1","sourceUrl":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png","frameSize":{"x":264,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"loycQXdICpzI4PfXITdIndG9GcVBmRdK","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png"},"3221caad-ae37-4eec-92a8-56bae4769e66":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"dream","sourceUrl":null,"frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"lYkTr5Qlb3kKlIYSnX9uBRgp4qfKnfZk","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"},"07cb4f76-f42b-40c0-a74f-a1a503231762":{"name":"soccer_ball","sourceUrl":null,"frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":12,"version":"Y4egrBWdtF.UCOXiYvWWIiFLmsdHg2OR","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/07cb4f76-f42b-40c0-a74f-a1a503231762.png"},"ddba1c33-c9f4-43b5-ae00-ffa8e861e5b5":{"name":"jogador_caro2","sourceUrl":null,"frameSize":{"x":393,"y":420},"frameCount":1,"looping":true,"frameDelay":12,"version":"PBJP7XDvCBZAvP7Pt167hhKuofz8960Q","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":420},"rootRelativePath":"assets/ddba1c33-c9f4-43b5-ae00-ffa8e861e5b5.png"},"ecc16d3b-ec77-4ca4-80cc-67c61cbac7c8":{"name":"bola1","sourceUrl":"assets/api/v1/animation-library/gamelab/KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG/category_sports/soccer_bw.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG/category_sports/soccer_bw.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var hero = createSprite(200,345,200,345);
hero.shapeColor="red";

var obstaculo1 = createSprite(200,250,10,10);
obstaculo1.shapeColor="red";

var obstaculo2 = createSprite(200,150,10,10);
obstaculo2.shapeColor="red";

var obstaculo3 = createSprite(200,50,10,10);
obstaculo3.shapeColor="red";

var gol = createSprite(200,5,200,20);
gol.shapeColor="red";

var goal = 0;
var death = 0;

hero.setAnimation("jogador_caro2");
hero.scale=0.2;
obstaculo1.setAnimation("bola1");
obstaculo1.scale=0.1;
obstaculo2.setAnimation("bola1");
obstaculo2.scale=0.1;
obstaculo3.setAnimation("bola1");
obstaculo3.scale=0.1;

obstaculo1.setVelocity(-10,0);
obstaculo2.setVelocity(10,0);
obstaculo3.setVelocity(-10,0);


function draw() {
  
background("green");

createEdgeSprites();



hero.bounce(edges);
obstaculo1.bounceOff(edges);
obstaculo2.bounceOff(edges);
obstaculo3.bounceOff(edges);

if(keyDown(UP_ARROW)){
  hero.y=hero.y-3;
}

if(keyDown(DOWN_ARROW)){
  hero.y=hero.y+3;
}

if(keyDown(LEFT_ARROW)){
  hero.x=hero.x-3;
}

if(keyDown(RIGHT_ARROW)){
  hero.x=hero.x+3;
}

if(hero.isTouching(obstaculo1)|| hero.isTouching(obstaculo2)|| hero.isTouching(obstaculo3)){
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3");
  hero.x=200;
  hero.y=350;
  death = death+1;
}
if(hero.isTouching(gol)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3");
  hero.x=200;
  hero.y=345;
  goal=goal+1;
}
textSize(20);
  fill("blue");
  text("Objetivos:"+goal,300,380);
  

textSize(20);
  fill("blue");
  text("Mortes:"+death,0,380);
  
drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
