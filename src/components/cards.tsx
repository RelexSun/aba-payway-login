import { cardItem } from "@/types/constants/cardItems";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Cards: React.FC = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
      {cardItem.map((item, index) => (
        <Card x-chunk="dashboard-01-chunk-0" key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg md:text-sm xl:text-lg font-medium">
              {item.title}
            </CardTitle>
            {item.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{item.amount}</div>
            <p className="text-xs text-muted-foreground">{item.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Cards;
