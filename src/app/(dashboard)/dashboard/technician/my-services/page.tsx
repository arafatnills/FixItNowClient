import {
  getAllCategories,
  getTechnicianServices,
} from "../../_actions/bookingActions";

import PostFromDialog from "./_components/PostFromDialog";
import { ServiceTable } from "./_components/ServiceTable";

const MyServicesPage = async () => {
  const categories = await getAllCategories();
  const {data} = await getTechnicianServices();

  return (
    <div className="space-y-6 p-6 container mx-auto">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">My Services</h1>

        <PostFromDialog mode="create" categories={categories}/>
      </div>

      <ServiceTable myServices={data} categories={categories}/>
    </div>
  );
};

export default MyServicesPage;
