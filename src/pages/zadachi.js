import React from "react";
import theme from "theme";
import { Theme, Link, Text, List } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.RosHeader />
		<Section padding="100px 0" sm-padding="40px 0" height="200px">
			<Override slot="SectionContent" align-items="center" />
			<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				Задачи
			</Text>
			<Text
				position="absolute"
				left="150px"
				top="350px"
				font="16px "
				right="832.3033943684895px"
				width="297.69160563151047px"
			>
				{" "}-Задача 1
				<br />
				{" "}- Задача 2
				<br />
				Задача 3
			</Text>
		</Section>
		<List />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});