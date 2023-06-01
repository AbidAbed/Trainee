import { createSlice } from "@reduxjs/toolkit";
const posts = createSlice({
  name: "posts",
  initialState:[
    {
      id: 1,
      description: "Data Scientist",
      content: "Data Scientist position: Uncovering valuable insights from complex datasets, leveraging machine learning algorithms to drive data-driven decision making.",
      position: "ds",
    },
    {
      id: 2,
      description: "UX/UI Designer",
      content: "UX/UI Designer position: Crafting intuitive user experiences, blending creativity with usability principles to design visually stunning and user-friendly interfaces.",
      position: "uxui",
    },
    {
      id: 3,
      description: "Full Stack Developer",
      content: "Full Stack Developer position: Building end-to-end web applications, combining front-end expertise with back-end development to deliver seamless user experiences.",
      position: "fsd",
    },
    {
      id: 4,
      description: "Product Manager",
      content: "Product Manager position: Driving product strategy, collaborating with cross-functional teams, and delivering innovative solutions that meet customer needs.",
      position: "pm",
    },
    {
      id: 5,
      description: "Cybersecurity Analyst",
      content: "Cybersecurity Analyst position: Safeguarding digital assets, proactively identifying and mitigating security risks, and ensuring the confidentiality of sensitive information.",
      position: "ca",
    },
    {
      id: 6,
      description: "DevOps Engineer",
      content: "DevOps Engineer position: Streamlining software development processes, automating deployments, and optimizing infrastructure for continuous delivery.",
      position: "devops",
    },
    {
      id: 7,
      description: "Data Engineer",
      content: "Data Engineer position: Designing and implementing robust data pipelines, transforming raw data into meaningful insights for informed decision making.",
      position: "de",
    },
    {
      id: 8,
      description: "Network Administrator",
      content: "Network Administrator position: Managing and maintaining network infrastructure, ensuring network availability, security, and optimal performance.",
      position: "na",
    },
    {
      id: 9,
      description: "Frontend Developer",
      content: "Frontend Developer position: Creating responsive and engaging user interfaces using modern web technologies, translating design into code.",
      position: "fe",
    },
    {
      id: 10,
      description: "Quality Assurance Engineer",
      content: "Quality Assurance Engineer position: Implementing testing strategies, conducting rigorous quality checks, and ensuring software meets high standards of quality and reliability.",
      position: "qa",
    }
  ],  
  reducers: {
    replaceAllPosts(state, action) {
      return [{ ...action.payload }];
    },
  },
});
export { posts };
export const { replaceAllPosts } = posts.actions;
