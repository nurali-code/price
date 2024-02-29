$(document).ready(function () {
    $('.tab_btn').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('.tab_btn').removeClass('is_active');
        $('.tab-content').removeClass('is_active');

        $(this).addClass('is_active');
        $("table[data-tab-content='" + tab_id + "']").addClass('is_active');
    });
});