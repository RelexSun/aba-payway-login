import Cards from "@/components/cards";
import TableCard from "@/components/table";
import TransactionTable from "@/components/transaction";

const DashboardContent = () => {
  return (
    <main className="flex flex-col gap-3 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex my-4 justify-between w-full text-[30px] font-semibold">
        <h1>Dashboard</h1>
      </div>
      <Cards />
      <div className="flex flex-col justify-center gap-3 lg:flex-row lg:justify-between lg:items-start">
        <TransactionTable />
        <TableCard />
      </div>
    </main>
  );
};

export default DashboardContent;
