import { Colors } from "react-native-ui-lib";

import { addDays, format } from 'date-fns';

import { MarkedDates } from "../../repositories/globalEntities/MarkedDates";
import { MarkingProps } from "../../repositories/globalEntities/MarkingProps";

import { MainPageFrequencyValue } from "../../repositories/globalEntities/MainPageFrequencyValue";

export function setCalendarDates(frequencyValue: MainPageFrequencyValue, periodLength?: number) {
    if (frequencyValue?.from === undefined) {
        return;
    }

    if (periodLength === undefined) {
        periodLength = 0;
    }

    const markedDates: MarkedDates = {};
    const dateFrom = new Date(frequencyValue.from);

    for (let i: number = 0; i <= periodLength; i++) {
        const markingProps: MarkingProps = {
            color: Colors.mainRed,
            selectedColor: Colors.mainRed,
            selected: true,
        };

        const day = addDays(dateFrom, i);
        const formattedDay = format(day, 'yyyy-MM-dd');

        if (i === 0) {
            markingProps.startingDay = true;
        }

        if (i === periodLength) {
            markingProps.endingDay = true;
        }

        markedDates[formattedDay] = markingProps;
    }

    return markedDates;
}