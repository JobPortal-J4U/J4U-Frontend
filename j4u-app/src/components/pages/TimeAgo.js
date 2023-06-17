import {formatDistanceToNow , parseISO } from "date-fns"


const TimeAgo = ({date}) => {
    const postDate = parseISO(date)
    const timePeriod = formatDistanceToNow(postDate)


    return (
    <span title={date} className="postCredit">
      &nbsp; &nbsp; Posted : <em> {timePeriod} </em>
    </span>
  )
}

export default TimeAgo