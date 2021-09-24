export const navItems = [
    {
        name: "Explore Venues",
        url: "/explore-venue"
    },
    {
        name: "How it works",
        url: "#"
    },
    {
        name: "Pricing",
        url: "/pricing"
    },
    {
        name: "Login",
        url: "/login"
    },
]

export type NavItemType = {
    name: string;
    url: string;
    type?: string;
}