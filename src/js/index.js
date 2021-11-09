$(function(){

    var element = $('.chat-scroll-pane').jScrollPane({
        autoReinitialise: true,
        stickToBottom: true
    });

    var api = element.data('jsp');

    $('.js-chat-toggle-window').on('click', function(){

        $('.chat-bot-window').toggleClass('chat-bot-window_open');

        $('.chat-bot-btn').toggleClass('chat-bot-btn_open');

        $('.chat-bot-window_big').removeClass('chat-bot-window_big');
    });

    $('.js-chat-toggle-tab').on('click', function(){

        $('.chat-bot-body_active').removeClass('chat-bot-body_active');

        $('#' + $(this).data('tab')).addClass('chat-bot-body_active');

        $('.chat-bot-head__link_active').removeClass('chat-bot-head__link_active');

        $(this).addClass('chat-bot-head__link_active');

        api.scrollToBottom();
    });

    $('.js-chat-toggle-zoom').on('click', function(){

        $('.chat-bot-window').toggleClass('chat-bot-window_big');
    });

    $('.js-step-next').on('click', function(){

        $(this).parents('.chat-bot-step').fadeOut(200, function() {

            $(this).next('.chat-bot-step').fadeIn(200);
        });
    });

    $('.js-step-prev').on('click', function(){

        $(this).parents('.chat-bot-step').fadeOut(200, function() {

            $(this).prev('.chat-bot-step').fadeIn(200);
        });
    });

    $('.chat-bot-form__textarea-input').on('keyup', function(e){

        var elem = e.target ? e.target : e;

        if (elem.scrollTop > 0)
        {
            var height = elem.scrollHeight;
    
            if (height > 100) height = 100;
    
            elem.style.height = height + "px";
    
            $('.chat-bot-msg').css('height', 'calc(100% - ' + (height + 40) + 'px)')
        }
    });

    $('.chat-bot-form__btn').on('click', function(){

        var textarea = $('.chat-bot-form__textarea-input');

        textarea.val('');

        textarea.removeAttr('style');

        $('.chat-bot-msg').removeAttr('style');
    });
});