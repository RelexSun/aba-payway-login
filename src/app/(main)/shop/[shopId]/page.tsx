import { getTable } from "@/actions/table/get";
import TableList from "./components/table-list";

export default async function TablePage({
  params,
}: {
  params: { shopId: string };
}) {
  const { tables } = await getTable(params.shopId);

  return (
    <>
      <main className="main-container sm:px-6 lg:px-8 mt-10 ">
        <TableList tables={tables} shop_id={params.shopId} />
      </main>
    </>
  );
}
