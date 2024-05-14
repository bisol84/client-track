import getOrders from "./data";
import OrdersTable from "@/components/Orders/OrdersTable";
import { AddOrderModal } from "./addOrderModal";

export default async function Orders() {
  const orders = await getOrders();

  return (
    <main className="m-4">
      <div className="flex justify-end items-end">
        <AddOrderModal />
      </div>
      <OrdersTable orders={orders} />
    </main>
  );
}
