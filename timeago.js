function Timeago () {
    var calculateTimeago = (date) => {
        let diff = new Date().getTime() - date.getTime(),
            calculated = {};

        calculated.seconds = Math.round(diff / 1000);
        calculated.minutes = Math.round(calculated.seconds / 60);
        calculated.hours = Math.round(calculated.minutes / 60);
        calculated.days = Math.round(calculated.hours / 24);
        calculated.weeks = Math.round(calculated.days / 7);
        calculated.months = Math.round(calculated.weeks / 4);
        calculated.years = Math.round(calculated.months / 12);

        return calculated;
    },
    readableTimeago = (date) => {
        let calculated = calculateTimeago(date);

        if (calculated.months > 12) {
            let years = (calculated.years > 1) ? 'years' : 'year';
            return `${calculated.years} ${years} ago`;
        } else if (calculated.weeks > 7) {
            let months = (calculated.months > 1) ? 'months' : 'month';
            return `${calculated.months} ${months} ago`;
        } else if (calculated.days > 21) {
            let weeks = (calculated.weeks > 1) ? 'weeks' : 'week';
            return `${calculated.weeks} ${weeks} ago`;
        } else if (calculated.hours > 24) {
            let days = (calculated.days > 1) ? 'days' : 'day';
            return `${calculated.days} ${days} ago`;
        } else if (calculated.minutes > 60) {
            let hours = (calculated.hours > 1) ? 'hours' : 'hour';
            return `${calculated.hours} ${hours} ago`;
        } else if (calculated.seconds > 60) {
            let minutes = (calculated.minutes > 1) ? 'minutes' : 'minute';
            return `${calculated.minutes} ${minutes} ago`;
        } else {
            let seconds = (calculated.seconds > 1) ? 'seconds' : 'second';
            return `${calculated.seconds} ${seconds} ago`;
        }
    }

    return {
        replace: false,
        restrict: 'A',
        template: '',
        link: (scope, element, attributes) => {
            let parsed = new Date(parseInt(attributes.mrTimeago, 10));
            $(element).text(readableTimeago(parsed));
        }
    };
}

export default Timeago;
