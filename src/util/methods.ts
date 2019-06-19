import moment from 'moment-timezone'

// UTC转北京时间时间格式
export const getTimeString = (val: string, grade: number) => {
    const date = val;
    const timezone = 'Asia/Shanghai';
    if (!grade || grade === 1) {
        return moment(date).tz(timezone).format('YYYY-MM-DD HH:mm:ss');
    } else if (grade === 2) {
        return moment(date).tz(timezone).format('YYYY-MM-DD');
    } else if (grade === 3) {
        return moment(date).tz(timezone).format('hh:mm:ss');
    }
}

// 北京时间转UTC
export const getTimeStringForUTC = (timeObj: string) => {
    if (timeObj === null || timeObj === "") {
        return null
    }
    return moment(timeObj).utc().format()
}

// 结束时间增加一天
export const addAnDay = (date: Date) => {
    let DATA: number;
    date = new Date(date)
    DATA = date.getTime()
    date = new Date((DATA / 1000 + 86400) * 1000)
    return date
}
