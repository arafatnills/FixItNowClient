import { Table } from "@/components/ui/table";
import { ServiceTableHeader } from "./ServiceTableHeader";
import { ServiceTableBody } from "./ServiceTableBody";
import { Categories, ServiceFormData } from "./PostFromDialog"; 

interface ServiceTableProps {
  myServices: ServiceFormData[];
  categories?: Categories[]
}
// categories={categories}
export function ServiceTable({ myServices, categories=[]}: ServiceTableProps) {

  return (
    <div className="overflow-hidden rounded-xl border bg-background shadow-sm">
      <Table>
        <ServiceTableHeader />
        <ServiceTableBody services={myServices} categories={categories}/>
      </Table>
    </div>
  );
}