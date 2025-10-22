function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6K5GXtqM34P":
        Script1();
        break;
      case "6W2LbJ1sHSm":
        Script2();
        break;
      case "6NMvqVa4MNA":
        Script3();
        break;
      case "5d76PJ8qLcp":
        Script4();
        break;
      case "6BHoJNKXA1Y":
        Script5();
        break;
      case "5XVpDLWSuMQ":
        Script6();
        break;
      case "5hwCqrOEjJj":
        Script7();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  const target = object('6KJIgUdVzCK');
const duration = 750;
const easing = 'ease-out';
const id = '6HF9gAbMnLN';
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6M9mawVVPKB');
const duration = 750;
const easing = 'ease-out';
const id = '6D7kwFrRS2X';
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5pjT7S3lgyp');
const duration = 750;
const easing = 'ease-out';
const id = '6bgFXahcmkR';
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('6fVNlLt7D6v');
const duration = 750;
const easing = 'ease-out';
const id = '5WHfr6W0fnd';
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('6KJIgUdVzCK');
const duration = 750;
const easing = 'ease-out';
const id = '6HF9gAbMnLN';
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('6M9mawVVPKB');
const duration = 750;
const easing = 'ease-out';
const id = '6D7kwFrRS2X';
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('5pjT7S3lgyp');
const duration = 750;
const easing = 'ease-out';
const id = '6bgFXahcmkR';
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
