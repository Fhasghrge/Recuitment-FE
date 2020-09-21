/**
 * 
 * @param {array} startTime  year, month, data, hour, mintue, second
 * @param {array} endTime  year, month, data, hour, mintue, second
 * * return now-time is waiting? pending? ended?
 */
export function calProgress(startTime = [2020, 9, 21, 18, 0, 0], endTime = [2020, 9, 28, 18, 0, 0]) {
  const nowTime = getNow()
  if (compareTime(nowTime, startTime) === 0) {
    return 'waiting'
  } else if (compareTime(nowTime, endTime) === 0) {
    return 'pending'
  } else {
    return 'ended'
  }
}

/**
 * * return nowtime:array
 */
function getNow() {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth() + 1
  const date = now.getDate()
  const hour = now.getHours()
  const minute = now.getMinutes()
  const second = now.getSeconds()
  return [year, month, date, hour, minute, second]
}

/**
 * 
 * @param {array} pTime 
 * @param {array} nTime 
 * * compare two time
 */
function compareTime(pTime, nTime) {
  for (let i = 0; i < pTime.length; i++) {
    if (pTime[i] > nTime[i]) return 1
    else if (pTime[i] < nTime[i]) return 0
  }
  return -1
}

/**
 * 
 * @param {array} startTime 
 * @param {array} endTime 
 * * return the time lefted
 */
export function lastTime(startTime = [2020, 9, 21, 18, 0, 0], endTime = [2020, 9, 28, 18, 0, 0]) {
  const progress = calProgress(startTime, endTime)
  if (progress === 'waiting') {
    return timeFn(`${startTime[0]}-${startTime[1]}-${startTime[2]} ${startTime[3]}:${startTime[4]}:${startTime[5]}`)
  } else if (progress === 'pending') {
    return timeFn(`${endTime[0]}-${endTime[1]}-${endTime[2]} ${endTime[3]}:${endTime[4]}:${endTime[5]}`)
  } else {
    return 0
  }
}


/**
 * 
 * @param {time} d1 
 * * 计算d1 到现在的时间差
 */
function timeFn(d1) {//di作为一个变量传进来
  //如果时间格式是正确的，那下面这一步转化时间格式就可以不用了
  let dateBegin = new Date(d1.replace(/-/g, "/"));//将-转化为/，使用new Date
  let dateEnd = new Date();//获取当前时间
  let dateDiff = dateEnd.getTime() - dateBegin.getTime();//时间差的毫秒数
  let dayDiff = - Math.floor(dateDiff / (24 * 3600 * 1000));//计算出相差天数
  let leave1 = dateDiff % (24 * 3600 * 1000)    //计算天数后剩余的毫秒数
  let hours = - Math.floor(leave1 / (3600 * 1000))//计算出小时数
  //计算相差分钟数
  let leave2 = leave1 % (3600 * 1000)    //计算小时数后剩余的毫秒数
  let minutes = - Math.floor(leave2 / (60 * 1000))//计算相差分钟数
  //计算相差秒数
  let leave3 = leave2 % (60 * 1000)      //计算分钟数后剩余的毫秒数
  let seconds = - Math.round(leave3 / 1000)
  // console.log(" 相差 " + (dayDiff - 1) + "天 " + hours + "小时 " + minutes + " 分钟" + seconds + " 秒")
  return [dayDiff - 1, hours - 1 , minutes - 1, seconds]
}

// console.log(calProgress())
console.log(lastTime())
