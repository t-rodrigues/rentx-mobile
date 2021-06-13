import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import { generateInterval } from './generateInterval';
import { ptBR } from './localeConfig';

import {
  Calendar as CustomCalendar,
  DateCallbackHandler,
  LocaleConfig,
} from 'react-native-calendars';

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

type MarkedDateProps = {
  [date: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disableTouchEvent?: boolean;
  };
};

type DayProps = {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
};

type CalendarProps = {
  markedDates: MarkedDateProps;
  onDayPress: DateCallbackHandler;
};

const Calendar = ({ markedDates, onDayPress }: CalendarProps): JSX.Element => {
  const theme = useTheme();

  return (
    <CustomCalendar
      renderArrow={direction => (
        <Feather
          name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
          color={theme.colors.text}
          size={24}
        />
      )}
      headerStyle={{
        backgroundColor: theme.colors.backgroundSecondary,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.line,
        paddingBottom: 10,
        marginBottom: 10,
      }}
      theme={{
        textDayFontFamily: theme.fonts.primary400,
        textDayHeaderFontFamily: theme.fonts.primary500,
        textDayHeaderFontSize: 10,
        textMonthFontFamily: theme.fonts.secondary600,
        textMonthFontSize: 20,
        monthTextColor: theme.colors.title,
        arrowStyle: {
          marginHorizontal: -15,
        },
      }}
      hideExtraDays
      minDate={new Date()}
      firstDay={1}
      markingType="period"
      markedDates={markedDates}
      onDayPress={onDayPress}
    />
  );
};

export default Calendar;

export { MarkedDateProps, DayProps, CalendarProps, generateInterval };
