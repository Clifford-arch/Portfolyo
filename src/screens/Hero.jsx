import React, { useState, useEffect } from "react";
import { Box, Container, Heading, Text, Image } from "@chakra-ui/react";

const TypewriterHeading = ({ texts }) => {
  const [displayText, setDisplayText] = useState(texts[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerHeight, setContainerHeight] = useState(null); // Add state for container height

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === texts.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change the delay for text rotation (in milliseconds)

    return () => clearInterval(interval);
  }, [texts]);

  useEffect(() => {
    let charIndex = 0;
    const typing = setInterval(() => {
      if (charIndex <= texts[currentIndex].length) {
        setDisplayText(texts[currentIndex].substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typing);
        setTimeout(() => {
          charIndex = 0;
          setDisplayText("");
        }, 4000); // Display each text for 2 seconds
      }
    }, 100); // Adjust the typing speed here (milliseconds)

    // Set container height to prevent movement when clearing text
    setContainerHeight(
      document.getElementById("typewriter-container").clientHeight
    );

    return () => clearInterval(typing);
  }, [currentIndex, texts]);

  return (
    <Box id="typewriter-container" style={{ height: containerHeight }}>
      <Text fontSize="lg">{displayText}</Text>
    </Box>
  );
};

const Hero = () => {
  const jobTitles = [
    "a Frontend Developer",
    "a Full Stack Developer",
    "a Web Developer",
  ];

  return (
    <Box
      bg="#3a3a3a"
      color="white"
      height="75vh"
      display="flex"
      justifyContent="center"
      overflow="hidden"
    >
      <Container
        zIndex="1"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        paddingX={8}
        maxWidth="container.xl"
        height="100%"
      >
        <Heading size="2xl">I'm Clifford Christopher Chowalloore</Heading>
        <Box mt={4}>
          <Text fontSize="xl" mb="8">
            <TypewriterHeading texts={jobTitles} />
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
