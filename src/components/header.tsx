import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import { styled } from "@mui/material/styles";
import { drawerWidth } from "./sidenav";
import IconButton from "@mui/material/IconButton";
import { selectSideNavOpen, switchSideNav } from "@/reducers/layout";
import { useAppDispatch, useAppSelector } from "@/hooks";

interface AppBarProps extends MuiAppBarProps {
	open?: boolean;
}

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(["width", "margin"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const Header = () => {
	const sideNavOpen = useAppSelector(selectSideNavOpen);
	const dispatch = useAppDispatch();

	const handleSideNavSwitch = () => {
		dispatch(switchSideNav());
	};

	return (
		<AppBar position="fixed" open={sideNavOpen}>
			<Toolbar disableGutters>
				<IconButton
					sx={{
						margin: 1,
					}}
					onClick={handleSideNavSwitch}
				>
					<WhatshotOutlinedIcon />
				</IconButton>
				<Typography
					variant="h6"
					noWrap
					component="a"
					href="/"
					sx={{
						mr: 2,
						display: { xs: "none", md: "flex" },
						fontFamily: "monospace",
						fontWeight: 700,
						letterSpacing: ".3rem",
						color: "inherit",
						textDecoration: "none",
					}}
				>
					HAPPY REACT
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
