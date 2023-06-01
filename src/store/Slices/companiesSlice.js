import { createSlice } from "@reduxjs/toolkit";
const companies = createSlice({
  name: "companies",
  initialState: [
    {
      id: 1,
      name: "ABC Software Solutions",
      description:
        "Leading software development company specializing in custom solutions for businesses across various industries.",
      location: "San Francisco, CA",
      email: "info@abcsoftwaresolutions.com",
      phoneNumber: "123-456-7890",
    },
    {
      id: 2,
      name: "XYZ Tech",
      description:
        "Innovative technology company driving digital transformation through cutting-edge products and services.",
      location: "New York, NY",
      email: "contact@xyztech.com",
      phoneNumber: "987-654-3210",
    },
    {
      id: 3,
      name: "TechCo Innovations",
      description:
        "Fast-growing tech startup revolutionizing the industry with disruptive solutions and groundbreaking technologies.",
      location: "London, UK",
      email: "hello@techcoinnovations.com",
      phoneNumber: "555-123-4567",
    },
    {
      id: 4,
      name: "Global IT Solutions",
      description:
        "Provider of comprehensive IT services and consulting, empowering businesses to leverage technology for success.",
      location: "Toronto, Canada",
      email: "info@globalitsolutions.com",
      phoneNumber: "111-222-3333",
    },
    {
      id: 5,
      name: "Innovative Systems",
      description:
        "Leading-edge software company driving innovation through advanced technology solutions and automation.",
      location: "Berlin, Germany",
      email: "contact@innovativesystems.com",
      phoneNumber: "444-555-6666",
    },
    {
      id: 6,
      name: "TechGenius",
      description:
        "A team of experts specializing in delivering high-quality software development services tailored to client needs.",
      location: "Sydney, Australia",
      email: "info@techgenius.com",
      phoneNumber: "999-888-7777",
    },
    {
      id: 7,
      name: "Digital Solutions Inc.",
      description:
        "Provider of digital transformation solutions, helping businesses optimize their processes and enhance customer experiences.",
      location: "Singapore",
      email: "info@digitalsolutionsinc.com",
      phoneNumber: "777-666-5555",
    },
    {
      id: 8,
      name: "Tech Innovators",
      description:
        "Pioneers in technological advancements, developing breakthrough products and services to shape the future.",
      location: "Tokyo, Japan",
      email: "hello@techinnovators.com",
      phoneNumber: "333-444-5555",
    },
    {
      id: 9,
      name: "Software Solutions Co.",
      description:
        "Provider of comprehensive software solutions, empowering businesses with efficient and scalable technology solutions.",
      location: "Mumbai, India",
      email: "contact@softwaresolutionsco.com",
      phoneNumber: "888-999-0000",
    },
    {
      id: 10,
      name: "Tech Ventures",
      description:
        "Venture capital firm focused on investing in promising technology startups and supporting their growth.",
      location: "Silicon Valley, CA",
      email: "info@techventures.com",
      phoneNumber: "666-777-8888",
    },
  ],
  reducers: {
    addAllCompanies(state, action) {
      return [...state, { ...action.payload }];
    },
  },
});
export { companies };
export const { addAllCompanies } = companies.actions;
