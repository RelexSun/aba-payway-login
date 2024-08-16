export interface MenuItem {
  label: string;
  icon: JSX.Element;
  content: JSX.Element;
}

export interface CardTypes {
  title: string;
  amount: string;
  description: string;
  icon: JSX.Element;
}

export interface ActiveMenuState {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export interface ActiveBurgerMenuState {
  toggle: boolean;
  setToggle: () => void;
}
