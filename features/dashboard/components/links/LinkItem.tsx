import classNames from "classnames";
import { FC } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  name: string | null;
  clicks?: number;
  selected: boolean;
}

const LinkItem: FC<Props> = ({ name, clicks, selected, ...props }) => {
  return (
    <div
      className={classNames("box py-3 px-4 cursor-pointer", {
        outline: selected,
      })}
      {...props}
    >
      <span className="font-bold block">{name}</span>
      {clicks !== undefined && (
        <span className="text-secondary text-sm">
          <svg
            width="17"
            height="10"
            viewBox="0 0 17 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 inline"
          >
            <path
              d="M16.2964 8.75H14.2071V2.21581C14.2071 1.68338 13.6449 1.24998 12.9536 1.24998H10.0286V2.49999H12.5357V10H16.2964C16.5273 10 16.7143 9.86016 16.7143 9.6875V9.0625C16.7143 8.88984 16.5273 8.75 16.2964 8.75ZM8.15448 0.0197076L3.1402 0.991194C2.76804 1.06326 2.50714 1.32225 2.50714 1.61952V8.75H0.417857C0.186991 8.75 0 8.88984 0 9.0625V9.6875C0 9.86016 0.186991 10 0.417857 10H9.19286V0.648029C9.19286 0.226544 8.68203 -0.0826364 8.15448 0.0197076ZM6.89464 5.62499C6.5486 5.62499 6.26786 5.34511 6.26786 4.99999C6.26786 4.65487 6.5486 4.37499 6.89464 4.37499C7.24068 4.37499 7.52143 4.65487 7.52143 4.99999C7.52143 5.34511 7.24068 5.62499 6.89464 5.62499Z"
              fill="#FF4042"
            />
          </svg>

          <>
            <span className="font-bold">{clicks}</span> clicks
          </>
        </span>
      )}
    </div>
  );
};

export default LinkItem;
