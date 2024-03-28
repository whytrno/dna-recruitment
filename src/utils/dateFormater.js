import {format, parseISO} from 'date-fns';

export const formatDate = (dateTimeString) => {
    const date = parseISO(dateTimeString);
    const formattedDate = format(date, "EEEE, dd MMMM yy' 'HH.mm");
    return formattedDate;
};