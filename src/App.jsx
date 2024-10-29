import { Box, Container, Section, Flex, Button } from "@radix-ui/themes";
import { ShadowIcon } from "@radix-ui/react-icons";

function App() {
	return (
		<>
			<Box style={{ background: "black" }} height="100vh">
				<Section
					px="4"
					py="1"
					style={{
						backgroundColor: "transparent",
						color: "whitesmoke",
						borderBottom: "solid .5px white",
						position: "sticky",
					}}
				>
					<Flex align="center" gap="9" justify="start">
						<ShadowIcon />
						<Flex gap="4" align="center">
							<p>Home</p>
							<p>About</p>
							<p>Contact</p>
							<Button variant="soft">Connect</Button>
						</Flex>
						{/*<img
							src="src/images/sam.jpg"
							alt="Samurai shadow"
							className="samurai"
						/> */}
					</Flex>
				</Section>
				<Container>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
						rem, nostrum accusantium saepe omnis tempore soluta dolor doloribus
						maiores, ducimus accusamus eos non, laudantium odit.
					</p>
				</Container>
			</Box>
		</>
	);
}

export default App;
