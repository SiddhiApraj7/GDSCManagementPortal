import React from "react";
import { motion } from "framer-motion";
import TopProjects from "./TopProjects";
import { db } from "../config/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import Loader from "./Loader";




const About = ({ name }) => {
  const [topProjectManagers, setTopProjectManagers] = useState([]);

  useEffect(() => {
    const fetchTopProjectManagers = async () => {
      try {
        const clientCollection = collection(db, "Client");
        const q = query(
          clientCollection,
          where("isProjectManager", "==", true)
        );
        // console.log('Project managers query:', q);
        const querySnapshot = await getDocs(q);
        // console.log('Project managers query snapshot:', querySnapshot);

        const projectManagerData = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          projectManagerData.push({
            id: doc.id,
            projectCount: data.projectHosted ? data.projectHosted.length : 0,
            topProject: null, // Placeholder for the top project
            projectHosted: data.projectHosted,
            name: data.name,
            profilepic: data.profilepic,
          });
        });
        console.log("Project managers:", projectManagerData);

        // Sort project managers based on project count in descending order
        projectManagerData.sort((a, b) => b.projectCount - a.projectCount);

        // Get the top 3 project managers
        const top3ProjectManagers = projectManagerData.slice(0, 3);

        // Get the top project for each project manager
        for (const projectManager of top3ProjectManagers) {
          for (const projectId of projectManager.projectHosted) {
            const projectDocRef = doc(db, "Projects", projectId);
            const projectDocSnapshot = await getDoc(projectDocRef);

            if (projectDocSnapshot.exists()) {
              const projectData = projectDocSnapshot.data();
              if (projectData && projectData.collaborators) {
                // Check if collaborators is not undefined
                if (
                  !projectManager.topProject ||
                  !projectManager.topProject.collaborators ||
                  projectData.collaborators.length >
                    projectManager.topProject.collaborators.length
                ) {
                  projectManager.topProject = {
                    id: projectId,
                    projectName: projectData.projectName,
                    collaborators: projectData.collaborators.length,
                    projectDomain: projectData.projectDomain,
                    projectOverview: projectData.projectOverview,
                  };
                }
              }
            }
          }
        }

        setTopProjectManagers(top3ProjectManagers);
      } catch (error) {
        console.error("Error fetching top project managers:", error);
      }
    };

    fetchTopProjectManagers();
  }, []);

  return (
    <div id={name}>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto items-center lg:mx-0 lg:text-center ">
            <h2 className="text-3xl font-bold tracking-tight text-[#04276a] sm:text-4xl md:tracking-wide">
              Top <span className="text-[#386cdb]">Project Managers</span>
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              <span className="border-b-2 border-red-500 ">Learn how</span>{" "}
              <span className="border-b-2 border-blue-500 ">to upskill </span>{" "}
              <span className="border-b-2 border-yellow-400 ">
                from our top
              </span>{" "}
              <span className="border-b-2 border-green-400 ">Tech Leads</span>
            </p>
          </div>
          <div className="mt-2 flex flex-col md:flex-row">
      {topProjectManagers.length > 0  ? (
        topProjectManagers.map((projectManager, i) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            key={projectManager.id}
          >
            <TopProjects
              key={i}
              position={i + 1}
              projectId={projectManager.topProject?.id}
              collaborators={projectManager.topProject?.collaborators}
              projectDomain={projectManager.topProject?.projectDomain}
              projectName={projectManager.topProject?.projectName}
              projectOverview={projectManager.topProject?.projectOverview}
              projectAuthor={projectManager.name}
              projectCount={projectManager.projectCount}
              projectAuthorImage={projectManager.profilepic}
            />
          </motion.div>
        ))
      ) : (
      <Loader />
      )}
    </div>
        </div>
      </div>
    </div>
  );
};

export default About;
