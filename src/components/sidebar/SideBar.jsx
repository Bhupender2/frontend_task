import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { FaRocket } from "react-icons/fa";
import { BiSolidReport } from "react-icons/bi";
import { FaBuilding } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import "./sideBar.css";

function SidebarMenu({ onShowContent }) {
  return (
    <div className="sidebar_styling">
      <Sidebar>
        <Menu iconShape="circle">
          <SubMenu label="Dashboard" icon={<AiFillDashboard />}>
            <MenuItem>Create Dashboard</MenuItem>
            <MenuItem>Manage Dashboard</MenuItem>
          </SubMenu>
          <SubMenu label="Company" icon={<FaBuilding />}>
            <MenuItem>Create Company</MenuItem>
            <MenuItem>Manage Company</MenuItem>
          </SubMenu>
          <SubMenu label="Project" icon={<FaRocket />}>
            <MenuItem onClick={onShowContent}>Create Project</MenuItem>
            <MenuItem onClick={onShowContent}>Manage Project</MenuItem>
          </SubMenu>
          <SubMenu label="Reporting" icon={<BiSolidReport />}>
            <MenuItem>Creating Reporting</MenuItem>
            <MenuItem>Manage Reporting</MenuItem>
          </SubMenu>
          <SubMenu label="Administration" icon={<IoIosPeople />}>
            <MenuItem>Creating Administration</MenuItem>
            <MenuItem>Manage Administration</MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default SidebarMenu;
