"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function MyServicesHeader() {
  const [isOpen, setIsOpen] = useState(false);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Service created!");
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">My Services</h1>
        <p className="text-sm text-muted-foreground">
          Manage your service offerings and pricing.
        </p>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button className="bg-[#006B7A] hover:bg-[#005a67]">
            <Plus className="mr-2 h-4 w-4" />
            Create Service
          </Button>
        </DialogTrigger>

        {/* Modal Content */}
        <DialogContent className="sm:max-w-137.5 max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Add New Service</DialogTitle>
            <DialogDescription>
              Fill in the details below to create a new service offering.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-5 py-4">
            {/* Service Name */}
            <div className="space-y-2">
              <Label htmlFor="serviceName">Service Name</Label>
              <Input
                id="serviceName"
                placeholder="e.g. Ceiling Fan Installation"
                required
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Category ID (Ideally a Select Dropdown) */}
              <div className="space-y-2">
                <Label htmlFor="categoryId">Category</Label>
                <Input
                  id="categoryId"
                  placeholder="Select Category"
                  required
                />
              </div>

              {/* Price */}
              <div className="space-y-2">
                <Label htmlFor="price">Price (৳)</Label>
                <Input
                  id="price"
                  type="number"
                  placeholder="e.g. 400"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* City */}
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="e.g. Dhaka" required />
              </div>

              {/* Area */}
              <div className="space-y-2">
                <Label htmlFor="area">Area</Label>
                <Input id="area" placeholder="e.g. Uttara" required />
              </div>
            </div>

            {/* Thumbnail URL */}
            <div className="space-y-2">
              <Label htmlFor="thumbnail">Thumbnail Image URL</Label>
              <Input
                id="thumbnail"
                type="url"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Safe and perfect installation or replacement..."
                className="resize-none h-24"
                required
              />
            </div>

            {/* Popular Checkbox/Toggle */}
            <div className="flex items-center justify-between rounded-lg border p-4 shadow-sm">
              <div className="space-y-0.5">
                <Label className="text-base">Mark as Popular</Label>
                <p className="text-xs text-muted-foreground">
                  Highlight this service to get more attention.
                </p>
              </div>
              
              <input
                type="checkbox"
                className="h-5 w-5 rounded border-gray-300 text-[#006B7A] focus:ring-[#006B7A]"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <Button type="submit" className="w-full bg-[#006B7A] hover:bg-[#005a67]">
                Save Service
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}