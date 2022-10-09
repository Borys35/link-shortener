import { Click, Link } from "@prisma/client";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { FC } from "react";
import { Line } from "react-chartjs-2";
import Caption from "../../../../components/atoms/Caption";
import Heading from "../../../../components/atoms/Heading";

const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const MINUTE = 1000 * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  currentLink: Link & { clicks: Click[] };
}

const OverviewStats: FC<Props> = ({ currentLink }) => {
  const { clicks } = currentLink;

  const now = new Date();
  console.log("today", now.getDay());

  function getLastWeekClicks() {
    const data = [];

    for (let i = 0; i <= 6; i++) {
      const filteredClicks = clicks.filter((click) => {
        const nowDays = Math.round(new Date().getTime() / DAY - i);
        const clickDays = Math.round(
          new Date(click.clickedAt.toString()).getTime() / DAY
        );

        return nowDays === clickDays;
      });
      data.push(filteredClicks.length);
    }

    return data;
  }

  return (
    <div>
      <Heading level={5} className="mb-8">
        Statistics
      </Heading>
      <div className="box px-8 py-5 mb-4">
        <Heading level={6} className="mb-4">
          Overall
        </Heading>
        <div className="flex justify-between">
          <div className="w-4/5">
            <Line
              data={{
                labels: WEEKDAYS,
                datasets: [
                  {
                    label: "Total clicks",
                    data: getLastWeekClicks(),
                    borderColor: "#FF4042",
                    backgroundColor: "#F4D1D4",
                  },
                ],
              }}
            />
          </div>
          <div className="text-end mt-8">
            <span className="font-bold text-4xl block">{clicks.length}</span>
            <Caption>total clicks</Caption>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-4">
        <div className="box px-8 py-5">
          <Heading level={6}>Via</Heading>
        </div>
        <div className="box px-8 py-5">
          <Heading level={6}>Location</Heading>
        </div>
      </div>
    </div>
  );
};

export default OverviewStats;
