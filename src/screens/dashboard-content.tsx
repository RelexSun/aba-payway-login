"use client";

import Cards from "@/components/cards";
import TableCard from "@/components/table";
import { Overview } from "@/components/overview";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const DashboardContent = () => {
  return (
    <div className="pt-10 space-y-5">
      <div className="header-title">
        <h1>Dashboard</h1>
      </div>
      <Cards />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-7">
        <Card className="col-span-1 lg:col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card>
        <Card className="col-span-1 lg:col-span-3">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>You made 265 sales this month.</CardDescription>
          </CardHeader>
          <CardContent>
            <TableCard />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardContent;
