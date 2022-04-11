
import ReportCard from '../../components/ReportCard'
import { reports } from "../../utils/index"
import Title from '../../components/Title'

const ViewReport = () => {
  return (
    <div className="m-7">
      <Title title="View reports" />

      {reports.map((report,index) => <ReportCard key={index} monthOfReport={report.monthOfReport} date={report.date} new={report.new} id={report.id} />)}
    </div>
  )
}

export default ViewReport