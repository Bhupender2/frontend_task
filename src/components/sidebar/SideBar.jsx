import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { FaRocket } from "react-icons/fa";
import { BiSolidReport } from "react-icons/bi";
import { FaBuilding } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";

function SidebarMenu() {
  return (
    <div
      style={{
        height: "110vh",
        border: "1px solid grey",
      }}
    >
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
            <MenuItem>Create Project</MenuItem>
            <MenuItem>Manage Project</MenuItem>
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
