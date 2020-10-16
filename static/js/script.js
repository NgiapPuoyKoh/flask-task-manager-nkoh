// initialize side navbar

// document.addEventListener("DOMContentLoaded", function () {
//   var elems = document.querySelectorAll(".sidenav");
//   var instances = M.Sidenav.init(elems, options);
// });

//   document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.collapsible');
//     var instances = M.Collapsible.init(elems, options);
//   });

//   document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.tooltipped');
//     var instances = M.Tooltip.init(elems, options);
//   });

//   document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.datepicker');
//     var instances = M.Datepicker.init(elems, options);
//   });

//   document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('select');
//     var instances = M.FormSelect.init(elems, options);
//   });

$(document).ready(function () {
  $(".sidenav").sidenav({ edge: "right" });
  $(".collapsible").collapsible();
  $(".tooltipped").tooltip();
  $(".datepicker").datepicker({
    format: "dd mmmm yyyy",
    yearRange: 3,
    showClearBtn: true,
    i18n: {
      done: "Select",
    },
  });
  $("select").formSelect();

  //   NOTE BE CAREFUL: colors defined use a combination of HEX RGB with RGBA values
  //   because it is what javascript can see based on what is applies via CSS

  validateMaterializeSelect();
  function validateMaterializeSelect() {
    //   created CSS classes green and red to match vaidation valid and invalid respectively
    let classValid = {
      "border-bottom": "1px solid #4caf50",
      "box-shadow": "0 1px 0 0 #4caf50",
    };
    let classInvalid = {
      "border-bottom": "1px solid #f44336",
      "box-shadow": "0 1px 0 0 #f44336",
    };
    // Materialize hides the select elements but they need to be physicaly on the DOM
    if ($("select.validate").prop("required")) {
      $("select.validate").css({
        display: "block",
        height: "0",
        padding: "0",
        width: "0",
        position: "absolute",
      });
    }
    // when user is focused withon the input of the screen then traverse the DOM both up and down
    // using the parent and children selectors with event listeners
    // traverse the DOM with the various event listener
    $(".select-wrapper input.select-dropdown")
      .on("focusin", function () {
        $(this)
          .parent(".select-wrapper")
          .on("change", function () {
            // if one of the list items is selected but does not have the disabled class for our default item
            // apply styles to make it valid and green
            if (
              $(this)
                .children("ul")
                .children("li.selected:not(.disabled)")
                .on("click", function () {})
            ) {
              $(this).children("input").css(classValid);
            }
          });
      })
      .on("click", function () {
        // next apply a green valid class again if there is not either the valid or invalid classes
        // based on the same DOM traversing
        // default border is still applied but will update it based on the user selection so it is valid
        if (
          $(this)
            .parent(".select-wrapper")
            .children("ul")
            .children("li.selected:not(.disabled)")
            .css("background-color") === "rgba(0, 0, 0, 0.03)"
        ) {
          $(this).parent(".select-wrapper").children("input").css(classValid);
          //   otherwise when the use comes out of the selection and the bottom border was not updated
          //   then they have not properlu selected anything the apply the red value
        } else {
          $(".select-wrapper input.select-dropdown").on(
            "focusout",
            function () {
              if (
                $(this)
                  .parent(".select-wrapper")
                  .children("select")
                  .prop("required")
              ) {
                if (
                  $(this).css("border-bottom") != "1px solid rgb(76, 175, 80)"
                ) {
                  $(this)
                    .parent(".select-wrapper")
                    .children("input")
                    .css(classInvalid);
                }
              }
            }
          );
        }
      });
  }
});

/*
    vanilla JavaScript for MaterializeCSS initialization
*/

// document.addEventListener('DOMContentLoaded', function () {
//     let sidenavs = document.querySelectorAll(".sidenav");
//     let sidenavsInstance = M.Sidenav.init(sidenavs, {edge: "right"});
//     let collapsibles = document.querySelectorAll(".collapsible");
//     let collapsiblesInstance = M.Collapsible.init(collapsibles);
//     let tooltips = document.querySelectorAll(".tooltipped");
//     let tooltipsInstance = M.Tooltip.init(tooltips);
//     let selects = document.querySelectorAll("select");
//     let selectsInstance = M.FormSelect.init(selects);
//     let datepickers = document.querySelectorAll(".datepicker");
//     let datepickersInstance = M.Datepicker.init(datepickers, {
//         format: "dd mmmm, yyyy",
//         yearRange: 3,
//         showClearBtn: true,
//         i18n: {
//             done: "Select"
//         }
//     });
//     validateMaterializeSelect();
//     function validateMaterializeSelect() {
//         let classValid = "border-bottom: 1px solid #4caf50; box-shadow: 0 1px 0 0 #4caf50;";
//         let classInvalid = "border-bottom: 1px solid #f44336; box-shadow: 0 1px 0 0 #f44336;";
//         let selectValidate = document.querySelector("select.validate");
//         let selectWrapperInput = document.querySelector(".select-wrapper input.select-dropdown");
//         if (selectValidate.hasAttribute("required")) {
//             selectValidate.style.cssText = "display: block; height: 0; padding: 0; width: 0; position: absolute;";
//         }
//         selectWrapperInput.addEventListener("focusin", (e) => {
//             e.target.parentNode.addEventListener("change", () => {
//                 ulSelectOptions = e.target.parentNode.childNodes[1].childNodes;
//                 for (let i = 0; i < ulSelectOptions.length; i++) {
//                     if (ulSelectOptions[i].className == "selected" && ulSelectOptions[i].hasAttribute != "disabled") {
//                         e.target.style.cssText = classValid;
//                     }
//                 }
//             });
//         });
//         selectWrapperInput.addEventListener("click", (e) => {
//             ulSelectOptions = e.target.parentNode.childNodes[1].childNodes;
//             for (let i = 0; i < ulSelectOptions.length; i++) {
//                 if (ulSelectOptions[i].className == "selected" && ulSelectOptions[i].hasAttribute != "disabled" && ulSelectOptions[i].style.backgroundColor == "rgba(0, 0, 0, 0.03)") {
//                     e.target.style.cssText = classValid;
//                 } else {
//                     e.target.addEventListener("focusout", () => {
//                         if (e.target.parentNode.childNodes[3].hasAttribute("required")) {
//                             if (e.target.style.borderBottom != "1px solid rgb(76, 175, 80)") {
//                                 e.target.style.cssText = classInvalid;
//                             }
//                         }
//                     });
//                 }
//             }
//         });
//     }
// });
