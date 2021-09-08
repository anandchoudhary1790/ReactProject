
   // document.getElementById('autoVideo').play(); 
    $(document).ready(function () {
      var delay = 2000;
      $('.submit-btn').click(function (e) {
        e.preventDefault();
        var name = $('#name').val();
        if (name == '') {
          $('.message_box').html(
            '<span style="color:red;">Enter Your Name!</span>'
          );
          $('#name').focus();
          return false;
        }

        var email = $('#email').val();
        if (email == '') {
          $('.message_box').html(
            '<span style="color:red;">Enter Email Address!</span>'
          );
          $('#email').focus();
          return false;
        }
        if ($("#email").val() != '') {
          if (!isValidEmailAddress($("#email").val())) {
            $('.message_box').html(
              '<span style="color:red;">Provided email address is incorrect!</span>'
            );
            $('#email').focus();
            return false;
          }
        }

        var message = $('#message').val();


        $.ajax({
          type: "POST",
          url: "email.php",
          data: "name=" + name + "&email=" + email + "&message=" + message,
          beforeSend: function () {
            $('.message_box').html(
              '<img src="images/loader.gif" width="25" height="25"/>'
            );
          },
          success: function (data) {
            setTimeout(function () {
              $('.message_box').html(data);
            }, delay);
          }
        });
      });

    }); 
    function isValidEmailAddress(emailAddress) {
      var pattern =
        /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
      return pattern.test(emailAddress);
    }; 
    function clearFields() {
      $('form[name="ContactForm"]').submit();
      $('input[type="text"], textarea').val('');
    } 
    $('#suu').hide();
    $('#err').hide();
    var cuturl = window.location.href;
    var sp = cuturl.split("?msg=");
    if (sp[1] == '1#contact') {
      $('#suu').show();
    } else if (sp[1] == '2#contact') {
      $('#err').show();
    }
	
	
	
    $(document).ready(function () {
      // Add smooth scrolling to all links
      $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function () {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
    }); 
    $(document).ready(function () {
      $('#video-id,.demo-play-btn').click(function () {
        $('#video-id').get(0).paused ? $('#video-id').get(0).play() : $('#video-id').get(0).pause();
        $(".demo-play-btn").toggle();
      });
    });