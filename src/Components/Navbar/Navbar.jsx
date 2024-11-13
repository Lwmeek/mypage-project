import React from "react";
import "../Navbar/styles.css";
import { Box, Container, Section, Flex, Button } from "@radix-ui/themes";
import { HomeIcon } from "@radix-ui/react-icons";
import { useState } from "react";

const Navbar = () => {
	const [dropDownLinksOpen, setDropDownLinksOpen] = useState(false);

	const toggleDropDownLinks = () => {
		setDropDownLinksOpen(!dropDownLinksOpen);
	};
	return (
		<>
			<Box style={{ background: "black" }} height="100vh">
				<Section
					px="4"
					py="5"
					style={{
						backgroundColor: "transparent",
						color: "whitesmoke",
						borderBottom: "solid .5px white",
						position: "sticky",
						backdropFilter: "blur(16px)",
					}}
				>
					<Container>
						<Flex align="center" gap="9" justify="between">
							<Button
								variant="ghost"
								style={{ cursor: "pointer", padding: "10px" }}
								onClick={toggleDropDownLinks}
							>
								<HomeIcon />
							</Button>
							<Flex
								gap="5"
								direction="row"
								align="center"
								className="navbar-links-group1"
							>
								<a href="#" className="navbar-link-items">
									Home
								</a>
								<a href="#" className="navbar-link-items">
									About
								</a>
								<a href="#" className="navbar-link-items">
									Contact
								</a>
							</Flex>
							<Button
								variant="soft"
								radius="none"
								style={{ cursor: "pointer" }}
							>
								Tour
							</Button>
						</Flex>
					</Container>
				</Section>
				<Box>
					{dropDownLinksOpen && (
						<Container className="navbar-links-group2">
							<Flex gap="5" direction="column" align="center" mt="7">
								<a href="#" className="navbar-link-items">
									Home
								</a>
								<a href="#" className="navbar-link-items">
									About
								</a>
								<a href="#" className="navbar-link-items">
									Contact
								</a>
							</Flex>
						</Container>
					)}
				</Box>
				<Container></Container>
			</Box>
		</>
	);
};

export default Navbar;
