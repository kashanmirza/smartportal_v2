'use strict';

const moment = require('moment');

module.exports = {
    now: new Date().getTime(),
    newDate: function() {
        return new Date().getTime();
    },
    nowStr: moment().format(),
    newDateStr: function() {
        return moment().format();
    },
    yyyyMM: moment().format('YYYY-MM'),
    ddMMyyyyMS: function(date) {
        date = date || '';
        return moment(date, 'DDMMYYYY').valueOf();
    },
    yyyyMMddMS: function(date) {
        date = date || '';
        return moment(date, 'YYYYMMDD').valueOf();
    },
    ddMMyyyyslash: function(date) {
        date = date || '';
        return moment(date, 'DD/MM/YYYY').valueOf();
    },
    ddMMyyyyformat: function(unix) {
        return moment(unix).format('YYYYMMDD');
    },
    MSddMMyyyy: function(unix) {
        return moment(unix).format('DD/MM/YYYY');
    },
    MMddyyyy: function(unix) {
        return moment(unix).format('MM/DD/YYYY');
    },
    MSddMMyyyyHHmmSS: function(unix) {
        return moment(unix).format('DD/MM/YYYY h:mm:ss a');
    },
    MSddMMyyyyHHmmS: function(unix) {
        return moment(unix).format('DD/MM/YYYY hh:mm:ss');
    },
    MSddMMyyyyHHmmSSBC: function(unix) {
        return moment(unix).subtract(4, 'hours').format('DD/MM/YYYY h:mm:ss a');
    },
    ddMMyyyyHHmmSSMS: function(date) {
        return moment(date, 'DD/MM/YYYY hh:mm:ss').valueOf();
    },
    addHours: function(date, hours) {
        return moment(date).add(hours, 'hours').valueOf();
    },
    addDays: function(date, days) {
        return moment(date).add(days, 'days').valueOf();
    },
    addSeconds: function(date, seconds) {
        return moment(date).add(seconds, 'seconds').format();
    },
    subHours: function(date, hours) {
        return moment(date).subtract(hours, 'hours').valueOf();
    },
    ddMMyyyy: moment().format('DD-MM-YYYY'),
    unixToDubaiEpayFormat: function(unix) {
        return moment(unix).format('DD-MM-YYYY HH:mm:ss.000');
    },
    ddMMyyyyFromDate: function(date) {
        date = date || '';
        return moment(date + ' 00:00:00.000', 'DD/MM/YYYY HH:mm:ss.000').valueOf();
    },
    ddMMyyyyToDate: function(date) {
        date = date || '';
        return moment(date + ' 23:59:59.999', 'DD/MM/YYYY HH:mm:ss.999').valueOf();
    },
    humanizeDate: function() {
        return moment().format('MMMM Do YYYY, h:mm:ss a');
    },
    MMYYYY: function(date) {
        date = date || new Date().valueOf();
        return moment(date).format('MMM YYYY');
    },
    YYYY: function(date) {
        date = date || new Date().valueOf();
        return moment(date).format('YYYY');
    },
    subDate: function(date, type, count) {
        return moment(date).subtract(count, type).valueOf();
    },
    addDate: function(date, type, count) {
        return moment(date).add(count, type).valueOf();
    },
    roundToYear: function(unix) {
        const date = new Date(unix);
        return new Date(date.getFullYear(), 0);
    },
    roundToMonth: function(unix) {
        const date = new Date(unix);
        return new Date(date.getFullYear(), date.getMonth());
    },
    getDaysDiff: function(fromDate, toDate)
    {
        var a = moment(fromDate,'DD/MM/YYYY');
        var b = moment(toDate,'DD/MM/YYYY');
        var diffDays = b.diff(a);
        return diffDays / (1000 * 60 * 60 * 24);

    }
};