import { CardTypes } from "../interfaces";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";

export const cardItem: CardTypes[] = [
  {
    title: "Total Revenue",
    amount: "+35,320",
    description: "+5.4% from last month",
    icon: <DollarSign className="h-4 w-4 text-muted-foreground" />,
  },
  {
    title: "Subscriptions",
    amount: "+1,200",
    description: "+12% from last month",
    icon: <Users className="h-4 w-4 text-muted-foreground" />,
  },
  {
    title: "Sales",
    amount: "+17,901",
    description: "+8.2% from last month",
    icon: <CreditCard className="h-4 w-4 text-muted-foreground" />,
  },
  {
    title: "Active Now",
    amount: "+573",
    description: "+201 from last hour",
    icon: <Activity className="h-4 w-4 text-muted-foreground" />,
  },
];
