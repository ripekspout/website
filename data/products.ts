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
    name: "Spout Side Bag Small",
    category: "Spout Bag",
    description: "Small spout bag perfect for liquids and gels with spout nozzle at the side.",
    images: [`${import.meta.env.BASE_URL}spout_side_small.jpeg`, `${import.meta.env.BASE_URL}S-front.jpeg`, `${import.meta.env.BASE_URL}S-back.jpeg`,  `${import.meta.env.BASE_URL}S-front_1.JPG`,  `${import.meta.env.BASE_URL}S-back_1.jpeg`, `${import.meta.env.BASE_URL}S-front_2.jpeg`, `${import.meta.env.BASE_URL}S-back_2.JPG`],
    specs: [
      { label: "Length", value: "100 mm" },
      { label: "Width", value: "160 mm" },
      { label: "Bottom", value: "250 mm" },
      { label: "Thickness", value: "155 mic" },
      { label: "Nozzle Diameter", value: "10mm" }
    ]
  },
  {
    id: "2",
    name: "Spout Center Bag Small",
    category: "Spout Bag",
    description: "Small spout bag perfect for liquids and gels with spout nozzle at the center.",
    images: [`${import.meta.env.BASE_URL}spout_center_small.jpeg`],
    specs: [
      { label: "Length", value: "90 mm" },
      { label: "Width", value: "120 mm" },
      { label: "Bottom", value: "250 mm" },
      { label: "Thickness", value: "155 mic" },
      { label: "Nozzle Diameter", value: "25mm" }
    ]
  },
  {
    id: "3",
    name: "Spout Side Bag Medium",
    category: "Spout Bag",
    description: "Medium spout bag perfect for liquids and gels with spout nozzle at the side.",
    images: [`${import.meta.env.BASE_URL}L-front.jpeg`, `${import.meta.env.BASE_URL}L-back.jpeg`, `${import.meta.env.BASE_URL}L-front_1.JPG`, `${import.meta.env.BASE_URL}L-back_1.jpeg`],
    specs: [
      { label: "Length", value: "140 mm" },
      { label: "Width", value: "230 mm" },
      { label: "Bottom", value: "250 mm" },
      { label: "Thickness", value: "155 mic" },
      { label: "Nozzle Diameter", value: "10mm" }
    ]
  },
  {
    id: "4",
    name: "Spout Side Bag Medium with Handle",
    category: "Spout Bag",
    description: "Medium spout bag perfect for liquids and gels with spout nozzle at the side and a handle.",
    images: [ `${import.meta.env.BASE_URL}spout_side_medium_handle.JPG`],
    specs: [
      { label: "Length", value: "200 mm" },
      { label: "Width", value: "250 mm" },
      { label: "Bottom", value: "250 mm" },
      { label: "Thickness", value: "155 mic" },
      { label: "Nozzle Diameter", value: "22mm" }
    ]
  }
];
