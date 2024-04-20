import { IconType } from "react-icons";
import {
  LuAlertCircle,
  LuBarChart2,
  LuBriefcase,
  LuCalendar,
  LuClipboardCheck,
  LuFingerprint,
  LuFolderClosed,
  LuHeartHandshake,
  LuHome,
  LuKanbanSquare,
  LuLayers,
  LuListTodo,
  LuMail,
  LuMap,
  LuMessageSquare,
  LuNewspaper,
  LuPieChart,
  LuTable,
} from "react-icons/lu";

export type MenuItemTypes = {
  key: string;
  label: string;
  isTitle?: boolean;
  icon?: IconType;
  url?: string;
  badge?: {
    variant: string;
    text: string;
  };
  parentKey?: string;
  target?: string;
  children?: MenuItemTypes[];
};

const MENU_ITEMS: MenuItemTypes[] = [
  {
    key: "apps",
    label: "Apps",
    isTitle: true,
  },
  {
    key: "dashboard",
    label: "Dashboards",
    isTitle: false,
    icon: LuHome,
    url: "/dashboards",
  },
  {
    key: "site",
    label: "Site Overview",
    isTitle: false,
    icon: LuTable,
    children: [
      {
        key: "site-prime-box",
        label: "Prime Box",
        url: "site/prime-box",
        parentKey: "site",
      },
      // {
      //   key: "site-fac3",
      //   label: "FAC3",
      //   url: "site/fac3",
      //   parentKey: "site",
      // },
      // {
      //   key: "site-fac4-1",
      //   label: "FAC4-1",
      //   url: "site/fac4-1",
      //   parentKey: "site",
      // },
      // {
      //   key: "site-fac4-2",
      //   label: "FAC4-2",
      //   url: "site/fac4-2",
      //   parentKey: "site",
      // },
    ],
  },
  {
    key: "detail",
    label: "Detailed Information",
    isTitle: false,
    icon: LuListTodo,
    url: "/detail",
  },
  {
    key: "report",
    label: "Report",
    isTitle: false,
    icon: LuNewspaper,
    children: [
      {
        key: "report-daily",
        label: "Daily",
        url: "report/daily",
        parentKey: "report",
      },
      {
        key: "report-monthly",
        label: "Monthly",
        url: "report/monthly",
        parentKey: "report",
      },
      {
        key: "report-annual",
        label: "Annual",
        url: "report/annual",
        parentKey: "report",
      },
    ],
  },
  {
    key: "raw",
    label: "Select Raw Data",
    isTitle: false,
    icon: LuPieChart,
    url: "/raw",
  },
];

export { MENU_ITEMS };
