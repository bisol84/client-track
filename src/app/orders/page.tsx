import getOrders from "./data";
import OrdersTable from "@/components/Orders/OrdersTable";

export default async function Orders() {
  const orders = await getOrders();

  return (
    <main className="m-4">
      <OrdersTable orders={orders} />
    </main>
  );
}
