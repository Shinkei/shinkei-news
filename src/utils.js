const timeDifference = (current, previous) => {
  const msXMinute = 60 * 1000
  const msXHour = msXMinute * 60
  const msXDay = msXHour * 24
  const msXMonth = msXDay * 30
  const msXYear = msXDay * 365

  const elapsed = current - previous

  if (elapsed < msXMinute / 3) {
    return 'just now'
  }
  if (elapsed < msXMinute) {
    return 'less than 1 min ago'
  } else if (elapsed < msXHour) {
    return Math.round(elapsed / msXMinute) + 'min ago'
  } else if (elapsed < msXDay) {
    return Math.round(elapsed / msXHour) + 'h ago'
  } else if (elapsed < msXMonth) {
    return Math.round(elapsed / msXDay) + 'days ago'
  } else if (elapsed < msXYear) {
    return Math.round(elapsed / msXMonth) + 'mo ago'
  } else {
    return Math.round(elapsed / msXYear) + 'years ago'
  }
}

const timeDifferenceForDate = (date) => {
  const now = new Date().getTime()
  const updated = new Date(date).getTime()
  return timeDifference(now, updated)
}

export {timeDifferenceForDate}