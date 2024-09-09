import Cards from "@/components/cards";
import TableCard from "@/components/table";
import TransactionTable from "@/components/transaction";

const DashboardContent = () => {
  return (
    <>
      <div className="header-title">
        <h1>Dashboard</h1>
      </div>
      <Cards />
      <div className="flex flex-col justify-center gap-3 lg:flex-row lg:justify-between lg:items-start">
        <TransactionTable />
        <TableCard />
      </div>
    </>
  );
};

export default DashboardContent;
