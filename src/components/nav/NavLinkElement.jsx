import "../../css/components/action.css"

function NavLinkElement({ className, style, children, ...rest }) {
    return (
        <>

        {/* Small Screens */}
        <a className="flex md:hidden btn btn-ghost tooltip tooltip-top mx-auto text-2xl" {...rest}>
            {children}
        </a>

        {/* Medium Screens */}
        <a className="hidden md:block btn-link tooltip tooltip-bottom mr-4 ml-0 text-base " {...rest}>
            {children}
        </a>

        </>

    )
}

export default NavLinkElement