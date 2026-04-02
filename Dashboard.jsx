import SummaryCards from './SummaryCards'
import Transactions from './Transactions'
import Charts from './Charts'
import Insights from './Insights'
import RoleSwitcher from './RoleSwitcher'

export default function Dashboard() {
  return (
    <div>
      <h1>Finance Dashboard</h1>
      <RoleSwitcher />
      <SummaryCards />
      <Charts />
      <Transactions />
      <Insights />
    </div>
  )
}
