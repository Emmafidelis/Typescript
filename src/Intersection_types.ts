type Dragable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};
type UiWidget = Dragable & Resizable;

let textBox: UiWidget = {
  drag: () => {},
  resize: () => {},
};
