import { ReactElement } from "react";
import { StaticImageData } from "next/image";

import {
  ApiEndPoint,
  ApiRequestMethod,
  AuthPage,
  EmptyValue,
  ErrorMessage,
  FormInputType,
  HeightClass,
  LayoutMode,
  LeaderBoardsTab,
  LeaderBoardsType,
  LineEditType,
  SuccessMessage,
  TabMenu,
  TabParam,
  ValidationType,
} from "@/utils/constant";

export type SubMenu = {
  title: string;
  url: string;
  tab?: number;
  subtab?: number;
};

export type TabItemProps = {
  title?: string;
  active?: boolean;
  url?: string;
  id: number;
  tab: number;
  handler: (index: number) => void;
};

export type SubItemProps = {
  active?: boolean;
  title?: string;
  subTab: number;
  handler: (index: number) => void;
};

export type IconHoverEffectDataProps = {
  href: string;
  parent: string;
  title: string;
};

export type SubItems = {
  tabs: SubItemProps[];
  parent: TabMenu;
};

export type DropDownItem = {
  id?: number;
  label: string;
};

export type ValidResponseType = {
  valid: boolean;
};
export type AuthResponseType = {
  status: number;
  message: string;
};
export type LoginResponseType = {
  status: number;
  message: string;
  user: {
    id: string;
    userName: string;
    email: string;
    question: string;
  };
};

export type SecurityQuestionProps = {
  id: string | EmptyValue;
  label: string;
};

export type ComboBoxProps = {
  items: DropDownItem[];
  label: string;
  type: "normal";
};

export type NavLink = {
  title: string;
  url: string;
  submenu?: SubMenu[];
};

export type StreamingSharedProps = {
  userIcon: StaticImageData;
  name: string;
  category: number;
  viewers: number;
};

export type SuccessMessageType = {
  validation: ValidationType;
  message: SuccessMessage;
};
export type ValidationFunctionProps = {
  function: Function;
  validation: ValidationType;
};

export type MockApiProcessProps<T> = {
  url: ApiEndPoint;
  method: ApiRequestMethod;
  params?: object;
  response: T;
};

export interface StreamingDataProps extends StreamingSharedProps {
  streamingPicture: StaticImageData;
  streamTitle: string;
  language: string[];
}

export interface StreamLeftLayoutItemsProps extends StreamingSharedProps {
  categoryString: string | undefined;
}

export interface GridPanelItemsProps extends StreamingDataProps {
  categoryString: string | undefined;
}

export type IconGroupProps = {
  parent: string;
  title?: string;
};

export type Rank = {
  1: string;
  2: string;
  3: string;
  [key: number]: string; // Add this line
};

export type Streaming = {
  channelID: string;
  brand: string;
  width?: number;
  height?: number;
  top?: number;
};

export type RankingTabs = "clans" | "individuals" | "ladder" | "history";

export type Winner = {
  clanName: string;
  pfp: string;
  pts: number;
  rank: {
    type: string;
    rank: 1 | 2 | 3;
  };
};

export type PositionAndSizeProps = {
  left?: number;
  top?: number;
  bottom?: number;
  right?: number;
  width: number;
  height: number;
};

export type BackgroundImageEffectProps = {
  positionAndSize: PositionAndSizeProps;
  transform?: number;
  image: StaticImageData;
};

export type ResetTypeProps = {
  password: string | EmptyValue;
  confirmPassword: string | EmptyValue;
};
export type ImageItem = {
  src: string;
  parent: string;
  clname: string;
};

export type CategoryTabMapListProps = {
  tab: LeaderBoardsTab;
  type: LeaderBoardsType;
};

export type AuthStepDataProps = {
  page: AuthPage;
  step: number;
  image: StaticImageData;
  className: HeightClass;
};
export type Player = {
  id: string;
  rank: number;
  clanName: string;
  characterName: string;
  type: {
    name: string;
    rank?: number;
  };
  emblem: string | undefined | null; //pfp image
  role: string;
  playCount: {
    win: number;
    lose: number;
    winRate: number;
    kills: number;
    deaths: number;
  };
  level: number;
  points: number;
  experience: number;
};

export type History = {
  id: string;
  date: string;
  map: string;
  winners: string[];
  firstPoints: number;
  losers: string[];
  secondPoints: number;
};

export type Competive = {
  id: string;
  name: string;
  level: number;
  rank: string;
  points: number;
  joinDate: string;
};

export type News = {
  id: number;
  imgUrl: string;
  date: string;
  dataType: string;
  title: string;
  content: string[];
};

export type CardItem = {
  cardTitle: string;
  cardContent: string;
};

export type CardParagrpah = {
  cardItems: CardItem[];
  itemTitle: string;
};

export type NewsContentDetailType = {
  datePost: string;
  newsContent: string;
  itemType: TabParam;
  title: string;
  cards: CardParagrpah[];
};

export type Install = {
  tool: string;
  firstOption: string;
  secondOption: string;
};

export type Faq = {
  question: string;
  answer: string[];
};
export type RowProps = {
  columns?: number[];
  data: string[];
  header?: boolean;
  icon?: string[];
};
export type CellProps = {
  cellClass: string;
  key: number;
  colSpan?: number;
  iconPath?: string;
  value?: string;
};

export type DataTableProps = {
  data: RowProps[];
};

