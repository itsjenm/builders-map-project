import { Drawer, IconButton, Typography, styled, Box } from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";
import ProjectFilter from "./ProjectFilter";
import { useValue } from "../../context/ContextProvider";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Sidebar = ({ isOpen, setIsOpen }) => {
    const {containerRef} = useValue();
  return (
    <Drawer variant="persistent" hideBackdrop={true} open={isOpen}>
      <DrawerHeader>
        <Typography>Apply Search or Filter:</Typography>
        <IconButton onClick={() => setIsOpen(false)}>
          <ChevronLeft fontSize="large" />
        </IconButton>
      </DrawerHeader>
      <Box sx={{ width: 240, p: 3 }}>
        <Box ref={containerRef}></Box>
        <ProjectFilter />
      </Box>
      
    </Drawer>
  );
};

export default Sidebar;
