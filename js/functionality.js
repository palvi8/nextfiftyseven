$(document).ready(function () {
          $(".navbar_fixed").css({"background-color":"rgba(0,0,0,0.7)","transition":"all 0.6s ease","box-shadow":"0px 0px 0px rgba(50,50,50,0.4)","color":"white"});
          $(".nav_item").css("color","white");
        });
        $("#booking_proceed").on('click',function(){
         $('#booking').modal('hide');
        });
        
function scrollNav() {
  $('.nav a').click(function(){  
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 50
    }, 1000);
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollNav();

function scrollFooter() {
  $('.account_list a').click(function(){  
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 50
    }, 1000);
    return false;
  });
  $('.scrollFooter a').scrollTop();
}
scrollFooter();

        $(document).ready(function(){
        $(".location_container").mouseenter(function(){
         $('.centered').css({"top":"10%","transition":"0.6s"});  
        });
        $(".location_container").mouseleave(function(){
        $('.centered').css({"top":"90%","transition":"0.6s"});
     
        });
        $(".location_container1").mouseenter(function(){
         $('.centered1').css({"top":"10%","transition":"0.6s"});  
        });
        $(".location_container1").mouseleave(function(){
        $('.centered1').css({"top":"90%","transition":"0.6s"});
     
        });
        $(".location_container2").mouseenter(function(){
         $('.centered2').css({"top":"10%","transition":"0.6s"});  
        });
        $(".location_container2").mouseleave(function(){
        $('.centered2').css({"top":"90%","transition":"0.6s"});
        });
        });

         $('.ok').change(function() {
    $('#city').val($(this).val());
});
$( document ).ready(function() {
    $('.btn-number').click(function(e){
        e.preventDefault();
        
        var fieldName = $(this).attr('data-field');
        var type      = $(this).attr('data-type');
        var input = $("input[name='"+fieldName+"']");
        var currentVal = parseInt(input.val());
        if (!isNaN(currentVal)) {
            if(type == 'minus') {
                var minValue = parseInt(input.attr('min')); 
                if(!minValue) minValue = 1;
                if(currentVal > minValue) {
                    input.val(currentVal - 1).change();
                } 
                if(parseInt(input.val()) == minValue) {
                    $(this).attr('disabled', true);
                }
    
            } else if(type == 'plus') {
                var maxValue = parseInt(input.attr('max'));
                if(!maxValue) maxValue = 99;
                if(currentVal < maxValue) {
                    input.val(currentVal + 1).change();
                }
                if(parseInt(input.val()) == maxValue) {
                    $(this).attr('disabled', true);
                }
    
            }
        } else {
            input.val(0);
        }
    });
    $('.input-number').focusin(function(){
       $(this).data('oldValue', $(this).val());
    });
    $('.input-number').change(function() {
        
        var minValue =  parseInt($(this).attr('min'));
        var maxValue =  parseInt($(this).attr('max'));
        if(!minValue) minValue = 1;
        if(!maxValue) maxValue = 9999999999999;
        var valueCurrent = parseInt($(this).val());
        
        var name = $(this).attr('name');
        if(valueCurrent >= minValue) {
            $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
        } else {
            alert('Sorry, the minimum value was reached');
            $(this).val($(this).data('oldValue'));
        }
        if(valueCurrent <= maxValue) {
            $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
        } else {
            alert('Sorry, the maximum value was reached');
            $(this).val($(this).data('oldValue'));
        }
        
        
    });
    $(".input-number").keydown(function (e) {
            // Allow: backspace, delete, tab, escape, enter and .
            if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
                 // Allow: Ctrl+A
                (e.keyCode == 65 && e.ctrlKey === true) || 
                 // Allow: home, end, left, right
                (e.keyCode >= 35 && e.keyCode <= 39)) {
                     // let it happen, don't do anything
                     return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
    });
});

 var myEl = document.getElementById('dedicated_button');
myEl.addEventListener('click', function() {
    console.log("working");
   window.location.href = "dedicated_desk.html?id=dedicated_desk";
});
 function myfunction(){
$('#tab_default_1').addClass('active');
console.log("dedicated");
 }
 var myEll = document.getElementById('private_office');
myEll.addEventListener('click', function() {
    console.log("working2");
   window.location.href = "dedicated_desk.html?id=private_desk";
});
 function private_office(){
$('#tab_default_2').addClass('active');
console.log("private");
 }
   var myshared = document.getElementById('shared_office');
myshared.addEventListener('click', function() {
    console.log("working3");
   window.location.href = "dedicated_desk.html?id=shared";
});
 function shared_office(){
$('#tab_default_3').addClass('active');
console.log("shared");
 }

 var myvirtual = document.getElementById('virtual_office');
myvirtual.addEventListener('click', function() {
    console.log("working4");
   window.location.href = "dedicated_desk.html?id=virtual";
});
 function virtual_office(){
$('#tab_default_4').addClass('active');
console.log("virtual");
 }
 /*function myFunction(){
     var select = document.getElementById("mySelect").value;
     $("#booking_proceed").click(function(){
        if(select == 'Dedicated Desk'){
            window.location.href = "dedicated_desk.html?id=dedicated_desk";
            console.log(select);
        }
        
     });
 }*/
function myFunction(){
        var select = document.getElementById("mySelect").value;
        if(select == "Dedicated Desk"){
           window.location.href = "dedicated_desk.html?id=dedicated_desk";
        }
        else if(select == "Private Office"){
            window.location.href = "dedicated_desk.html?id=private_desk";
        }
        else if(select == "Shared Office"){
             window.location.href = "dedicated_desk.html?id=shared";
        }
        else if(select == "Virtual Office"){
             window.location.href = "dedicated_desk.html?id=virtual";
        }
        else{
            console.log("new page");
        }
}
     window.onscroll = function () {
      scrollFunction()
    };

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
      } else {
        document.getElementById("myBtn").style.display = "none";
      }
    }
    
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
    $(document).ready(function() {
    $('.registerForm').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            username: {
                message: 'The username is not valid',
                validators: {
                    notEmpty: {
                        message: 'The username is required and cannot be empty'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: 'The username must be more than 6 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_]+$/,
                        message: 'The username can only consist of alphabetical, number and underscore'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email is required and cannot be empty'
                    },
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your phone number'
                    },
                    phone: {
                        country: 'US',
                        message: 'Please supply a vaild phone number with area code'
                    }
                }
            },
        }
    });
});
 

