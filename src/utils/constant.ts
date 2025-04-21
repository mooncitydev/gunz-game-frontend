export enum LayoutMode {
  LEFT = "left",
  RIGHT = "right",
  CENTER = "center",
}

export enum KeyBoardType {
  SHIFT = 2,
  Normal = 1,
  ESC = 3,
  ENTER = 4,
  NOKEYBOARD = 5,
}

export enum TabMenu {
  Controls = 1,
  Movements = 2,
  ITEMS = 3,
  CLAN = 4,
  COMMANDS = 5,
}

export enum ApiEndPoint {
  FETCH_PLAYER_DATA = `/user/ranking`,
  FETCH_STREAMER_FILTER_LIST = `/filter/streamers/list`,
  FETCH_STREAMING_DATA = `/streaming/data`,
  FETCH_MORE_STREAMERS = `/fetch/more/streaming`,
  FETCH_NEWS_DATA = `/fetch/news/data`,
  FETCH_MORE_NEWS = `/fetch/more/news`,
  SEAECH_NEWS_DATA = `/search/news/data`,
  FETCH_MORE_PLAYER = `/fetch/more/player`,
  FETCH_NEWS_DETAIL = `/fetch/news/detail`,
  FETCH_COMPETIVE_DATA = `/fetch/competive/data`,
  FETCH_COMPETIVE_PAGE_NUMBER = `/fetch/competive/page/number`,
  SEARCH_PLAYER_DATA = `/search/player/data`,
  FETCH_SECURITY_QUESTION = `/fetch/security`,
  CHECK_VALID_EMAIL = `/check/valid/email`,
  CHECK_VALID_USERID = `/check/valid/userId`,
  REGISTER_USER = `/auth/add/user`,
  LOGIN_USER = `/auth/login`,
  FORGOT_PASSWORD = `/auth/forgot/password`,
  RESET_PASSWORD = `/auth/reset/password`,
}

export enum AxiosMode {
  Mock = "mock",
  Live = "live",
}

export enum ResponseCode {
  Success = 200,
}

export enum MetaDataConstant {
  DownLoad = "Downloading | GunZ Website",
  PlayerGuide = "Player Guide | GunZ Website",
  ClanDetail = "Clan Detail | GunZ Website",
  UserDetail = "User Detail | GunZ Website",
  NewsDetail = "News Detail | GunZ Website",
  News = "News | GunZ Website",
  Streamers = "Streamers | GunZ Website",
  Home = "Home | GunZ Website",
  Ranking = "Ranking | GunZ Website",
  Login = "Login | Gunz Website",
  Register = "Register| Gunz Website",
  Recovery = "Recovery | Gunz Website",
  Reset = "Reset-password | Gunz Website",
}

export enum StreamingFilterType {
  All = 0,
  Twitch = 1,
  Kick = 2,
  Youtube = 3,
  Facebook = 4,
}

export enum ErrorMessage {
  DataFetching = `Failed to fetch data from the server`,
  LoadMoreData = `Failed to load more data from the server`,
  SearchData = `Failed to search  data from the server`,
  EMAIL_TAKEN = `Email address is already taken.`,
  Add_User = `Failed to signup `,
  Login_User = `Failed to login`,
  Reset_Password = `Fqailed to reset the password`,
  Empty = ``,
  FetchDetaildata = `Failed to get detail data from the server`,
  DateInputFormat = `Wrong input with date string `,
  InputValueEmptyError = `please input the form value`,
  ValueNotEmpty = `please input the value`,
  PasswordValidLengthError = `Password is too short. It must be at least 5 characters long.`,
  PasswordValidAlphabetError = `Password must contain at least one alphabetic character.`,
  PasswordOneIncludeNumberError = `Password must contain at least one digit.`,
  UserIdValidLengthShortError = `UserName Length is too short. It must be.`,
  ValueLengthShortError = `The value is too short. It must be at least`,
  ValueLengthMaxError = `The Value is too long. It must be less than`,
  UserIdValidLengthMaxError = `UserName Length is too long. It must be.`,
  PasswordMatchedError = `Passwords don't matched`,
  PasswordOneSpecialCharacterError = `Password must contain at least one of the special characters: @ $ ! % * ? &`,
  PasswordNotCriteria = `Password does not meet the strong password criteria.`,
}

