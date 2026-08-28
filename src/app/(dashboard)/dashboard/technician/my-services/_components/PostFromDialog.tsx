/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useActionState, useEffect, useState } from "react";

import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { PencilIcon, PlusIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  createTechnicianServices,
  updateTechnicianServices,
} from "../../../_actions/bookingActions";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface ServiceFormData {
  id?: string;
  serviceName: string;
  categoriesId: string;
  price: number;
  city: string;
  area: string;
  thumbnail: string;
  description: string;
  isPopular: boolean;
}
export type Categories = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

type PostFormDialogProps = {
  mode: "create" | "edit";
  post?: ServiceFormData;
  categories?: Categories[];
};

const PostFromDialog = ({ mode, post, categories }: PostFormDialogProps) => {
  const [open, setOpen] = useState(false);
  const action =
    mode === "edit" && post
      ? updateTechnicianServices
      : createTechnicianServices;

  const [state, formAction, pending] = useActionState(
    action as any,
    null,
  ) as any;

  useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success(
        state.message ||
          (mode === "edit"
            ? "Service updated successfully"
            : "Service created successfully"),
      );
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setOpen(false);
    } else {
      toast.error(state.message || "Something went wrong");
    }
  }, [state, mode]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {mode === "edit" ? (
          <Button variant="outline" size="sm">
            <PencilIcon data-icon="inline-start" className="mr-2 h-4 w-4" />
            Edit
          </Button>
        ) : (
          <Button>
            <PlusIcon data-icon="inline-start" className="mr-2 h-4 w-4" />
            Create Service
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {mode === "edit" ? "Edit Service" : "Create New Service"}
          </DialogTitle>
        </DialogHeader>

        <form action={formAction} className="space-y-4 py-2">
          {/* Hidden ID Field for Edit Mode */}
          {mode === "edit" && post?.id && (
            <input type="hidden" name="id" value={post.id} />
          )}

          {/* Service Name */}
          <div className="space-y-2">
            <Label htmlFor="serviceName">Service Name</Label>
            <Input
              id="serviceName"
              name="serviceName"
              defaultValue={post?.serviceName}
              placeholder="e.g. AC Servicing"
              required
            />
          </div>



          {/* Category & Price Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="categoriesId">Category</Label>
              <Select
                name="categoriesId"
                key={post?.categoriesId}
                defaultValue={post?.categoriesId}
                required
              >
                <SelectTrigger className="w-full max-w-48">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Categories</SelectLabel>
                    {categories?.map((cat) => (
                      <SelectItem key={cat.id} value={cat.id}>
                        {cat.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="price">Price (৳)</Label>
              <Input
                id="price"
                name="price"
                type="number"
                defaultValue={post?.price}
                placeholder="e.g. 500"
                required
              />
            </div>
          </div>

          {/* City & Area Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                name="city"
                defaultValue={post?.city}
                placeholder="e.g. Dhaka"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="area">Area</Label>
              <Input
                id="area"
                name="area"
                defaultValue={post?.area}
                placeholder="e.g. Dhanmondi"
                required
              />
            </div>
          </div>

          {/* Thumbnail URL */}
          <div className="space-y-2">
            <Label htmlFor="thumbnail">Thumbnail URL</Label>
            <Input
              id="thumbnail"
              name="thumbnail"
              defaultValue={post?.thumbnail ?? ""}
              placeholder="https://..."
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              defaultValue={post?.description}
              placeholder="Detail about your service..."
              required
              className="min-h-24 resize-none"
            />
          </div>

     

          <DialogFooter className="pt-4">
            <Button
              type="submit"
              disabled={pending}
              className="w-full sm:w-auto bg-[#006B7A] hover:bg-[#005a67]"
            >
              {pending
                ? "Saving..."
                : mode === "edit"
                  ? "Save Changes"
                  : "Create Service"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PostFromDialog;
