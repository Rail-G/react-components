import moment from 'moment'
import 'moment/dist/locale/ru'

function CalculateDate({date}) {
    const year = date.getFullYear();
    const month = date.getMonth();

    const monthArr = [];
    const startOfMonth = moment().year(year).month(month).startOf('month'); // Начальная дата месяца
    const endOfMonth = moment().year(year).month(month).endOf('month'); // Последний дата месяца
    const startMonthWeekDay = (startOfMonth.day() + 6) % 7; // Дней до понедельника от 1 числа текущего месяца до прошлого месяца
    const endMonthDay = endOfMonth.date(); // Последний день месяца

    let currentWeek = [];
    let currentDate = startOfMonth.clone().subtract(startMonthWeekDay, 'days');

    while (currentDate.isBefore(endOfMonth, 'day')) {
        if (currentDate.month() === endOfMonth.month()) {
            if (currentDate.date() === date.getDate()) {
                currentWeek.push(<td className="ui-datepicker-today">{currentDate.date()}</td>)
            } else {
                currentWeek.push(<td>{currentDate.date()}</td>)
            }
        } else {
            currentWeek.push(<td className="ui-datepicker-other-month">{currentDate.date()}</td>);
            console.log(moment(date).format('dddd'))
        }
        if (currentWeek.length === 7) {
            monthArr.push(<tr>{currentWeek}</tr>);
            currentWeek = [];
        }
        currentDate.add(1, 'day');
    }

    if (currentWeek.length >= 0) {
        currentWeek.push(<td>{currentDate.date()}</td>);
        while (currentWeek.length < 7) {
            currentDate.add(1, 'day');
            currentWeek.push(<td className='ui-datepicker-other-month'>{currentDate.date()}</td>);
        }
        monthArr.push(<tr>{currentWeek}</tr>);
    }
    return (
        <tbody>
            {monthArr}
        </tbody>
    )
}

function DatePicker({date}) {
    const [day, month, year] = moment(date).format('D MMMM YYYY').split(' ')
    const week = moment(date).format('dddd')
    const monthWithoutP = moment(date).format('MMMM')
    return (
        <>
            <div class="ui-datepicker-material-header">
                <div class="ui-datepicker-material-day">{week}</div>
                <div class="ui-datepicker-material-date">
                <div class="ui-datepicker-material-day-num">{day}</div>
                <div class="ui-datepicker-material-month">{month}</div>
                <div class="ui-datepicker-material-year">{year}</div>
                </div>
            </div>
            <div class="ui-datepicker-header">
                <div class="ui-datepicker-title">
                <span class="ui-datepicker-month">{monthWithoutP}</span>&nbsp;<span class="ui-datepicker-year">{year}</span>
                </div>
            </div>
        </>
    )
}

export default function Calendar({date}) {
    return (
        <div class="ui-datepicker">
            <DatePicker date={date}/>
            <table class="ui-datepicker-calendar">
                <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />
                <col class="ui-datepicker-week-end" />
                <col class="ui-datepicker-week-end" />
                </colgroup>
                <thead>
                <tr>
                    <th scope="col" title="Понедельник">Пн</th>
                    <th scope="col" title="Вторник">Вт</th>
                    <th scope="col" title="Среда">Ср</th>
                    <th scope="col" title="Четверг">Чт</th>
                    <th scope="col" title="Пятница">Пт</th>
                    <th scope="col" title="Суббота">Сб</th>
                    <th scope="col" title="Воскресенье">Вс</th>
                </tr>
                </thead>
                <CalculateDate date={date}/>
            </table>
        </div>
    )
}