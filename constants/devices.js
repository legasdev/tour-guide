const DEVICES = [
  {
    id: "transmitter",
    label: "Transmitter",
    labelTranslate: "Predajnik",
    image: "/images/home/transmitter.png",
    images: [
      "/images/devices/transmitter-1.jpg",
      "/images/devices/transmitter-2.jpg",
    ],
    description:
      "A user receiver is an electronic device that receives signals from a transmitter and converts them into a usable signal. User receivers are used in a wide range of applications, from wireless communication systems to entertainment systems. In wireless communication systems, user receivers are used to pick up the signal transmitted by the base station and convert it into a signal that can be used by the user's device. In entertainment systems, user receivers are used to pick up the signal transmitted by the transmitter and convert it into sound or video that can be played back on the user's device. User receivers come in different sizes and configurations, and are designed to work with specific types of transmitters.",
    descriptionTranslate:
      "Odašiljač predaje odličan zvuk na direktnom rastojanju 70 metara i ima displej sa brojem kanala. Naš odašiljač je dizajniran da prenese kvalitetan signal. Period korišćenja bez punenja do 4 dana.",
  },
  {
    id: "receiver",
    label: "Receiver",
    labelTranslate: "Prijemnik",
    image: "/images/home/receiver.png",
    images: ["/images/devices/receiver-1.jpg", "/images/devices/receiver-2.jpg"],
    description:
      "A user receiver is an electronic device that receives signals from a transmitter and converts them into a usable signal. User receivers are used in a wide range of applications, from wireless communication systems to entertainment systems. In wireless communication systems, user receivers are used to pick up the signal transmitted by the base station and convert it into a signal that can be used by the user's device. In entertainment systems, user receivers are used to pick up the signal transmitted by the transmitter and convert it into sound or video that can be played back on the user's device. User receivers come in different sizes and configurations, and are designed to work with specific types of transmitters.",
    descriptionTranslate:
      "Naš prijemnik za vodiče je dizajniran da preda izuzetan zvuk. Prijemnik se lako uključuje, prima odličan zvuk na direktnom rastojanju 70 metara i ima displej sa brojem kanala. Po izboru vodiča može se povezati nekoliko varijanti slušalica u zavisnosti od specifičnosti grupe. Može se podešavati jačina zvuka. Ima «režim spavanja» za uštedu energije. Period korišćenja bez punenja do 4 dana. Tasteri dozvoljavaju udobno korišćenje i turistima 60+.",
  },
  {
    id: "microphone-behind-the-head",
    label: "Behind-the-head microphone",
    labelTranslate: "Mikrofon oko glave",
    image: "/images/home/microphones.png",
    images: ["/images/devices/behind-the-head-microphone.jpg"],
    description:
      "A user receiver is an electronic device that receives signals from a transmitter and converts them into a usable signal. User receivers are used in a wide range of applications, from wireless communication systems to entertainment systems. In wireless communication systems, user receivers are used to pick up the signal transmitted by the base station and convert it into a signal that can be used by the user's device. In entertainment systems, user receivers are used to pick up the signal transmitted by the transmitter and convert it into sound or video that can be played back on the user's device. User receivers come in different sizes and configurations, and are designed to work with specific types of transmitters.",
    descriptionTranslate:
      "Mikrofon oko glave ne smeta tokom rada stalno se nalazi pored usta.",
  },
  {
    id: "microphone-omni-directional",
    label: "Omni-directional flap lapel microphone",
    labelTranslate: "Mikrofon na štipavici",
    image: "/images/devices/microphone-omni-directional.jpg",
    images: ["/images/devices/microphone-omni-directional.jpg"],
    description:
      "A user receiver is an electronic device that receives signals from a transmitter and converts them into a usable signal. User receivers are used in a wide range of applications, from wireless communication systems to entertainment systems. In wireless communication systems, user receivers are used to pick up the signal transmitted by the base station and convert it into a signal that can be used by the user's device. In entertainment systems, user receivers are used to pick up the signal transmitted by the transmitter and convert it into sound or video that can be played back on the user's device. User receivers come in different sizes and configurations, and are designed to work with specific types of transmitters.",
    descriptionTranslate:
      "Mikrofon na štipavici kači se na kragnu. Udoban je, ne smeta.",
  },
  {
    id: "microphone-gooseneck",
    label: "«Gooseneck» plug-In multidirectional microphone",
    labelTranslate: "Bežični mikrofon",
    image: "/images/devices/gooseneck-microphone.jpg",
    images: ["/images/devices/gooseneck-microphone.jpg"],
    description:
      "A user receiver is an electronic device that receives signals from a transmitter and converts them into a usable signal. User receivers are used in a wide range of applications, from wireless communication systems to entertainment systems. In wireless communication systems, user receivers are used to pick up the signal transmitted by the base station and convert it into a signal that can be used by the user's device. In entertainment systems, user receivers are used to pick up the signal transmitted by the transmitter and convert it into sound or video that can be played back on the user's device. User receivers come in different sizes and configurations, and are designed to work with specific types of transmitters.",
    descriptionTranslate: "Bežični mikrofon koji nosite u ruci sa predajnikom.",
  },
  {
    id: "reusable-earphone",
    label: "Reusable on-ear earphone",
    labelTranslate: "Singl slušalica sa gumicom",
    image: "/images/devices/reusable-earphone.jpg",
    images: ["/images/devices/reusable-earphone.jpg"],
    description: "High quality sound and high durability.",
    descriptionTranslate:
      "Singl slušalica sa gumicom i mogućnošću kačenja za uvo.",
  },
  {
    id: "rubber-cushion-earphone",
    label: "The single earphones with a rubber cushion",
    labelTranslate: "Singl slušalica sa gumicom",
    image: "/images/devices/rubber-cushion-earphone.jpg",
    images: ["/images/devices/rubber-cushion-earphone.jpg"],
    description: "High quality sound and high durability.",
    descriptionTranslate:
      "Singl slušalica sa gumicom. Udobna je za kratko korišćenje (2-3 sata tokom dana). Predaje izuzetan zvuk.",
  },
  {
    id: "plastic-hook-earphone",
    label: "Reusable on-ear earphone on a plastic hook",
    labelTranslate: "Singl slušalica sa plastičnom zakačkom",
    image: "/images/home/headphones.png",
    images: [
      "/images/devices/headphones.jpg",
      "/images/devices/plastic-hook-earphone.jpg",
    ],
    description:
      "One of the most comfortable earphones on the market. Incomparable comfort of use.",
    descriptionTranslate:
      "Udobne su za duže korišćenje tokom dana. One ne iritiraju ušnu školjku ali čujnost je sredneg kvaliteta.",
  },
  {
    id: "rubber-pendant-earphone",
    label: "Reusable earphones with a rubber pendant",
    labelTranslate: "Singl slušalica sa elastičnim držačem",
    image: "/images/devices/rubber-pendant-earphone.jpg",
    images: ["/images/devices/rubber-pendant-earphone.jpg"],
    description: "Incomparable comfort of use.",
    descriptionTranslate:
      "Singl slušalica sa elastičnim držačem udobne su za duže korišćenje tokom dana. Za zatvoren prostor i muzeje nudim slušalice koje se kače na uvo. One ne iritiraju ušnu školjku ali čujnost je sredneg kvaliteta. Udobne su za duže korišćenje tokom dana.",
  },
  {
    id: "light-bag",
    label: "Light bag",
    labelTranslate: "Kučište za prenos",
    image: "/images/home/light-bag.png",
    images: ["/images/devices/light-bag.jpg"],
    description: "Light bag with foam for 24 devices.",
    descriptionTranslate:
      "Predlažemo vam lake kutije za kratkoročne izlete. Ima nosivost do 24 aparata, lak i udoban za prenos opreme.",
  },
  {
    id: "portable-charging-storage-case",
    label: "Portable Charging Storage Case",
    labelTranslate: "Kučište za punjenje opreme",
    image: "/images/devices/portable-charging-storage-case.jpg",
    images: ["/images/devices/portable-charging-storage-case.jpg"],
    description:
      "24-slots charging-case (Case-charger for simultaneous charging of 24 devices).",
    descriptionTranslate:
      "Predlažemo vam koferče (kućište za punjenje) za dugotrajane ekskurzije. Mogućnost punjenja 24 aparata u isto vrijeme, čvrst i kompaktan.",
  },
];

export { DEVICES };
