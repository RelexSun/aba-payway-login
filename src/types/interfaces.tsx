export interface MenuItem {
  label: string;
  icon: JSX.Element;
  content: JSX.Element;
}

export interface ActiveMenuState {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}