type SXTYPE = {
  font:
    | "medium"
    | "large"
    | "small"
    | "xsmall"
    | "xsmall-xl"
    | "xsmall-xs"
    | "xsmall-mobile-xl"
    | "xsmall-sm"
    | "medium-mobile-sm"
    | "medium-sm"
    | "medium-xs"
    | "xlsmall"
    | "xsmall-lg";
  color: "primary" | "yellow" | "yellow-sm";
  shadow: "shadow" | "black-shadow";
  hidden?: "hide-sm" | "hide-lg";
  bgcolor?: "bg-yellow";
  mode?: "box";
};
export type ValidationConfigurationParams = {
  serverCheck?: boolean;
  maxLength?: number;
  minLength?: number;
  password?: string | EmptyValue;
};

export type ValidatorFunctionProps = (
  param: string | EmptyValue,
  config: ValidationConfigurationParams | undefined
) => Promise<boolean | string>;
export type ValidationReturnProps = boolean | ErrorMessage | undefined;

export type StepFormListDataProps = {
  label: string;
  type: LineEditType;
  identifier?: FormInputType;
  key: string;
  config?: ValidationConfigurationParams;
  validation?: ValidationType;
};
export type LineEditStyle = {
  label?: {
    font?: "font-sm";
    color?: "primary";
  };
  container?: {
    width?: "width-sm" | "width-sx" | "width-ls" | "width-xs";
  };
};

export type ResetInformationType = {
  email: string;
};
export type PasswordResetInfoType = {
  password: string;
};

export type FormStepValueProps = {
  userName: string | EmptyValue;
  password: string | EmptyValue;
  selectedIndex: string | EmptyValue;
  confirmPassword: string | EmptyValue;
  answer: string | EmptyValue;
};
export type FormLoginValueProps = {
  userName: string | EmptyValue;
  password: string | EmptyValue;
};

export type RegisterFormValueProps = Required<
  FormStepValueProps & {
    email: string | EmptyValue;
    check: boolean;
  }
>;

export type OperationItemProps = {
  label: string;
  keyboard?: string;
  type: number;
  col?: number;
  subTab: number | undefined;
};

type LineEditStyleProps = {
  width: "width-sm" | "width-sx";
};

type HeadProps = {
  white: string;
  yellow: string;
};

type LayoutInterface = {
  parent: number;
  child: number;
};

type LayoutTwoInterface = {
  parent: number;
  child: { w: number; w1: number; h: number; h1?: number };
};
type SpecialParagraph = {
  yellow: string;
  white: string;
};

type Paragraph = {
  title: string;
  repeat?: SpecialParagraph[];
};

export type StepFormListProps = {
  step: number;
  component: ReactElement;
};

export type GeneralInformationItemProps = {
  imageData: StaticImageData;
  layoutOne: LayoutInterface;
  layoutTwo: LayoutTwoInterface;
  title?: string;
  mode?: LayoutMode.LEFT | LayoutMode.RIGHT;
  special?: boolean;
  paragraphs: Paragraph[];
};

export type WeaponsLeftBoxProps = {
  title: string;
  paragraphs: string[];
  width: number;
  image?: StaticImageData;
};
export type WeapShStatus = {
  title: string;
  show: number;
};

export type WeaponItemProps = {
  title: string;
  icon: StaticImageData;
  paragraps: string[];
  status?: WeapShStatus[];
};

export type SharedTabHeaderProps = {
  tab?: number;
  subTab?: number;
};
export type MockAdapterOptions = {
  delayResponse?: number;
  onNoMatch?: "passthrough" | "throwException";
};
export type ArmorItemProps = {
  title: string;
  paragraphs: { desktop: string; mobile: ReactElement }[];
};

export type RowDataProps = string[];

export type TableDataProps = RowDataProps[];

export type TableItemProps = {
  title: string;
  table: TableDataProps;
};

export type SpecialStringProps = {
  color: string;
  title: string;
  mobile?: ReactElement;
};

export type BlogContentProps = Pick<
  BlogProps,
  "title" | "head" | "text" | "hiddenShare" | "subfix"
>;

export type BottomParagraphProps = {
  title: string;
  child?: SpecialStringProps[];
};

export type MiscellaneousItemProps = {
  title: string;
  src: StaticImageData;
  paragraphs: { desktop: string; mobile?: ReactElement }[];
};

export type ParaGraphItem = { mobile?: ReactElement; desktop: string };

export type ClanItemProps = {
  title?: string;
  paragraph?: ParaGraphItem[];
  header?: string[];
  src?: StaticImageData;
};

export type MarkItemProps = {
  src: StaticImageData;
  paragraph: string;
};

export type WeaponsRightBoxProps = {
  items: WeaponItemProps[];
};

export type Panel = {
  left: WeaponsLeftBoxProps;
  right: WeaponsRightBoxProps;
  gap: number;
};

export type WeaponsProps = {
  panels: Panel[];
};

export type BlogProps = {
  gif: StaticImageData;
  title: string;
  hiddenShare?: boolean;
  subfix?: string;
  mode: LayoutMode.RIGHT | LayoutMode.LEFT;
  head: HeadProps[];
  text: {
    text: string;
    mode: LayoutMode.LEFT | LayoutMode.CENTER | LayoutMode.CENTER;
  }[];
};

export type HeadTitleProps = {
  title?: string | ReactElement;
  sx?: Partial<SXTYPE>;
};

type StyleProps = {
  color?: "gradient" | "yellow";
  effect?: "hover";
  size: "large";
};

export type TabMenuButtonProps = {
  label: string;
  clickHandler: (href: string) => void;
  sx?: StyleProps;
  href: string;
  activate?: boolean;
};
