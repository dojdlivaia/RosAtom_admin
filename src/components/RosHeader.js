import React from "react";
import { useOverrides, Override, Menu, Section } from "@quarkly/components";
import { Image, Text, Box } from "@quarkly/widgets";
const defaultProps = {
	"padding": "0 0 0px 0"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"padding": "12px 0 12px 0",
			"justify-content": "space-between",
			"align-items": "center",
			"flex-direction": "row",
			"md-flex-direction": "column"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"width": "64px",
			"height": "64px",
			"src": "https://uploads.quarkly.io/5fbea2d48996cc001edd3ad5/images/logo%20(1).svg?v=2020-11-25T18:39:42.008Z"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"margin": "0",
			"md-margin": "0px 0 20px 0",
			"text-align": "left",
			"font": "--lead",
			"position": "fixed",
			"left": "150px",
			"children": "РОСкоммуникАТОМ"
		}
	},
	"menu": {
		"kind": "Menu",
		"props": {
			"display": "flex",
			"justify-content": "center",
			"font": "--base",
			"font-weight": "700",
			"md-flex-direction": "column",
			"md-align-items": "center"
		}
	},
	"menuOverride": {
		"kind": "Override",
		"props": {
			"slot": "link",
			"text-decoration": "none",
			"color": "--dark",
			"padding": "6px 12px",
			"font": "700 16px/24px "
		}
	},
	"menuOverride1": {
		"kind": "Override",
		"props": {
			"slot": "link-active",
			"color": "--primary",
			"display": "none"
		}
	},
	"menuOverride2": {
		"kind": "Override",
		"props": {
			"slot": "item",
			"padding": "6px"
		}
	},
	"menuOverride3": {
		"kind": "Override",
		"props": {
			"slot": "link-404",
			"display": "none"
		}
	},
	"menuOverride4": {
		"kind": "Override",
		"props": {
			"slot": "link-zadachi",
			"children": "Задачи"
		}
	}
};

const RosHeader = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Box {...override("box")}>
			<Image {...override("image")} />
			<Text {...override("text")} />
			<Menu {...override("menu")}>
				<Override {...override("menuOverride")} />
				<Override {...override("menuOverride1")} />
				<Override {...override("menuOverride2")} />
				<Override {...override("menuOverride3")} />
				<Override {...override("menuOverride4")} />
			</Menu>
		</Box>
		{children}
	</Section>;
};

Object.assign(RosHeader, { ...Section,
	defaultProps,
	overrides
});
export default RosHeader;