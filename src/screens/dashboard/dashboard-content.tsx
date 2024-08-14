import { SmChart } from "../../components/ui/sm-pie-chart";
import { Graph } from "../../components/ui/graph";
import { RadialShape } from "../../components/ui/radial-shape";
import { RadialStack } from "../../components/ui/radial-stack";
import { RadialText } from "../../components/ui/radial-text";

const DashboardContent = () => {
  return (
    <div className=" flex gap-5">
      <div className="flex flex-col gap-5">
        <div className="flex gap-5">
          <RadialShape />
          <RadialStack />
          <RadialText />
        </div>
        <Graph />
      </div>
      <SmChart />
    </div>
  );
};

export default DashboardContent;
