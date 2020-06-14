$('input[name="dates"]').daterangepicker();
$('input[name="dates"]').val('');
$(function() {
    $('input[name="dates1"]').daterangepicker({

        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        maxYear: parseInt(moment().format('YYYY'),10),
        locale: {

            format: 'YYYY-MM-DD'
        }
    });

    $('input[name="dates2"]').val('');
});
$(function() {

    $('input[name="dates1"]').daterangepicker({

        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        maxYear: parseInt(moment().format('YYYY'),10),
        locale: {

            format: 'YYYY-MM-DD'
        }
    });

    $('input[name="dates2"]').val('');
});
(function(obj) {
    var elem = document.querySelector(obj.elementSelector);
    var scrollTop = 0;
    var difference = 0;

    function scrollingEffect() {
        var heightScroll = window.pageYOffset;
        if (difference + 200 < heightScroll &
            scrollTop < heightScroll &
            heightScroll > (obj.criticalDot || 400)) {
            elem.classList.add(obj.addClass)
        } else if (scrollTop > heightScroll) {
            difference = heightScroll;
            elem.classList.remove(obj.addClass)
        }
        scrollTop = heightScroll;
    };

    window.addEventListener('scroll', scrollingEffect);
})({
    criticalDot: 500,
    elementSelector: '.header',
    addClass:'fixed'
});

$(".link-del").on('click',function (e) {
    e.preventDefault();
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.value) {
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            );
            $(this).closest('li').fadeOut();
        }
    })
});

$(document).ready(function (e) {


    $('.munos').click(function () {
        if($(this).next().val() >= 1)
        {
            var muns = parseInt($(this).next().val());
            var netNumber = muns - 1 ;
            $(this).next().val(netNumber);
        }
    });

    $('.plus').click(function () {

        var plus = parseInt($(this).prev().val());
        let netNumberPlas = 1 + plus ;
        $(this).prev().val(netNumberPlas);
    });



    $('.list-users-card li a').on('click',function (e) {
        e.preventDefault();
        $(this).next('ul').toggleClass('open');
        e.stopPropagation();
    });

});


$(window).click(function() {

    var ul = $('.list-users-card li ul');
    if(ul.hasClass('open')){

        $('.list-users-card li ul').removeClass('open');
    }
});
$('.save-ul1').on('click', function () {
    $('.ul1').toggleClass('open');
});
$('.list-users-card li ul').click(function(event){
    event.stopPropagation();
});








//notofictions-from-saleh



$(function () {
    $('#form').parsley();
});
