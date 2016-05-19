/**
 * @module File0f3724d5afc2540
 *
 * @author Cristobal Ibarguen <c@cognits.co>
 */
function trancitionWidgets(form, distance, delay, duration){
  var pForm = kony.application.getCurrentForm();
  try {
    pForm[form].animate(
    kony.ui.createAnimation({
      "100":{
        "left": distance,
        "stepConfig":{
          "timingFunction": kony.anim.EASE
        }
      }
    }),
      {"delay": delay,"iterationCount": 1,
       "fillMode": kony.anim.FILL_MODE_FORWARDS, "duration": duration},
      {"animationEnd": function(){ }
      }
     );
  } catch (e) {
  }
}

function modifyOpacity(form, opacity, delay, duration){
var pForm = kony.application.getCurrentForm();
  try {
	pForm[form].animate(
      kony.ui.createAnimation({
        "100":{
          "stepConfig":{
            "timingFunction":kony.anim.EASE
          },
          "opacity": opacity
         }
      }),
      {"delay": delay, "iterationCount": 1,
       "fillMode": kony.anim.FILL_MODE_FORWARDS, "duration": duration},
      {"animationEnd" : function(){ }
      }
    );
  } catch (e) {
  }
}