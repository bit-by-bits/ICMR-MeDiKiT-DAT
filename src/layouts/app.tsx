import { useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Outlet, useNavigate } from "react-router-dom";
import UserDropdown from "@/components/layout/user-dropdown";
import { URLs } from "@/routes";
import NavLink from "@/components/layout/nav-link";
import ICMRLogo from "@/components/layout/icmr-logo";
import SearchBar from "@/components/layout/search-bar";
import ThemeToggleButton from "@/components/settings/theme-toggle-button";
import { useTheme } from "@/context/ThemeContext/ThemeContextUser";
import { useAuth } from "@/context/AuthContext/AuthContextUser";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import {
  HomeIcon,
  UsersIcon,
  FileTextIcon,
  HelpCircleIcon
} from "lucide-react";

interface SidebarLink {
  key: string;
  text: string;
  icon: JSX.Element;
  link?: string;
  description?: string;
  children?: SidebarLinkChild[];
}

interface SidebarLinkChild {
  key: string;
  text: string;
  link: string;
  description?: string;
}

const sidebarLinks: SidebarLink[] = [
  {
    key: "home",
    text: "Home",
    icon: <HomeIcon className="h-4 w-4" />,
    link: URLs.app.home
  },
  {
    key: "admin",
    text: "Admin",
    icon: <FileTextIcon className="h-4 w-4" />,
    children: [
      {
        key: "hospital-data-management",
        text: "Hospital Data Management",
        description: "View and manage data related to hospitals.",
        link: URLs.app.hospitalDataManagement
      },
      {
        key: "tests",
        text: "Tests",
        description: "Manage test data and configurations.",
        link: URLs.app.tests
      },
      {
        key: "labs",
        text: "Labs",
        description: "View and edit information about laboratories.",
        link: URLs.app.labs
      }
    ]
  },
  {
    key: "patient",
    text: "Patient",
    icon: <UsersIcon className="h-4 w-4" />,
    children: [
      {
        key: "register-patient",
        text: "Register Patient",
        description: "Add new patients to the system.",
        link: URLs.app.registerPatient
      },
      {
        key: "patient-consultation",
        text: "Consultation",
        description: "Record and manage patient consultations.",
        link: URLs.app.patientConsultation
      }
    ]
  },
  {
    key: "help",
    text: "Help",
    icon: <HelpCircleIcon className="h-4 w-4" />,
    children: [
      {
        key: "admin-help",
        text: "Admin",
        description: "Guidance for administrators.",
        link: URLs.app.adminHelp
      },
      {
        key: "patient-help",
        text: "Patient",
        description: "Help resources for patients.",
        link: URLs.app.patientHelp
      }
    ]
  }
];

const AppLayout = () => {
  const { setTheme } = useTheme();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(URLs.auth.login);
    }
  }, [user, navigate]);

  const renderNavLink = (linkData: SidebarLinkChild) => (
    <NavLink
      path={linkData.link}
      label={linkData.text}
      description={linkData.description}
      className="block p-2 hover:bg-muted rounded-md outline-none focus:ring-0"
    />
  );

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 max-w-screen items-center gap-4 border-b bg-background px-4 md:px-6 z-10">
        <nav className="hidden md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <ICMRLogo />
          <NavigationMenu>
            <NavigationMenuList>
              {sidebarLinks.map(({ key, text, icon, link, children }) => (
                <NavigationMenuItem key={key}>
                  {children ? (
                    <>
                      <NavigationMenuTrigger className="border-none">
                        <div className="flex items-center gap-2">
                          {icon}
                          <span>{text}</span>
                        </div>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px]">
                          {children.map(child => (
                            <li key={child.key}>
                              <NavigationMenuLink asChild>
                                {renderNavLink(child)}
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      {renderNavLink({ key, text, link: link! })}
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <ICMRLogo />
              {sidebarLinks.map(({ key, text, link, children }) => (
                <div key={key}>
                  {renderNavLink({ key, text, link: link! })}
                  {children?.map(child => (
                    <div key={child.key} className="ml-4">
                      {renderNavLink(child)}
                    </div>
                  ))}
                </div>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <div className="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <SearchBar className="sm:w-[300px] md:w-[200px] lg:w-[300px]" />
          <UserDropdown />
          <ThemeToggleButton setTheme={setTheme} />
        </div>
      </header>

      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="flex h-full w-full flex-col bg-muted/40">
          <div className="grid flex-1 items-start gap-4 md:gap-8 p-4 md:p-8 bg-background rounded-lg shadow-lg">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
