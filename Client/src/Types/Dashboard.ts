export type DashboardContextProps = {
  user: { name: string };
  showSidebar: boolean;
  isDarkTheme: string;
  toggleDarkTheme: () => void;
  toggleSidebar: () => void;
  logoutUser: () => void;
};
