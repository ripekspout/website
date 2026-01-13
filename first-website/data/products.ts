export interface Product {
    id: string;
    name: string;
    category?: string;
    description: string;
    images: string[];
    specs: { label: string; value: string }[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Spout Bag Small",
    description: "Immersive sound quality with active noise cancellation",
    images: ["../src/assets/spout_1.jpg", "../src/assets/spout_2.jpg", "../src/assets/spout_3.jpg", "../src/assets/spout_4.jpg"],
    specs: [
      { label: "Length", value: "130 mm" },
      { label: "Width", value: "190 mm" },
      { label: "Thickness", value: "130 mic" },
      { label: "Nozzle Diameter", value: "10mm" }
    ]
  },
  {
    id: "2",
    name: "Spout Bag Large",
    description: "Immersive sound quality with active noise cancellation",
    images: [],
    specs: [
      { label: "Length", value: "130 mm" },
      { label: "Width", value: "190 mm" },
      { label: "Thickness", value: "130 mic" },
      { label: "Nozzle Diameter", value: "22mm" }
    ]
  },
  {
    id: "3",
    name: "Spout Bag Small 2",
    category: "Spout Bag",
    description: "Immersive sound quality with active noise cancellation",
    images: [],
    specs: [
      { label: "Length", value: "130 mm" },
      { label: "Width", value: "190 mm" },
      { label: "Thickness", value: "130 mic" },
      { label: "Nozzle Diameter", value: "26mm" }
    ]
  },
  {
    id: "4",
    name: "Spout Bag Small 3",
    description: "Immersive sound quality with active noise cancellation",
    images: [],
    specs: [
      { label: "Length", value: "130 mm" },
      { label: "Width", value: "190 mm" },
      { label: "Thickness", value: "130 mic" },
      { label: "Nozzle Diameter", value: "22mm" }
    ]
  }
];
