export const company = {
  name: "Mahalaxmi Corporation",
  email: "admin@mahalaxmicorporation.in",
  address:
    "Plot No. 46, Yogi Estate-3, Yogi Estate, Nr. Karmatur Chokadi, Garden City Road, GIDC, Ankleshwar–393 002.",
  contacts: [
    { name: "Kenil Savaliya", phone: "99259 75379", number: "919925975379" },
    { name: "Kaushik Bajariya", phone: "97699 63261", number: "919769963261" },
  ],
};
export const whatsappUrl = (message, index = 0) =>
  `${process.env.REACT_APP_WHATSAPP_BASE_URL}/${
    company.contacts[index].number
  }?text=${encodeURIComponent(message)}`;
export const mapsUrl = `${
  process.env.REACT_APP_MAPS_BASE_URL
}?api=1&query=${encodeURIComponent(company.address)}`;
export const products = [
  {
    id: "scaffolding",
    name: "Cuplock scaffolding",
    category: "Scaffolding",
    label: "REACH NEW HEIGHTS",
    image: "/assets/scaffolding.webp",
    number: "01",
    description:
      "A modular support system for the next level of your build. Enquire about cuplock standards, ledgers and the configuration your project needs.",
    uses: ["Building access", "Structural support", "Multi-level construction"],
    sizes: "Contact our team for available configurations.",
    imageClass: "scaffold-image",
  },
  {
    id: "shuttering",
    name: "Centering & shuttering",
    category: "Shuttering",
    label: "SHAPE STRONG FOUNDATIONS",
    image: "/assets/plates.webp",
    number: "02",
    description:
      "Steel shuttering plates for slab and concrete formwork. A range of plate widths helps you put together the right setup for your site.",
    uses: ["Slab formwork", "Concrete construction", "Centering work"],
    sizes: "3 × 2, 3 × 21″, 3 × 18″, 3 × 15″, 3 × 12″ and 3 × 9″ plates.",
    imageClass: "plates-image",
  },
  {
    id: "props",
    name: "Adjustable props & jacks",
    category: "Props & jacks",
    label: "SUPPORT AT EVERY LEVEL",
    image: "/assets/props.webp",
    number: "03",
    description:
      "Adjustable supports for centering and shuttering work. Talk to our depot about the right jack size and quantity for your project.",
    uses: ["Slab support", "Centering systems", "Adjustable formwork"],
    sizes:
      "Jack 2 × 2 and jack 2 × 3. Confirm dimensions and suitability with the depot.",
    imageClass: "props-image",
  },
  {
    id: "timber",
    name: "Timber & plywood",
    category: "Timber & ply",
    label: "BUILT AROUND YOUR PROJECT",
    image: "/assets/construction.jpg",
    number: "04",
    description:
      "Timber supports and plywood sizes for your formwork requirements. Available for rental and sale enquiries from our Ankleshwar depot.",
    uses: ["Timber formwork", "Shuttering", "Wooden supports"],
    sizes:
      "Wooden supports: 11.5′ and 9.5′. Plywood: selected 9″, 15″ and 18″ widths.",
    imageClass: "context-image",
  },
];
export const catalogue = [
  ["I01", "Shuttering plate · 3 × 2", "Shuttering", 1.3, 4],
  ["I02", "Shuttering plate · 3 × 21″", "Shuttering", 1.3, 4],
  ["I03", "Shuttering plate · 3 × 18″", "Shuttering", 1.3, 4],
  ["I04", "Shuttering plate · 3 × 15″", "Shuttering", 1.3, 4],
  ["I05", "Shuttering plate · 3 × 12″", "Shuttering", 1.3, 4],
  ["I06", "Shuttering plate · 3 × 9″", "Shuttering", 1.3, 4],
  ["I07", "Sheet · 3 × 9″ પતરા", "Shuttering", 1.3, 1],
  ["I08", "Sheet · 3 × 6″ પતરા", "Shuttering", 1.3, 1],
  ["I09", "Coupler · કપ્લર", "Accessories", null, null],
  ["I10", "Chavi · 8ft", "Accessories", 0.8, 1],
  ["I11", "Bottom · 8ft", "Accessories", 0.8, 1],
  ["I12", "ખપેડા", "Timber & ply", 5, 5],
  ["I13", "Wooden support · 11.5′ · લાકડાનો ટેકો", "Timber & ply", 2, 2],
  ["I14", "Wooden support · 9.5′ · લાકડાનો ટેકો", "Timber & ply", 2, 2],
  ["I15", "Clamp · સિકંજો", "Accessories", 1, 1],
  ["I16", "Plywood · 18″ × 8ft", "Timber & ply", 2, 2],
  ["I17", "Plywood · 18″ × 9ft", "Timber & ply", 2, 2],
  ["I18", "Plywood · 18″ × 6.5ft", "Timber & ply", 2, 2],
  ["I19", "Plywood · 15″ × 6ft", "Timber & ply", 2, 2],
  ["I20", "Plywood · 9″ × 8ft", "Timber & ply", 1, 2],
  ["I21", "Jack · 2 × 2", "Props & jacks", 3, 4],
  ["I22", "Jack · 2 × 3", "Props & jacks", 3, 4],
  ["I23", "Bottom · 6ft", "Accessories", 0.8, 2],
];
