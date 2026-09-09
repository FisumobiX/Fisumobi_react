import React, { useEffect, useState } from 'react';
import SunCalc from 'suncalc';
import './themeComp/kalakalenteriComp.css';
import { FaThumbsUp, FaThumbsDown, FaQuestion, FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

const monthNames = [
  'Tammikuu', 'Helmikuu', 'Maaliskuu', 'Huhtikuu', 'Toukokuu', 'Kesäkuu',
  'Heinäkuu', 'Elokuu', 'Syyskuu', 'Lokakuu', 'Marraskuu', 'Joulukuu'
];

const KalakalenteriComp: React.FC = () => {
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const [calendarDays, setCalendarDays] = useState<React.JSX.Element[]>([]);

  useEffect(() => {
    buildCalendar();
  }, [month, year]);

  const changeMonth = (delta: number) => {
    let newMonth = month + delta;
    let newYear = year;
    if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    }
    setMonth(newMonth);
    setYear(newYear);
  };

  const getFish = (date: Date): 'green' | 'yellow' | 'red' => {
    const moon = SunCalc.getMoonIllumination(date);
    const phase = moon.phase;

    if (phase < 0.08 || (phase > 0.40 && phase < 0.60) || phase > 0.90) return 'green';
    if ((phase > 0.07 && phase < 0.18) || (phase > 0.31 && phase < 0.41) ||
        (phase > 0.59 && phase < 0.69) || (phase > 0.81 && phase < 0.91)) return 'yellow';
    return 'red';
  };

  const getIcon = (fish: string, isToday: boolean, isDisabled: boolean) => {
    const colorClass =
      fish === 'green' ? 'green' :
      fish === 'yellow' ? 'orange' :
      'red';
  
    const classNames = [
      'fish-icon',
      colorClass,
      isToday ? 'shake' : '',
      isDisabled ? 'disabled' : ''
    ].join(' ');
  
    return (
      <>
        {
          fish === 'green' ? (
            <FaThumbsUp className={classNames} />
          ) : fish === 'yellow' ? (
            <FaQuestion className={classNames} />
          ) : (
            <FaThumbsDown className={classNames} />
          )
        }
      </>
    );
  };

  const buildCalendar = () => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay() || 7;

    const prevMonth = month === 0 ? 11 : month - 1;
    const prevYear = month === 0 ? year - 1 : year;
    const daysInPrevMonth = new Date(prevYear, prevMonth + 1, 0).getDate();

    const nextMonth = month === 11 ? 0 : month + 1;
    const nextYear = month === 11 ? year + 1 : year;

    const calendarRows: React.JSX.Element[] = [];
    let week: React.JSX.Element[] = [];

    // Täytetään alkuviikko edellisen kuun lopun päivillä
    for (let i = firstDay - 1; i > 0; i--) {
      const day = new Date(prevYear, prevMonth, daysInPrevMonth - i + 1);
      const fish = getFish(day);
      const isToday = day.toDateString() === new Date().toDateString();

      week.push(
        <td key={`prev-${daysInPrevMonth - i + 1}`} className={`prevMonthDay ${fish}`}>
          <div className="day-content">
            <span className="day-icon">{getIcon(fish, isToday, true)}</span>
            <span className="day-number">{daysInPrevMonth - i + 1}</span>
          </div>
        </td>
      );
    }

    // Kuluvan kuun päivät
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      const fish = getFish(date);
      const isToday = date.toDateString() === new Date().toDateString();

      week.push(
        <td key={`curr-${i}`} className={isToday ? `currentDay ${fish}` : `monthDay ${fish}`}>
          <div className="day-content">
            <span className="day-icon">{getIcon(fish, isToday, false)}</span>
            <span className="day-number">{i}</span>
          </div>
        </td>
      );

      if (week.length === 7) {
        calendarRows.push(<tr key={`week-${i}`}>{week}</tr>);
        week = [];
      }
    }

    // Täytetään viimeinen viikko seuraavan kuun alun päivillä
    if (week.length > 0) {
      let nextDay = 1;
      while (week.length < 7) {
        const day = new Date(nextYear, nextMonth, nextDay);
        const fish = getFish(day);
        const isToday = day.toDateString() === new Date().toDateString();

        week.push(
          <td key={`next-${nextDay}`} className={`nextMonthDay ${fish}`}>
            <div className="day-content">
              <span className="day-icon">{getIcon(fish, isToday, true)}</span>
              <span className="day-number">{nextDay}</span>
            </div>
          </td>
        );
        nextDay++;
      }
      calendarRows.push(<tr key="last-week">{week}</tr>);
    }

    setCalendarDays(calendarRows);
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={() => changeMonth(-1)} className='button'>
          <FaChevronLeft className='buttonIcon'/>
        </button>
        <h2 className="dateText">{monthNames[month]} {year}</h2>
        <button onClick={() => changeMonth(1)} className='button'>
        <FaChevronRight className='buttonIcon' />
        </button>
      </div>
      <table className="calendar-table">
        <thead>
          <tr>
            <th>Ma</th>
            <th>Ti</th>
            <th>Ke</th>
            <th>To</th>
            <th>Pe</th>
            <th>La</th>
            <th>Su</th>
          </tr>
        </thead>
        <tbody>{calendarDays}</tbody>
      </table>
    </div>
  );
};

export default KalakalenteriComp;