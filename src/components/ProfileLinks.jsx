import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import {
  githubGen,
  linkedin,
  Hackerrank,
  leetcode,
  gmail,
  phone,
} from "../assets";

const profiles = [
  {
    platform: "GitHub",
    username: "Hack-Hero-17",
    icon: githubGen,
    link: "https://github.com/hack-hero-17",
  },
  {
    platform: "LeetCode",
    username: "hari_haran_17",
    icon: leetcode,
    link: "https://leetcode.com/u/hari_haran_17/",
  },
  {
    platform: "HackerRank",
    username: "hariharan17kpm",
    icon: Hackerrank,
    link: "https://www.hackerrank.com/profile/hariharan17kpm",
  },
  {
    platform: "LinkedIn",
    username: "Hariharan R I",
    icon: linkedin,
    link: "https://www.linkedin.com/in/hariharan-r-i-507b1a304/",
  },
  {
    platform: "Email",
    username: "hariharan17kpm@gmail.com",
    icon: gmail,
    link: "mailto:hariharan17kpm@gmail.com",
  },
  {
    platform: "Phone",
    username: "+91-9597353283",
    icon: phone,
    link: "tel:+919597353283",
  },
];

const ProfileCard = ({ index, platform, username, icon, link }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-6 rounded-3xl xs:w-[320px] w-full flex items-center gap-5 hover:scale-[1.02] transition-transform"
  >
    <img
      src={icon}
      alt={`${platform}-icon`}
      className="w-12 h-12 object-contain"
    />
    <div className="flex flex-col">
      <p className="text-white font-semibold text-[18px]">{platform}</p>
      <p className="mt-1 text-secondary text-[14px]">{username}</p>
    </div>
  </motion.a>
);

const ProfileLinks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Connect with me</p>
          <h2 className={styles.sectionHeadText}>Various Profile Links.</h2>
        </motion.div>
      </div>

      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {profiles.map((profile, index) => (
          <ProfileCard key={profile.platform} index={index} {...profile} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(ProfileLinks, "connect");
