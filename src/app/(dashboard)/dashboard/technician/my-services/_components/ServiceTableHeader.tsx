import { TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function ServiceTableHeader() {
  return (
    <TableHeader>
      <TableRow>
        <TableHead>Service Name</TableHead>
        <TableHead>Price (৳)</TableHead>
        <TableHead>Location</TableHead>
        <TableHead>Popular</TableHead>
        <TableHead className="text-right">Actions</TableHead>
      </TableRow>
    </TableHeader>
  );
}