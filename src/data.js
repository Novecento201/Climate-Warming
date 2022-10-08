export const data = [
  {
    apiCall: "https://global-warming.org/api/temperature-api",
    name: "Temperature",
    isPositive: true,
    number: 1.19,
    text: "°C since 1880",
    colorText: "#f38478",
    detailText: `
    The current global warming rate is not natural. From 1880 to 1981 was (0.07°C / 0.13°F) per decade. Since 1981 this rate has increased to (0.18°C / 0.32°F).

    Some of the past sudden increase on global temperature present in this graph, correspond to the Roman Warm Period and the Medieval Warm Period. These events were at regional and not global scale.

    The total average global temperature rise since the industrial revolution is around (1.0 °C / 1.8 °F). Earth northern hemisphere is warming faster. The arctic has warmed between (2 °C / 3.6 °F) and (4 °C / 7.2 °F).

    Earth temperature and the proportion of gases such as Co2, methane, and nitrous oxide in the atmosphere is strictly correlated.
    `,
    id: 1,
  },
  {
    apiCall: "https://global-warming.org/api/co2-api",
    name: "Carbon Dioxide",
    isPositive: true,
    number: 417,
    text: "parts per million",
    colorText: "#fbbc6b",
    detailText: `
    For thousands of years, the natural concentration of CO2 in earth atmosphere was around 280 ppm. From the beginning of the industrial revolution, human activities like the burning of fossil fuels, deforestation, and livestock have increased this amount by more than 30%.
    `,
    id: 2,
  },

  {
    apiCall: "https://global-warming.org/api/methane-api",
    name: "Methane",
    isPositive: true,
    number: 1906,
    text: "ppb",
    colorText: "#57a5e7",
    detailText: `
    Methane is a flammable gas formed by geological and biological processes. Some of the natural ones are leaks from natural gas systems and wetlands.
    50-65% of total global methane emissions come from human activities. These include livestock, agriculture, oil and gas systems, waste from homes and businesses, landfills, and so on.

    Methane is a gas with a global warming potential several times stronger than of CO2. For more than 650,000 years, methane concentration in the atmosphere was between 350 – 800 ppb. From the beginning of the industrial revolution, human activities have increased this amount by around 150%.
    `,
    id: 3,
  },
  {
    apiCall: "https://global-warming.org/api/nitrous-oxide-api",
    name: "Nitrous",
    isPositive: true,
    number: 335,
    text: "ppb",
    colorText: "#ab9ae0",
    detailText: `
    Nitrous oxide is a gas that is produced by the combustion of fossil fuel and solid waste, nitrogen-base fertilizers, sewage treatment plants, natural processes, and other agricultural and industrial activities.

    It is the third largest heat-trapping gas in the atmosphere and the biggest ozone-destroying compound emitted by human activities.
    `,
    id: 4,
  },
  {
    apiCall: "https://global-warming.org/api/arctic-api",
    name: "Arctic Sea Ice Extent",
    isPositive: false,
    number: 4.9,
    text: "% per decade since 1979",
    colorText: "#94aed9",
    detailText: `
    The arctic is warming around twice as fast as global average. Some of the reasons for this are: The arctic amplification, the albedo effect, and black carbon. From 1979 to 1996, we lost 2.2 – 3% of the arctic ice cover. From 2010 to present we are losing 12.85% per decade!

    Another consequence is permafrost thawing. This is a process in which large amounts of methane is released to the atmosphere, fueling more the process of global warming.
    `,
    id: 5,
  },
];
