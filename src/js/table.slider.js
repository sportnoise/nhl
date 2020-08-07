export default class TableSlider {

    constructor(name) {

        let len = $('.table-slider__item').length;

        let i = 2;

        let tsLeft = false;
        let tsRight = false;

        $('.table-slider__item').each(function(){

            let ind = $(this).index();

            if (i < len)
            {
                $(this).hide();

                $('.table-slider tr').each(function(){

                    $(this).find('td').eq(ind).hide();
                });
            }

            if (i == len) tsLeft = ind;
            if (i > len) tsRight = ind;

            i++;
        });

        this.setStr(tsLeft, tsRight);

        $('.table-slider__prev').click((e) => this.goPrev(e));

        $('.table-slider__next').click((e) => this.goNext(e));
    }

    setStr(tsLeft, tsRight)
    {
        if ($('.table-slider th').eq(tsLeft - 1).hasClass('table-slider__item')) $('.table-slider__prev').addClass('table-slider__str_active');
        else $('.table-slider__prev').removeClass('table-slider__str_active');

        if ($('.table-slider th').eq(tsRight + 1).hasClass('table-slider__item')) $('.table-slider__next').addClass('table-slider__str_active');
        else $('.table-slider__next').removeClass('table-slider__str_active');

        $('.table-slider__prev').data('num', tsLeft);
        $('.table-slider__next').data('num', tsRight);
    }

    goPrev(e)
    {
        let elem = e.target;

        if ($(elem).hasClass('table-slider__str_active'))
        {
            let tsLeft = $(elem).data('num') - 1;

            $('.table-slider th').eq(tsLeft).show();

            $('.table-slider tr').each(function(){

                $(this).find('td').eq(tsLeft).show();
            });

            let tsRight = $('.table-slider__next').data('num');

            $('.table-slider th').eq(tsRight).hide();

            $('.table-slider tr').each(function(){

                $(this).find('td').eq(tsRight).hide();
            });

            this.setStr(tsLeft, tsRight - 1);
        }
    }

    goNext(e)
    {
        let elem = e.target;

        if ($(elem).hasClass('table-slider__str_active'))
        {
            let tsRight = $(elem).data('num') + 1;

            $('.table-slider th').eq(tsRight).show();

            $('.table-slider tr').each(function(){

                $(this).find('td').eq(tsRight).show();
            });

            let tsLeft = $('.table-slider__prev').data('num');

            $('.table-slider th').eq(tsLeft).hide();

            $('.table-slider tr').each(function(){

                $(this).find('td').eq(tsLeft).hide();
            });

            this.setStr(tsLeft + 1, tsRight);
        }
    }
}