export enum ApiRequestMethod {
  POST = "POST",
  GET = "GET",
  DELETE = "DELETE",
  PATCH = "PATCH",
}

export enum LeaderBoardsType {
  CLANS = 0,
  INDIVIDUAL = 1,
  LADDER = 2,
  HISTORY = 3,
}

export enum HttpLink {
  Tabs = "tabs",
  Id = "id",
}

export enum SortBy {
  ALL = "ALL",
}

export enum Select {
  Default = "Please select value",
}

export enum PageNumber {
  Start = 0,
  FirstPage = 1,
}

export enum PageNation {
  Start = 1,
}

export enum AxiosConfiguartionConstant {
  DelayResponseTime = 4000,
  RetryRequestNumber = 3,
  CacheLifePeriod = 10 * 60 * 1000,
  MockLoadMoreCount = 5,
  TableDisplayRowCount = 5,
}

export enum LeaderBoardsTab {
  CLANS = `clans`,
  INDIVIDUAL = `individuals`,
  LADDER = `ladder`,
  HISTORY = `history`,
}
export enum LeaderBoardsSearchParm {
  CLAN = "clanName",
  Name = "characterName",
}

export enum SearchedPosition {
  NotFound = -1,
}

export enum SearchedElement {
  FoundLimitLength = 1,
  NotFound = 0,
}

export enum FormStep {
  FirstStep = 1,
  SecondStep = 2,
  ThirdStep = 3,
  FourthStep = 4,
}

export enum ButtonConstant {
  Active = "active",
}
export enum HeightClass {
  Height80 = "height-80",
  Height52 = "height-52",
  Height115 = "height-115",
  Height97 = "height-97",
  Height110 = "height-110",
  Height69 = "height-69",
}

export enum StringConstant {
  Empty = "",
}

export enum FormInputType {
  Email = "email",
  UserName = "userName",
  Password = "password",
  ConfirmPassword = "confirmPassword",
  Question = "selectedIndex",
  Answer = "answer",
}

export enum AuthPage {
  Login = "login",
  Register = "register",
  Recovery = "recovery",
  Reset = "reset",
}

export enum TabParam {
  LATEST = "latest",
  ANNOUNCEMENTS = "announcements",
  PATCH_NOTES = "patchnotes",
  BLOG_POSTS = "blogposts",
}

export enum LineEditType {
  ComboBox = "combobox",
  Password = "password",
  LineEdit = "text",
}

export enum EmptyValue {
  String = "",
}
export enum Size {
  mobile = 680,
}

export enum ValidationType {
  Email = "email",
  UserId = "userid",
  Password = "password",
  Confirm = "confirm",
  NotNull = "notnull",
}

export enum ScriptType {
  Boolean = "boolean",
  Undefined = "undefined",
}
export enum SuccessMessage {
  ValidEmail = `This email is ready to use.`,
  ValidUserId = `This UserName is ready to use.`,
  Password = `This password is valid`,
  PasswordConfirm = `This password is confirmed`,
  NotNull = `This value is ready to use`,
}

export enum PageRoute {
  Login = "/auth/login",
  GuidePage = "/guide",
  Home = "/",
  SignUp = "/auth/signup",
  Recovery = "/auth/recovery",
  Download = "/download/app",
}

export enum NotifyMessage {
  VALID_EMAIL = "This email is ready to use.",
  INVALID_EMAIL = "Email address is already taken.",
}

export enum DebounceSearchConstant {
  TimeOut = 1000,
}

export enum DomEventType {
  Click = "click",
}

export enum StepForm {
  First = 1,
  Second = 2,
  Third = 3,
}

export enum Rank {
  First = 1,
  Second = 2,
  Third = 3,
  Fourth = 4,
}
