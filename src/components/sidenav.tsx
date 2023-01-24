import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Toolbar from "@mui/material/Toolbar";
import InboxRounded from "@mui/icons-material/InboxRounded";
import MailOutline from "@mui/icons-material/MailOutline";
import ChevronLeftRounded from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRounded from "@mui/icons-material/ChevronRightRounded";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import { CSSObject, Theme, styled, useTheme } from "@mui/material/styles";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { selectSideNavOpen, switchSideNav } from "@/reducers/layout";
import { featureConfigs } from "@/feature-configs";

export const drawerWidth = 240;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(
	({ theme, open }) => ({
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: "nowrap",
		boxSizing: "border-box",
		...(open && {
			...openedMixin(theme),
			"& .MuiDrawer-paper": openedMixin(theme),
		}),
		...(!open && {
			...closedMixin(theme),
			"& .MuiDrawer-paper": closedMixin(theme),
		}),
	})
);

export const SideNavHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar,
}));

const openedMixin = (theme: Theme): CSSObject => ({
	width: drawerWidth,
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: "hidden",
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up("sm")]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
});

const SideNav = () => {
	const theme = useTheme();
	const sideNavOpen = useAppSelector(selectSideNavOpen);
	const dispatch = useAppDispatch();

	const handleDrawerClose = () => {
		dispatch(switchSideNav());
	};

	return (
		<Drawer variant="permanent" open={sideNavOpen}>
			<SideNavHeader>
				<IconButton onClick={handleDrawerClose}>
					{theme.direction === "rtl" ? <ChevronRightRounded /> : <ChevronLeftRounded />}
				</IconButton>
			</SideNavHeader>
			<Divider />
			<List>
				{featureConfigs.map((config, index) => (
					<ListItem key={config.name} disablePadding sx={{ display: "block" }}>
						<ListItemButton
							sx={{
								minHeight: 48,
								justifyContent: sideNavOpen ? "initial" : "center",
								px: 2.5,
							}}
						>
							<ListItemIcon
								sx={{
									minWidth: 0,
									mr: sideNavOpen ? 3 : "auto",
									justifyContent: "center",
								}}
							>
								{index % 2 === 0 ? <InboxRounded /> : <MailOutline />}
							</ListItemIcon>
							<ListItemText primary={config.title} sx={{ opacity: sideNavOpen ? 1 : 0 }} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Drawer>
	);
};

export default SideNav;
