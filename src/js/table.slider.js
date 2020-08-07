export default class TableSlider
{
    constructor()
    {
        /* Номера Левого и Правого активного столбцов */
        this.tsLeft = false;
        this.tsRight = false;

        let len = $('.table-slider__item').length;

        let i = 2;

        /* Скрываем все столбцы кроме последних двух, их номера запоминаем */
        $('.table-slider__item').each((n, e) => {

            let ind = $(e).index();

            if (i < len) this.hideOne(ind);
            if (i == len) this.tsLeft = ind;
            if (i > len) this.tsRight = ind;

            i++;
        });

        this.setStrActive();

        $('.table-slider__prev').click(e => this.goPrev(e));

        $('.table-slider__next').click(e => this.goNext(e));
    }

    /* Проверяем активность стрелок */
    setStrActive()
    {
        if ($('.table-slider th').eq(this.tsLeft - 1).hasClass('table-slider__item'))
            $('.table-slider__prev').addClass('table-slider__str_active');
        else
            $('.table-slider__prev').removeClass('table-slider__str_active');

        if ($('.table-slider th').eq(this.tsRight + 1).hasClass('table-slider__item'))
            $('.table-slider__next').addClass('table-slider__str_active');
        else
            $('.table-slider__next').removeClass('table-slider__str_active');
    }

    /* Переходи к предыдущему столбцу */
    goPrev(e)
    {
        if ($(e.target).hasClass('table-slider__str_active'))
        {
            this.tsLeft--;

            this.shwoOne(this.tsLeft);

            this.hideOne(this.tsRight);

            this.tsRight--;

            this.setStrActive();
        }
    }

    /* Переходи к следующему столбцу */
    goNext(e)
    {
        if ($(e.target).hasClass('table-slider__str_active'))
        {
            this.tsRight++;

            this.shwoOne(this.tsRight);

            this.hideOne(this.tsLeft);

            this.tsLeft++;

            this.setStrActive();
        }
    }

    /* Показываем один столбец (num) */
    shwoOne(num)
    {
        $('.table-slider th').eq(num).show();

        $('.table-slider tr').each((n, e) => {

            $(e).find('td').eq(num).show();
        });
    }

    /* Скрываем один столбец (num) */
    hideOne(num)
    {
        $('.table-slider th').eq(num).hide();

        $('.table-slider tr').each((n, e) => {

            $(e).find('td').eq(num).hide();
        });
    }
}